const sections = [
  {
    title: "Food", category: 0, quick: ["dietPreset", "calories"],
    common: [
      { key: "dietPreset", label: "Diet", choices: [
        ["Vegan", dietPresets[0]], ["Veggie", dietPresets[1]], ["Low meat", dietPresets[2]],
        ["Med meat", dietPresets[3]], ["High meat", dietPresets[4]],
      ] },
      { key: "calories", label: "Daily calories", quickLabel: "Daily calories", unit: "kcal/day",
        min: 1000, max: 4000, step: 100, quickSlider: true },
    ],
    detail: [
      { key: "meatServings", label: "Meat and fish", unit: "portions/wk", max: 35, sliderMax: 28, integer: true,
        impact: ["beef", "otherMeat"], help: "One portion is about a palm-sized serving (150 g)." },
      { key: "beef", label: "Beef as a share of meat", unit: "%", max: 100, integer: true,
        choices: [["0%", 0], ["10%", 10], ["20%", 20], ["50%", 50]] },
      { key: "beefType", label: "Beef type", choices: [
        ["Conscientious (UK Dairy)", "ukDairy"], ["Mixed (UK)", "ukMixed"],
        ["Mixed (World)", "worldMixed"],
      ], help: "Illustrative averages; actual impacts vary by farm and supply chain." },
      { key: "dairyServings", label: "Dairy and eggs", unit: "portions/wk", max: 80, sliderMax: 28, integer: true,
        impact: ["dairy"], help: "One portion: a glass of milk, a pot of yogurt, a piece of cheese or two eggs." },
    ],
    note: "The remaining calories are estimated as plant-based food and drink.",
  },
  {
    title: "Travel", category: 1, quick: ["travelPreset"],
    common: [
      { key: "travelPreset", label: "Holidays", choices: [
        ["None", travelPresets[4]],
        ["1 short holiday", travelPresets[0]], ["2 short holidays", travelPresets[1]],
        ["1 long holiday", travelPresets[2]], ["2 long holidays", travelPresets[3]],
      ] },
    ],
    detail: [
      { key: "shortTrips", label: "Short-haul return flights",
        unit: "returns/yr", max: 40, step: 1, integer: true },
      { key: "longTrips", label: "Long-haul return flights",
        unit: "returns/yr", max: 40, step: 1, integer: true },
      { key: "hotelNights", label: "Hotel room nights", unit: "nights/yr", max: 365, sliderMax: 60, step: 1 },
      { key: "shortKm", label: "Short haul, one-way distance", unit: "km", max: 6000, step: 50 },
      { key: "longKm", label: "Long haul, one-way distance", unit: "km", max: 20000, step: 50 },
      { key: "hotelRegion", label: "Hotel location", choices: [
        ["UK", "uk"], ["US", "us"], ["China", "china"],
      ] },
      { key: "hotelType", label: "Hotel service", choices: [
        ["Country estimate", "typical"], ["Limited service", "limited"], ["Full service", "full"],
      ], help: "Factors are per occupied room-night. Full service uses non-resort hotels." },
    ],
  },
  {
    title: "Ground travel", category: 2, quick: ["car"],
    common: [
      { key: "car", label: "Car type", impact: ["car", "carManufacture"], choices: [
        ["No car", "none"], ["Petrol / diesel", "petrol"], ["Hybrid", "hybrid"], ["Electric", "electric"],
      ] },
      { key: "carDays", label: "Car commute days per week", unit: "days", max: 7, step: 1,
        choices: [["None", 0], ["3 days", 3], ["5 days", 5]] },
      { key: "commuteKm", label: "Car commute round trip", unit: "km", max: 500, step: 1,
        choices: [["15 km", 15], ["32 km", 32], ["65 km", 65]] },
    ],
    detail: [
      { key: "otherKm", label: "Other car travel, your share", unit: "km/yr", max: 130000, step: 100, sliderMax: 30000,
        help: "For shared trips, divide the distance by the number of people in the car." },
      { key: "busMinutes", label: "Total time on the bus", unit: "min/wk", max: 10080, sliderMax: 600, step: 5,
        choices: [["None", 0], ["Commute · 20 min each way", 200]] },
      { key: "trainMinutes", label: "Total time on the train", unit: "min/wk", max: 10080, sliderMax: 1200, step: 5,
        choices: [["None", 0], ["20 min each way", 200], ["1 h each way", 600]] },
    ],
    note: "Car commutes assume a solo driver. Transit presets use five days per week; all commutes use 48 weeks per year.",
  },
  {
    title: "Home energy", category: 3, quick: ["homePreset"],
    common: [
      { key: "homePreset", label: "Home energy preset", choices: [
        ["Low · flat", homePresets[0]], ["Medium · terrace", homePresets[1]], ["High · detached", homePresets[2]],
      ] },
    ],
    detail: [
      { key: "homeType", label: "Type of home", choices: [
        ["Flat", "flat"], ["Terrace", "terrace"], ["Semi-detached", "semi"], ["Detached", "detached"],
      ] },
      { key: "people", label: "People sharing the home", unit: "people", min: 1, max: 8, integer: true },
      { key: "newBuild", label: "New-build home", choices: [["No", false], ["Yes", true]], help: "Adds construction emissions over 50 years, shared between occupants. This may overlap with shared capital investment." },
      { key: "climate", label: "Outdoor climate", choices: [
        ["UK-like", { winter: 4, summer: 15.3 }], ["Cold winter", { winter: -5, summer: 21 }],
        ["Warm year-round", { winter: 16, summer: 27 }],
      ] },
      { key: "winter", label: "Coldest month average", unit: "°C", min: -40, max: 40, step: 0.5 },
      { key: "summer", label: "Warmest month average", unit: "°C", min: -20, max: 50, step: 0.5 },
      { key: "indoor", label: "Heat to", unit: "°C", min: 10, max: 30, step: 0.5 },
      { key: "coolTo", label: "Cool to", unit: "°C", min: 16, max: 40, step: 0.5 },
      { key: "heat", label: "Space and water heating", impact: ["spaceHeating", "hotWater"], choices: [
        ["Gas boiler", "gas"], ["Oil boiler", "oil"], ["Heat pump", "heatPump"],
        ["Electric resistance", "electric"], ["No separate heating", "none"],
      ] },
      { key: "electricity", label: "Appliances & lights", unit: "kWh/yr", max: 60000,
        step: 50, sliderMax: 15000,
        choices: [["Low", 1800], ["Medium", 2700], ["High", 4100], ["Heavy use", 9500]],
        help: "Exclude car charging and heating or cooling counted above." },
      { key: "grid", label: "Electricity emissions factor", unit: "kg/kWh", max: 2, step: 0.001,
        choices: [["UK", grids.uk], ["US", grids.us], ["China", grids.china], ["EU", grids.eu], ["World", grids.world]],
      },
    ],
    note: "Presets use UK climate and electricity.",
  },
  {
    title: "Goods & services", category: 4, quick: ["shoppingPreset"],
    common: [
      { key: "shoppingPreset", label: "Purchasing habits", choices: [
        ["Low · £25/mo", purchasePresets[0]], ["Medium · £100/mo", purchasePresets[1]],
        ["High · £280/mo", purchasePresets[2]],
      ] },
    ],
    detail: [
      { key: "shopping", label: "Shopping & deliveries", unit: "£/mo", max: 15000, step: 5, sliderMax: 1500,
        help: "Clothes, home goods and appliances." },
      { key: "leisure", label: "Gym, cinema & events", unit: "£/mo", max: 5000, step: 5, sliderMax: 500 },
    ],
    note: "Devices & telecom · " + devicesAndTelecomKg + " kg CO₂e/yr assumed",
  },
  {
    title: "Shared services", category: 5, quick: ["sharedRegion"],
    common: [
      { key: "sharedRegion", label: "Where you live", impact: ["centralGovernment", "localGovernment", "capital"],
        choices: benchmarks.map(({ button, id }) => [button, id]) },
    ],
  },
  {
    title: "AI use", category: 6, quick: ["weeklyMTokens"],
    common: [
      { key: "weeklyMTokens", label: "Millions of processed text tokens per week", unit: "M tokens/wk", max: 1000,
        slider: "log", choices: [
          ["None", 0], ["Light", 0.15], ["£20/mo example", 3], ["£200/mo example", 30],
        ], help: "Volumes are illustrative. Count input and output, including reasoning." },
    ],
    detail: [
      { key: "aiEnergy", label: "Data-centre electricity", choices: [
        ["Efficient · 0.1 kWh/M", 0.1], ["Typical · 0.4 kWh/M", 0.4], ["Heavy · 2 kWh/M", 2],
      ] },
      { key: "aiGrid", label: "Data-centre electricity emissions factor", unit: "kg/kWh", max: 2, step: 0.001,
        choices: [["World", grids.world], ["US", grids.us], ["EU", grids.eu]] },
      { key: "aiHardware", label: "Server manufacture", choices: [
        ["Baseline · 0.02 kg/M", 0.02], ["High · 0.2 kg/M", 0.2],
      ] },
    ],
  },
  {
    title: "Climate donations", quick: ["donation"],
    common: [
      { key: "donation", label: "Annual contribution", unit: "£/yr", max: 20000, sliderMax: 2000, integer: true,
        choices: [["None", 0], ["£100", 100], ["£500", 500], ["£1,000", 1000]] },
      { key: "price", label: "Assumed cost per additional tonne", unit: "£/t", min: 1, max: 5000, step: 1, integer: true,
        choices: [["£50", 50], ["£200", 200], ["£500", 500]],
        help: "£200 is a biochar example. Use your project's estimate if available." },
    ],
  },
];

