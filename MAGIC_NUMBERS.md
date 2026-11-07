# Model assumptions and conversion factors

The calculator estimates annual tonnes of CO₂ equivalent (t CO₂e) per person. It combines activity estimates with greenhouse-gas factors, generally using 100-year warming potentials. The flight factors also include an indicative adjustment for warming at altitude. The model divides kg CO₂e by 1,000 to display tonnes. It uses 52 weeks, 12 months and 365 days per year. Figures in examples below are estimates.

## Food

Enter approximate total intake, including food eaten away from home. The model takes meat, dairy and egg calories out of the daily total and estimates the remainder as plant-based food and drink. Changing the diet preset keeps total calories and beef share fixed. If the entered portions would exceed the calorie total, the model scales the two portion counts down by the same proportion for the calculation and shows a note under More.

| Food | Energy assumption | Emissions assumption |
| --- | ---: | --- |
| Beef | 300 kcal per 150 g portion | 60 kg CO₂e/kg by default: an illustrative blend of beef-herd and dairy-herd beef, whose global means are about 99 and 33. The conscientious beef option uses an illustrative 35 kg CO₂e/kg for lower-impact beef; actual impacts vary by farm and supply chain. |
| Other meat and fish | 300 kcal per 150 g portion | 10 kg CO₂e/kg, near poultry at 9.9. Pork is about 12.3; lamb and seafood vary widely. |
| Dairy and eggs | 120 kcal per portion | 0.6 kg CO₂e/portion. A rounded blend of milk (200 mL), yogurt (125 g, using milk as a proxy), cheese (30 g) and eggs (two). |
| Other food and drink | Remaining daily kcal | 2.47 kg CO₂e per 2,000 kcal, the median modelled footprint of vegan diets in the UK EPIC-Oxford cohort at equal energy intake. We use it as a proxy for the remaining calories in all diets. |

The portion energies are rounded examples informed by UK food composition data. Multiply weekly portions by 365 ÷ 7, then by the portion emissions. Apply the beef percentage by weight within meat and fish. Multiply remaining daily calories by 365 × 2.47 ÷ 2,000. The vegan result uses the study's estimate directly; the other presets are illustrative mixes using this calculator's factors, not the study's observed diet groups. Equal calorie intakes can have very different footprints. [Scarborough et al. (2023), Table 3](https://doi.org/10.1038/s43016-023-00795-w) · [UK food composition data](https://www.gov.uk/government/publications/composition-of-foods-integrated-dataset-cofid) · [Poore & Nemecek (2018)](https://doi.org/10.1126/science.aaq0216) · [Food factors by kilogram](https://ourworldindata.org/grapher/ghg-per-kg-poore)

| Preset | Meat and fish portions/week | Dairy and egg portions/week | Estimate at 2,000 kcal/day and 20% beef, t CO₂e/yr |
| --- | ---: | ---: | ---: |
| Vegan | 0 | 0 | 0.90 |
| Veggie | 0 | 12 | 1.18 |
| Low meat | 2 | 7 | 1.34 |
| Med meat | 4 | 12 | 1.73 |
| High meat | 8 | 20 | 2.47 |

## Travel

For a return flight, multiply the one-way airport distance by two, by the annual trip count and by the economy factor. The factors below combine the 2026 DESNZ workbook's **With RF** rows for business travel by air and the matching well-to-tank rows for fuel supply.

| Flight | In flight, including altitude | Fuel supply | Total kg CO₂e/passenger-km |
| --- | ---: | ---: | ---: |
| Short haul, economy | 0.12576 | 0.02249 | 0.14825 |
| Long haul, economy | 0.11704 | 0.02461 | 0.14165 |

