# Model assumptions and conversion factors

The calculator estimates annual tonnes of CO₂ equivalent (t CO₂e) per person. It combines activity estimates with greenhouse-gas factors, generally using 100-year warming potentials. The flight factors also include an indicative adjustment for warming at altitude. The model divides kg CO₂e by 1,000 to display tonnes. It uses 52 weeks, 12 months and 365 days per year. Figures in examples below are estimates.

## Food

Multiply weekly grams by 52 ÷ 1,000 to get annual kg of food. Multiply that mass by the applicable factor. The beef percentage splits the entered meat weight. Include food eaten away from home.

| Food | kg CO₂e per kg of food | Basis |
| --- | ---: | --- |
| Beef | 60 | Illustrative mix of roughly 40% beef-herd and 60% dairy-herd beef. The study's global means are about 99 and 33 respectively. |
| Other meat and fish | 10 | Rounded proxy near poultry at 9.9. Pork is about 12.3. Lamb and seafood vary widely. |
| Dairy and eggs | 3 | Milk-heavy mix. Milk is about 3.2, eggs about 4.7 and cheese about 24, so cheese-heavy diets can exceed this estimate. |
| Other food and drink | 2 | Illustrative mix of grains, produce, legumes, snacks and drinks. There is no single factor for this basket. |

