const sections = [
  {
    title: "Food", category: 0,
    common: [
      { key: "meat", label: "Meat per week", unit: "g", max: 5000, step: 50, choices: [
        ["None", 0], ["Low · 250 g", 250], ["Medium · 600 g", 600], ["Lots · 1.2 kg", 1200],
      ], help: "A typical portion here is 150 g. Count fish with other meat." },
      { key: "beef", label: "Beef as a share of meat", unit: "%", max: 100, step: 1, slider: true, integer: true,
        choices: [["0%", 0], ["10%", 10], ["20%", 20], ["50%", 50]] },
      { key: "dairy", label: "Dairy and eggs per week", unit: "g", max: 12000, step: 100,
        choices: [["None", 0], ["Low · 700 g", 700], ["Medium · 1.8 kg", 1800], ["High · 3 kg", 3000]] },
    ],
    detail: [
      { key: "otherFood", label: "Other food and drink per week", unit: "g", max: 30000, step: 100,
        choices: [["Low · 6 kg", 6000], ["Medium · 8.5 kg", 8500], ["High · 12 kg", 12000]],
        help: "Staples, fruit, vegetables, plant proteins, snacks and drinks. Leave out tap water." },
    ],
  },
  {
    title: "Flights", category: 1,
    common: [
      { key: "shortTrips", label: "Short-haul return trips per year", unit: "trips", max: 40, step: 1,
        slider: true, integer: true, choices: [["None", 0], ["1", 1], ["2", 2], ["4", 4]],
        help: "Default distance is 1,500 km each way, roughly London to Barcelona." },
      { key: "longTrips", label: "Long-haul return trips per year", unit: "trips", max: 40, step: 1,
        slider: true, integer: true, choices: [["None", 0], ["1", 1], ["2", 2], ["4", 4]],
        help: "Default distance is 6,500 km each way, roughly London to Chicago." },
    ],
    detail: [
      { key: "shortKm", label: "Short haul, one-way distance", unit: "km", max: 6000, step: 50 },
      { key: "longKm", label: "Long haul, one-way distance", unit: "km", max: 20000, step: 50 },
    ],
  },
  {
    title: "Ground travel", category: 2,
    common: [
      { key: "car", label: "Car type", choices: [
        ["No car", "none"], ["Petrol / diesel", "petrol"], ["Hybrid", "hybrid"], ["Electric", "electric"],
      ] },
      { key: "carDays", label: "Car commute days per week", unit: "days", max: 7, step: 1,
        choices: [["None", 0], ["3 days", 3], ["5 days", 5]] },
      { key: "carMiles", label: "Car commute round trip", unit: "mi", max: 300, step: 1,
        choices: [["10 miles", 10], ["20 miles", 20], ["40 miles", 40]] },
      { key: "transit", label: "Public transport commute", choices: [
        ["None", { busDays: 0, trainDays: 0 }],
        ["Bus · 20 min each way", { busDays: 5, busKm: 8, trainDays: 0 }],
        ["Train · 1 h each way", { busDays: 0, trainDays: 5, trainKm: 80 }],
      ], help: "Presets assume 5 days a week. Customise both modes below." },
    ],
    detail: [
      { key: "otherMiles", label: "Other car travel per year", unit: "mi", max: 80000, step: 100 },
      { key: "occupants", label: "Average people in car, including you", unit: "people", min: 1, max: 8, step: 0.1 },
      { key: "busDays", label: "Bus travel days per week", unit: "days", max: 7, step: 1 },
      { key: "busKm", label: "Bus distance each way", unit: "km", max: 300, step: 1 },
      { key: "trainDays", label: "Train travel days per week", unit: "days", max: 7, step: 1 },
      { key: "trainKm", label: "Train distance each way", unit: "km", max: 600, step: 1 },
      { key: "travelWeeks", label: "Commute weeks per year", unit: "weeks", max: 52, step: 1 },
    ],
  },
  {
    title: "Home energy", category: 3,
    common: [
      { key: "electricity", label: "Household electricity per year", unit: "kWh", max: 60000, step: 100,
        choices: [["Low · 1,500", 1500], ["Medium · 2,700", 2700], ["High · 5,000", 5000]],
        help: "Include electric heating here. Enter household use before splitting it between people. Exclude car charging." },
      { key: "people", label: "People in household", unit: "people", min: 1, max: 20, step: 1,
        integer: true, choices: [["1", 1], ["2", 2], ["3", 3], ["4", 4]] },
      { key: "heat", label: "Heating fuel", choices: [
        ["None", "none"], ["Gas", "gas"], ["Heating oil", "oil"], ["Electric", "electric"],
      ] },
      { key: "heating", label: "Household heating fuel per year", unit: "kWh", max: 100000, step: 100,
        choices: [["Low · 5,000", 5000], ["Medium · 11,000", 11000], ["High · 18,000", 18000]],
        help: "Enter the energy from the gas or oil bill. One litre of heating oil is about 10 kWh." },
    ],
    detail: [
      { key: "grid", label: "Electricity emissions factor", unit: "kg/kWh", max: 2, step: 0.01,
        choices: [["Low-carbon · 0.05", 0.05], ["UK · 0.13", 0.13], ["Fossil-heavy · 0.65", 0.65]],
        help: "Use a local grid factor if you know it. This also sets the factor for electric driving." },
    ],
  },
  {
    title: "Goods & services", category: 4,
    common: [
      { key: "goods", label: "Shopping and goods allowance", unit: "kg CO₂e", max: 30000, step: 50,
        choices: [["Low · 650", 650], ["Medium · 1,300", 1300], ["High · 2,600", 2600]],
        help: "Annual estimate for goods such as clothes, furniture, and devices, plus deliveries and waste." },
      { key: "services", label: "Private services allowance", unit: "kg CO₂e", max: 30000, step: 50,
        choices: [["Low · 450", 450], ["Medium · 900", 900], ["High · 1,800", 1800]],
        help: "Annual estimate for accommodation, telecoms, recreation and similar services." },
    ],
  },
  {
    title: "Shared services", category: 5,
    common: [
      { key: "shared", label: "Public services and infrastructure allowance", unit: "kg CO₂e", max: 30000, step: 50,
        choices: [["Low · 850", 850], ["Medium · 1,700", 1700], ["High · 3,400", 3400]],
        help: "Illustrative annual share of public services and infrastructure, including a share of buildings." },
    ],
  },
  {
    title: "AI use", category: 6,
    common: [
      { key: "aiPreset", label: "Text AI use", choices: [
        ["None", { prompts: 0 }],
        ["Free · 30/wk", { prompts: 30, promptWh: 0.5, aiEmbodied: 0.1 }],
        ["£20/mo · 150/wk", { prompts: 150, promptWh: 2, aiEmbodied: 0.2 }],
        ["£200/mo · 700/wk", { prompts: 700, promptWh: 5, aiEmbodied: 0.5 }],
      ], help: "Example workloads. The price of a plan does not determine its footprint." },
      { key: "prompts", label: "Text prompts per week", unit: "prompts", max: 20000, step: 1, integer: true },
    ],
    detail: [
      { key: "promptWh", label: "Data-centre energy per prompt", unit: "Wh", max: 100, step: 0.1 },
      { key: "aiGrid", label: "Data-centre electricity emissions factor", unit: "kg/kWh", max: 2, step: 0.01 },
      { key: "aiEmbodied", label: "Estimated hardware and training per prompt", unit: "g CO₂e", max: 30, step: 0.01 },
    ],
  },
  {
    title: "Climate donations",
    common: [
      { key: "donation", label: "Annual contribution", unit: "£", max: 20000, step: 1, slider: true, integer: true,
        choices: [["None", 0], ["£100", 100], ["£500", 500], ["£1,000", 1000]] },
      { key: "price", label: "Assumed cost per additional tonne", unit: "£/t", min: 1, max: 5000, step: 1, integer: true,
        choices: [["£50", 50], ["£200", 200], ["£500", 500]],
        help: "£200 is a biochar example. Use your project's estimate if available." },
    ],
  },
];

