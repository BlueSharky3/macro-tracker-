const foods = [
  {
    name: "Chicken breast",
    aliases: ["chicken", "grilled chicken"],
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "74 mg",
      Potassium: "256 mg",
      Iron: "1.0 mg",
      Calcium: "15 mg",
    },
    notes: "Lean cooked chicken breast. Values vary with cooking method, skin, and seasoning.",
  },
  {
    name: "Cooked white rice",
    aliases: ["rice", "white rice"],
    calories: 130,
    protein: 2.7,
    carbs: 28.2,
    fat: 0.3,
    nutrients: {
      Fiber: "0.4 g",
      Sugar: "0.1 g",
      Sodium: "1 mg",
      Potassium: "35 mg",
      Iron: "1.2 mg",
      Calcium: "10 mg",
    },
    notes: "Cooked plain white rice. Dry rice weighs much less than cooked rice for the same calories.",
  },
  {
    name: "Cooked brown rice",
    aliases: ["brown rice"],
    calories: 123,
    protein: 2.7,
    carbs: 25.6,
    fat: 1,
    nutrients: {
      Fiber: "1.8 g",
      Sugar: "0.2 g",
      Sodium: "4 mg",
      Potassium: "86 mg",
      Magnesium: "39 mg",
      Iron: "0.6 mg",
    },
    notes: "Cooked brown rice has more fiber and minerals than white rice.",
  },
  {
    name: "Whole egg",
    aliases: ["egg", "eggs"],
    calories: 143,
    protein: 12.6,
    carbs: 0.7,
    fat: 9.5,
    nutrients: {
      Fiber: 0,
      Sugar: "0.4 g",
      Sodium: "142 mg",
      Potassium: "138 mg",
      Choline: "294 mg",
      VitaminB12: "0.9 mcg",
    },
    notes: "Raw or cooked whole egg, averaged by weight.",
  },
  {
    name: "Salmon",
    aliases: ["fish", "atlantic salmon"],
    calories: 208,
    protein: 20.4,
    carbs: 0,
    fat: 13.4,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "59 mg",
      Potassium: "363 mg",
      VitaminD: "11 mcg",
      Omega3: "2.3 g",
    },
    notes: "Cooked Atlantic salmon estimate. Fat content changes by species and preparation.",
  },
  {
    name: "Banana",
    aliases: ["bananas"],
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    nutrients: {
      Fiber: "2.6 g",
      Sugar: "12.2 g",
      Sodium: "1 mg",
      Potassium: "358 mg",
      VitaminC: "8.7 mg",
      Magnesium: "27 mg",
    },
    notes: "Fresh banana. Ripeness changes sugar and starch balance.",
  },
  {
    name: "Apple",
    aliases: ["apples"],
    calories: 52,
    protein: 0.3,
    carbs: 13.8,
    fat: 0.2,
    nutrients: {
      Fiber: "2.4 g",
      Sugar: "10.4 g",
      Sodium: "1 mg",
      Potassium: "107 mg",
      VitaminC: "4.6 mg",
      Calcium: "6 mg",
    },
    notes: "Fresh apple with skin.",
  },
  {
    name: "Avocado",
    aliases: ["avocados"],
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7,
    nutrients: {
      Fiber: "6.7 g",
      Sugar: "0.7 g",
      Sodium: "7 mg",
      Potassium: "485 mg",
      VitaminK: "21 mcg",
      Folate: "81 mcg",
    },
    notes: "Avocado is mostly unsaturated fat with high fiber for a fruit.",
  },
  {
    name: "Olive oil",
    aliases: ["oil", "extra virgin olive oil"],
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: 0,
      VitaminE: "14.4 mg",
      VitaminK: "60 mcg",
      SaturatedFat: "13.8 g",
    },
    notes: "Pure oil. One tablespoon is roughly 13.5 grams.",
  },
  {
    name: "Greek yogurt",
    aliases: ["yogurt", "plain greek yogurt"],
    calories: 97,
    protein: 9,
    carbs: 3.9,
    fat: 5,
    nutrients: {
      Fiber: 0,
      Sugar: "3.6 g",
      Sodium: "36 mg",
      Potassium: "141 mg",
      Calcium: "100 mg",
      VitaminB12: "0.8 mcg",
    },
    notes: "Plain whole-milk Greek yogurt estimate. Nonfat versions have less fat and fewer calories.",
  },
  {
    name: "Oats",
    aliases: ["oatmeal", "rolled oats"],
    calories: 389,
    protein: 16.9,
    carbs: 66.3,
    fat: 6.9,
    nutrients: {
      Fiber: "10.6 g",
      Sugar: "0.9 g",
      Sodium: "2 mg",
      Potassium: "429 mg",
      Magnesium: "177 mg",
      Iron: "4.7 mg",
    },
    notes: "Dry rolled oats. Cooked oatmeal has more water, so calories per 100g are lower.",
  },
  {
    name: "Broccoli",
    aliases: ["cooked broccoli"],
    calories: 35,
    protein: 2.4,
    carbs: 7.2,
    fat: 0.4,
    nutrients: {
      Fiber: "3.3 g",
      Sugar: "1.4 g",
      Sodium: "41 mg",
      Potassium: "293 mg",
      VitaminC: "64.9 mg",
      VitaminK: "141 mcg",
    },
    notes: "Cooked broccoli estimate. Raw broccoli is slightly different by weight.",
  },
  {
    name: "Potato",
    aliases: ["baked potato", "potatoes"],
    calories: 93,
    protein: 2.5,
    carbs: 21.2,
    fat: 0.1,
    nutrients: {
      Fiber: "2.2 g",
      Sugar: "1.2 g",
      Sodium: "10 mg",
      Potassium: "535 mg",
      VitaminC: "9.6 mg",
      VitaminB6: "0.3 mg",
    },
    notes: "Baked potato flesh and skin, without butter or toppings.",
  },
  {
    name: "Beef",
    aliases: ["steak", "ground beef"],
    calories: 250,
    protein: 26,
    carbs: 0,
    fat: 15,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "72 mg",
      Potassium: "318 mg",
      Iron: "2.6 mg",
      Zinc: "6.3 mg",
    },
    notes: "Average cooked beef estimate. Lean cuts can be much lower in fat.",
  },
  {
    name: "Almonds",
    aliases: ["almond"],
    calories: 579,
    protein: 21.2,
    carbs: 21.6,
    fat: 49.9,
    nutrients: {
      Fiber: "12.5 g",
      Sugar: "4.4 g",
      Sodium: "1 mg",
      Potassium: "733 mg",
      VitaminE: "25.6 mg",
      Magnesium: "270 mg",
    },
    notes: "Raw almonds. Roasted or salted versions vary.",
  },
];

