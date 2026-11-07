const categories = [
  { label: "Food", colour: "#268443", parts: [
    ["Beef", "#13612c", "beef"], ["Other meat", "#29954d", "otherMeat"],
    ["Dairy & eggs", "#54b961", "dairy"], ["Other food", "#8ed686", "otherFood"],
  ] },
  { label: "Travel", colour: "#763fba", parts: [
    ["Short-haul flights", "#8d52d1", "shortTrips"], ["Long-haul flights", "#bd88eb", "longTrips"],
    ["Hotels", "#d7b8ef", "hotelNights"],
  ] },
  { label: "Ground travel", short: "Ground", colour: "#1e70bf", parts: [
    ["Car use", "#1559a2", "car"], ["Car manufacture", "#328bd7", "carManufacture"],
    ["Bus", "#62a8ea", "busMinutes"], ["Train", "#a0c7f0", "trainMinutes"],
  ] },
  { label: "Home energy", short: "Home", colour: "#c25c08", parts: [
    ["Appliances & lights", "#bd530b", "electricity"],
    ["Space heating", "#e5821a", "spaceHeating"], ["Hot water", "#f5b657", "hotWater"],
    ["Air conditioning", "#ffd18d", "coolTo"],
  ] },
  { label: "Goods & services", short: "Goods", colour: "#c13b62", parts: [
    ["Shopping", "#962448", "shopping"], ["Devices & telecom", "#d04d78", "devicesAndTelecom"],
    ["Leisure", "#efb5c9", "leisure"],
  ] },
  { label: "Shared services", short: "Shared", colour: "#56617c", parts: [
    ["Public services", "#56617c", "publicServices"], ["Buildings & capital investment", "#94a0b9", "capital"],
  ] },
  { label: "AI use", short: "AI", colour: "#00857e", parts: [
    ["Data-centre electricity", "#007a72", "aiEnergy"], ["Server manufacture", "#4bbdb0", "aiHardware"],
  ] },
];

const grids = { uk: 0.131, us: 0.384, china: 0.525, eu: 0.210, world: 0.458 };
const heatLoss = { flat: 80, terrace: 160, semi: 180, detached: 235 };
const hotelFactors = {
  uk: { typical: 10.4, limited: 7.79, full: 14.08 },
  us: { typical: 16.1, limited: 13.78, full: 23.4 },
  china: { typical: 53.5, limited: 29.54, full: 55.14 },
};
const travelWeeks = 48;
const busKmPerHour = 24;
const trainKmPerHour = 80;
const devicesAndTelecomKg = 50 / 2 + 180 / 5 + 12 * 25 * 0.1;

const dietPresets = [
  { meatServings: 0, dairyServings: 0 },
  { meatServings: 0, dairyServings: 12 },
  { meatServings: 2, dairyServings: 7 },
  { meatServings: 4, dairyServings: 12 },
  { meatServings: 8, dairyServings: 20 },
];

const travelPresets = [
  { shortTrips: 1, longTrips: 0, hotelNights: 5 },
  { shortTrips: 2, longTrips: 0, hotelNights: 10 },
  { shortTrips: 0, longTrips: 1, hotelNights: 14 },
  { shortTrips: 0, longTrips: 2, hotelNights: 28 },
  { shortTrips: 0, longTrips: 0, hotelNights: 0 },
];

const homePresets = [
  { people: 1, electricity: 1800, grid: grids.uk, homeType: "flat",
    winter: 4, summer: 15.3, indoor: 18, coolTo: 40, heat: "heatPump" },
  { people: 2, electricity: 2700, grid: grids.uk, homeType: "terrace",
    winter: 4, summer: 15.3, indoor: 19.5, coolTo: 40, heat: "gas" },
  { people: 2, electricity: 4100, grid: grids.uk, homeType: "detached",
    winter: 4, summer: 15.3, indoor: 21, coolTo: 40, heat: "gas" },
];

