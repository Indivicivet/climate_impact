const categories = [
  { label: "Food", colour: "#528052", parts: [
    ["Beef", "#38683b"], ["Other meat", "#528052"], ["Dairy & eggs", "#79a26d"], ["Other food", "#a8c297"],
  ] },
  { label: "Flights", colour: "#755baf", parts: [
    ["Short haul", "#63489e"], ["Long haul", "#9a81c8"],
  ] },
  { label: "Ground travel", colour: "#3276aa", parts: [
    ["Car use", "#235c90"], ["Car manufacture", "#4486b5"], ["Bus", "#649bc4"], ["Train", "#8cb5d5"],
  ] },
  { label: "Home energy", colour: "#b66b28", parts: [
    ["Electricity", "#bd762e"], ["Heating fuel", "#dfa359"],
  ] },
  { label: "Goods & services", colour: "#af5266", parts: [
    ["Shopping", "#993f55"], ["Private services", "#c17484"],
  ] },
  { label: "Shared services", colour: "#61727e", parts: [
    ["Public services & infrastructure", "#61727e"],
  ] },
  { label: "AI use", colour: "#188078", parts: [
    ["Data-centre electricity", "#17766d"], ["Hardware & training", "#66b0a6"],
  ] },
];

const initial = {
  meat: 600, beef: 20, dairy: 1800, otherFood: 8500,
  shortTrips: 1, longTrips: 0, shortKm: 1500, longKm: 6500,
  car: "petrol", carDays: 3, carMiles: 20, otherMiles: 2500, occupants: 1.4,
  busDays: 0, busKm: 8, trainDays: 0, trainKm: 80, travelWeeks: 48,
  people: 2, electricity: 2700, grid: 0.13, heat: "gas", heating: 11000,
  goods: 1300, services: 900, shared: 1700,
  prompts: 0, promptWh: 1, aiGrid: 0.4, aiEmbodied: 0.15,
  donation: 0, price: 200,
};

// Shares are illustrative allocations. Only the headline totals come from the reference data.
const benchmarks = [
  { id: "uk", name: "United Kingdom", total: 5.6, shares: [17, 5, 19, 18, 20, 21, 0] },
  { id: "us", name: "United States", total: 17.5, shares: [14, 5, 27, 21, 18, 15, 0] },
  { id: "china", name: "China", total: 9.9, shares: [16, 2, 12, 22, 21, 27, 0] },
  { id: "high-income", name: "High-income countries", total: 12.5, shares: [16, 5, 24, 20, 20, 15, 0] },
  { id: "world", name: "World average", total: 6.7, shares: [24, 3, 15, 19, 19, 20, 0] },
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
  const annualPrompts = profile.prompts * 52;

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
    [annualPrompts * profile.promptWh * profile.aiGrid / 1000,
      annualPrompts * profile.aiEmbodied / 1000],
  ].map(parts => parts.map(kg => kg / 1000));
}