const form = document.querySelector("#nutrition-form");
const foodInput = document.querySelector("#food-input");
const weightInput = document.querySelector("#weight-input");
const datalist = document.querySelector("#food-options");
const quickPicks = document.querySelector("#quick-picks");
const emptyState = document.querySelector("#empty-state");
const results = document.querySelector("#results");
const resultFood = document.querySelector("#result-food");
const resultSummary = document.querySelector("#result-summary");
const matchLabel = document.querySelector("#match-label");
const macroGrid = document.querySelector("#macro-grid");
const nutrientList = document.querySelector("#nutrient-list");
const foodNotes = document.querySelector("#food-notes");
const addToDayButton = document.querySelector("#add-to-day");
const dailyTotalGrid = document.querySelector("#daily-total-grid");
const resetDayButton = document.querySelector("#reset-day");
const logEmpty = document.querySelector("#log-empty");
const foodLogList = document.querySelector("#food-log-list");
const clearHistoryButton = document.querySelector("#clear-history");
const historyEmpty = document.querySelector("#history-empty");
const historyList = document.querySelector("#history-list");
const customFoodForm = document.querySelector("#custom-food-form");
const customNameInput = document.querySelector("#custom-name");
const customCaloriesInput = document.querySelector("#custom-calories");
const customProteinInput = document.querySelector("#custom-protein");
const customCarbsInput = document.querySelector("#custom-carbs");
const customFatInput = document.querySelector("#custom-fat");
const customEmpty = document.querySelector("#custom-empty");
const customFoodList = document.querySelector("#custom-food-list");
const storageKey = "nutritionDailyLog";
const customFoodsKey = "nutritionCustomFoods";
const historyKey = "nutritionDailyHistory";
let selectedEntry = null;

const loadArray = (key) => {
  try {
    const savedLog = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(savedLog) ? savedLog : [];
  } catch {
    return [];
  }
};

const toNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
};

