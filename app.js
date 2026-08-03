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
    name: "Chicken thigh with skin",
    aliases: ["chicken thighs", "chicken thigh", "skin on chicken thigh", "chicken thighs with skin"],
    calories: 229,
    protein: 24.8,
    carbs: 0,
    fat: 14.2,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "84 mg",
      Potassium: "223 mg",
      Iron: "1.1 mg",
      Zinc: "2.0 mg",
      VitaminB12: "0.3 mcg",
    },
    notes: "Cooked chicken thigh with skin. Values vary by cooking method and how much skin is eaten.",
  },
  {
    name: "Chicken drumstick with skin",
    aliases: ["drumstick", "chicken drumstick", "chicken leg"],
    calories: 216,
    protein: 27.3,
    carbs: 0,
    fat: 11.2,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "95 mg",
      Potassium: "238 mg",
      Iron: "1.0 mg",
      Zinc: "2.3 mg",
    },
    notes: "Cooked chicken drumstick with skin. Removing skin lowers fat and calories.",
  },
  {
    name: "Turkey breast",
    aliases: ["turkey", "roasted turkey"],
    calories: 135,
    protein: 30.1,
    carbs: 0,
    fat: 1,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "104 mg",
      Potassium: "242 mg",
      Iron: "1.0 mg",
      Zinc: "1.7 mg",
      VitaminB12: "0.4 mcg",
    },
    notes: "Roasted skinless turkey breast estimate.",
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
    name: "Cooked pasta",
    aliases: ["pasta", "spaghetti", "noodles"],
    calories: 158,
    protein: 5.8,
    carbs: 30.9,
    fat: 0.9,
    nutrients: {
      Fiber: "1.8 g",
      Sugar: "0.6 g",
      Sodium: "1 mg",
      Potassium: "44 mg",
      Iron: "1.3 mg",
      Folate: "73 mcg",
    },
    notes: "Cooked enriched pasta estimate. Sauce and oil add extra calories.",
  },
  {
    name: "Whole wheat bread",
    aliases: ["bread", "wheat bread", "toast"],
    calories: 247,
    protein: 13,
    carbs: 41,
    fat: 4.2,
    nutrients: {
      Fiber: "7 g",
      Sugar: "5.7 g",
      Sodium: "400 mg",
      Potassium: "248 mg",
      Iron: "3.6 mg",
      Magnesium: "82 mg",
    },
    notes: "Whole wheat sandwich bread estimate. One slice is often 28-45 grams.",
  },
  {
    name: "Cooked quinoa",
    aliases: ["quinoa"],
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9,
    nutrients: {
      Fiber: "2.8 g",
      Sugar: "0.9 g",
      Sodium: "7 mg",
      Potassium: "172 mg",
      Iron: "1.5 mg",
      Magnesium: "64 mg",
    },
    notes: "Cooked quinoa estimate.",
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
    name: "Navel orange",
    aliases: ["navel orange", "naval orange", "orange", "oranges"],
    calories: 49,
    protein: 0.9,
    carbs: 12.5,
    fat: 0.2,
    nutrients: {
      Fiber: "2.2 g",
      Sugar: "8.5 g",
      Sodium: 0,
      Potassium: "166 mg",
      VitaminC: "59 mg",
      Calcium: "43 mg",
      Folate: "34 mcg",
    },
    notes: "Fresh navel orange estimate. Juice has less fiber per calorie.",
  },
  {
    name: "Strawberries",
    aliases: ["strawberry"],
    calories: 32,
    protein: 0.7,
    carbs: 7.7,
    fat: 0.3,
    nutrients: {
      Fiber: "2 g",
      Sugar: "4.9 g",
      Sodium: "1 mg",
      Potassium: "153 mg",
      VitaminC: "58.8 mg",
      Folate: "24 mcg",
    },
    notes: "Fresh strawberries estimate.",
  },
  {
    name: "Blueberries",
    aliases: ["blueberry"],
    calories: 57,
    protein: 0.7,
    carbs: 14.5,
    fat: 0.3,
    nutrients: {
      Fiber: "2.4 g",
      Sugar: "10 g",
      Sodium: "1 mg",
      Potassium: "77 mg",
      VitaminC: "9.7 mg",
      VitaminK: "19 mcg",
    },
    notes: "Fresh blueberries estimate.",
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
    name: "Grapes",
    aliases: ["grape"],
    calories: 69,
    protein: 0.7,
    carbs: 18.1,
    fat: 0.2,
    nutrients: {
      Fiber: "0.9 g",
      Sugar: "15.5 g",
      Sodium: "2 mg",
      Potassium: "191 mg",
      VitaminC: "10.8 mg",
      VitaminK: "14.6 mcg",
    },
    notes: "Fresh grapes estimate.",
  },
  {
    name: "Watermelon",
    aliases: ["melon"],
    calories: 30,
    protein: 0.6,
    carbs: 7.6,
    fat: 0.2,
    nutrients: {
      Fiber: "0.4 g",
      Sugar: "6.2 g",
      Sodium: "1 mg",
      Potassium: "112 mg",
      VitaminC: "8.1 mg",
      VitaminA: "28 mcg",
    },
    notes: "Fresh watermelon estimate.",
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
    name: "Peanut butter",
    aliases: ["peanutbutter", "pb", "natural peanut butter"],
    calories: 588,
    protein: 25.1,
    carbs: 20,
    fat: 50.4,
    nutrients: {
      Fiber: "6 g",
      Sugar: "9.2 g",
      Sodium: "459 mg",
      Potassium: "649 mg",
      Magnesium: "154 mg",
      VitaminE: "9.1 mg",
      Niacin: "13.1 mg",
    },
    notes: "Smooth peanut butter estimate. Natural and sweetened brands can differ.",
  },
  {
    name: "Butter",
    aliases: ["salted butter"],
    calories: 717,
    protein: 0.9,
    carbs: 0.1,
    fat: 81.1,
    nutrients: {
      Fiber: 0,
      Sugar: "0.1 g",
      Sodium: "11 mg",
      VitaminA: "684 mcg",
      VitaminE: "2.3 mg",
      VitaminK: "7 mcg",
    },
    notes: "Butter estimate. Salted butter has more sodium.",
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
    name: "Whole milk",
    aliases: ["milk", "whole milk 3.25"],
    calories: 61,
    protein: 3.2,
    carbs: 4.8,
    fat: 3.3,
    nutrients: {
      Fiber: 0,
      Sugar: "5.1 g",
      Sodium: "43 mg",
      Potassium: "132 mg",
      Calcium: "113 mg",
      VitaminD: "1.3 mcg",
      VitaminB12: "0.5 mcg",
    },
    notes: "Whole cow's milk estimate. Fortification varies by brand.",
  },
  {
    name: "Cheddar cheese",
    aliases: ["cheese", "cheddar"],
    calories: 403,
    protein: 22.9,
    carbs: 3.4,
    fat: 33.3,
    nutrients: {
      Fiber: 0,
      Sugar: "0.5 g",
      Sodium: "621 mg",
      Potassium: "98 mg",
      Calcium: "710 mg",
      VitaminA: "337 mcg",
      VitaminB12: "1.1 mcg",
    },
    notes: "Cheddar cheese estimate.",
  },
  {
    name: "Cottage cheese",
    aliases: ["low fat cottage cheese"],
    calories: 84,
    protein: 11,
    carbs: 3.4,
    fat: 2.3,
    nutrients: {
      Fiber: 0,
      Sugar: "2.7 g",
      Sodium: "321 mg",
      Potassium: "104 mg",
      Calcium: "83 mg",
      VitaminB12: "0.4 mcg",
    },
    notes: "Low-fat cottage cheese estimate. Sodium varies a lot by brand.",
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
    aliases: ["cooked broccoli", "broccoli florets"],
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
    name: "Zucchini",
    aliases: ["zucchinis", "courgette", "summer squash"],
    calories: 17,
    protein: 1.2,
    carbs: 3.1,
    fat: 0.3,
    nutrients: {
      Fiber: "1 g",
      Sugar: "2.5 g",
      Sodium: "8 mg",
      Potassium: "261 mg",
      VitaminC: "17.9 mg",
      VitaminA: "10 mcg",
      Magnesium: "18 mg",
    },
    notes: "Raw zucchini estimate. Cooking changes water content by weight.",
  },
  {
    name: "Spinach",
    aliases: ["raw spinach"],
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    nutrients: {
      Fiber: "2.2 g",
      Sugar: "0.4 g",
      Sodium: "79 mg",
      Potassium: "558 mg",
      VitaminA: "469 mcg",
      VitaminC: "28.1 mg",
      VitaminK: "483 mcg",
      Iron: "2.7 mg",
    },
    notes: "Raw spinach estimate. Cooked spinach is denser by weight.",
  },
  {
    name: "Carrots",
    aliases: ["carrot", "raw carrot"],
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    nutrients: {
      Fiber: "2.8 g",
      Sugar: "4.7 g",
      Sodium: "69 mg",
      Potassium: "320 mg",
      VitaminA: "835 mcg",
      VitaminK: "13.2 mcg",
    },
    notes: "Raw carrots estimate.",
  },
  {
    name: "Tomato",
    aliases: ["tomatoes", "raw tomato"],
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    nutrients: {
      Fiber: "1.2 g",
      Sugar: "2.6 g",
      Sodium: "5 mg",
      Potassium: "237 mg",
      VitaminC: "13.7 mg",
      VitaminA: "42 mcg",
      VitaminK: "7.9 mcg",
    },
    notes: "Raw tomato estimate.",
  },
  {
    name: "Cucumber",
    aliases: ["cucumbers"],
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    nutrients: {
      Fiber: "0.5 g",
      Sugar: "1.7 g",
      Sodium: "2 mg",
      Potassium: "147 mg",
      VitaminK: "16.4 mcg",
      VitaminC: "2.8 mg",
    },
    notes: "Raw cucumber with peel estimate.",
  },
  {
    name: "Sweet potato",
    aliases: ["sweet potatoes", "baked sweet potato"],
    calories: 90,
    protein: 2,
    carbs: 20.7,
    fat: 0.2,
    nutrients: {
      Fiber: "3.3 g",
      Sugar: "6.5 g",
      Sodium: "36 mg",
      Potassium: "475 mg",
      VitaminA: "961 mcg",
      VitaminC: "19.6 mg",
      Manganese: "0.5 mg",
    },
    notes: "Baked sweet potato estimate.",
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
    name: "Pork chop",
    aliases: ["pork", "pork loin"],
    calories: 231,
    protein: 25.7,
    carbs: 0,
    fat: 13.9,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "62 mg",
      Potassium: "315 mg",
      Iron: "0.9 mg",
      Zinc: "2.2 mg",
      Thiamin: "0.7 mg",
    },
    notes: "Cooked pork chop estimate. Trimmed cuts are lower in fat.",
  },
  {
    name: "Shrimp",
    aliases: ["cooked shrimp", "prawns"],
    calories: 99,
    protein: 24,
    carbs: 0.2,
    fat: 0.3,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "111 mg",
      Potassium: "259 mg",
      Calcium: "70 mg",
      Iron: "0.5 mg",
      VitaminB12: "1.1 mcg",
    },
    notes: "Cooked shrimp estimate. Sauces and breading add calories.",
  },
  {
    name: "Tuna",
    aliases: ["canned tuna", "tuna in water"],
    calories: 116,
    protein: 25.5,
    carbs: 0,
    fat: 0.8,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "338 mg",
      Potassium: "237 mg",
      Iron: "1.6 mg",
      VitaminD: "1.7 mcg",
      VitaminB12: "2.5 mcg",
    },
    notes: "Canned tuna in water, drained estimate. Oil-packed tuna has more calories.",
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
  {
    name: "Walnuts",
    aliases: ["walnut"],
    calories: 654,
    protein: 15.2,
    carbs: 13.7,
    fat: 65.2,
    nutrients: {
      Fiber: "6.7 g",
      Sugar: "2.6 g",
      Sodium: "2 mg",
      Potassium: "441 mg",
      Magnesium: "158 mg",
      Copper: "1.6 mg",
      Manganese: "3.4 mg",
    },
    notes: "Raw walnuts estimate.",
  },
  {
    name: "Black beans",
    aliases: ["beans", "cooked black beans"],
    calories: 132,
    protein: 8.9,
    carbs: 23.7,
    fat: 0.5,
    nutrients: {
      Fiber: "8.7 g",
      Sugar: "0.3 g",
      Sodium: "1 mg",
      Potassium: "355 mg",
      Iron: "2.1 mg",
      Magnesium: "70 mg",
      Folate: "149 mcg",
    },
    notes: "Cooked black beans estimate. Canned beans often have more sodium.",
  },
  {
    name: "Chickpeas",
    aliases: ["garbanzo beans", "cooked chickpeas"],
    calories: 164,
    protein: 8.9,
    carbs: 27.4,
    fat: 2.6,
    nutrients: {
      Fiber: "7.6 g",
      Sugar: "4.8 g",
      Sodium: "7 mg",
      Potassium: "291 mg",
      Iron: "2.9 mg",
      Magnesium: "48 mg",
      Folate: "172 mcg",
    },
    notes: "Cooked chickpeas estimate.",
  },
  {
    name: "Lentils",
    aliases: ["cooked lentils"],
    calories: 116,
    protein: 9,
    carbs: 20.1,
    fat: 0.4,
    nutrients: {
      Fiber: "7.9 g",
      Sugar: "1.8 g",
      Sodium: "2 mg",
      Potassium: "369 mg",
      Iron: "3.3 mg",
      Magnesium: "36 mg",
      Folate: "181 mcg",
    },
    notes: "Cooked lentils estimate.",
  },
  {
    name: "Tofu",
    aliases: ["firm tofu"],
    calories: 144,
    protein: 17.3,
    carbs: 2.8,
    fat: 8.7,
    nutrients: {
      Fiber: "2.3 g",
      Sugar: "0.6 g",
      Sodium: "14 mg",
      Potassium: "237 mg",
      Calcium: "683 mg",
      Iron: "2.7 mg",
      Magnesium: "58 mg",
    },
    notes: "Firm tofu estimate. Calcium varies depending on how the tofu is set.",
  },
];