const byId = id => document.getElementById(id);
const sum = values => values.reduce((total, value) => total + value, 0);
const storageVersion = 7;
const storageKey = "climate-impact.profiles.v" + storageVersion;
const fields = sections.flatMap(section => [...section.common, ...(section.detail ?? [])]);
const modelFields = fields.filter(field => Object.hasOwn(initial, field.key));
const number = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 2 });
const precise = new Intl.NumberFormat("en-GB", { maximumSignificantDigits: 4 });
const compact = new Intl.NumberFormat("en-GB", { maximumSignificantDigits: 2 });
const percent = new Intl.NumberFormat("en-GB", {
  style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1,
});
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
  return formatExact(Number(value.toFixed(2)));
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
    let version = storageVersion;
    let stored = localStorage.getItem(storageKey);
    while (stored === null && version > 1) {
      version -= 1;
      stored = localStorage.getItem("climate-impact.profiles.v" + version);
    }
    const items = JSON.parse(stored);
    if (!Array.isArray(items)) return [];
    return items.filter(item =>
      item && typeof item.id === "string" && typeof item.name === "string" &&
      item.values && typeof item.values === "object"
    ).map(item => {
      const values = { ...item.values };
      if (version === 1) {
        values.weeklyKTokens = values.prompts;
        values.whPerKTokens = values.promptWh;
      }
      if (version < 3) {
        values.weeklyMTokens = values.weeklyKTokens / 1000;
        values.aiEnergy = values.whPerKTokens;
        // Earlier electricity readings already included electric heating.
        if (values.heat === "electric") values.heat = "none";
      }
      if (version < 4) {
        values.commuteKm = Math.round(values.carMiles * 160.9344) / 100;
        values.otherKm = Math.round(values.otherMiles * 160.9344) / 100;
        const spending = [values.clothing, values.homeGoods, values.appliances];
        if (spending.some(Number.isFinite)) values.shopping = sum(spending.filter(Number.isFinite));
      }
      if (version < 5) {
        const weeks = values.travelWeeks ?? travelWeeks;
        // Keep the old annual transit distance when converting it to a 48-week average.
        values.busMinutes = 120 * values.busDays * values.busKm / busKmPerHour * weeks / travelWeeks;
        values.trainMinutes = 120 * values.trainDays * values.trainKm / trainKmPerHour * weeks / travelWeeks;
      }
      if (version < 6) {
        values.meatServings = Math.round(values.meat / 15) / 10;
        values.dairyServings = Math.round(values.dairy / 15) / 10;
        const occupancy = Number.isFinite(values.occupants) ? Math.max(1, Math.min(8, values.occupants)) : 1.4;
        // Other kilometres used to be entered for the whole car; commuting is now always solo.
        const oldOtherKm = Number.isFinite(values.otherKm) ? values.otherKm : 4000;
        values.otherKm = Math.round(oldOtherKm / occupancy * 100) / 100;
      }
      if (version < 7 && values.conscientiousBeef === true) values.beefType = "ukDairy";
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
  if (quick && field.quickSlider) group.classList.add("quick-slider");
  group.append(create("legend", "sr-only", field.label));
  const heading = create("div", "field-heading");
  if (!quick || field.quickLabel) {
    heading.append(create("span", "field-label", field.quickLabel ?? field.label));
  }
  const adjustments = create("div", "field-adjustments");
  const buttons = [];
  if (field.choices) {
    const row = create("div", "choices");
    for (const [label, value] of field.choices) {
      const button = create("button", "", label);
      button.type = "button";
      button.addEventListener("click", () => {
        const homeChanged = field.key === "homeType" && value !== profile.homeType;
        profile = typeof value === "object" ? { ...profile, ...value } :
          { ...profile, [field.key]: value };
        if (homeChanged) profile.people = value === "flat" ? 1 : 2;
        render();
      });
      buttons.push({ button, value });
      row.append(button);
    }
    adjustments.append(row);
  }

  let input;
  let slider;
  if (field.unit) {
    const control = create("label", "numeric");
    input = create("input");
    input.type = "number";
    input.min = field.min ?? 0;
    input.max = field.max;
    input.step = field.integer ? 1 : "any";
    input.setAttribute("aria-label", field.label + " (" + field.unit + ")");
    control.append(input, create("span", "", field.unit));
    heading.append(control);

    const logarithmic = field.slider === "log";
    slider = create("input", "field-slider");
    slider.type = "range";
    slider.min = logarithmic ? 0 : input.min;
    slider.max = logarithmic ? 1 + 100 * (Math.log10(field.max * 1e6) - 2) : field.sliderMax ?? field.max;
    slider.step = logarithmic || field.integer ? 1 :
      field.step ?? Number((Number(slider.max) - Number(slider.min)).toPrecision(1)) / 100;
    slider.setAttribute("aria-label", field.label + " slider");
    slider.addEventListener("input", () => {
      const position = slider.valueAsNumber;
      // Zero has its own stop. Other positions start at 100 tokens.
      profile[field.key] = logarithmic ?
        (position === 0 ? 0 : Math.round(10 ** (2 + (position - 1) / 100)) / 1e6) : position;
      render();
    });
    input.addEventListener("input", () => {
      if (Number.isFinite(input.valueAsNumber)) {
        profile[field.key] = coerce(field, input.valueAsNumber);
        render(input);
      }
    });
    input.addEventListener("blur", () => {
      input.value = profile[field.key];
    });
    for (const control of [input, slider]) {
      control.addEventListener("wheel", () => {
        if (document.activeElement === control) control.blur();
      }, { passive: true });
    }
    adjustments.append(slider);
  }
  const contribution = create("span", "field-impact");
  contribution.hidden = true;
  heading.append(contribution);
  group.append(heading, adjustments);
  if (field.help) {
    const help = create("p", "help", field.help);
    help.id = field.key + "-help";
    group.setAttribute("aria-describedby", help.id);
    if (input) input.setAttribute("aria-describedby", help.id);
    group.append(help);
  }
  controls.set(field.key, { field, group, buttons, input, slider, contribution });
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
    if (section.note) body.append(create("p", "help section-note", section.note));
    if (section.category === 0) {
      const warning = create("p", "help section-note", "These portions exceed your daily calories. The estimate scales them down to fit.");
      warning.id = "diet-estimate";
      warning.setAttribute("aria-live", "polite");
      body.append(warning);
    }
    if (section.category === 3) {
      const estimate = create("p", "help section-note");
      estimate.id = "heat-estimate";
      body.append(estimate);
    }
    for (const field of [...section.common, ...(section.detail ?? [])]) {
      if (!section.quick.includes(field.key)) body.append(buildField(field));
    }
    panel.append(title, quick);
    if (body.children.length) {
      details.append(summary, body);
      panel.append(details);
    } else {
      title.append(controls.get(section.quick[0]).contribution);
    }
    byId("inputs").append(panel);
  }
}