const purchasePresets = [
  { shopping: 20, leisure: 5 },
  { shopping: 70, leisure: 30 },
  { shopping: 180, leisure: 100 },
];

// UK footprint accounts, with other regions scaled by public spending and fixed investment per person.
const sharedFootprints = {
  uk: [1161, 1234], us: [1036, 1896], china: [401, 1095],
  "high-income": [1039, 1570], world: [360, 652],
};

const initial = {
  ...dietPresets[3], calories: 2000, beef: 20, conscientiousBeef: false,
  ...travelPresets[0], shortKm: 1500, longKm: 6500, hotelRegion: "uk", hotelType: "typical",
  car: "petrol", carDays: 3, commuteKm: 32, otherKm: 2900,
  busMinutes: 0, trainMinutes: 0,
  ...homePresets[1], ...purchasePresets[1], sharedRegion: "uk",
  weeklyMTokens: 0, aiEnergy: 0.4, aiGrid: grids.world, aiHardware: 0.02,
  donation: 0, price: 200,
};

// Illustrative activity mixes. Fractional journeys represent a per-person annual average.
const benchmarks = [
  { id: "uk", name: "United Kingdom", button: "🇬🇧 UK", activities: {
    meatServings: 7, beef: 18, dairyServings: 16.7, shortTrips: 1, longTrips: 0.25, hotelNights: 6,
    carDays: 0, otherKm: 5800, busMinutes: 40, trainMinutes: 22.5,
    homeType: "semi", people: 2.4, weeklyMTokens: 0.02,
  } },
  { id: "us", name: "United States", button: "🇺🇸 US", activities: {
    meatServings: 10.3, beef: 27, dairyServings: 19.3, shortTrips: 1.6, longTrips: 0.35, shortKm: 1600,
    carDays: 0, otherKm: 12770, busMinutes: 16, trainMinutes: 9,
    homeType: "detached", electricity: 9500, grid: grids.us, winter: 0, summer: 25,
    indoor: 20, people: 2.5, shopping: 125, hotelNights: 9, hotelRegion: "us",
    leisure: 65, weeklyMTokens: 0.04,
  } },
  { id: "china", name: "China", button: "🇨🇳 China", activities: {
    meatServings: 6.2, beef: 10, dairyServings: 4.3, shortTrips: 0.45, longTrips: 0.08, shortKm: 1300,
    carDays: 0, otherKm: 2470, busMinutes: 100, trainMinutes: 51.75,
    homeType: "flat", electricity: 3200, grid: grids.china, winter: 1, summer: 26,
    people: 2.6, shopping: 60, hotelNights: 4, hotelRegion: "china",
    leisure: 15, weeklyMTokens: 0.02,
  } },
  { id: "high-income", name: "High-income countries", button: "Developed world", activities: {
    meatServings: 8, beef: 21, dairyServings: 16, shortTrips: 1.1, longTrips: 0.28,
    carDays: 0, otherKm: 7400, busMinutes: 40, trainMinutes: 25.2,
    homeType: "semi", electricity: 5100, grid: 0.35, winter: 3, summer: 22, people: 2.5,
    shopping: 100, hotelNights: 7, leisure: 45,
    weeklyMTokens: 0.03,
  } },
  { id: "world", name: "World average", button: "🌐 World", activities: {
    meatServings: 3.8, beef: 17, dairyServings: 8, shortTrips: 0.27, longTrips: 0.08,
    carDays: 0, otherKm: 2180, busMinutes: 80, trainMinutes: 18.75,
    homeType: "terrace", electricity: 2800, grid: grids.world, winter: 10, summer: 26,
    indoor: 19, people: 3.5, shopping: 41, hotelNights: 2, leisure: 12, weeklyMTokens: 0.01,
  } },
];