const dailyValues = [
  ["Vitamin A", 900, "mcg"],
  ["Vitamin C", 90, "mg"],
  ["Vitamin D", 20, "mcg"],
  ["Vitamin E", 15, "mg"],
  ["Vitamin K", 120, "mcg"],
  ["Thiamin", 1.2, "mg"],
  ["Riboflavin", 1.3, "mg"],
  ["Niacin", 16, "mg"],
  ["Vitamin B6", 1.7, "mg"],
  ["Folate", 400, "mcg"],
  ["Vitamin B12", 2.4, "mcg"],
  ["Biotin", 30, "mcg"],
  ["Pantothenic Acid", 5, "mg"],
  ["Choline", 550, "mg"],
  ["Calcium", 1300, "mg"],
  ["Chloride", 2300, "mg"],
  ["Chromium", 35, "mcg"],
  ["Copper", 0.9, "mg"],
  ["Iodine", 150, "mcg"],
  ["Iron", 18, "mg"],
  ["Magnesium", 420, "mg"],
  ["Manganese", 2.3, "mg"],
  ["Molybdenum", 45, "mcg"],
  ["Phosphorus", 1250, "mg"],
  ["Potassium", 4700, "mg"],
  ["Selenium", 55, "mcg"],
  ["Sodium", 2300, "mg"],
  ["Zinc", 11, "mg"],
].map(([label, value, unit]) => ({ label, value, unit }));

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
const finishDayForm = document.querySelector("#finish-day-form");
const finishDateInput = document.querySelector("#finish-date");
const logEmpty = document.querySelector("#log-empty");
const foodLogList = document.querySelector("#food-log-list");
const clearHistoryButton = document.querySelector("#clear-history");
const historyEmpty = document.querySelector("#history-empty");
const historyList = document.querySelector("#history-list");
const dailyValueEmpty = document.querySelector("#daily-value-empty");
const dailyValueList = document.querySelector("#daily-value-list");
const customFoodForm = document.querySelector("#custom-food-form");
const customNameInput = document.querySelector("#custom-name");
const customServingWeightInput = document.querySelector("#custom-serving-weight");
const customCaloriesInput = document.querySelector("#custom-calories");
const customProteinInput = document.querySelector("#custom-protein");
const customCarbsInput = document.querySelector("#custom-carbs");
const customFatInput = document.querySelector("#custom-fat");
const addCustomNutrientButton = document.querySelector("#add-custom-nutrient");
const customNutrientFields = document.querySelector("#custom-nutrient-fields");
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

