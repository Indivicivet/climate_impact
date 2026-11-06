const categories = [
  { label: "Food", colour: "#268443", parts: [
    ["Beef", "#13612c"], ["Other meat", "#29954d"], ["Dairy & eggs", "#54b961"], ["Other food", "#8ed686"],
  ] },
  { label: "Flights", colour: "#763fba", parts: [
    ["Short haul", "#8d52d1"], ["Long haul", "#bd88eb"],
  ] },
  { label: "Ground travel", short: "Ground", colour: "#1e70bf", parts: [
    ["Car use", "#1559a2"], ["Car manufacture", "#328bd7"], ["Bus", "#62a8ea"], ["Train", "#a0c7f0"],
  ] },
  { label: "Home energy", short: "Home", colour: "#c25c08", parts: [
    ["Appliances, lights & cooling", "#bd530b"], ["Space heating", "#e5821a"],
    ["Hot water", "#f5b657"],
  ] },
  { label: "Goods & services", short: "Goods", colour: "#c13b62", parts: [
    ["Clothes & shoes", "#962448"], ["Home goods", "#b83e5d"], ["Appliances", "#ce5b87"],
    ["Phones & computers", "#d04d78"], ["Parcel deliveries", "#eb83a2"],
    ["Accommodation", "#aa406f"], ["Phone & broadband", "#d26b94"],
    ["Leisure services", "#efb5c9"],
  ] },
  { label: "Shared services", short: "Shared", colour: "#56617c", parts: [
    ["Public services", "#56617c"], ["Buildings & capital investment", "#94a0b9"],
  ] },
  { label: "AI use", short: "AI", colour: "#00857e", parts: [
    ["Data-centre electricity", "#007a72"], ["Server manufacture", "#4bbdb0"],
  ] },
];

const grids = { uk: 0.131, us: 0.384, china: 0.525, eu: 0.210, world: 0.458 };
const heatLoss = { flat: 80, terrace: 160, semi: 180, detached: 235 };
const hotelFactors = { uk: 10.4, us: 16.1, china: 53.5 };
const homePresets = [
  { people: 2, electricity: 1800, grid: grids.uk, homeType: "flat",
    winter: 4, summer: 15.3, indoor: 18, heat: "heatPump" },
  { people: 2, electricity: 2700, grid: grids.uk, homeType: "terrace",
    winter: 4, summer: 15.3, indoor: 19.5, heat: "gas" },
  { people: 2, electricity: 4100, grid: grids.uk, homeType: "detached",
    winter: 4, summer: 15.3, indoor: 21, heat: "gas" },
];

const purchasePresets = [
  { clothing: 10, homeGoods: 8, appliances: 2, phones: 1, computers: 0, parcels: 1, hotelNights: 1,
    hotelRegion: "uk", telecom: 15, leisure: 5 },
  { clothing: 35, homeGoods: 30, appliances: 5, phones: 1, computers: 1, parcels: 4, hotelNights: 6,
    hotelRegion: "uk", telecom: 25, leisure: 30 },
  { clothing: 80, homeGoods: 85, appliances: 15, phones: 2, computers: 2, parcels: 12, hotelNights: 20,
    hotelRegion: "uk", telecom: 50, leisure: 100 },
];

// UK footprint accounts, with other regions scaled by public spending and fixed investment per person.
const sharedFootprints = {
  uk: [1161, 1234], us: [1036, 1896], china: [401, 1095],
  "high-income": [1039, 1570], world: [360, 652],
};

const initial = {
  meat: 600, beef: 20, dairy: 1800, otherFood: 8500,
  shortTrips: 1, longTrips: 0, shortKm: 1500, longKm: 6500,
  car: "petrol", carDays: 3, carMiles: 20, otherMiles: 2500, occupants: 1.4,
  busDays: 0, busKm: 8, trainDays: 0, trainKm: 80, travelWeeks: 48,
  ...homePresets[1], ...purchasePresets[1], sharedRegion: "uk",
  weeklyMTokens: 0, aiEnergy: 0.4, aiGrid: grids.world, aiHardware: 0.02,
  donation: 0, price: 200,
};