const sanitizeFood = (food) => ({
  id: food.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: String(food.name || "Custom food"),
  aliases: Array.isArray(food.aliases) ? food.aliases : [],
  calories: toNumber(food.calories),
  protein: toNumber(food.protein),
  carbs: toNumber(food.carbs),
  fat: toNumber(food.fat),
  custom: true,
  nutrients: food.nutrients && typeof food.nutrients === "object" ? food.nutrients : {
    Fiber: "0 g",
    Sugar: "0 g",
    Sodium: "0 mg",
  },
  notes: food.notes || "Custom food using your entered macro values per 100g.",
});

const sanitizeLogEntry = (item) => ({
  id: item.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  foodName: String(item.foodName || "Food"),
  grams: toNumber(item.grams),
  calories: toNumber(item.calories),
  protein: toNumber(item.protein),
  carbs: toNumber(item.carbs),
  fat: toNumber(item.fat),
});

const sanitizeHistoryEntry = (day) => {
  const foodsLogged = Array.isArray(day.foods) ? day.foods.map(sanitizeLogEntry) : [];
  const totals = day.totals && typeof day.totals === "object" ? day.totals : {};

  return {
    id: day.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    dateLabel: String(day.dateLabel || "Saved day"),
    savedAt: day.savedAt || "",
    foodCount: toNumber(day.foodCount || foodsLogged.length),
    totals: {
      calories: toNumber(totals.calories),
      protein: toNumber(totals.protein),
      carbs: toNumber(totals.carbs),
      fat: toNumber(totals.fat),
    },
    foods: foodsLogged,
  };
};

let dailyLog = loadArray(storageKey).map(sanitizeLogEntry);
let customFoods = loadArray(customFoodsKey).map(sanitizeFood);
let dailyHistory = loadArray(historyKey).map(sanitizeHistoryEntry);

const formatNumber = (value) => {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[character]));

const scaleNutrient = (value, multiplier) => {
  if (typeof value === "number") {
    return formatNumber(value * multiplier);
  }

  const match = String(value).match(/^([\d.]+)\s*(.+)$/);
  if (!match) {
    return value;
  }

  return `${formatNumber(Number(match[1]) * multiplier)} ${match[2]}`;
};

const normalize = (text) => text.trim().toLowerCase();

const getAllFoods = () => [...foods, ...customFoods];

const getScaledMacros = (food, grams) => {
  const multiplier = grams / 100;
  return {
    calories: food.calories * multiplier,
    protein: food.protein * multiplier,
    carbs: food.carbs * multiplier,
    fat: food.fat * multiplier,
  };
};

const findFood = (query) => {
  const normalized = normalize(query);
  return getAllFoods().find((food) => {
    const aliases = Array.isArray(food.aliases) ? food.aliases : [];
    const names = [food.name, ...aliases].map(normalize);
    return names.includes(normalized);
  }) || getAllFoods().find((food) => {
    const aliases = Array.isArray(food.aliases) ? food.aliases : [];
    const names = [food.name, ...aliases].map(normalize);
    return names.some((name) => name.includes(normalized) || normalized.includes(name));
  });
};

const renderOptions = () => {
  datalist.innerHTML = getAllFoods().map((food) => `<option value="${escapeHTML(food.name)}"></option>`).join("");
  quickPicks.innerHTML = getAllFoods()
    .slice(0, 8)
    .map((food) => `<button type="button" data-food="${escapeHTML(food.name)}">${escapeHTML(food.name)}</button>`)
    .join("");
};

const renderResults = (food, grams) => {
  const multiplier = grams / 100;
  const scaled = getScaledMacros(food, grams);
  const macros = [
    ["Calories", scaled.calories, "kcal", "calories"],
    ["Protein", scaled.protein, "g", "protein"],
    ["Carbs", scaled.carbs, "g", "carbs"],
    ["Oil / fat", scaled.fat, "g", "fat"],
  ];

  selectedEntry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    foodName: food.name,
    grams,
    ...scaled,
  };
  emptyState.classList.add("hidden");
  results.classList.remove("hidden");
  resultFood.textContent = `${food.name} - ${grams} g`;
  resultSummary.textContent = `${formatNumber(scaled.calories)} kcal`;
  matchLabel.textContent = food.custom ? "Custom" : "Estimate";
  addToDayButton.disabled = false;

  macroGrid.innerHTML = macros
    .map(
      ([label, value, unit, className]) => `
        <article class="macro-card ${className}">
          <span>${label}</span>
          <strong>${formatNumber(value)} ${unit}</strong>
          <small>Based on ${formatNumber(food[label === "Oil / fat" ? "fat" : label.toLowerCase()] || food.calories)} per 100g</small>
        </article>
      `,
    )
    .join("");

  nutrientList.innerHTML = Object.entries(food.nutrients || {})
    .map(([label, value]) => `<li><span>${label}</span><strong>${scaleNutrient(value, multiplier)}</strong></li>`)
    .join("");

  foodNotes.textContent = food.notes;
};