const normalizeNutrientKey = (label) => String(label).toLowerCase().replace(/[^a-z0-9]/g, "");
const dailyValueByKey = Object.fromEntries(dailyValues.map((nutrient) => [normalizeNutrientKey(nutrient.label), nutrient]));
const nutrientOptions = dailyValues
  .map((nutrient) => `<option value="${normalizeNutrientKey(nutrient.label)}">${nutrient.label}</option>`)
  .join("");

const sanitizeFood = (food) => {
  const safeFood = food && typeof food === "object" ? food : {};
  const servingWeight = toNumber(safeFood.servingWeight || 100) || 100;

  return {
    id: safeFood.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: String(safeFood.name || "Custom food"),
    aliases: Array.isArray(safeFood.aliases) ? safeFood.aliases : [],
    calories: toNumber(safeFood.calories),
    protein: toNumber(safeFood.protein),
    carbs: toNumber(safeFood.carbs),
    fat: toNumber(safeFood.fat),
    servingWeight,
    servingMacros: safeFood.servingMacros && typeof safeFood.servingMacros === "object" ? {
      calories: toNumber(safeFood.servingMacros.calories),
      protein: toNumber(safeFood.servingMacros.protein),
      carbs: toNumber(safeFood.servingMacros.carbs),
      fat: toNumber(safeFood.servingMacros.fat),
    } : null,
    custom: true,
    nutrients: safeFood.nutrients && typeof safeFood.nutrients === "object" ? safeFood.nutrients : {},
    notes: safeFood.notes || "Custom food using your entered macro values.",
  };
};

