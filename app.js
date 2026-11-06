const sections = [
  {
    title: "Food", category: 0, quick: ["meat"],
    common: [
      { key: "meat", label: "Meat per week", unit: "g/wk", max: 5000, step: 50, choices: [
        ["No meat", 0], ["250 g", 250], ["600 g", 600], ["1.2 kg", 1200],
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
    title: "Flights", category: 1, quick: ["shortTrips", "longTrips"],
    common: [
      { key: "shortTrips", label: "Short-haul return trips per year", quickLabel: "Short haul",
        unit: "/yr", max: 40, step: 1,
        slider: true, integer: true, choices: [["None", 0], ["1", 1], ["2", 2], ["4", 4]],
        help: "Default distance is 1,500 km each way, roughly London to Barcelona." },
      { key: "longTrips", label: "Long-haul return trips per year", quickLabel: "Long haul",
        unit: "/yr", max: 40, step: 1,
        slider: true, integer: true, choices: [["None", 0], ["1", 1], ["2", 2], ["4", 4]],
        help: "Default distance is 6,500 km each way, roughly London to Chicago." },
    ],
    detail: [
      { key: "shortKm", label: "Short haul, one-way distance", unit: "km", max: 6000, step: 50 },
      { key: "longKm", label: "Long haul, one-way distance", unit: "km", max: 20000, step: 50 },
    ],
  },
  {
    title: "Ground travel", category: 2, quick: ["car"],
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
    title: "Home energy", category: 3, quick: ["electricity"],
    common: [
      { key: "electricity", label: "Household electricity per year", unit: "kWh/yr", max: 60000, step: 100,
        choices: [["1,500", 1500], ["2,700", 2700], ["5,000", 5000]],
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
    title: "Goods & services", category: 4, quick: ["goods"],
    common: [
      { key: "goods", label: "Shopping and goods allowance", unit: "kg CO₂e/yr", max: 30000, step: 50,
        choices: [["650", 650], ["1,300", 1300], ["2,600", 2600]],
        help: "Annual estimate for goods such as clothes, furniture, and devices, plus deliveries and waste." },
      { key: "services", label: "Private services allowance", unit: "kg CO₂e", max: 30000, step: 50,
        choices: [["Low · 450", 450], ["Medium · 900", 900], ["High · 1,800", 1800]],
        help: "Annual estimate for accommodation, telecoms, recreation and similar services." },
    ],
  },
  {
    title: "Shared services", category: 5, quick: ["shared"],
    common: [
      { key: "shared", label: "Public services and infrastructure allowance", unit: "kg CO₂e/yr", max: 30000, step: 50,
        choices: [["850", 850], ["1,700", 1700], ["3,400", 3400]],
        help: "Illustrative annual share of public services and infrastructure, including a share of buildings." },
    ],
  },
  {
    title: "AI use", category: 6, quick: ["weeklyKTokens"],
    common: [
      { key: "weeklyKTokens", label: "Thousands of text tokens per week", unit: "k tokens/wk", max: 20000,
        choices: [
          ["None", { weeklyKTokens: 0 }],
          ["Free", { weeklyKTokens: 30, whPerKTokens: 0.5, embodiedPerKTokens: 0.1 }],
          ["£20/mo", { weeklyKTokens: 150, whPerKTokens: 2, embodiedPerKTokens: 0.2 }],
          ["£200/mo", { weeklyKTokens: 700, whPerKTokens: 5, embodiedPerKTokens: 0.5 }],
        ], help: "Count input and output tokens. The plan buttons set example workloads and energy rates." },
    ],
    detail: [
      { key: "whPerKTokens", label: "Data-centre energy per 1,000 tokens", unit: "Wh", max: 100 },
      { key: "aiGrid", label: "Data-centre electricity emissions factor", unit: "kg/kWh", max: 2, step: 0.01 },
      { key: "embodiedPerKTokens", label: "Hardware and training per 1,000 tokens", unit: "g CO₂e", max: 30 },
    ],
  },
  {
    title: "Climate donations", quick: ["donation"],
    common: [
      { key: "donation", label: "Annual contribution", unit: "£/yr", max: 20000, step: 1, slider: true, integer: true,
        choices: [["None", 0], ["£100", 100], ["£500", 500], ["£1,000", 1000]] },
      { key: "price", label: "Assumed cost per additional tonne", unit: "£/t", min: 1, max: 5000, step: 1, integer: true,
        choices: [["£50", 50], ["£200", 200], ["£500", 500]],
        help: "£200 is a biochar example. Use your project's estimate if available." },
    ],
  },
];

const byId = id => document.getElementById(id);
const sum = values => values.reduce((total, value) => total + value, 0);
const storageKey = "climate-impact.profiles.v2";
const fields = sections.flatMap(section => [...section.common, ...(section.detail ?? [])]);
const modelFields = fields.filter(field => Object.hasOwn(initial, field.key));
const number = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 2 });
const precise = new Intl.NumberFormat("en-GB", { maximumSignificantDigits: 6 });
const currency = new Intl.NumberFormat("en-GB", {
  style: "currency", currency: "GBP", maximumFractionDigits: 0,
});
const reductionColour = "#256759";

let profile = { ...initial };
let saved = readProfiles();
let comparisonId = benchmarks[0].id;
const controls = new Map();
const comparison = byId("comparison");
const tooltip = byId("chart-tooltip");

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
    const current = localStorage.getItem(storageKey);
    const items = JSON.parse(current ?? localStorage.getItem("climate-impact.profiles.v1"));
    if (!Array.isArray(items)) return [];
    return items.filter(item =>
      item && typeof item.id === "string" && typeof item.name === "string" &&
      item.values && typeof item.values === "object"
    ).map(item => {
      // The old model used one workload unit per prompt. A unit is now 1,000 tokens.
      const values = current === null ? {
        ...item.values,
        weeklyKTokens: item.values.prompts,
        whPerKTokens: item.values.promptWh,
        embodiedPerKTokens: item.values.aiEmbodied,
      } : item.values;
      return {
        id: item.id, name: item.name.slice(0, 50),
        values: Object.fromEntries(modelFields.map(field => [
          field.key, coerce(field, values[field.key]),
        ])),
      };
    });
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

function buildComparisonOptions() {
  comparison.replaceChildren();
  for (const items of [benchmarks, saved]) {
    if (!items.length) continue;
    const row = create("div", "comparison-options");
    for (const item of items) {
      const button = create("button", "", item.button ?? item.name);
      button.type = "button";
      button.dataset.profile = item.id;
      button.setAttribute("aria-label", item.name);
      button.addEventListener("click", () => {
        comparisonId = item.id;
        render();
      });
      row.append(button);
    }
    comparison.append(row);
  }
}

function buildField(field, quick = false) {
  const group = create("fieldset", quick ? "field quick-field" : "field");
  group.append(create("legend", quick ? "sr-only" : "", field.label));
  if (quick && field.quickLabel) {
    group.classList.add("quick-number");
    group.append(create("span", "quick-label", field.quickLabel));
  }
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
  for (const section of sections) {
    const panel = create("section", "editor-section");
    panel.setAttribute("aria-label", section.title);
    const title = create("div", "editor-title");
    const swatch = create("span", "swatch");
    swatch.style.backgroundColor = categories[section.category]?.colour ?? reductionColour;
    title.append(swatch, document.createTextNode(section.title));

    const quick = create("div", "quick-fields");
    for (const field of section.common.filter(field => section.quick.includes(field.key))) {
      quick.append(buildField(field, true));
    }
    const details = create("details", "editor-details");
    const summary = create("summary", "", "More");
    summary.setAttribute("aria-label", "More " + section.title.toLowerCase() + " settings");
    const body = create("div", "editor-body");
    for (const field of [...section.common, ...(section.detail ?? [])]) {
      if (!section.quick.includes(field.key)) body.append(buildField(field));
    }
    details.append(summary, body);
    panel.append(title, quick, details);
    byId("inputs").append(panel);
  }
}

function updateEditor(editing) {
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
}

const svgNamespace = "http://www.w3.org/2000/svg";
const turn = 2 * Math.PI;

function formatExact(value) {
  return precise.format(value).replace("-", "−");
}

function chartMark(mark, label, detail) {
  mark.setAttribute("tabindex", "0");
  mark.setAttribute("role", "img");
  mark.setAttribute("aria-label", label + ", " + detail);

  function position(x, y) {
    const left = Math.max(8, Math.min(x + 12, window.innerWidth - tooltip.offsetWidth - 8));
    const below = y + 14;
    const top = below + tooltip.offsetHeight < window.innerHeight - 8 ?
      below : Math.max(8, y - tooltip.offsetHeight - 8);
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  }

  function show(x, y) {
    tooltip.replaceChildren(create("strong", "", label), create("span", "", detail));
    tooltip.hidden = false;
    position(x, y);
  }
  mark.addEventListener("pointerenter", event => show(event.clientX, event.clientY));
  mark.addEventListener("pointermove", event => {
    if (!tooltip.hidden) position(event.clientX, event.clientY);
  });
  mark.addEventListener("pointerleave", () => { tooltip.hidden = true; });
  mark.addEventListener("focus", () => {
    const box = mark.getBoundingClientRect();
    show(box.left + box.width / 2, box.top + box.height / 2);
  });
  mark.addEventListener("blur", () => { tooltip.hidden = true; });
  mark.addEventListener("click", () => mark.focus());
}

function ringPath(start, end, inner, outer) {
  const point = (angle, radius) => [
    150 + radius * Math.sin(angle), 150 - radius * Math.cos(angle),
  ].join(" ");

  // A full turn needs two arcs because a single SVG arc with equal endpoints vanishes.
  const clockwise = end - start > Math.PI ? 1 : 0;
  if (end - start >= turn - 1e-10) {
    return "M " + point(start, outer) +
      " A " + outer + " " + outer + " 0 0 1 " + point(start + Math.PI, outer) +
      " A " + outer + " " + outer + " 0 0 1 " + point(start, outer) +
      " Z M " + point(start, inner) +
      " A " + inner + " " + inner + " 0 0 0 " + point(start + Math.PI, inner) +
      " A " + inner + " " + inner + " 0 0 0 " + point(start, inner) + " Z";
  }
  return "M " + point(start, outer) +
    " A " + outer + " " + outer + " 0 " + clockwise + " 1 " + point(end, outer) +
    " L " + point(end, inner) +
    " A " + inner + " " + inner + " 0 " + clockwise + " 0 " + point(start, inner) + " Z";
}

function drawPie(container, name, groups, total, breakdown) {
  const pie = create("div", "pie");
  const graphic = document.createElementNS(svgNamespace, "svg");
  graphic.setAttribute("viewBox", "0 0 300 300");
  graphic.setAttribute("role", "group");
  graphic.setAttribute("aria-label", name + " emissions breakdown");

  function addRing(segments, inner, outer) {
    let start = 0;
    for (const segment of segments) {
      if (segment.amount <= 0) continue;
      const end = start + turn * segment.amount / total;
      const path = document.createElementNS(svgNamespace, "path");
      path.setAttribute("d", ringPath(start, end, inner, outer));
      path.setAttribute("fill", segment.colour);
      const share = formatExact(100 * segment.amount / total) + "% of total";
      const parentShare = segment.parent ?
        " · " + formatExact(100 * segment.amount / segment.parent.amount) + "% of " + segment.parent.label : "";
      chartMark(path, segment.label, formatExact(segment.amount) + " t CO₂e/yr · " + share + parentShare);
      graphic.append(path);
      start = end;
    }
  }

  if (total) {
    addRing(groups, 66, breakdown ? 110 : 148);
    if (breakdown) {
      addRing(groups.flatMap(group => group.parts.map(part => ({ ...part, parent: group }))), 111, 148);
    }
  }

  const centre = create("span", "pie-centre");
  centre.append(create("strong", "", tonnes(total)), create("span", "", "t CO₂e/yr"));
  pie.append(graphic, centre);
  container.replaceChildren(pie);
}

function emissionsGroups(values) {
  return categories.map((category, index) => ({
    ...category,
    amount: sum(values[index]),
    parts: category.parts.map(([label, colour], partIndex) => ({
      label, colour, amount: values[index][partIndex],
    })),
  }));
}

function axisStep(maximum) {
  const rough = Math.max(maximum, 0.01) / 4;
  const power = 10 ** Math.floor(Math.log10(rough));
  return power * [1, 2, 2.5, 5, 10].find(step => step >= rough / power);
}

function drawBars(personal, reference, reduction, referenceReduction, referenceName) {
  const reductionGroup = { label: "Estimated funded reduction", short: "Funded",
    colour: reductionColour, amount: -reduction };
  const series = [personal.concat(reductionGroup),
    reference.concat({ ...reductionGroup, amount: referenceReduction === null ? null : -referenceReduction })];
  const maximum = Math.max(...personal.map(group => group.amount), ...reference.map(group => group.amount));
  const step = axisStep(maximum + Math.max(reduction, referenceReduction ?? 0));
  const topTicks = Math.max(1, Math.ceil(maximum / step));
  const bottomTicks = Math.max(1, Math.ceil(Math.max(reduction, referenceReduction ?? 0) / step));
  const top = topTicks * step;
  const range = (topTicks + bottomTicks) * step;
  const ordinate = amount => 100 * (top - amount) / range + "%";

  const chart = create("div", "bar-chart");
  const legend = create("div", "bar-key");
  legend.append(create("span", "bar-unit", "t CO₂e/yr"), create("span", "key-you", "You"),
    create("span", "key-reference", "Reference"));
  const plot = create("div", "bar-plot");
  for (let tick = -bottomTicks; tick <= topTicks; tick++) {
    const line = create("div", tick === 0 ? "grid-line zero-line" : "grid-line");
    line.style.top = ordinate(tick * step);
    line.append(create("span", "", formatExact(tick * step)));
    plot.append(line);
  }
  const columns = create("div", "bar-columns");
  const labels = create("div", "bar-labels");
  for (const [index, group] of series[0].entries()) {
    const pair = create("div", "bar-pair");
    const caption = create("span", "", group.short ?? group.label);
    caption.style.setProperty("--category", group.colour);
    labels.append(caption);

    for (const [side, groups] of series.entries()) {
      const bar = create("div", side === 0 ? "bar-stack" : "bar-stack reference-stack");
      const { label, colour, amount, parts } = groups[index];
      const owner = side === 0 ? "You" : referenceName;
      if (amount) {
        bar.style.top = ordinate(Math.max(amount, 0));
        bar.style.height = 100 * Math.abs(amount) / range + "%";
        for (const part of parts ?? [{ label, colour, amount }]) {
          if (part.amount === 0) continue;
          const segment = create("span", "bar-segment");
          segment.style.flexGrow = Math.abs(part.amount);
          segment.style.setProperty("--segment", part.colour);
          const total = parts ? " · " + formatExact(amount) + " t total" : "";
          chartMark(segment, owner + " · " + part.label, formatExact(part.amount) + " t CO₂e/yr" + total);
          bar.append(segment);
        }
      } else {
        bar.classList.add("zero-bar");
        bar.style.top = ordinate(0);
        bar.style.setProperty("--segment", colour);
        chartMark(bar, owner + " · " + label, amount === null ? "No estimate" : "0 t CO₂e/yr");
      }
      pair.append(bar);
    }
    columns.append(pair);
  }
  plot.append(columns);
  chart.append(legend, plot, labels);
  byId("bars").replaceChildren(chart);
}

function setMetric(id, value, label) {
  byId(id).replaceChildren(create("strong", "", value), document.createTextNode(" " + label));
}

function render(editing) {
  tooltip.hidden = true;
  const personal = emissionsGroups(calculate(profile));
  const yourTotal = sum(personal.map(group => group.amount));
  const reduction = profile.donation / profile.price;
  const savedProfile = saved.find(item => item.id === comparisonId);
  const benchmark = benchmarks.find(item => item.id === comparisonId);
  const reference = savedProfile ? emissionsGroups(calculate(savedProfile.values)) :
    categories.map(({ label, short, colour }, index) => ({
      label, short, colour, amount: benchmark.total * benchmark.shares[index] / 100 || null,
    }));
  const referenceTotal = sum(reference.map(group => group.amount));
  const referenceReduction = savedProfile ? savedProfile.values.donation / savedProfile.values.price : null;
  const referenceName = savedProfile ? savedProfile.name : benchmark.name;

  setMetric("gross", tonnes(yourTotal) + " t CO₂e/yr", "per person");
  setMetric("reduction", tonnes(reduction) + " t CO₂e/yr", "funded");
  setMetric("cost", currency.format(yourTotal * profile.price) + "/yr", "to offset");
  byId("cost").title = reduction ?
    currency.format(Math.max(0, yourTotal * profile.price - profile.donation)) + " still needed at the same rate" :
    "At " + currency.format(profile.price) + " per tonne";
  setMetric("offset-comparison", currency.format(referenceTotal * profile.price) + "/yr", "to offset");
  const difference = yourTotal - referenceTotal;
  byId("comparison-note").textContent = savedProfile ?
    (Math.abs(difference) < 0.005 ? "Same total" :
      "You: " + tonnes(Math.abs(difference)) + " t " + (difference < 0 ? "lower" : "higher")) :
    "Illustrative split · 2024 territorial";
  byId("profile-actions").hidden = !savedProfile;
  for (const button of comparison.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", button.dataset.profile === comparisonId);
  }

  drawPie(byId("your-pie"), "You", personal, yourTotal, true);
  drawPie(byId("reference-pie"), referenceName, reference, referenceTotal, Boolean(savedProfile));
  drawBars(personal, reference, reduction, referenceReduction, referenceName);
  updateEditor(editing);
}

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
  comparisonId = item.id;
  buildComparisonOptions();
  byId("save-status").textContent = "Saved “" + name + "”.";
  render();
});
byId("load-profile").addEventListener("click", () => {
  const item = saved.find(item => item.id === comparisonId);
  profile = { ...item.values };
  byId("save-status").textContent = "Loaded “" + item.name + "” into your lifestyle.";
  render();
});
byId("delete-profile").addEventListener("click", () => {
  const item = saved.find(item => item.id === comparisonId);
  if (!confirm("Delete the saved profile “" + item.name + "”?")) return;
  if (!persistProfiles(saved.filter(candidate => candidate.id !== item.id))) return;
  comparisonId = benchmarks[0].id;
  buildComparisonOptions();
  byId("save-status").textContent = "Deleted “" + item.name + "”.";
  render();
  comparison.querySelector("button").focus();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") tooltip.hidden = true;
});

buildEditor();
buildComparisonOptions();
render();