const renderNotFound = (query) => {
  selectedEntry = null;
  emptyState.classList.add("hidden");
  results.classList.remove("hidden");
  resultFood.textContent = query;
  resultSummary.textContent = "Food not found";
  matchLabel.textContent = "Try another";
  macroGrid.innerHTML = "";
  nutrientList.innerHTML = "";
  addToDayButton.disabled = true;
  foodNotes.textContent =
    "This offline demo includes common foods only. Try a specific match like chicken breast, rice, banana, avocado, olive oil, oats, egg, salmon, broccoli, potato, beef, or almonds.";
};

const saveDailyLog = () => {
  localStorage.setItem(storageKey, JSON.stringify(dailyLog));
};

const saveCustomFoods = () => {
  localStorage.setItem(customFoodsKey, JSON.stringify(customFoods));
};

const saveDailyHistory = () => {
  localStorage.setItem(historyKey, JSON.stringify(dailyHistory));
};

const getDailyTotals = () => dailyLog.reduce(
  (totals, item) => ({
    calories: totals.calories + item.calories,
    protein: totals.protein + item.protein,
    carbs: totals.carbs + item.carbs,
    fat: totals.fat + item.fat,
  }),
  { calories: 0, protein: 0, carbs: 0, fat: 0 },
);

const getTodayLabel = () => new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
}).format(new Date());

const renderDailyTotals = () => {
  const totals = getDailyTotals();
  const totalCards = [
    ["Calories", totals.calories, "kcal", "calories"],
    ["Protein", totals.protein, "g", "protein"],
    ["Carbs", totals.carbs, "g", "carbs"],
    ["Oil / fat", totals.fat, "g", "fat"],
  ];

  dailyTotalGrid.innerHTML = totalCards
    .map(
      ([label, value, unit, className]) => `
        <article class="macro-card ${className}">
          <span>${label}</span>
          <strong>${formatNumber(value)} ${unit}</strong>
          <small>Daily total</small>
        </article>
      `,
    )
    .join("");

  logEmpty.classList.toggle("hidden", dailyLog.length > 0);
  foodLogList.innerHTML = dailyLog
    .map(
      (item) => `
        <li class="food-log-item">
          <div class="food-log-main">
            <strong>${escapeHTML(item.foodName)}</strong>
            <span>${formatNumber(item.grams)} g - ${formatNumber(item.calories)} kcal, ${formatNumber(item.protein)}g protein, ${formatNumber(item.carbs)}g carbs, ${formatNumber(item.fat)}g fat</span>
          </div>
          <div class="log-actions" aria-label="Adjust ${escapeHTML(item.foodName)}">
            <button class="icon-button" type="button" data-action="subtract" data-id="${item.id}" title="Subtract this food">-</button>
            <button class="icon-button" type="button" data-action="add" data-id="${item.id}" title="Add another serving">+</button>
          </div>
        </li>
      `,
    )
    .join("");
};

const renderDailyHistory = () => {
  historyEmpty.classList.toggle("hidden", dailyHistory.length > 0);
  historyList.innerHTML = dailyHistory
    .map(
      (day) => `
        <li class="history-item">
          <div class="history-date">
            <strong>${escapeHTML(day.dateLabel)}</strong>
            <span>${day.foodCount} food${day.foodCount === 1 ? "" : "s"} logged</span>
          </div>
          <div class="history-macros">
            <span>Calories<strong>${formatNumber(day.totals.calories)} kcal</strong></span>
            <span>Protein<strong>${formatNumber(day.totals.protein)} g</strong></span>
            <span>Carbs<strong>${formatNumber(day.totals.carbs)} g</strong></span>
            <span>Oil / fat<strong>${formatNumber(day.totals.fat)} g</strong></span>
          </div>
        </li>
      `,
    )
    .join("");
};