const byId = id => document.getElementById(id);
const sum = values => values.reduce((total, value) => total + value, 0);
const storageKey = "climate-impact.profiles.v1";
const fields = sections.flatMap(section => [...section.common, ...(section.detail ?? [])]);
const modelFields = fields.filter(field => Object.hasOwn(initial, field.key));
const number = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 2 });
const currency = new Intl.NumberFormat("en-GB", {
  style: "currency", currency: "GBP", maximumFractionDigits: 0,
});
const reductionColour = "#267a66";
const benchmarkNote = "2024 territorial average. Category shares are illustrative. Your estimate also includes imported goods and an altitude adjustment for flights.";

let profile = { ...initial };
let saved = readProfiles();
let detailed = false;
const controls = new Map();
const comparison = byId("comparison");

function create(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
}

function tonnes(value) {
  const amount = Math.abs(value);
  if (amount && amount < 0.01) return (value < 0 ? "−" : "") + "<0.01";
  return number.format(value).replace("-", "−");
}

function coerce(field, value) {
  if (!field.unit) {
    return field.choices.some(([, choice]) => value === choice) ? value : initial[field.key];
  }
  if (typeof value !== "number" || !Number.isFinite(value)) return initial[field.key];
  const bounded = Math.min(field.max, Math.max(field.min ?? 0, value));
  return field.integer ? Math.round(bounded) : bounded;
}