function updateEditor(emissions, editing) {
  for (const [key, { field, group, buttons, input, slider, contribution }] of controls) {
    const selected = buttons.findLast(({ value }) =>
      typeof value === "object" ?
        Object.entries(value).every(([key, item]) => profile[key] === item) :
        profile[key] === value,
    );
    for (const choice of buttons) {
      choice.button.setAttribute("aria-pressed", choice === selected);
    }
    if (input && input !== editing) input.value = profile[key];
    if (slider) {
      const value = profile[key];
      if (field.slider === "log") {
        const tokens = value * 1e6;
        slider.value = tokens ? Math.max(1, Math.round(1 + 100 * (Math.log10(tokens) - 2))) : 0;
        slider.setAttribute("aria-valuetext", number.format(tokens) + " tokens per week");
      } else {
        slider.value = value;
        slider.setAttribute("aria-valuetext", formatExact(value) + " " + field.unit);
      }
    }
    const impact = field.impact ?? [key];
    contribution.hidden = !Object.hasOwn(emissions, impact[0]);
    if (!contribution.hidden) {
      contribution.textContent = emissionsText(sum(impact.map(part => emissions[part])));
    }
    group.disabled =
      (key === "beef" && profile.meatServings === 0) ||
      (key === "beefType" && (profile.meatServings === 0 || profile.beef === 0)) ||
      (["carDays", "commuteKm", "otherKm"].includes(key) && profile.car === "none") ||
      (key === "indoor" && profile.heat === "none");
  }
  byId("diet-estimate").hidden = dietEnergy(profile).portionScale === 1;
  const estimate = byId("heat-estimate");
  estimate.hidden = profile.heat === "none";
  if (!estimate.hidden) {
    const { heatKWh, winterKW } = spaceEnergy(profile);
    estimate.textContent = "Space heat estimate · " + formatExact(Math.round(heatKWh / 100) * 100) +
      " kWh/yr · " + formatExact(winterKW) + " kW in a typical winter month";
  }
}