const resetDailyLog = () => {
  if (dailyLog.length > 0) {
    dailyHistory = [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        dateLabel: getTodayLabel(),
        savedAt: new Date().toISOString(),
        foodCount: dailyLog.length,
        totals: getDailyTotals(),
        foods: dailyLog,
      },
      ...dailyHistory,
    ];
    saveDailyHistory();
  }

  dailyLog = [];
  saveDailyLog();
  renderDailyTotals();
  renderDailyHistory();
};

const renderCustomFoods = () => {
  customEmpty.classList.toggle("hidden", customFoods.length > 0);
  customFoodList.innerHTML = customFoods
    .map(
      (food) => `
        <li class="food-log-item custom-food-item">
          <div class="food-log-main">
            <strong>${escapeHTML(food.name)}</strong>
            <span>${formatNumber(food.calories)} kcal, ${formatNumber(food.protein)}g protein, ${formatNumber(food.carbs)}g carbs, ${formatNumber(food.fat)}g fat per 100g</span>
          </div>
          <button class="secondary-button" type="button" data-action="use-custom" data-id="${food.id}">Use</button>
          <button class="icon-button" type="button" data-action="remove-custom" data-id="${food.id}" title="Remove custom food">-</button>
        </li>
      `,
    )
    .join("");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const grams = Number(weightInput.value);
  const query = foodInput.value;

  if (!query.trim() || !Number.isFinite(grams) || grams <= 0) {
    return;
  }

  const food = findFood(query);
  if (food) {
    renderResults(food, grams);
  } else {
    renderNotFound(query);
  }
});

quickPicks.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-food]");
  if (!button) {
    return;
  }

  foodInput.value = button.dataset.food;
  form.requestSubmit();
});

addToDayButton.addEventListener("click", () => {
  if (!selectedEntry) {
    return;
  }

  dailyLog = [{ ...selectedEntry, id: `${Date.now()}-${Math.random().toString(16).slice(2)}` }, ...dailyLog];
  saveDailyLog();
  renderDailyTotals();
});

foodLogList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const item = dailyLog.find((entry) => entry.id === button.dataset.id);
  if (!item) {
    return;
  }

  if (button.dataset.action === "add") {
    dailyLog = [{ ...item, id: `${Date.now()}-${Math.random().toString(16).slice(2)}` }, ...dailyLog];
  }

  if (button.dataset.action === "subtract") {
    dailyLog = dailyLog.filter((entry) => entry.id !== item.id);
  }

  saveDailyLog();
  renderDailyTotals();
});

resetDayButton.addEventListener("click", resetDailyLog);

clearHistoryButton.addEventListener("click", () => {
  dailyHistory = [];
  saveDailyHistory();
  renderDailyHistory();
});

customFoodForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = customNameInput.value.trim();
  const calories = Number(customCaloriesInput.value);
  const protein = Number(customProteinInput.value);
  const carbs = Number(customCarbsInput.value);
  const fat = Number(customFatInput.value);
  const values = [calories, protein, carbs, fat];

  if (!name || values.some((value) => !Number.isFinite(value) || value < 0)) {
    return;
  }

  const customFood = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    aliases: [],
    calories,
    protein,
    carbs,
    fat,
    custom: true,
    nutrients: {
      Fiber: "0 g",
      Sugar: "0 g",
      Sodium: "0 mg",
    },
    notes: "Custom food using your entered macro values per 100g.",
  };

  customFoods = [
    customFood,
    ...customFoods.filter((food) => normalize(food.name) !== normalize(name)),
  ];
  saveCustomFoods();
  renderOptions();
  renderCustomFoods();
  customFoodForm.reset();
  foodInput.value = name;
  form.requestSubmit();
});

customFoodList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const food = customFoods.find((item) => item.id === button.dataset.id);
  if (!food) {
    return;
  }

  if (button.dataset.action === "use-custom") {
    foodInput.value = food.name;
    form.requestSubmit();
  }

  if (button.dataset.action === "remove-custom") {
    customFoods = customFoods.filter((item) => item.id !== food.id);
    saveCustomFoods();
    renderOptions();
    renderCustomFoods();
  }
});

renderOptions();
renderDailyTotals();
renderCustomFoods();
renderDailyHistory();

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  navigator.serviceWorker.register("./service-worker.js");
}