const sanitizeLogEntry = (item) => {
  const safeItem = item && typeof item === "object" ? item : {};

  return {
    id: safeItem.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    foodName: String(safeItem.foodName || "Food"),
    grams: toNumber(safeItem.grams),
    calories: toNumber(safeItem.calories),
    protein: toNumber(safeItem.protein),
    carbs: toNumber(safeItem.carbs),
    fat: toNumber(safeItem.fat),
    nutrients: safeItem.nutrients && typeof safeItem.nutrients === "object" ? safeItem.nutrients : {},
  };
};

const sanitizeHistoryEntry = (day) => {
  const safeDay = day && typeof day === "object" ? day : {};
  const foodsLogged = Array.isArray(safeDay.foods) ? safeDay.foods.map(sanitizeLogEntry) : [];
  const totals = safeDay.totals && typeof safeDay.totals === "object" ? safeDay.totals : {};

  return {
    id: safeDay.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    dateLabel: String(safeDay.dateLabel || "Saved day"),
    dayDate: String(safeDay.dayDate || ""),
    savedAt: safeDay.savedAt || "",
    foodCount: toNumber(safeDay.foodCount || foodsLogged.length),
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

const parseNutrientValue = (value) => {
  const match = String(value).trim().match(/^([\d.]+)\s*(g|mg|mcg|µg)\b/i);
  if (!match) {
    return null;
  }

  return {
    amount: Number(match[1]),
    unit: match[2].replace("µg", "mcg").toLowerCase(),
  };
};

const convertUnit = (amount, fromUnit, toUnit) => {
  const toMicrograms = {
    g: 1000000,
    mg: 1000,
    mcg: 1,
  };

  if (!toMicrograms[fromUnit] || !toMicrograms[toUnit]) {
    return null;
  }

  return (amount * toMicrograms[fromUnit]) / toMicrograms[toUnit];
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

const getScaledNutrients = (food, grams) => {
  const multiplier = grams / 100;
  return Object.fromEntries(Object.entries(food.nutrients || {}).map(([label, value]) => [
    label,
    scaleNutrient(value, multiplier),
  ]));
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
    nutrients: getScaledNutrients(food, grams),
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

const getDailyNutrientTotals = () => {
  const totals = {};

  dailyLog.forEach((item) => {
    Object.entries(item.nutrients || {}).forEach(([label, value]) => {
      const parsed = parseNutrientValue(value);
      const key = normalizeNutrientKey(label);
      const dailyValue = dailyValueByKey[key];

      if (!parsed || !dailyValue) {
        return;
      }

      const convertedAmount = convertUnit(parsed.amount, parsed.unit, dailyValue.unit);
      if (convertedAmount === null) {
        return;
      }

      totals[key] = {
        label: dailyValue.label,
        amount: (totals[key]?.amount || 0) + convertedAmount,
        unit: dailyValue.unit,
        dailyValue: dailyValue.value,
      };
    });
  });

  return Object.values(totals).sort((a, b) => b.amount / b.dailyValue - a.amount / a.dailyValue);
};

const getTodayDateValue = () => {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60000;
  return new Date(today.getTime() - timezoneOffset).toISOString().slice(0, 10);
};

const formatDateLabel = (dateValue) => {
  const [year, month, day] = String(dateValue).split("-").map(Number);

  if (!year || !month || !day) {
    return "Saved day";
  }

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(new Date(year, month - 1, day));
};

const renderDailyTotals = () => {
  const totals = getDailyTotals();
  const nutrientTotals = getDailyNutrientTotals();
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
  dailyValueEmpty.classList.toggle("hidden", nutrientTotals.length > 0);
  dailyValueList.innerHTML = nutrientTotals
    .map((nutrient) => {
      const percent = nutrient.dailyValue > 0 ? (nutrient.amount / nutrient.dailyValue) * 100 : 0;
      return `
        <li class="daily-value-item">
          <div class="daily-value-topline">
            <span>${escapeHTML(nutrient.label)}</span>
            <strong>${formatNumber(nutrient.amount)} ${nutrient.unit} / ${formatNumber(nutrient.dailyValue)} ${nutrient.unit} (${formatNumber(percent)}%)</strong>
          </div>
          <div class="daily-value-track">
            <span class="daily-value-fill" style="width: ${Math.min(percent, 100)}%"></span>
          </div>
        </li>
      `;
    })
    .join("");

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

const finishDailyLog = (dateValue) => {
  if (!dateValue) {
    finishDateInput.reportValidity();
    return;
  }

  if (dailyLog.length > 0) {
    dailyHistory = [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        dateLabel: formatDateLabel(dateValue),
        dayDate: dateValue,
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
      (food) => {
        const servingWeight = food.servingWeight || 100;
        const macros = food.servingMacros || {
          calories: food.calories,
          protein: food.protein,
          carbs: food.carbs,
          fat: food.fat,
        };

        return `
        <li class="food-log-item custom-food-item">
          <div class="food-log-main">
            <strong>${escapeHTML(food.name)}</strong>
            <span>${formatNumber(macros.calories)} kcal, ${formatNumber(macros.protein)}g protein, ${formatNumber(macros.carbs)}g carbs, ${formatNumber(macros.fat)}g fat for ${formatNumber(servingWeight)}g</span>
          </div>
          <button class="secondary-button" type="button" data-action="use-custom" data-id="${food.id}">Use</button>
          <button class="icon-button" type="button" data-action="remove-custom" data-id="${food.id}" title="Remove custom food">-</button>
        </li>
      `;
      },
    )
    .join("");
};

const renderCustomNutrientRow = () => `
  <div class="custom-nutrient-row">
    <select class="custom-nutrient-name" aria-label="Vitamin or mineral">
      ${nutrientOptions}
    </select>
    <input class="custom-nutrient-amount" type="number" min="0" step="0.1" placeholder="Amount" aria-label="Nutrient amount" />
    <input class="custom-nutrient-unit" type="text" value="mcg" aria-label="Nutrient unit" readonly />
    <button class="icon-button" type="button" data-action="remove-nutrient" title="Remove nutrient">-</button>
  </div>
`;

const updateCustomNutrientUnits = () => {
  customNutrientFields.querySelectorAll(".custom-nutrient-row").forEach((row) => {
    const key = row.querySelector(".custom-nutrient-name").value;
    row.querySelector(".custom-nutrient-unit").value = dailyValueByKey[key].unit;
  });
};

const addCustomNutrientRow = () => {
  customNutrientFields.insertAdjacentHTML("beforeend", renderCustomNutrientRow());
  updateCustomNutrientUnits();
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

finishDateInput.value = getTodayDateValue();

finishDayForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!finishDateInput.reportValidity()) {
    return;
  }

  finishDailyLog(finishDateInput.value);
  finishDateInput.value = getTodayDateValue();
});

clearHistoryButton.addEventListener("click", () => {
  dailyHistory = [];
  saveDailyHistory();
  renderDailyHistory();
});

addCustomNutrientButton.addEventListener("click", addCustomNutrientRow);

customNutrientFields.addEventListener("change", (event) => {
  if (event.target.matches(".custom-nutrient-name")) {
    updateCustomNutrientUnits();
  }
});

customNutrientFields.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='remove-nutrient']");
  if (!button) {
    return;
  }

  button.closest(".custom-nutrient-row").remove();
});

customFoodForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = customNameInput.value.trim();
  const servingWeight = Number(customServingWeightInput.value);
  const calories = Number(customCaloriesInput.value);
  const protein = Number(customProteinInput.value);
  const carbs = Number(customCarbsInput.value);
  const fat = Number(customFatInput.value);
  const values = [servingWeight, calories, protein, carbs, fat];

  if (!name || !Number.isFinite(servingWeight) || servingWeight <= 0 || values.some((value) => !Number.isFinite(value) || value < 0)) {
    return;
  }

  const per100Multiplier = 100 / servingWeight;
  const nutrients = {};
  customNutrientFields.querySelectorAll(".custom-nutrient-row").forEach((row) => {
    const key = row.querySelector(".custom-nutrient-name").value;
    const amount = Number(row.querySelector(".custom-nutrient-amount").value);
    const nutrient = dailyValueByKey[key];

    if (!nutrient || !Number.isFinite(amount) || amount <= 0) {
      return;
    }

    nutrients[nutrient.label] = `${formatNumber(amount * per100Multiplier)} ${nutrient.unit}`;
  });

  const customFood = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    aliases: [],
    calories: calories * per100Multiplier,
    protein: protein * per100Multiplier,
    carbs: carbs * per100Multiplier,
    fat: fat * per100Multiplier,
    servingWeight,
    servingMacros: {
      calories,
      protein,
      carbs,
      fat,
    },
    custom: true,
    nutrients,
    notes: `Custom food based on your entered values for a ${formatNumber(servingWeight)}g serving.`,
  };

  customFoods = [
    customFood,
    ...customFoods.filter((food) => normalize(food.name) !== normalize(name)),
  ];
  saveCustomFoods();
  renderOptions();
  renderCustomFoods();
  customFoodForm.reset();
  customServingWeightInput.value = 100;
  customNutrientFields.innerHTML = "";
  foodInput.value = name;
  weightInput.value = servingWeight;
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