function readProfiles() {
  try {
    const items = JSON.parse(localStorage.getItem(storageKey));
    if (!Array.isArray(items)) return [];
    return items.filter(item =>
      item && typeof item.id === "string" && typeof item.name === "string" &&
      item.values && typeof item.values === "object"
    ).map(item => ({
      id: item.id, name: item.name.slice(0, 50),
      values: Object.fromEntries(modelFields.map(field => [
        field.key, coerce(field, item.values[field.key]),
      ])),
    }));
  } catch {
    return [];
  }
}

function persistProfiles(items) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(items));
    saved = items;
    return true;
  } catch {
    byId("save-status").textContent = "This browser could not save your changes to local storage.";
    return false;
  }
}

function updateComparisonOptions(selected) {
  const typical = create("optgroup");
  typical.label = "Typical person";
  const profiles = create("optgroup");
  profiles.label = "Saved profiles";
  for (const item of benchmarks) typical.append(new Option(item.name, item.id));
  for (const item of saved) profiles.append(new Option(item.name, item.id));
  comparison.replaceChildren(typical);
  if (saved.length) comparison.append(profiles);
  comparison.value = selected;
  if (!comparison.value) comparison.value = benchmarks[0].id;
}

function buildField(field) {
  const group = create("fieldset", "field");
  group.append(create("legend", "", field.label));
  const buttons = [];
  if (field.choices) {
    const row = create("div", "choices");
    for (const [label, value] of field.choices) {
      const button = create("button", "", label);
      button.type = "button";
      button.addEventListener("click", () => {
        profile = typeof value === "object" ? { ...profile, ...value } :
          { ...profile, [field.key]: value };
        render();
      });
      buttons.push({ button, value });
      row.append(button);
    }
    group.append(row);
  }

  let input;
  let slider;
  if (field.unit) {
    const row = create("div", "numeric-row");
    const control = create("label", "numeric");
    input = create("input");
    input.type = "number";
    input.min = field.min ?? 0;
    input.max = field.max;
    input.step = field.integer ? 1 : "any";
    input.setAttribute("aria-label", field.label + " (" + field.unit + ")");
    control.append(input, create("span", "", field.unit));
    if (field.slider) {
      slider = create("input");
      slider.type = "range";
      slider.min = input.min;
      slider.max = field.max;
      slider.step = field.step;
      slider.setAttribute("aria-label", field.label + " slider");
      slider.addEventListener("input", () => {
        profile[field.key] = slider.valueAsNumber;
        render();
      });
      row.append(slider);
    }
    input.addEventListener("input", () => {
      if (Number.isFinite(input.valueAsNumber)) {
        profile[field.key] = coerce(field, input.valueAsNumber);
        render(input);
      }
    });
    input.addEventListener("blur", () => render());
    row.append(control);
    group.append(row);
  }
  if (field.help) {
    const help = create("p", "help", field.help);
    help.id = field.key + "-help";
    group.setAttribute("aria-describedby", help.id);
    if (input) input.setAttribute("aria-describedby", help.id);
    group.append(help);
  }
  controls.set(field.key, { group, buttons, input, slider });
  return group;
}

function buildEditor() {
  for (const [index, section] of sections.entries()) {
    const details = create("details", "editor-section");
    details.open = index === 0;
    const summary = create("summary");
    summary.append(create("span", "editor-title", section.title));
    const metric = create("span", "section-value");
    metric.id = "section-value-" + index;
    summary.append(metric);
    if (section.category !== undefined) {
      const swatch = create("span", "swatch");
      swatch.style.backgroundColor = categories[section.category].colour;
      summary.prepend(swatch);
    }
    const body = create("div", "editor-body");
    body.append(...section.common.map(buildField));
    if (section.detail) {
      const more = create("details", "more-inputs");
      more.append(create("summary", "", "More settings"), ...section.detail.map(buildField));
      body.append(more);
    }
    details.append(summary, body);
    byId("inputs").append(details);
  }
}