const svgNamespace = "http://www.w3.org/2000/svg";
const turn = 2 * Math.PI;

function formatExact(value) {
  return precise.format(value).replace("-", "−");
}

function emissionsText(amount) {
  if (amount > 0 && amount < 0.01) return formatExact(amount * 1000) + " kg CO₂e/yr";
  return formatExact(amount) + " t CO₂e/yr";
}

function chartTotal(amount) {
  return amount > 0 && amount < 0.01 ? compact.format(amount * 1000) + " kg" : tonnes(amount);
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

function drawPie(container, name, groups, total, reduction = 0) {
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
      const share = percent.format(segment.amount / total) + " of total";
      const parentShare = segment.parent ?
        " · " + percent.format(segment.amount / segment.parent.amount) + " of " + segment.parent.label : "";
      chartMark(path, segment.label, emissionsText(segment.amount) + " · " + share + parentShare);
      graphic.append(path);
      start = end;
    }
  }

  if (total) {
    addRing(groups, 78, 110);
    addRing(groups.flatMap(group => group.parts.map(part => ({ ...part, parent: group }))), 111, 148);

    let start = 0;
    for (const group of groups) {
      if (group.amount <= 0) continue;
      const angle = start + Math.PI * group.amount / total;
      const x = 150 + 94 * Math.sin(angle);
      const y = 150 - 94 * Math.cos(angle);
      const lines = group.label.split(" ");
      lines.push(chartTotal(group.amount));
      const label = document.createElementNS(svgNamespace, "text");
      label.setAttribute("x", x);
      label.setAttribute("y", y - (lines.length - 1) * 4 + 3);
      label.setAttribute("class", "pie-label");
      label.setAttribute("aria-hidden", "true");
      for (const [index, text] of lines.entries()) {
        const line = document.createElementNS(svgNamespace, "tspan");
        line.setAttribute("x", x);
        if (index) line.setAttribute("dy", "8");
        line.textContent = text;
        label.append(line);
      }
      graphic.append(label);
      start += turn * group.amount / total;
    }
  }

  const centre = create("span", "pie-centre");
  centre.append(create("strong", "", tonnes(total - reduction)),
    create("span", "", reduction > 0 ? "Net t/yr" : "t CO₂e/yr"));
  if (reduction > 0) {
    centre.append(create("span", "pie-gross", "Gross " + tonnes(total) + " t"));
  }
  pie.append(graphic, centre);
  container.replaceChildren(pie);
}