The meat presets are 0, 250, 600 and 1,200 g per week. At the 600 g preset with 20% beef, meat contributes about 624 kg CO₂e per year. The default also includes 1.8 kg of dairy and eggs and 8.5 kg of other food and drink each week. These are example quantities. [Poore & Nemecek (2018)](https://doi.org/10.1126/science.aaq0216) · [Food factors by kilogram](https://ourworldindata.org/grapher/ghg-per-kg-poore)

## Travel

For a return flight, multiply the one-way airport distance by two, by the annual trip count and by the economy factor. The factors below combine the 2026 DESNZ workbook's **With RF** rows for business travel by air and the matching well-to-tank rows for fuel supply.

| Flight | In flight, including altitude | Fuel supply | Total kg CO₂e/passenger-km |
| --- | ---: | ---: | ---: |
| Short haul, economy | 0.12576 | 0.02249 | 0.14825 |
| Long haul, economy | 0.11704 | 0.02461 | 0.14165 |

DESNZ applies the indicative 1.7 radiative-forcing multiplier to direct flight CO₂. This represents non-CO₂ warming effects such as contrails and atmospheric chemistry. It does not multiply methane, nitrous oxide or fuel supply emissions. DESNZ already builds an 8% route uplift into the workbook to account for indirect paths and delays. Enter approximate airport-to-airport distances with no further uplift. The default 1,500 km short-haul return is about 0.445 t CO₂e. A 6,500 km each-way long-haul return is about 1.84 t. These UK route averages stand in for flights elsewhere. Cabin class, aircraft and actual contrail conditions can change the result. [DESNZ 2026 flat file](https://assets.publishing.service.gov.uk/media/6a6c9748862aaf18d9c62ac9/ghg-conversion-factors-2026-flat-format-revised.xlsx) · [DESNZ methodology, §§8.37–8.43](https://assets.publishing.service.gov.uk/media/6a2940543b15d05a7ce3202e/2026-GHG-conversion-factors-methodology-report.pdf)

Multiply your share of hotel room-nights by 10.4 (UK), 16.1 (US) or 53.5 (China) kg CO₂e per room-night. Seven nights in a room shared by two people counts as 3.5 each. [DESNZ hotel factors](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2026)

## Ground travel

Car distance is round-trip commute kilometres × days per week × weeks, plus other kilometres driven or ridden. Divide vehicle emissions by average occupancy.

| Ground travel | Factor | Basis |
| --- | ---: | --- |
| Petrol or diesel car | 0.21081 kg/vehicle-km | Mean of DESNZ average petrol (0.16152 + 0.04599 upstream) and diesel (0.17265 + 0.04146). |
| Hybrid | 0.16276 kg/vehicle-km | DESNZ average hybrid (0.12961 + 0.03315 upstream). |
| Electric car | 0.205 kWh/vehicle-km × selected grid factor | DESNZ average battery EV electricity emissions, 0.02686 kg/km ÷ 0.13096 kg/kWh. |
| Car manufacture | 0.040 kg/vehicle-km | Illustrative 8 t spread over 200,000 km. The same allowance covers all car types here. |
| Bus | 0.128 kg/passenger-km | DESNZ average local bus, 0.10151 + 0.02649 upstream. |
| Train | 0.03989 kg/passenger-km | DESNZ national rail, 0.03092 + 0.00897 upstream. |

The public transport presets use an estimated 24 km/h for a 20-minute bus ride and 80 km/h for an hour on the train. The default is 48 travel weeks. Electricity factors represent grid generation and omit a separate charge for network losses. Car manufacture varies with vehicle size, battery and life. [DESNZ 2026 flat file](https://assets.publishing.service.gov.uk/media/6a6c9748862aaf18d9c62ac9/ghg-conversion-factors-2026-flat-format-revised.xlsx) · [ICCT passenger-car life-cycle analysis](https://theicct.org/publication/electric-cars-life-cycle-analysis-emissions-europe-jul25/)

## Home energy

**Space heating.** Enter your thermostat setting and the mean outdoor temperatures in your coldest and warmest months. The model interpolates between those endpoints with a cosine over a year. Each day contributes the positive difference between outdoor temperature and the heating balance temperature, in the direction that calls for heat:

```text
balance temperature = thermostat − 4 °C
heating degree days = sum(max(0, balance temperature − daily outdoor mean))
useful heat (kWh/yr) = heating degree days × 24 × heat-loss coefficient (W/K) ÷ 1,000
winter-month power (kW) = max(0, balance temperature − coldest-month mean) × W/K ÷ 1,000
```

The 4 °C adjustment is a simplifying estimate for internal and solar gains and intermittent heating. A 19.5 °C thermostat gives a 15.5 °C balance point, close to the study's fitted median. The flat, terrace, semi and detached coefficients are 80, 160, 180 and 235 W/K. They approximate 90% of measured median heating input slopes of 90, 177, 201 and 262 W/K, rounded to useful heat before applying the chosen heater efficiency. These are dwelling-type proxies. Insulation, exposed walls, ventilation and actual heating hours can dominate. The winter power estimate describes a typical cold month and is unsuitable for sizing a heater for extreme weather. [Hanmer et al., British smart-meter heat signatures, Table 8](https://doi.org/10.5334/bc.670)

**Hot water.** The model adds 600 kWh of useful heat per person per year, an illustrative 40 litres/day heated by 35 °C (about 594 kWh/yr). The selected heater serves both space heat and hot water. Choose **No separate heating** if you are entering a meter reading that already includes them, or if they are outside the scope of your estimate.

**Fuel and equipment.** Multiply useful heat by kg CO₂e per purchased kWh ÷ efficiency, or by the electricity factor ÷ seasonal COP. Divide space heating and appliance electricity by the number of occupants. Hot water is already per person.

| Heating system | Purchased-energy factor | Efficiency or seasonal COP |
| --- | --- | ---: |
| Gas boiler | 0.21252 kg/kWh gross CV (0.18231 direct + 0.03021 upstream) | 0.90 |
| Oil boiler | 0.29830 kg/kWh gross CV (0.24677 direct + 0.05153 upstream) | 0.85 |
| Electric resistance | Selected grid factor | 1 |
| Heat pump | Selected grid factor | 2.8 |

The boiler efficiencies are model assumptions. The heat pump uses the median SPFH4 from the UK Electrification of Heat demonstration, which includes hot water. The grid preset factors in kg CO₂e/kWh are UK 0.131 (DESNZ 2026 publication, rounded from 0.13096), US 0.384, China 0.525, EU 0.210 and world 0.458 (Ember 2025 generation, reported in 2026). Local generation mixes and accounting boundaries vary. [DESNZ 2026 flat file](https://assets.publishing.service.gov.uk/media/6a6c9748862aaf18d9c62ac9/ghg-conversion-factors-2026-flat-format-revised.xlsx) · [UK heat pump evidence, technical annex](https://assets.publishing.service.gov.uk/media/65af94848bbe95000e5eb27a/shdfd-whr-outcome-and-economic-evaluation-technical-annex.pdf) · [Ember Global Electricity Review 2026](https://ember-energy.org/latest-insights/global-electricity-review-2026/major-countries-and-regions/)

All three home presets use two occupants, UK grid electricity and cold/warm monthly means of 4 °C and 15.3 °C. The outdoor means approximate the midpoints of the Met Office's UK January and July normal high and low temperatures for 1991–2020. The low/medium/high appliance values use representative Ofgem Profile Class 1 values. The 9,500 kWh heavy-use option is a scenario below the EIA's 2022 US household electricity purchases of 10,791 kWh, since heating is modelled separately. Appliance electricity includes lights and cooling and excludes car charging.

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
| Phones and computers | (50 kg per phone × phones bought in five years + 180 kg per computer × computers bought in five years) ÷ 5. Rounded production proxies. |
| Phone and broadband | Monthly GBP × 12 × 0.10. Defra SIC 61 is 0.0946 kg/£. |
| Leisure services | Monthly GBP × 12 × 0.25. Approximate midpoint of COICOP 9.4.1 sport and recreation (0.155) and 9.4.2 cultural services (0.337). |

The shopping factor rounds a worked basket to 0.50 kg/£. Use £35 clothes at 0.35 kg/£, £30 home goods at 0.45, £5 appliances at 1.66 and four parcel deliveries at 0.20 kg each. That gives about 34.85 kg on £70 of monthly spending. This blend is sensitive to the type of purchase. The spend factors use 2023 UK supply-chain prices and are approximate for other years and countries. Count phones and computers separately. [Defra 2023 spend workbook](https://assets.publishing.service.gov.uk/media/6a3ce5fa33bc5beefd3c4983/spend_based_emissions_multipliers_1997_to_2023.ods) · [iPhone production share](https://www.apple.com/euro/environment/pdf/b/generic/iPhone_16_and_iPhone_16_Plus_PER_June2025.pdf) · [Laptop footprints](https://www.apple.com/environment/pdf/Apple_Environmental_Progress_Report_2025.pdf) · [Royal Mail parcel emissions](https://www.royalmail.com/sustainability/environment)

| Example | Shopping / telecom / leisure, £ per month | Phones / computers in five years |
| --- | --- | --- |
| Low | 20 / 15 / 5 | 1 / 0 |
| Medium | 70 / 25 / 30 | 1 / 1 |
| High | 180 / 50 / 100 | 2 / 2 |

The preset label totals monthly spend. Hotel stays are set under Travel.

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

Count processed text input and output, including repeated context and reasoning tokens when available. The example plan volumes are zero, 30,000, 150,000 and 700,000 tokens per week. They are workload scenarios and do not encode a provider's allocation. The slider has a zero stop and logarithmic stops from 100 to 100 million weekly tokens. Type a value in millions to specify an amount between stops.

Multiply weekly million tokens by 52. Then multiply annual million tokens by both factors separately:

- **Electricity.** Default 0.4 kWh/million processed tokens, multiplied by a data-centre grid factor. As an order-of-magnitude example, 0.4 Wh for 1,000 processed tokens gives 0.4 kWh/million. A production-oriented study estimates a median 0.31 Wh per optimised frontier-scale query, and Google's May 2025 serving measurement reports 0.24 Wh for its median text query. The 1,000-token request is our assumed denominator, since neither headline per-query number establishes a general per-token rate. The 0.1 and 2 kWh/million buttons explore different serving efficiencies. Input prefill, cached context, output generation and reasoning have different costs. [Oviedo et al., Joule 2026](https://doi.org/10.1016/j.joule.2026.102430) · [Elsworth et al., 2025](https://arxiv.org/abs/2508.15734)
- **Server manufacture.** Default 0.02 kg CO₂e/million tokens. NVIDIA estimates 1,312 kg to produce an eight-GPU HGX H100 baseboard. As a scenario, use 2,000 kg for a whole server, three years of service, 35% active time and 2,800 processed tokens/s while active. Dividing 2,000 kg by about 92.7 billion tokens gives 0.022 kg/million. Those operating assumptions are illustrative. The estimate excludes training, data-centre construction and the user's device. A provider's total lifecycle result can be higher. [NVIDIA HGX H100 product carbon footprint](https://images.nvidia.com/aem-dam/Solutions/documents/HGX-H100-PCF-Summary.pdf) · [Mistral lifecycle study](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai/)

At 150,000 tokens/week, 0.4 kWh/million and the 0.458 kg/kWh world grid, the model estimates about 1.43 kg from electricity and 0.16 kg from hardware per year.

## Country comparisons

Each reference runs the same activity model with the explicit inputs in [model.js](model.js). Every category and subcategory is calculated from those inputs. These profiles are illustrations, with several inputs anchored to statistics and others chosen to show plausible activity differences. They are not observed national footprints or representative surveys. High-income countries are the proxy for developed economies.

| Reference | Meat g/week | Vehicle km per person after sharing | Household appliance electricity kWh/yr | Model result, t CO₂e/person/yr |
| --- | ---: | ---: | ---: | ---: |
| UK | 1,050 | 5,800 | 2,700 | 9.1 |
| US | 1,550 | 12,770 | 9,500 | 14.8 |
| China | 925 | 2,470 | 3,200 | 6.3 |
| High income | 1,200 | 7,400 | 5,100 | 10.6 |
| World | 565 | 2,180 | 2,800 | 4.5 |

For diet, the UK, China and world examples use about 65% of FAOSTAT meat supply by weight (84.44, 74.03 and 45.12 kg/person/year) as a rough portion-weight proxy. The 65% is an assumption to allow for non-edible material, preparation and waste, which vary by food and location. US and high-income amounts and beef shares are illustrative. GB's roughly 412 billion car-kilometres in 2024 and FHWA's US light-duty travel figures anchor the order of magnitude of the road scenarios. US electricity uses the EIA anchor described under Home. Remaining distances, travel mix, climate endpoints, household size, non-US/UK electricity, budgets and AI use are illustrative. For example, the China case uses a flat and a China grid, with more bus and rail travel and less driving than the US case. Model totals omit activity outside the inputs and can differ from official consumption or territorial inventories. [FAOSTAT food balances](https://www.fao.org/faostat/en/#data/FBS) · [FAOSTAT meat supply data view](https://ourworldindata.org/grapher/meat-supply-per-person?tab=table) · [GB road traffic](https://www.gov.uk/government/statistics/road-traffic-estimates-in-great-britain-2024) · [US FHWA travel](https://www.fhwa.dot.gov/policyinformation/statistics/2023/vm1.cfm) · [Defra UK consumption footprint](https://www.gov.uk/government/statistics/uks-carbon-footprint/carbon-footprint-for-the-uk-and-england-to-2023)

## Donations and saved profiles

The pie slices and headline number show gross emissions. Estimated funded tonnes are annual donation ÷ assumed pounds per additional tonne. Net is gross minus those funded tonnes, so it can be negative. The gross offset budget is gross × cost per tonne. The default £200/t is a published biochar example. A donation's actual effect depends on what it finances, additionality, delivery and permanence. A tonne of future removal and a tonne emitted today have different warming histories. [Restord price example](https://www.restord.earth/carbon-removal)

Older saved profiles retain their recorded activities where the units still make sense. Old token counts convert from thousands to millions, and Wh per thousand converts numerically to kWh per million. Older prompt counts use the previous assumption of 1,000 tokens per prompt. The new purchase, shared-service, heating and hardware estimates use the new defaults where the earlier inputs contain no corresponding activity data. For an older electric-heating profile, the electricity reading already covered heat, so migration selects **No separate heating**.

The current migration converts older driving distances to kilometres using 1.609344 km per mile. It adds clothing, home goods and appliance budgets to populate Shopping. The blended factor now includes deliveries, so older parcel counts no longer change the estimate. Hotel nights and location are retained under Travel.