function updateEditor(values, reduction, editing) {
  for (const [key, { group, buttons, input, slider }] of controls) {
    for (const { button, value } of buttons) {
      const active = typeof value === "object" ?
        Object.entries(value).every(([key, item]) => profile[key] === item) :
        profile[key] === value;
      button.setAttribute("aria-pressed", active);
    }
    if (input && input !== editing) input.value = profile[key];
    if (slider && slider.valueAsNumber !== profile[key]) slider.value = profile[key];
    group.disabled =
      (key === "beef" && profile.meat === 0) ||
      (["carDays", "carMiles", "otherMiles", "occupants"].includes(key) && profile.car === "none") ||
      (key === "heating" && ["none", "electric"].includes(profile.heat));
  }
  for (const [index, section] of sections.entries()) {
    const amount = section.category === undefined ? reduction : sum(values[section.category]);
    byId("section-value-" + index).textContent = tonnes(amount) + " t";
  }
}

function drawPie(container, name, segments, total) {
  const pie = create("div", "pie");
  pie.setAttribute("role", "img");
  const used = segments.filter(segment => segment.amount > 0);
  pie.setAttribute("aria-label", name + ", " + tonnes(total) + " tonnes CO₂e. " +
    used.map(({ label, amount }) => label + " " + tonnes(amount) + " tonnes").join(", "));
  if (used.length) {
    let start = 0;
    const stops = used.map(({ amount, colour }, index) => {
      const end = index === used.length - 1 ? 100 : start + 100 * amount / total;
      const stop = colour + " " + start + "% " + end + "%";
      start = end;
      return stop;
    });
    pie.style.backgroundImage = "conic-gradient(" + stops.join(", ") + ")";
  }
  const centre = create("span", "pie-centre");
  centre.setAttribute("aria-hidden", "true");
  centre.append(create("strong", "", tonnes(total)), create("small", "", "t CO₂e"));
  pie.append(centre);
  container.replaceChildren(pie);
}

function drawLegend() {
  const items = categories.map(({ label, colour }) => {
    const item = create("span", "legend-item");
    const swatch = create("span", "swatch");
    swatch.style.backgroundColor = colour;
    item.append(swatch, document.createTextNode(label));
    return item;
  });
  byId("legend").replaceChildren(...items);
}

function segmentsFor(values, referenceValues, referenceTotals) {
  return categories.map(({ label, colour, parts }, index) => ({
    label, colour, amount: sum(values[index]), reference: referenceTotals[index],
    parts: parts.map(([label, colour], partIndex) => ({
      label, colour, amount: values[index][partIndex],
      reference: referenceValues ? referenceValues[index][partIndex] : null,
    })),
  }));
}

function drawBars(groups, yourTotal, referenceTotal, reduction, referenceReduction) {
  const rows = [...groups, {
    label: "Funded reduction", colour: reductionColour, amount: -reduction,
    reference: referenceReduction === null ? null : -referenceReduction,
  }, {
    label: "Gross emissions", colour: "#2d423a", amount: yourTotal, reference: referenceTotal,
  }];
  const high = Math.max(1, yourTotal, referenceTotal);
  const low = Math.max(high * 0.13, reduction, referenceReduction ?? 0);
  const zero = 100 * low / (high + low);
  const chart = create("div", "bar-chart");
  chart.style.setProperty("--zero", zero + "%");

  const key = create("div", "bar-key");
  key.append(create("span", "key-you", "You"), create("span", "key-reference", "Comparison"));
  const axis = create("div", "axis");
  axis.append(create("span", "axis-min", "−" + tonnes(low)),
    create("span", "axis-zero", "0"), create("span", "axis-max", tonnes(high) + " t"));
  chart.append(key, axis);
  for (const row of rows) {
    const rowNode = create("div", "bar-row" + (row.detail ? " bar-detail" : ""));
    const label = create("span", "bar-label");
    const swatch = create("span", "swatch");
    swatch.style.backgroundColor = row.colour;
    label.append(swatch, document.createTextNode(row.label));
    const lanes = create("div", "lanes");
    for (const [index, value] of [row.amount, row.reference].entries()) {
      const lane = create("div", "lane");
      if (value) {
        const bar = create("span", "bar" + (index ? " reference-bar" : ""));
        bar.style.setProperty("--bar-colour", row.colour);
        bar.style.width = 100 * Math.abs(value) / (high + low) + "%";
        bar.style.left = (value < 0 ? zero + 100 * value / (high + low) : zero) + "%";
        lane.append(bar);
      }
      lanes.append(lane);
    }
    lanes.setAttribute("aria-hidden", "true");
    const amounts = create("div", "bar-amounts");
    amounts.append(create("span", "", tonnes(row.amount)),
      create("span", "reference-amount", row.reference === null ? "—" : tonnes(row.reference)));
    amounts.setAttribute("aria-label", "You " + tonnes(row.amount) + " tonnes. Comparison " +
      (row.reference === null ? "unavailable." : tonnes(row.reference) + " tonnes."));
    rowNode.append(label, lanes, amounts);
    chart.append(rowNode);
  }
  byId("bars").replaceChildren(chart);
}