// Illustrative activity mixes. Fractional journeys represent a per-person annual average.
const benchmarks = [
  { id: "uk", name: "United Kingdom", button: "🇬🇧 UK", activities: {
    meat: 1050, beef: 18, dairy: 2500, shortTrips: 1, longTrips: 0.25,
    carDays: 0, otherMiles: 5400, occupants: 1.5, busDays: 1, trainDays: 0.5,
    trainKm: 30, homeType: "semi", people: 2.4, weeklyMTokens: 0.02,
  } },
  { id: "us", name: "United States", button: "🇺🇸 US", activities: {
    meat: 1550, beef: 27, dairy: 2900, shortTrips: 1.6, longTrips: 0.35, shortKm: 1600,
    carDays: 0, otherMiles: 11900, occupants: 1.5, busDays: 0.4, trainDays: 0.2, trainKm: 30,
    homeType: "detached", electricity: 9500, grid: grids.us, winter: 0, summer: 25,
    indoor: 20, people: 2.5, clothing: 55, homeGoods: 65, parcels: 7, hotelNights: 9, hotelRegion: "us",
    telecom: 40, leisure: 65, weeklyMTokens: 0.04,
  } },
  { id: "china", name: "China", button: "🇨🇳 China", activities: {
    meat: 925, beef: 10, dairy: 650, shortTrips: 0.45, longTrips: 0.08, shortKm: 1300,
    carDays: 0, otherMiles: 2450, occupants: 1.6, busDays: 2.5, trainDays: 1.5, trainKm: 23,
    homeType: "flat", electricity: 3200, grid: grids.china, winter: 1, summer: 26,
    people: 2.6, clothing: 25, homeGoods: 30, parcels: 7, hotelNights: 4, hotelRegion: "china", telecom: 12,
    leisure: 15, weeklyMTokens: 0.02,
  } },
  { id: "high-income", name: "High-income countries", button: "Developed world", activities: {
    meat: 1200, beef: 21, dairy: 2400, shortTrips: 1.1, longTrips: 0.28,
    carDays: 0, otherMiles: 6900, occupants: 1.5, busDays: 1, trainDays: 0.6, trainKm: 28,
    homeType: "semi", electricity: 5100, grid: 0.35, winter: 3, summer: 22, people: 2.5,
    clothing: 45, homeGoods: 50, parcels: 5, hotelNights: 7, telecom: 30, leisure: 45,
    weeklyMTokens: 0.03,
  } },
  { id: "world", name: "World average", button: "🌐 World", activities: {
    meat: 565, beef: 17, dairy: 1200, otherFood: 7500, shortTrips: 0.27, longTrips: 0.08,
    carDays: 0, otherMiles: 2300, occupants: 1.7, busDays: 2, trainDays: 0.5, trainKm: 25,
    homeType: "terrace", electricity: 2800, grid: grids.world, winter: 10, summer: 26,
    indoor: 19, people: 3.5, clothing: 16, homeGoods: 20, phones: 1, computers: 0.5,
    parcels: 2, hotelNights: 2, telecom: 12, leisure: 12, weeklyMTokens: 0.01,
  } },
];

const kmPerMile = 1.609344;

function spaceHeat(profile) {
  const midpoint = (profile.winter + profile.summer) / 2;
  const amplitude = Math.abs(profile.summer - profile.winter) / 2;
  const balance = profile.indoor - 4;
  let degreeDays = 0;
  for (let day = 0; day < 365; day++) {
    const outdoor = midpoint - amplitude * Math.cos(2 * Math.PI * day / 365);
    degreeDays += Math.max(0, balance - outdoor);
  }
  const kwPerDegree = heatLoss[profile.homeType] / 1000;
  return {
    kWh: degreeDays * 24 * kwPerDegree,
    winterKW: Math.max(0, balance - (midpoint - amplitude)) * kwPerDegree,
  };
}

function calculate(profile) {
  const meatKg = profile.meat * 52 / 1000;
  const beefShare = profile.beef / 100;
  const carKm = profile.car === "none" ? 0 :
    (profile.carDays * profile.carMiles * profile.travelWeeks + profile.otherMiles) * kmPerMile;
  const carFactor = {
    none: 0, petrol: 0.21081, hybrid: 0.16276, electric: 0.205 * profile.grid,
  }[profile.car];
  const heatFactor = {
    none: 0, gas: 0.21252 / 0.9, oil: 0.29830 / 0.85,
    electric: profile.grid, heatPump: profile.grid / 2.8,
  }[profile.heat];
  const annualMTokens = profile.weeklyMTokens * 52;

  return [
    [meatKg * beefShare * 60, meatKg * (1 - beefShare) * 10,
      profile.dairy * 52 / 1000 * 3, profile.otherFood * 52 / 1000 * 2],
    [2 * profile.shortTrips * profile.shortKm * (0.12576 + 0.02249),
      2 * profile.longTrips * profile.longKm * (0.11704 + 0.02461)],
    [carKm * carFactor / profile.occupants, carKm * 0.04 / profile.occupants,
      2 * profile.busDays * profile.busKm * profile.travelWeeks * 0.128,
      2 * profile.trainDays * profile.trainKm * profile.travelWeeks * 0.03989],
    [profile.electricity * profile.grid / profile.people,
      spaceHeat(profile).kWh * heatFactor / profile.people, 600 * heatFactor],
    [12 * profile.clothing * 0.35, 12 * profile.homeGoods * 0.45, 12 * profile.appliances * 1.66,
      (50 * profile.phones + 180 * profile.computers) / 5,
      12 * profile.parcels * 0.2, profile.hotelNights * hotelFactors[profile.hotelRegion],
      12 * profile.telecom * 0.1, 12 * profile.leisure * 0.25],
    sharedFootprints[profile.sharedRegion],
    [annualMTokens * profile.aiEnergy * profile.aiGrid, annualMTokens * profile.aiHardware],
  ].map(parts => parts.map(kg => kg / 1000));
}