function spaceEnergy(profile) {
  const midpoint = (profile.winter + profile.summer) / 2;
  const amplitude = Math.abs(profile.summer - profile.winter) / 2;
  const balance = profile.indoor - 4;
  const coolingTarget = profile.heat === "none" ? profile.coolTo : Math.max(profile.coolTo, profile.indoor);
  let heatingDays = 0;
  let coolingDays = 0;
  for (let day = 0; day < 365; day++) {
    const outdoor = midpoint - amplitude * Math.cos(2 * Math.PI * day / 365);
    heatingDays += Math.max(0, balance - outdoor);
    coolingDays += Math.max(0, outdoor - coolingTarget);
  }
  const kwPerDegree = heatLoss[profile.homeType] / 1000;
  return {
    heatKWh: heatingDays * 24 * kwPerDegree,
    coolingKWh: coolingDays * 24 * kwPerDegree / 3,
    winterKW: Math.max(0, balance - (midpoint - amplitude)) * kwPerDegree,
  };
}

function dietEnergy(profile) {
  const weeklyAnimalCalories = profile.meatServings * 300 + profile.dairyServings * 120;
  const weeklyCalories = profile.calories * 7;
  return {
    portionScale: weeklyAnimalCalories > weeklyCalories ? weeklyCalories / weeklyAnimalCalories : 1,
    otherCalories: Math.max(0, weeklyCalories - weeklyAnimalCalories) / 7,
  };
}

function calculate(profile) {
  const { portionScale, otherCalories } = dietEnergy(profile);
  const annualMeatKg = profile.meatServings * 0.15 * 365 / 7 * portionScale;
  const beefShare = profile.beef / 100;
  const carKm = profile.car === "none" ? 0 :
    profile.carDays * profile.commuteKm * travelWeeks + profile.otherKm;
  const carFactor = {
    none: 0, petrol: 0.21081, hybrid: 0.16276, electric: 0.205 * profile.grid,
  }[profile.car];
  const heatFactor = {
    none: 0, gas: 0.21252 / 0.9, oil: 0.29830 / 0.85,
    electric: profile.grid, heatPump: profile.grid / 2.8,
  }[profile.heat];
  const annualMTokens = profile.weeklyMTokens * 52;
  const { heatKWh, coolingKWh } = spaceEnergy(profile);

  const [publicServices, capital] = sharedFootprints[profile.sharedRegion];
  const kg = {
    beef: annualMeatKg * beefShare * (profile.conscientiousBeef ? 35 : 60),
    otherMeat: annualMeatKg * (1 - beefShare) * 10,
    dairy: profile.dairyServings * 0.6 * 365 / 7 * portionScale,
    otherFood: otherCalories * 2.47 / 2000 * 365,
    shortTrips: 2 * profile.shortTrips * profile.shortKm * (0.12576 + 0.02249),
    longTrips: 2 * profile.longTrips * profile.longKm * (0.11704 + 0.02461),
    hotelNights: profile.hotelNights * hotelFactors[profile.hotelRegion][profile.hotelType],
    car: carKm * carFactor,
    carManufacture: carKm * 0.04,
    busMinutes: profile.busMinutes / 60 * busKmPerHour * travelWeeks * 0.128,
    trainMinutes: profile.trainMinutes / 60 * trainKmPerHour * travelWeeks * 0.03989,
    electricity: profile.electricity * profile.grid / profile.people,
    spaceHeating: heatKWh * heatFactor / profile.people,
    hotWater: 600 * heatFactor,
    coolTo: coolingKWh * profile.grid / profile.people,
    shopping: 12 * profile.shopping * 0.5,
    devicesAndTelecom: devicesAndTelecomKg,
    leisure: 12 * profile.leisure * 0.25,
    publicServices,
    capital,
    aiEnergy: annualMTokens * profile.aiEnergy * profile.aiGrid,
    aiHardware: annualMTokens * profile.aiHardware,
  };
  return Object.fromEntries(Object.entries(kg).map(([key, value]) => [key, value / 1000]));
}