function render(editing) {
  const values = calculate(profile);
  const yourTotal = sum(values.map(sum));
  const reduction = profile.donation / profile.price;
  const savedProfile = saved.find(item => item.id === comparison.value);
  const benchmark = benchmarks.find(item => item.id === comparison.value);
  const referenceValues = savedProfile ? calculate(savedProfile.values) : null;
  const referenceTotals = referenceValues ? referenceValues.map(sum) :
    benchmark.shares.map(share => benchmark.total * share / 100);
  const referenceTotal = sum(referenceTotals);
  const referenceReduction = savedProfile ? savedProfile.values.donation / savedProfile.values.price : null;
  const referenceName = savedProfile ? savedProfile.name : benchmark.name;
  const groups = segmentsFor(values, referenceValues, referenceTotals);
  const barRows = groups.flatMap(group => detailed && group.parts.length > 1 ?
    [group, ...group.parts.map(part => ({ ...part, detail: true }))] : [group]);

  byId("gross").textContent = tonnes(yourTotal);
  byId("reduction").textContent = tonnes(reduction);
  byId("cost").textContent = currency.format(yourTotal * profile.price);
  byId("cost-note").textContent = reduction ?
    currency.format(Math.max(0, yourTotal * profile.price - profile.donation)) + " left at the same rate" :
    "at " + currency.format(profile.price) + " per tonne";
  byId("reference-pie-title").textContent = referenceName;
  const difference = yourTotal - referenceTotal;
  byId("comparison-note").textContent = savedProfile ?
    (Math.abs(difference) < 0.005 ? "Your gross emissions match this saved scenario." :
      "Your gross emissions are " + tonnes(Math.abs(difference)) + " t " +
      (difference < 0 ? "lower" : "higher") + " than this saved scenario.") : benchmarkNote;
  byId("load-profile").hidden = !savedProfile;
  byId("delete-profile").hidden = !savedProfile;
  byId("detail-toggle").setAttribute("aria-pressed", detailed);
  byId("detail-toggle").textContent = detailed ? "Hide breakdown" : "Show breakdown";

  drawPie(byId("your-pie"), "Your estimate", detailed ? groups.flatMap(group => group.parts) : groups, yourTotal);
  const referenceSegments = detailed && referenceValues ? groups.flatMap(group => group.parts) : groups;
  drawPie(byId("reference-pie"), referenceName,
    referenceSegments.map(segment => ({ ...segment, amount: segment.reference })), referenceTotal);
  drawBars(barRows, yourTotal, referenceTotal, reduction, referenceReduction);
  byId("offset-comparison").textContent = referenceName + " · Full offset estimate " +
    currency.format(referenceTotal * profile.price) + "/year at " + currency.format(profile.price) + "/t.";
  updateEditor(values, reduction, editing);
}

byId("detail-toggle").addEventListener("click", () => {
  detailed = !detailed;
  render();
});
comparison.addEventListener("change", () => render());
byId("reset").addEventListener("click", () => {
  profile = { ...initial };
  render();
});
byId("save-profile").addEventListener("submit", event => {
  event.preventDefault();
  const input = byId("profile-name");
  const name = input.value.trim();
  if (!name) {
    byId("save-status").textContent = "Enter a profile name.";
    input.focus();
    return;
  }
  const item = { id: "profile-" + crypto.getRandomValues(new Uint32Array(3)).join("-"),
    name, values: { ...profile } };
  if (!persistProfiles([...saved, item])) return;
  input.value = "";
  updateComparisonOptions(item.id);
  byId("save-status").textContent = "Saved “" + name + "” and selected it for comparison.";
  render();
});
byId("load-profile").addEventListener("click", () => {
  const item = saved.find(item => item.id === comparison.value);
  profile = { ...item.values };
  byId("save-status").textContent = "Loaded “" + item.name + "” into your lifestyle.";
  render();
});
byId("delete-profile").addEventListener("click", () => {
  const item = saved.find(item => item.id === comparison.value);
  if (!confirm("Delete the saved profile “" + item.name + "”?")) return;
  if (!persistProfiles(saved.filter(candidate => candidate.id !== item.id))) return;
  updateComparisonOptions(benchmarks[0].id);
  comparison.focus();
  byId("save-status").textContent = "Deleted “" + item.name + "”.";
  render();
});
document.querySelector('nav a[href="#sources"]').addEventListener("click", () => {
  byId("sources").open = true;
});

buildEditor();
drawLegend();
updateComparisonOptions(benchmarks[0].id);
render();
