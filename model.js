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
    ["Electricity", "#d56a11"], ["Heating fuel", "#f2a03e"],
  ] },
  { label: "Goods & services", short: "Goods", colour: "#c13b62", parts: [
    ["Shopping", "#af2850"], ["Private services", "#e27495"],
  ] },
  { label: "Shared services", short: "Shared", colour: "#56617c", parts: [
    ["Public services & infrastructure", "#727f9b"],
  ] },
  { label: "AI use", short: "AI", colour: "#00857e", parts: [
    ["Data-centre electricity", "#007a72"], ["Hardware & training", "#4bbdb0"],
  ] },
];

const initial = {
  meat: 600, beef: 20, dairy: 1800, otherFood: 8500,
  shortTrips: 1, longTrips: 0, shortKm: 1500, longKm: 6500,
  car: "petrol", carDays: 3, carMiles: 20, otherMiles: 2500, occupants: 1.4,
  busDays: 0, busKm: 8, trainDays: 0, trainKm: 80, travelWeeks: 48,
  people: 2, electricity: 2700, grid: 0.13, heat: "gas", heating: 11000,
  goods: 1300, services: 900, shared: 1700,
  weeklyKTokens: 0, whPerKTokens: 1, aiGrid: 0.4, embodiedPerKTokens: 0.15,
  donation: 0, price: 200,
};

// Shares are illustrative allocations. Only the headline totals come from the reference data.
const benchmarks = [
  { id: "uk", name: "United Kingdom", button: "🇬🇧 UK", total: 5.6, shares: [17, 5, 19, 18, 20, 21, 0] },
  { id: "us", name: "United States", button: "🇺🇸 US", total: 17.5, shares: [14, 5, 27, 21, 18, 15, 0] },
  { id: "china", name: "China", button: "🇨🇳 China", total: 9.9, shares: [16, 2, 12, 22, 21, 27, 0] },
  { id: "high-income", name: "High-income countries", button: "Developed world", total: 12.5, shares: [16, 5, 24, 20, 20, 15, 0] },
  { id: "world", name: "World average", button: "🌐 World", total: 6.7, shares: [24, 3, 15, 19, 19, 20, 0] },
];

const kmPerMile = 1.609344;

function calculate(profile) {
  const meatKg = profile.meat * 52 / 1000;
  const beefShare = profile.beef / 100;
  const carKm = profile.car === "none" ? 0 :
    (profile.carDays * profile.carMiles * profile.travelWeeks + profile.otherMiles) * kmPerMile;
  const carFactor = {
    none: 0, petrol: 0.21, hybrid: 0.15, electric: 0.19 * profile.grid,
  }[profile.car];
  const heatFactor = { none: 0, gas: 0.2, oil: 0.28, electric: 0 }[profile.heat];
  const annualKTokens = profile.weeklyKTokens * 52;

  return [
    [meatKg * beefShare * 60, meatKg * (1 - beefShare) * 10,
      profile.dairy * 52 / 1000 * 3, profile.otherFood * 52 / 1000 * 2],
    [2 * profile.shortTrips * profile.shortKm * 0.18, 2 * profile.longTrips * profile.longKm * 0.15],
    [carKm * carFactor / profile.occupants, carKm * 0.04 / profile.occupants,
      2 * profile.busDays * profile.busKm * profile.travelWeeks * 0.11,
      2 * profile.trainDays * profile.trainKm * profile.travelWeeks * 0.04],
    [profile.electricity * profile.grid / profile.people,
      profile.heating * heatFactor / profile.people],
    [profile.goods, profile.services],
    [profile.shared],
    [annualKTokens * profile.whPerKTokens * profile.aiGrid / 1000,
      annualKTokens * profile.embodiedPerKTokens / 1000],
  ].map(parts => parts.map(kg => kg / 1000));
}