DESNZ applies the indicative 1.7 radiative-forcing multiplier to direct flight CO₂. This represents non-CO₂ warming effects such as contrails and atmospheric chemistry. It does not multiply methane, nitrous oxide or fuel supply emissions. DESNZ already builds an 8% route uplift into the workbook to account for indirect paths and delays. Enter approximate airport-to-airport distances with no further uplift. The default 1,500 km short-haul return is about 0.445 t CO₂e. A 6,500 km each-way long-haul return is about 1.84 t. These UK route averages stand in for flights elsewhere. Cabin class, aircraft and actual contrail conditions can change the result. [DESNZ 2026 flat file](https://assets.publishing.service.gov.uk/media/6a6c9748862aaf18d9c62ac9/ghg-conversion-factors-2026-flat-format-revised.xlsx) · [DESNZ methodology, §§8.37–8.43](https://assets.publishing.service.gov.uk/media/6a2940543b15d05a7ce3202e/2026-GHG-conversion-factors-methodology-report.pdf)

The holiday presets set short-haul returns and hotel nights to 1 and 5 or 2 and 10, and long-haul returns and nights to 1 and 14 or 2 and 28. Each preset clears the other flight count. None clears both flight counts and hotel nights.

Hotel emissions are per occupied room-night. The country estimate is the DESNZ median across hotel classes. Limited and full service use Cornell CHSB 2026 means for the 2024 calendar year, `Dataset` sheet, Measure 1, Asset Class and Hotel Type. Full service uses non-resort properties.

| Hotel location | Country estimate | Limited service | Full service |
| --- | ---: | ---: | ---: |
| UK | 10.4 | 7.79 | 14.08 |
| US | 16.1 | 13.78 | 23.4 |
| China | 53.5 | 29.54 | 55.14 |

Rates are kg CO₂e per occupied room-night. HCMI allocates property energy and, where applicable, outsourced laundry. These estimates describe samples of properties, with no standard room size. They exclude the wider trip and do not give a footprint for a specific room. [DESNZ hotel method, §11](https://assets.publishing.service.gov.uk/media/6a2940543b15d05a7ce3202e/2026-GHG-conversion-factors-methodology-report.pdf) · [Cornell CHSB 2026](https://ecommons.cornell.edu/entities/publication/b0a5de77-0c02-4650-b5a8-f32ba95b7a6f) · [Hotel Carbon Measurement Initiative](https://sustainablehospitalityalliance.org/resource/hotel-carbon-measurement-initiative/)

## Ground travel

Car distance is round-trip commute kilometres × days per week × 48, plus your share of other car kilometres. The commute assumes one person. For other shared journeys, enter the distance divided by the number of people in the car (for example, enter 100 km for a 200 km trip shared by two people).

| Ground travel | Factor | Basis |
| --- | ---: | --- |
| Petrol or diesel car | 0.21081 kg/vehicle-km | Mean of DESNZ average petrol (0.16152 + 0.04599 upstream) and diesel (0.17265 + 0.04146). |
| Hybrid | 0.16276 kg/vehicle-km | DESNZ average hybrid (0.12961 + 0.03315 upstream). |
| Electric car | 0.205 kWh/vehicle-km × selected grid factor | DESNZ average battery EV electricity emissions, 0.02686 kg/km ÷ 0.13096 kg/kWh. |
| Car manufacture | 0.040 kg/vehicle-km | Illustrative 8 t spread over 200,000 km. The same allowance covers all car types here. |
| Bus | 0.128 kg/passenger-km | DESNZ average local bus, 0.10151 + 0.02649 upstream. |
| Train | 0.03989 kg/passenger-km | DESNZ national rail, 0.03092 + 0.00897 upstream. |

Enter total weekly minutes for bus and rail. The model uses 24 km/h for buses, 80 km/h for trains and 48 travel weeks. A five-day commute of 20 minutes each way is 200 minutes/week. The speeds are illustrative averages and can differ by route. Electricity factors represent grid generation and omit a separate charge for network losses. Car manufacture varies with vehicle size, battery and life. [DESNZ 2026 flat file](https://assets.publishing.service.gov.uk/media/6a6c9748862aaf18d9c62ac9/ghg-conversion-factors-2026-flat-format-revised.xlsx) · [ICCT passenger-car life-cycle analysis](https://theicct.org/publication/electric-cars-life-cycle-analysis-emissions-europe-jul25/)

Example at five days per week: a 32 km round trip by solo petrol/diesel car is 7,680 km/year, about 1.62 t CO₂e for driving and fuel supply plus 0.31 t for car manufacture. An hour each way by train represents 160 km/day at 80 km/h, or 38,400 passenger-km/year, for about 1.53 t including energy supply. At the same 32 km round-trip distance, national rail would be about 0.31 t/year. The national rail factor does not include train manufacture or rail infrastructure, so compare it to the 1.62 t car-use figure for similar accounting boundaries.

## Home energy

**Space heating.** Enter your thermostat setting and the mean outdoor temperatures in your coldest and warmest months. The model interpolates between those endpoints with a cosine over a year. Each day contributes the positive difference between outdoor temperature and the heating balance temperature, in the direction that calls for heat:

```text
balance temperature = thermostat − 4 °C
heating degree days = sum(max(0, balance temperature − daily outdoor mean))
useful heat (kWh/yr) = heating degree days × 24 × heat-loss coefficient (W/K) ÷ 1,000
winter-month power (kW) = max(0, balance temperature − coldest-month mean) × W/K ÷ 1,000
```

The 4 °C adjustment is a simplifying estimate for internal and solar gains and intermittent heating. A 19.5 °C thermostat gives a 15.5 °C balance point, close to the study's fitted median. The flat, terrace, semi and detached coefficients are 80, 160, 180 and 235 W/K. They approximate 90% of measured median heating input slopes of 90, 177, 201 and 262 W/K, rounded to useful heat before applying the chosen heater efficiency. These are dwelling-type proxies. Insulation, exposed walls, ventilation and actual heating hours can dominate. The winter power estimate describes a typical cold month and is unsuitable for sizing a heater for extreme weather. [Hanmer et al., British smart-meter heat signatures, Table 8](https://doi.org/10.5334/bc.670)

**Cooling.** Sum daily degrees above the cooling setpoint and use the same dwelling heat-loss coefficient to estimate cooling load. Divide by an assumed seasonal COP of 3 to get electrical kWh, apply the grid factor and split between occupants. The default setpoint is 40 °C; it still models cooling if outdoor temperatures exceed 40 °C. When heating is on, the cooling setpoint is no lower than the heating setpoint. This is a simple temperature model. Humidity, sun, equipment and cooling schedules can change demand. [US DOE residential cooling efficiency](https://www.energy.gov/cmei/femp/purchasing-energy-efficient-residential-central-air-conditioners)

**Hot water.** The model adds 600 kWh of useful heat per person per year, an illustrative 40 litres/day heated by 35 °C (about 594 kWh/yr). The selected heater serves both space heat and hot water. Choose **No separate heating** if you are entering a meter reading that already includes them, or if they are outside the scope of your estimate.

**Fuel and equipment.** Multiply useful heat by kg CO₂e per purchased kWh ÷ efficiency, or by the electricity factor ÷ seasonal COP. Divide space heating and appliance electricity by the number of occupants. Hot water is already per person.

| Heating system | Purchased-energy factor | Efficiency or seasonal COP |
| --- | --- | ---: |
| Gas boiler | 0.21252 kg/kWh gross CV (0.18231 direct + 0.03021 upstream) | 0.90 |
| Oil boiler | 0.29830 kg/kWh gross CV (0.24677 direct + 0.05153 upstream) | 0.85 |
| Electric resistance | Selected grid factor | 1 |
| Heat pump | Selected grid factor | 2.8 |

The boiler efficiencies are model assumptions. The heat pump uses the median SPFH4 from the UK Electrification of Heat demonstration, which includes hot water. The grid preset factors in kg CO₂e/kWh are UK 0.131 (DESNZ 2026 publication, rounded from 0.13096), US 0.384, China 0.525, EU 0.210 and world 0.458 (Ember 2025 generation, reported in 2026). Local generation mixes and accounting boundaries vary. [DESNZ 2026 flat file](https://assets.publishing.service.gov.uk/media/6a6c9748862aaf18d9c62ac9/ghg-conversion-factors-2026-flat-format-revised.xlsx) · [UK heat pump evidence, technical annex](https://assets.publishing.service.gov.uk/media/65af94848bbe95000e5eb27a/shdfd-whr-outcome-and-economic-evaluation-technical-annex.pdf) · [Ember Global Electricity Review 2026](https://ember-energy.org/latest-insights/global-electricity-review-2026/major-countries-and-regions/)

The flat preset uses one occupant. The other presets use two. All use UK grid electricity and cold/warm monthly means of 4 °C and 15.3 °C. The outdoor means approximate the midpoints of the Met Office's UK January and July normal high and low temperatures for 1991–2020. The low/medium/high appliance values use representative Ofgem Profile Class 1 values. The 9,500 kWh heavy-use option is a scenario below the EIA's 2022 US household electricity purchases of 10,791 kWh, since heating is modelled separately. Appliance electricity includes lights. Exclude car charging and any heating or cooling entered separately.

| Preset | Home | Thermostat | Heater | Appliance kWh/yr | Estimated space heat, kWh/yr |
| --- | --- | ---: | --- | ---: | ---: |
| Low | Flat | 18 °C | Heat pump | 1,800 | 3,200 |
| Medium | Terrace | 19.5 °C | Gas | 2,700 | 8,200 |
| High | Detached | 21 °C | Gas | 4,100 | 15,100 |

[Met Office UK climate normals](https://www.metoffice.gov.uk/research/climate/maps-and-data/location-specific-long-term-averages/gcjujye83) · [Ofgem domestic consumption review, 2023](https://www.ofgem.gov.uk/sites/default/files/2023-02/TDCV%202023_Call%20for%20Input.pdf) · [US EIA residential electricity](https://www.eia.gov/tools/faqs/faq.php?id=97&t=3)

## Goods and services

Enter your share in pounds sterling or equivalent. Average occasional purchases across the year. For example, a £480 washing machine replaced every ten years is £4/month before sharing.

| Entry | Conversion to annual kg CO₂e |
| --- | --- |
| Shopping and deliveries | Monthly GBP × 12 × 0.50. This blended estimate covers clothing, household goods, appliances and parcel deliveries. |
| Devices and telecom | Fixed estimate of 91 kg/yr. One 50 kg phone every two years gives 25 kg/yr, one 180 kg computer every five years gives 36 kg/yr, and £25/month for phone and broadband × 0.10 kg/£ gives 30 kg/yr. Defra SIC 61 is 0.0946 kg/£. |
| Leisure services | Monthly GBP × 12 × 0.25. Approximate midpoint of COICOP 9.4.1 sport and recreation (0.155) and 9.4.2 cultural services (0.337). |

The shopping factor rounds a worked basket to 0.50 kg/£. Use £35 clothes at 0.35 kg/£, £30 home goods at 0.45, £5 appliances at 1.66 and four parcel deliveries at 0.20 kg each. That gives about 34.85 kg on £70 of monthly spending. This blend is sensitive to the type of purchase. The spend factors use 2023 UK supply-chain prices and are approximate for other years and countries. Phones and computers are covered by the fixed allowance. [Defra 2023 spend workbook](https://assets.publishing.service.gov.uk/media/6a3ce5fa33bc5beefd3c4983/spend_based_emissions_multipliers_1997_to_2023.ods) · [iPhone production share](https://www.apple.com/euro/environment/pdf/b/generic/iPhone_16_and_iPhone_16_Plus_PER_June2025.pdf) · [Laptop footprints](https://www.apple.com/environment/pdf/Apple_Environmental_Progress_Report_2025.pdf) · [Royal Mail parcel emissions](https://www.royalmail.com/sustainability/environment)

| Example | Shopping / leisure, £ per month |
| --- | --- |
| Low | 20 / 5 |
| Medium | 70 / 30 |
| High | 180 / 100 |

The preset label totals editable monthly spend. The leisure factor is a spend-based supply-chain proxy. At £30/month it gives 90 kg CO₂e/yr. Using the two source factors independently gives about 56–121 kg/yr for the same spend. That illustrates sensitivity to the type of service, not a range for a particular venue. Enter journeys separately. Hotel stays are set under Travel.

## Shared services

Choosing a region allocates a share of public services (such as schools, hospitals and local government) and capital investment (such as construction and equipment). It does not ask you to estimate emissions or assess how often you use public services.

The UK factors divide Defra's 2023 central and local government consumption footprints (53.028 + 26.235 Mt CO₂e) and gross fixed capital formation (84.258 Mt) by the ONS mid-2023 population rounded to 68.3 million. For other regions, scale each UK component by the corresponding per-person PPP spending ratio. Per-person spending is PPP GDP per person × the share of GDP spent on general government consumption or gross fixed capital formation. Apply the same UK emissions per PPP spending to each region as a proxy. This misses differences in construction materials, energy and public service systems. The capital share covers the whole economy and can overlap with capital embodied in some household factors.

| Region | GDP/person, 2023 PPP dollars | Government share | Fixed investment share | Public services + capital, kg CO₂e/person/yr |
| --- | ---: | ---: | ---: | ---: |
| UK | 60,787 | 20.62% | 18.90% | 1,161 + 1,234 |
| US | 82,587 | 13.54% | 21.38% | 1,036 + 1,896 |
| China | 25,200 | 17.19% | 40.45% | 401 + 1,095 |
| High income | 64,881 | 17.30% | 22.54% | 1,039 + 1,570 |
| World | 23,382 | 16.64% | 25.98% | 360 + 652 |

The table rounds displayed inputs. Calculations use the 2023 World Bank values before rounding. [Defra final demand, Table 1](https://www.gov.uk/government/statistics/uks-carbon-footprint/carbon-footprint-for-the-uk-and-england-to-2023) · [ONS population](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/annualmidyearpopulationestimates/mid2023) · [World Bank PPP GDP per capita](https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD) · [Government consumption](https://data.worldbank.org/indicator/NE.CON.GOVT.ZS) · [Gross fixed capital formation](https://data.worldbank.org/indicator/NE.GDI.FTOT.ZS)

## AI text use

Count input and output text tokens, including context and reasoning when reported. The presets use zero, 0.15 million, 3 million and 30 million tokens per week. The slider runs logarithmically from 100 to one billion tokens with a separate zero stop.

### What a budget can buy

The £20 and £200 buttons are examples of usage. API billing and subscription limits are separate. For an API comparison, assume $1.30 per £1, 80% input and 20% output, uncached standard pricing and 52 ÷ 12 weeks per month. Convert the monthly budget to dollars per week and divide by the weighted cost per million tokens.

| Example API model | USD per million input / output tokens | £20–£40 API spend per month, million tokens/wk | £200–£400 per month, million tokens/wk |
| --- | ---: | ---: | ---: |
| Claude Haiku 4.5 | 1 / 5 | 3.3–6.7 | 33–67 |
| Claude Sonnet 5.5 | 2 / 10 | 1.7–3.3 | 17–33 |
| Claude Opus 5.5 | 4 / 20 | 0.83–1.7 | 8.3–17 |

These examples use the published rates checked in November 2026. Cheaper models, cached input and batch pricing can buy more tokens. Output-heavy or long-context workloads can cost more. The calculator uses the same physical factors for each volume preset. [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing) · [ChatGPT subscription and API usage](https://learn.chatgpt.com/docs/pricing)

### Electricity and hardware

Multiply weekly million tokens by 52. Electricity emissions equal annual million tokens × kWh per million × grid factor. Manufacturing emissions equal annual million tokens × kg CO₂e per million.

| Electricity scenario | kWh per million processed tokens | Basis |
| --- | ---: | --- |
| Efficient | 0.1 | Illustrative efficient serving. ARK measured 21–76 Wh/million generated tokens on two deployments under load, with a GPU-only boundary. |
| Typical | 0.4 | Illustrative 0.4 Wh for 1,000 processed tokens. A production-oriented study estimates 0.31 Wh for a median optimised frontier query. The 1,000-token denominator is an assumption. |
| Heavy | 2 | Illustrative high-compute serving. The same study reports 20.9 Wh for a DeepSeek-R1 benchmark with an average of 11,287 output tokens, about 1.85 kWh/million output tokens. |

The measurements have different boundaries and token mixes. The presets span scenarios and should not be read as a measured range for every model. Input prefill, cached context, output, batching, hardware utilisation and cooling overhead all affect the rate. [ARK measurements](https://ark-labs.cloud/developers/research/energy-per-token/) · [Oviedo et al., Joule 2026](https://doi.org/10.1016/j.joule.2026.102430)

NVIDIA estimates 1,312 kg CO₂e to produce an eight-GPU HGX H100 baseboard. The baseline scenario assumes 2,000 kg for a whole server, three years of service, 35% active time and 2,800 processed tokens/s while active. Dividing by about 92.7 billion lifetime tokens gives 0.022 kg/million, rounded to **0.02**. The **0.2 kg/million** scenario assumes about one-tenth the lifetime token throughput. These are allocations, rather than measured rates per model. The manufacturing term covers server production. The two AI terms omit model training, data-centre construction, networking and user devices. [NVIDIA HGX H100 product carbon footprint](https://images.nvidia.com/aem-dam/Solutions/documents/HGX-H100-PCF-Summary.pdf) · [Mistral lifecycle study](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai/)

At 3 million tokens/week, the typical electricity rate, baseline hardware rate and world grid give about 32 kg CO₂e per year. At 30 million tokens/week the same assumptions give about 317 kg.

## Country comparisons

Each reference runs the same activity model with the explicit inputs in [model.js](model.js). Every category and subcategory is calculated from those inputs. These profiles are illustrations, with several inputs anchored to statistics and others chosen to show plausible activity differences. They are not observed national footprints or representative surveys. High-income countries are the proxy for developed economies.

| Reference | Meat and fish portions/week | Vehicle km per person after sharing | Household appliance electricity kWh/yr | Model result, t CO₂e/person/yr |
| --- | ---: | ---: | ---: | ---: |
| UK | 7 | 5,800 | 2,700 | 9.0 |
| US | 10.3 | 12,770 | 9,500 | 14.6 |
| China | 6.2 | 2,470 | 3,200 | 6.2 |
| High income | 8 | 7,400 | 5,100 | 10.5 |
| World | 3.8 | 2,180 | 2,800 | 4.7 |

For diet, the UK, China and world examples use about 65% of FAOSTAT meat supply by weight (84.44, 74.03 and 45.12 kg/person/year) as a rough portion-weight proxy. The 65% is an assumption to allow for non-edible material, preparation and waste, which vary by food and location. US and high-income amounts and beef shares are illustrative. GB's roughly 412 billion car-kilometres in 2024 and FHWA's US light-duty travel figures anchor the order of magnitude of the road scenarios. US electricity uses the EIA anchor described under Home. Remaining distances, travel mix, climate endpoints, household size, non-US/UK electricity, budgets and AI use are illustrative. For example, the China case uses a flat and a China grid, with more bus and rail travel and less driving than the US case. Model totals omit activity outside the inputs and can differ from official consumption or territorial inventories. [FAOSTAT food balances](https://www.fao.org/faostat/en/#data/FBS) · [FAOSTAT meat supply data view](https://ourworldindata.org/grapher/meat-supply-per-person?tab=table) · [GB road traffic](https://www.gov.uk/government/statistics/road-traffic-estimates-in-great-britain-2024) · [US FHWA travel](https://www.fhwa.dot.gov/policyinformation/statistics/2023/vm1.cfm) · [Defra UK consumption footprint](https://www.gov.uk/government/statistics/uks-carbon-footprint/carbon-footprint-for-the-uk-and-england-to-2023)

## Donations and saved profiles

The pie slices and bars show gross emissions. When a donation is entered, the pie centre shows net emissions with gross underneath. Estimated funded tonnes are annual donation ÷ assumed pounds per additional tonne. Net is gross minus those funded tonnes, so it can be negative. The gross offset budget is gross × cost per tonne. The default £200/t is a published biochar example. A donation's actual effect depends on what it finances, additionality, delivery and permanence. A tonne of future removal and a tonne emitted today have different warming histories. [Restord price example](https://www.restord.earth/carbon-removal)

Older saved profiles retain their recorded activities where the units still make sense. Old token counts convert from thousands to millions, and Wh per thousand converts numerically to kWh per million. Older prompt counts use the previous assumption of 1,000 tokens per prompt. The new purchase, shared-service, heating and hardware estimates use the new defaults where the earlier inputs contain no corresponding activity data. For an older electric-heating profile, the electricity reading already covered heat, so migration selects **No separate heating**.

The migration from mile-based profiles converts driving distances using 1.609344 km per mile. It adds clothing, home goods and appliance budgets to populate Shopping. The blended factor now includes deliveries, so older parcel counts no longer change the estimate. Hotel nights and location are retained under Travel.

The migration to weekly transit minutes preserves prior annual bus and rail distance over 48 weeks. Car commuting uses 48 weeks for all profiles. Fixed devices and telecom replace older personal entries. The previous AI rate presets remain selectable. Older custom rates outside those choices use the defaults. Saved token volumes are retained.

Profiles saved before the calorie controls use 2,000 kcal/day until edited. Older meat and dairy/egg weights convert at 150 g per portion to retain the approximate amounts. The old weight for other food is replaced by the calorie remainder. Other car distance is divided by the old occupancy to keep the personal share, and all commutes now assume a solo driver.