function emissionsGroups(values) {
  return categories.map(category => {
    const parts = category.parts.map(([label, colour, ...keys]) => ({
      label, colour, amount: sum(keys.map(key => values[key])),
    }));
    return { ...category, parts, amount: sum(parts.map(part => part.amount)) };
  });
}

function axisStep(maximum) {
  const rough = Math.max(maximum, 0.01) / 4;
  const power = 10 ** Math.floor(Math.log10(rough));
  return power * [1, 2, 2.5, 5, 10].find(step => step >= rough / power);
}

function drawBars(personal, reference, referenceName) {
  const series = [personal, reference];
  const maximum = Math.max(...personal.map(group => group.amount), ...reference.map(group => group.amount));
  const step = axisStep(maximum);
  const topTicks = Math.max(1, Math.ceil(maximum / step));
  const top = topTicks * step;
  const ordinate = amount => 100 * (top - amount) / top + "%";

  const chart = create("div", "bar-chart");
  const legend = create("div", "bar-key");
  legend.append(create("span", "bar-unit", "t CO₂e/yr"), create("span", "key-you", "You"),
    create("span", "key-reference", "Reference"));
  const plot = create("div", "bar-plot");
  for (let tick = 0; tick <= topTicks; tick++) {
    const line = create("div", tick === 0 ? "grid-line zero-line" : "grid-line");
    line.style.top = ordinate(tick * step);
    line.append(create("span", "", formatExact(tick * step)));
    plot.append(line);
  }
  const columns = create("div", "bar-columns");
  const labels = create("div", "bar-labels");
  for (const [index, group] of series[0].entries()) {
    const pair = create("div", "bar-pair");
    const caption = create("div", "bar-category");
    const totals = create("div", "bar-totals");
    caption.append(create("span", "bar-caption", group.short ?? group.label), totals);
    labels.append(caption);

    for (const [side, groups] of series.entries()) {
      const bar = create("div", side === 0 ? "bar-stack" : "bar-stack reference-stack");
      const { label, amount, parts } = groups[index];
      const owner = side === 0 ? "You" : referenceName;
      const total = create("span", side === 0 ? "" : "reference-total", chartTotal(amount));
      total.setAttribute("aria-label", owner + " · " + label + ", " + emissionsText(amount));
      totals.append(total);
      if (amount > 0) {
        bar.style.top = ordinate(amount);
        bar.style.height = 100 * amount / top + "%";
        for (const part of parts) {
          if (part.amount === 0) continue;
          const segment = create("span", "bar-segment");
          segment.style.flexGrow = part.amount / amount;
          segment.style.setProperty("--segment", part.colour);
          chartMark(segment, owner + " · " + part.label, emissionsText(part.amount) +
            " · " + emissionsText(amount) + " category total");
          bar.append(segment);
        }
        pair.append(bar);
      }
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
  const emissions = calculate(profile);
  const personal = emissionsGroups(emissions);
  const yourTotal = sum(personal.map(group => group.amount));
  const reduction = profile.donation / profile.price;
  const savedProfile = saved.find(item => item.id === comparisonId);
  const benchmark = benchmarks.find(item => item.id === comparisonId);
  const reference = emissionsGroups(calculate(savedProfile ? savedProfile.values :
    { ...initial, ...benchmark.activities, sharedRegion: benchmark.id }));
  const referenceTotal = sum(reference.map(group => group.amount));
  const referenceReduction = savedProfile ? savedProfile.values.donation / savedProfile.values.price : 0;
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
    "Modelled lifestyle";
  byId("profile-actions").hidden = !savedProfile;
  for (const button of comparison.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", button.dataset.profile === comparisonId);
  }

  drawPie(byId("your-pie"), "You", personal, yourTotal, reduction);
  drawPie(byId("reference-pie"), referenceName, reference, referenceTotal, referenceReduction);
  drawBars(personal, reference, referenceName);
  updateEditor(emissions, editing);
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
