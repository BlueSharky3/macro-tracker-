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
    name: "Ground turkey",
    aliases: ["turkey mince", "lean ground turkey"],
    calories: 203,
    protein: 27.4,
    carbs: 0,
    fat: 10.4,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "82 mg",
      Potassium: "287 mg",
      Iron: "1.3 mg",
      Zinc: "3.2 mg",
      VitaminB12: "1.3 mcg",
    },
    notes: "Cooked ground turkey estimate. Lean percentage changes calories and fat.",
  },
  {
    name: "Ham",
    aliases: ["deli ham", "sliced ham"],
    calories: 145,
    protein: 20.9,
    carbs: 1.5,
    fat: 5.5,
    nutrients: {
      Fiber: 0,
      Sugar: "1.5 g",
      Sodium: "1203 mg",
      Potassium: "287 mg",
      Iron: "1.0 mg",
      Zinc: "2.1 mg",
    },
    notes: "Ham estimate. Deli and cured meats are usually high in sodium.",
  },
  {
    name: "Bacon",
    aliases: ["pork bacon"],
    calories: 541,
    protein: 37,
    carbs: 1.4,
    fat: 42,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "1717 mg",
      Potassium: "539 mg",
      Iron: "1.4 mg",
      Zinc: "3.4 mg",
    },
    notes: "Cooked bacon estimate. Values vary by brand and crispness.",
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
    name: "Cooked couscous",
    aliases: ["couscous"],
    calories: 112,
    protein: 3.8,
    carbs: 23.2,
    fat: 0.2,
    nutrients: {
      Fiber: "1.4 g",
      Sugar: "0.1 g",
      Sodium: "5 mg",
      Potassium: "58 mg",
      Iron: "0.4 mg",
      Selenium: "27.5 mcg",
    },
    notes: "Cooked plain couscous estimate.",
  },
  {
    name: "Cooked barley",
    aliases: ["barley", "pearled barley"],
    calories: 123,
    protein: 2.3,
    carbs: 28.2,
    fat: 0.4,
    nutrients: {
      Fiber: "3.8 g",
      Sugar: "0.3 g",
      Sodium: "3 mg",
      Potassium: "93 mg",
      Iron: "1.3 mg",
      Magnesium: "22 mg",
    },
    notes: "Cooked pearled barley estimate.",
  },
  {
    name: "Corn tortilla",
    aliases: ["tortilla", "corn tortillas"],
    calories: 218,
    protein: 5.7,
    carbs: 44.6,
    fat: 2.9,
    nutrients: {
      Fiber: "6.3 g",
      Sugar: "0.9 g",
      Sodium: "45 mg",
      Potassium: "186 mg",
      Calcium: "81 mg",
      Iron: "1.3 mg",
    },
    notes: "Corn tortilla estimate per 100g. Individual tortillas vary in size.",
  },
  {
    name: "Flour tortilla",
    aliases: ["wrap", "flour tortillas"],
    calories: 304,
    protein: 8.9,
    carbs: 49.4,
    fat: 8,
    nutrients: {
      Fiber: "3.3 g",
      Sugar: "2.1 g",
      Sodium: "736 mg",
      Potassium: "154 mg",
      Calcium: "119 mg",
      Iron: "3.3 mg",
    },
    notes: "Flour tortilla estimate. Burrito-size tortillas can be much larger than taco-size tortillas.",
  },
  {
    name: "Bagel",
    aliases: ["plain bagel"],
    calories: 257,
    protein: 10.2,
    carbs: 50.4,
    fat: 1.5,
    nutrients: {
      Fiber: "2.1 g",
      Sugar: "5.7 g",
      Sodium: "430 mg",
      Potassium: "115 mg",
      Iron: "3.4 mg",
      Folate: "118 mcg",
    },
    notes: "Plain bagel estimate.",
  },
  {
    name: "Granola",
    aliases: ["granola cereal"],
    calories: 471,
    protein: 10,
    carbs: 64,
    fat: 20,
    nutrients: {
      Fiber: "5.3 g",
      Sugar: "20 g",
      Sodium: "64 mg",
      Potassium: "336 mg",
      Iron: "3 mg",
      Magnesium: "96 mg",
    },
    notes: "Granola estimate. Sugar and fat vary a lot by brand.",
  },
  {
    name: "Pancake",
    aliases: ["pancakes"],
    calories: 227,
    protein: 6.4,
    carbs: 28.3,
    fat: 9.7,
    nutrients: {
      Fiber: "1 g",
      Sugar: "5.5 g",
      Sodium: "439 mg",
      Potassium: "132 mg",
      Calcium: "219 mg",
      Iron: "1.8 mg",
    },
    notes: "Plain pancake estimate without syrup or butter.",
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
    name: "Egg whites",
    aliases: ["egg white", "liquid egg whites"],
    calories: 52,
    protein: 10.9,
    carbs: 0.7,
    fat: 0.2,
    nutrients: {
      Fiber: 0,
      Sugar: "0.7 g",
      Sodium: "166 mg",
      Potassium: "163 mg",
      Magnesium: "11 mg",
      Selenium: "20 mcg",
    },
    notes: "Egg white estimate.",
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
    name: "Cod",
    aliases: ["white fish", "atlantic cod"],
    calories: 105,
    protein: 22.8,
    carbs: 0,
    fat: 0.9,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "78 mg",
      Potassium: "413 mg",
      Phosphorus: "203 mg",
      Selenium: "33 mcg",
      VitaminB12: "1.0 mcg",
    },
    notes: "Cooked cod estimate.",
  },
  {
    name: "Tilapia",
    aliases: ["cooked tilapia"],
    calories: 128,
    protein: 26.2,
    carbs: 0,
    fat: 2.7,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "56 mg",
      Potassium: "380 mg",
      Phosphorus: "204 mg",
      Selenium: "54 mcg",
      VitaminB12: "1.9 mcg",
    },
    notes: "Cooked tilapia estimate.",
  },
  {
    name: "Sardines",
    aliases: ["canned sardines"],
    calories: 208,
    protein: 24.6,
    carbs: 0,
    fat: 11.5,
    nutrients: {
      Fiber: 0,
      Sugar: 0,
      Sodium: "505 mg",
      Potassium: "397 mg",
      Calcium: "382 mg",
      VitaminD: "4.8 mcg",
      VitaminB12: "8.9 mcg",
    },
    notes: "Canned sardines estimate. Oil-packed versions may have more fat.",
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
    name: "Mandarin orange",
    aliases: ["mandarin", "clementine", "tangerine"],
    calories: 53,
    protein: 0.8,
    carbs: 13.3,
    fat: 0.3,
    nutrients: {
      Fiber: "1.8 g",
      Sugar: "10.6 g",
      Sodium: "2 mg",
      Potassium: "166 mg",
      VitaminC: "26.7 mg",
      Calcium: "37 mg",
    },
    notes: "Fresh mandarin orange estimate.",
  },
  {
    name: "Pineapple",
    aliases: ["fresh pineapple"],
    calories: 50,
    protein: 0.5,
    carbs: 13.1,
    fat: 0.1,
    nutrients: {
      Fiber: "1.4 g",
      Sugar: "9.9 g",
      Sodium: "1 mg",
      Potassium: "109 mg",
      VitaminC: "47.8 mg",
      Manganese: "0.9 mg",
    },
    notes: "Fresh pineapple estimate.",
  },
  {
    name: "Mango",
    aliases: ["mangos"],
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4,
    nutrients: {
      Fiber: "1.6 g",
      Sugar: "13.7 g",
      Sodium: "1 mg",
      Potassium: "168 mg",
      VitaminC: "36.4 mg",
      VitaminA: "54 mcg",
    },
    notes: "Fresh mango estimate.",
  },
  {
    name: "Peach",
    aliases: ["peaches"],
    calories: 39,
    protein: 0.9,
    carbs: 9.5,
    fat: 0.3,
    nutrients: {
      Fiber: "1.5 g",
      Sugar: "8.4 g",
      Sodium: 0,
      Potassium: "190 mg",
      VitaminC: "6.6 mg",
      VitaminA: "16 mcg",
    },
    notes: "Fresh peach estimate.",
  },
  {
    name: "Pear",
    aliases: ["pears"],
    calories: 57,
    protein: 0.4,
    carbs: 15.2,
    fat: 0.1,
    nutrients: {
      Fiber: "3.1 g",
      Sugar: "9.8 g",
      Sodium: "1 mg",
      Potassium: "116 mg",
      VitaminC: "4.3 mg",
      VitaminK: "4.4 mcg",
    },
    notes: "Fresh pear with skin estimate.",
  },
  {
    name: "Raspberries",
    aliases: ["raspberry"],
    calories: 52,
    protein: 1.2,
    carbs: 11.9,
    fat: 0.7,
    nutrients: {
      Fiber: "6.5 g",
      Sugar: "4.4 g",
      Sodium: "1 mg",
      Potassium: "151 mg",
      VitaminC: "26.2 mg",
      Manganese: "0.7 mg",
    },
    notes: "Fresh raspberries estimate.",
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
    name: "Mozzarella cheese",
    aliases: ["mozzarella", "part skim mozzarella"],
    calories: 254,
    protein: 24.3,
    carbs: 2.8,
    fat: 15.9,
    nutrients: {
      Fiber: 0,
      Sugar: "1.2 g",
      Sodium: "619 mg",
      Potassium: "84 mg",
      Calcium: "782 mg",
      VitaminA: "179 mcg",
      VitaminB12: "2.3 mcg",
    },
    notes: "Part-skim mozzarella estimate.",
  },
  {
    name: "Cream cheese",
    aliases: ["plain cream cheese"],
    calories: 342,
    protein: 5.9,
    carbs: 4.1,
    fat: 34.2,
    nutrients: {
      Fiber: 0,
      Sugar: "3.2 g",
      Sodium: "321 mg",
      Potassium: "138 mg",
      Calcium: "98 mg",
      VitaminA: "366 mcg",
    },
    notes: "Plain cream cheese estimate.",
  },
  {
    name: "Sour cream",
    aliases: ["regular sour cream"],
    calories: 198,
    protein: 2.4,
    carbs: 4.6,
    fat: 19.4,
    nutrients: {
      Fiber: 0,
      Sugar: "3.4 g",
      Sodium: "31 mg",
      Potassium: "125 mg",
      Calcium: "101 mg",
      VitaminA: "124 mcg",
    },
    notes: "Regular sour cream estimate.",
  },
  {
    name: "Skim milk",
    aliases: ["nonfat milk", "fat free milk"],
    calories: 34,
    protein: 3.4,
    carbs: 5,
    fat: 0.1,
    nutrients: {
      Fiber: 0,
      Sugar: "5.1 g",
      Sodium: "42 mg",
      Potassium: "156 mg",
      Calcium: "122 mg",
      VitaminD: "1.2 mcg",
      VitaminB12: "0.5 mcg",
    },
    notes: "Skim cow's milk estimate. Fortification varies by brand.",
  },
  {
    name: "Almond milk",
    aliases: ["unsweetened almond milk"],
    calories: 15,
    protein: 0.6,
    carbs: 0.3,
    fat: 1.2,
    nutrients: {
      Fiber: "0.2 g",
      Sugar: 0,
      Sodium: "60 mg",
      Potassium: "67 mg",
      Calcium: "184 mg",
      VitaminD: "1.0 mcg",
      VitaminE: "6.3 mg",
    },
    notes: "Unsweetened almond milk estimate. Fortification varies by brand.",
  },
  {
    name: "Protein powder",
    aliases: ["whey protein", "protein shake powder"],
    calories: 400,
    protein: 80,
    carbs: 8,
    fat: 6,
    nutrients: {
      Fiber: "2 g",
      Sugar: "4 g",
      Sodium: "300 mg",
      Potassium: "500 mg",
      Calcium: "400 mg",
      Iron: "1 mg",
    },
    notes: "Generic whey protein powder estimate. Use custom foods for your exact label.",
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
    name: "Bell pepper",
    aliases: ["bell peppers", "sweet pepper", "red bell pepper"],
    calories: 31,
    protein: 1,
    carbs: 6,
    fat: 0.3,
    nutrients: {
      Fiber: "2.1 g",
      Sugar: "4.2 g",
      Sodium: "4 mg",
      Potassium: "211 mg",
      VitaminC: "127.7 mg",
      VitaminA: "157 mcg",
      VitaminB6: "0.3 mg",
    },
    notes: "Raw red bell pepper estimate.",
  },
  {
    name: "Onion",
    aliases: ["onions", "yellow onion"],
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    nutrients: {
      Fiber: "1.7 g",
      Sugar: "4.2 g",
      Sodium: "4 mg",
      Potassium: "146 mg",
      VitaminC: "7.4 mg",
      Calcium: "23 mg",
    },
    notes: "Raw onion estimate.",
  },
  {
    name: "Mushrooms",
    aliases: ["white mushrooms", "button mushrooms"],
    calories: 22,
    protein: 3.1,
    carbs: 3.3,
    fat: 0.3,
    nutrients: {
      Fiber: "1 g",
      Sugar: "2 g",
      Sodium: "5 mg",
      Potassium: "318 mg",
      Copper: "0.3 mg",
      Selenium: "9.3 mcg",
      Riboflavin: "0.4 mg",
    },
    notes: "Raw white mushroom estimate.",
  },
  {
    name: "Green beans",
    aliases: ["string beans"],
    calories: 35,
    protein: 1.9,
    carbs: 7.9,
    fat: 0.3,
    nutrients: {
      Fiber: "3.2 g",
      Sugar: "3.6 g",
      Sodium: "1 mg",
      Potassium: "146 mg",
      VitaminC: "9.7 mg",
      VitaminK: "14.4 mcg",
      Folate: "33 mcg",
    },
    notes: "Cooked green beans estimate.",
  },
  {
    name: "Asparagus",
    aliases: ["cooked asparagus"],
    calories: 22,
    protein: 2.4,
    carbs: 4.1,
    fat: 0.2,
    nutrients: {
      Fiber: "2 g",
      Sugar: "1.3 g",
      Sodium: "14 mg",
      Potassium: "224 mg",
      VitaminK: "50.6 mcg",
      Folate: "52 mcg",
      Iron: "0.9 mg",
    },
    notes: "Cooked asparagus estimate.",
  },
  {
    name: "Cauliflower",
    aliases: ["cooked cauliflower"],
    calories: 23,
    protein: 1.8,
    carbs: 4.1,
    fat: 0.5,
    nutrients: {
      Fiber: "2.3 g",
      Sugar: "2.1 g",
      Sodium: "15 mg",
      Potassium: "142 mg",
      VitaminC: "44.3 mg",
      VitaminK: "13.8 mcg",
      Folate: "44 mcg",
    },
    notes: "Cooked cauliflower estimate.",
  },
  {
    name: "Lettuce",
    aliases: ["romaine lettuce", "salad greens"],
    calories: 17,
    protein: 1.2,
    carbs: 3.3,
    fat: 0.3,
    nutrients: {
      Fiber: "2.1 g",
      Sugar: "1.2 g",
      Sodium: "8 mg",
      Potassium: "247 mg",
      VitaminA: "436 mcg",
      VitaminK: "102 mcg",
      Folate: "136 mcg",
    },
    notes: "Romaine lettuce estimate.",
  },
  {
    name: "Peas",
    aliases: ["green peas", "cooked peas"],
    calories: 84,
    protein: 5.4,
    carbs: 15.6,
    fat: 0.2,
    nutrients: {
      Fiber: "5.5 g",
      Sugar: "5.9 g",
      Sodium: "3 mg",
      Potassium: "271 mg",
      VitaminC: "14.2 mg",
      VitaminK: "25.9 mcg",
      Iron: "1.5 mg",
    },
    notes: "Cooked green peas estimate.",
  },
  {
    name: "Corn",
    aliases: ["sweet corn", "cooked corn"],
    calories: 96,
    protein: 3.4,
    carbs: 21,
    fat: 1.5,
    nutrients: {
      Fiber: "2.4 g",
      Sugar: "4.5 g",
      Sodium: "1 mg",
      Potassium: "218 mg",
      Magnesium: "26 mg",
      Folate: "23 mcg",
    },
    notes: "Cooked sweet corn estimate.",
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
  {
    name: "Edamame",
    aliases: ["soybeans", "cooked edamame"],
    calories: 121,
    protein: 11.9,
    carbs: 8.9,
    fat: 5.2,
    nutrients: {
      Fiber: "5.2 g",
      Sugar: "2.2 g",
      Sodium: "6 mg",
      Potassium: "436 mg",
      Calcium: "63 mg",
      Iron: "2.3 mg",
      Folate: "311 mcg",
    },
    notes: "Cooked shelled edamame estimate.",
  },
  {
    name: "Kidney beans",
    aliases: ["red beans", "cooked kidney beans"],
    calories: 127,
    protein: 8.7,
    carbs: 22.8,
    fat: 0.5,
    nutrients: {
      Fiber: "6.4 g",
      Sugar: "0.3 g",
      Sodium: "1 mg",
      Potassium: "403 mg",
      Iron: "2.9 mg",
      Magnesium: "45 mg",
      Folate: "130 mcg",
    },
    notes: "Cooked kidney beans estimate.",
  },
  {
    name: "Pinto beans",
    aliases: ["cooked pinto beans"],
    calories: 143,
    protein: 9,
    carbs: 26.2,
    fat: 0.7,
    nutrients: {
      Fiber: "9 g",
      Sugar: "0.3 g",
      Sodium: "1 mg",
      Potassium: "436 mg",
      Iron: "2.1 mg",
      Magnesium: "50 mg",
      Folate: "172 mcg",
    },
    notes: "Cooked pinto beans estimate.",
  },
  {
    name: "Hummus",
    aliases: ["plain hummus"],
    calories: 166,
    protein: 7.9,
    carbs: 14.3,
    fat: 9.6,
    nutrients: {
      Fiber: "6 g",
      Sugar: "0.3 g",
      Sodium: "379 mg",
      Potassium: "228 mg",
      Iron: "2.4 mg",
      Magnesium: "71 mg",
      Folate: "83 mcg",
    },
    notes: "Plain hummus estimate.",
  },
  {
    name: "French fries",
    aliases: ["fries", "fried potatoes"],
    calories: 312,
    protein: 3.4,
    carbs: 41.4,
    fat: 14.7,
    nutrients: {
      Fiber: "3.8 g",
      Sugar: "0.3 g",
      Sodium: "210 mg",
      Potassium: "579 mg",
      VitaminC: "4.7 mg",
      Iron: "0.8 mg",
    },
    notes: "Restaurant-style fries estimate. Sodium and oil vary widely.",
  },
  {
    name: "Pizza",
    aliases: ["cheese pizza"],
    calories: 266,
    protein: 11.4,
    carbs: 33.3,
    fat: 9.7,
    nutrients: {
      Fiber: "2.3 g",
      Sugar: "3.6 g",
      Sodium: "598 mg",
      Potassium: "172 mg",
      Calcium: "188 mg",
      Iron: "2.5 mg",
    },
    notes: "Cheese pizza estimate. Toppings and crust style change values.",
  },
  {
    name: "Hamburger",
    aliases: ["burger", "plain hamburger"],
    calories: 254,
    protein: 11.7,
    carbs: 23.5,
    fat: 12.3,
    nutrients: {
      Fiber: "1.1 g",
      Sugar: "4.2 g",
      Sodium: "487 mg",
      Potassium: "187 mg",
      Calcium: "77 mg",
      Iron: "2.3 mg",
    },
    notes: "Plain fast-food-style hamburger estimate.",
  },
  {
    name: "Chicken nuggets",
    aliases: ["nuggets"],
    calories: 296,
    protein: 15.3,
    carbs: 17.6,
    fat: 19.8,
    nutrients: {
      Fiber: "1.2 g",
      Sugar: "0.1 g",
      Sodium: "557 mg",
      Potassium: "265 mg",
      Iron: "1.1 mg",
      Calcium: "18 mg",
    },
    notes: "Chicken nugget estimate. Brand and cooking method vary.",
  },
  {
    name: "Popcorn",
    aliases: ["air popped popcorn"],
    calories: 387,
    protein: 12.9,
    carbs: 77.8,
    fat: 4.5,
    nutrients: {
      Fiber: "14.5 g",
      Sugar: "0.9 g",
      Sodium: "8 mg",
      Potassium: "329 mg",
      Iron: "3.2 mg",
      Magnesium: "144 mg",
    },
    notes: "Air-popped popcorn estimate. Buttered popcorn has more fat and sodium.",
  },
  {
    name: "Pretzels",
    aliases: ["hard pretzels"],
    calories: 380,
    protein: 10,
    carbs: 80,
    fat: 3.1,
    nutrients: {
      Fiber: "3.5 g",
      Sugar: "2.2 g",
      Sodium: "1240 mg",
      Potassium: "146 mg",
      Iron: "4.5 mg",
      Folate: "104 mcg",
    },
    notes: "Hard pretzel estimate. Usually high in sodium.",
  },
  {
    name: "Potato chips",
    aliases: ["chips"],
    calories: 536,
    protein: 7,
    carbs: 53,
    fat: 35,
    nutrients: {
      Fiber: "4.8 g",
      Sugar: "0.2 g",
      Sodium: "525 mg",
      Potassium: "1275 mg",
      VitaminC: "24 mg",
      Magnesium: "67 mg",
    },
    notes: "Plain potato chip estimate. Flavored chips vary.",
  },
  {
    name: "Dark chocolate",
    aliases: ["chocolate", "70 percent chocolate"],
    calories: 598,
    protein: 7.8,
    carbs: 45.9,
    fat: 42.6,
    nutrients: {
      Fiber: "10.9 g",
      Sugar: "24 g",
      Sodium: "20 mg",
      Potassium: "715 mg",
      Iron: "11.9 mg",
      Magnesium: "228 mg",
      Copper: "1.8 mg",
    },
    notes: "70-85% dark chocolate estimate.",
  },
  {
    name: "Honey",
    aliases: ["raw honey"],
    calories: 304,
    protein: 0.3,
    carbs: 82.4,
    fat: 0,
    nutrients: {
      Fiber: "0.2 g",
      Sugar: "82.1 g",
      Sodium: "4 mg",
      Potassium: "52 mg",
      Calcium: "6 mg",
      Iron: "0.4 mg",
    },
    notes: "Honey estimate.",
  },
  {
    name: "Maple syrup",
    aliases: ["syrup"],
    calories: 260,
    protein: 0,
    carbs: 67,
    fat: 0.1,
    nutrients: {
      Fiber: 0,
      Sugar: "60.5 g",
      Sodium: "12 mg",
      Potassium: "212 mg",
      Calcium: "102 mg",
      Manganese: "2.9 mg",
      Zinc: "1.5 mg",
    },
    notes: "Pure maple syrup estimate.",
  },
  {
    name: "Ketchup",
    aliases: ["tomato ketchup"],
    calories: 112,
    protein: 1.3,
    carbs: 26.8,
    fat: 0.2,
    nutrients: {
      Fiber: "0.3 g",
      Sugar: "22.8 g",
      Sodium: "907 mg",
      Potassium: "315 mg",
      VitaminC: "4.1 mg",
      VitaminA: "26 mcg",
    },
    notes: "Ketchup estimate. Often high in sugar and sodium.",
  },
  {
    name: "Mayonnaise",
    aliases: ["mayo"],
    calories: 680,
    protein: 1,
    carbs: 0.6,
    fat: 75,
    nutrients: {
      Fiber: 0,
      Sugar: "0.6 g",
      Sodium: "635 mg",
      Potassium: "20 mg",
      VitaminE: "3.3 mg",
      VitaminK: "24.7 mcg",
    },
    notes: "Regular mayonnaise estimate.",
  },
  {
    name: "Ranch dressing",
    aliases: ["ranch"],
    calories: 430,
    protein: 1.4,
    carbs: 6.7,
    fat: 45,
    nutrients: {
      Fiber: 0,
      Sugar: "4.6 g",
      Sodium: "863 mg",
      Potassium: "95 mg",
      Calcium: "63 mg",
      VitaminK: "44 mcg",
    },
    notes: "Regular ranch dressing estimate.",
  },
  {
    name: "Salsa",
    aliases: ["tomato salsa"],
    calories: 36,
    protein: 1.5,
    carbs: 7,
    fat: 0.2,
    nutrients: {
      Fiber: "1.4 g",
      Sugar: "3.5 g",
      Sodium: "430 mg",
      Potassium: "270 mg",
      VitaminC: "3.4 mg",
      VitaminA: "28 mcg",
    },
    notes: "Tomato salsa estimate. Sodium varies by brand.",
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
const measureInput = document.querySelector("#measure-input");
const amountLabel = document.querySelector("#amount-label");
const weightInput = document.querySelector("#weight-input");
const mealInput = document.querySelector("#meal-input");
const datalist = document.querySelector("#food-options");
const quickPicks = document.querySelector("#quick-picks");
const searchSuggestions = document.querySelector("#search-suggestions");
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
const nutritionWarnings = document.querySelector("#nutrition-warnings");
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
const customEditIdInput = document.querySelector("#custom-edit-id");
const customNameInput = document.querySelector("#custom-name");
const customServingTypeInput = document.querySelector("#custom-serving-type");
const customServingAmountLabel = document.querySelector("#custom-serving-amount-label");
const customServingWeightInput = document.querySelector("#custom-serving-weight");
const customServingUnitInput = document.querySelector("#custom-serving-unit");
const customCaloriesLabel = document.querySelector("#custom-calories-label");
const customProteinLabel = document.querySelector("#custom-protein-label");
const customCarbsLabel = document.querySelector("#custom-carbs-label");
const customFatLabel = document.querySelector("#custom-fat-label");
const customCaloriesInput = document.querySelector("#custom-calories");
const customProteinInput = document.querySelector("#custom-protein");
const customCarbsInput = document.querySelector("#custom-carbs");
const customFatInput = document.querySelector("#custom-fat");
const addCustomNutrientButton = document.querySelector("#add-custom-nutrient");
const customNutrientFields = document.querySelector("#custom-nutrient-fields");
const customEmpty = document.querySelector("#custom-empty");
const customFoodList = document.querySelector("#custom-food-list");
const saveCustomFoodButton = document.querySelector("#save-custom-food");
const cancelCustomEditButton = document.querySelector("#cancel-custom-edit");
const storageKey = "nutritionDailyLog";
const customFoodsKey = "nutritionCustomFoods";
const historyKey = "nutritionDailyHistory";
const mealNames = ["Breakfast", "Lunch", "Dinner", "Snack", "Other"];
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
  const servingType = safeFood.servingType === "quantity" ? "quantity" : "weight";
  const servingWeight = servingType === "quantity" ? toNumber(safeFood.servingWeight) : toNumber(safeFood.servingWeight || 100) || 100;
  const servingAmount = toNumber(safeFood.servingAmount || (servingType === "quantity" ? 1 : servingWeight)) || (servingType === "quantity" ? 1 : servingWeight);
  const servingUnit = String(safeFood.servingUnit || (servingType === "quantity" ? "serving" : "g")).trim() || (servingType === "quantity" ? "serving" : "g");

  return {
    id: safeFood.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: String(safeFood.name || "Custom food"),
    aliases: Array.isArray(safeFood.aliases) ? safeFood.aliases : [],
    calories: toNumber(safeFood.calories),
    protein: toNumber(safeFood.protein),
    carbs: toNumber(safeFood.carbs),
    fat: toNumber(safeFood.fat),
    servingType,
    servingAmount,
    servingUnit,
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
    meal: mealNames.includes(safeItem.meal) ? safeItem.meal : "Other",
    grams: toNumber(safeItem.grams),
    amount: toNumber(safeItem.amount || safeItem.grams),
    measure: safeItem.measure === "quantity" ? "quantity" : "grams",
    servingDescription: String(safeItem.servingDescription || `${toNumber(safeItem.grams)} g`),
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

const getFoodSearchTerms = (food) => [food.name, ...(Array.isArray(food.aliases) ? food.aliases : [])];

const getEditDistance = (a, b) => {
  const first = normalize(a);
  const second = normalize(b);
  const previous = Array.from({ length: second.length + 1 }, (_, index) => index);

  for (let i = 1; i <= first.length; i += 1) {
    let diagonal = previous[0];
    previous[0] = i;

    for (let j = 1; j <= second.length; j += 1) {
      const above = previous[j];
      const cost = first[i - 1] === second[j - 1] ? 0 : 1;
      previous[j] = Math.min(
        previous[j] + 1,
        previous[j - 1] + 1,
        diagonal + cost,
      );
      diagonal = above;
    }
  }

  return previous[second.length];
};

const getSearchScore = (food, query) => {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return 999;
  }

  return Math.min(...getFoodSearchTerms(food).map((term) => {
    const normalizedTerm = normalize(term);

    if (normalizedTerm === normalizedQuery) {
      return 0;
    }

    if (normalizedTerm.startsWith(normalizedQuery)) {
      return 1;
    }

    if (normalizedTerm.includes(normalizedQuery) || normalizedQuery.includes(normalizedTerm)) {
      return 2;
    }

    return 3 + getEditDistance(normalizedTerm.slice(0, Math.max(normalizedQuery.length, 4)), normalizedQuery);
  }));
};

const getFoodSuggestions = (query, limit = 5) => getAllFoods()
  .map((food) => ({ food, score: getSearchScore(food, query) }))
  .filter((match) => match.score <= 6)
  .sort((a, b) => a.score - b.score || a.food.name.localeCompare(b.food.name))
  .slice(0, limit)
  .map((match) => match.food);

const pluralizeUnit = (unit, amount) => {
  const cleanUnit = String(unit || "serving").trim() || "serving";
  return Math.abs(amount) === 1 || cleanUnit.endsWith("s") ? cleanUnit : `${cleanUnit}s`;
};

const getServingDescription = (food, amount, measure) => {
  if (measure === "quantity") {
    const unit = food.servingType === "quantity" ? food.servingUnit : "serving";
    return `${formatNumber(amount)} ${pluralizeUnit(unit, amount)}`;
  }

  return `${formatNumber(amount)} g`;
};

const getScaledMacros = (food, grams) => {
  const multiplier = grams / 100;
  return {
    calories: food.calories * multiplier,
    protein: food.protein * multiplier,
    carbs: food.carbs * multiplier,
    fat: food.fat * multiplier,
  };
};

const getServingMultiplier = (food, amount, measure) => {
  if (measure === "quantity") {
    if (food.servingType !== "quantity") {
      return amount * ((food.servingWeight || 100) / 100);
    }

    const servingAmount = toNumber(food.servingAmount || 1) || 1;
    return amount / servingAmount;
  }

  return amount / 100;
};

const getScaledMacrosByMeasure = (food, amount, measure) => {
  if (measure === "quantity") {
    const servingMacros = food.servingMacros || {
      calories: food.calories,
      protein: food.protein,
      carbs: food.carbs,
      fat: food.fat,
    };
    const multiplier = food.servingType === "quantity"
      ? amount / (toNumber(food.servingAmount || 1) || 1)
      : amount;

    return {
      calories: servingMacros.calories * multiplier,
      protein: servingMacros.protein * multiplier,
      carbs: servingMacros.carbs * multiplier,
      fat: servingMacros.fat * multiplier,
    };
  }

  return getScaledMacros(food, amount);
};

const getScaledNutrients = (food, amount, measure = "grams") => {
  const multiplier = getServingMultiplier(food, amount, measure);
  return Object.fromEntries(Object.entries(food.nutrients || {}).map(([label, value]) => [
    label,
    scaleNutrient(value, multiplier),
  ]));
};

const findFood = (query) => {
  const normalized = normalize(query);
  const ranked = getFoodSuggestions(normalized, 1);
  return ranked[0] || null;
};

const renderOptions = () => {
  datalist.innerHTML = getAllFoods().map((food) => `<option value="${escapeHTML(food.name)}"></option>`).join("");
  quickPicks.innerHTML = getAllFoods()
    .slice(0, 8)
    .map((food) => `<button type="button" data-food="${escapeHTML(food.name)}">${escapeHTML(food.name)}</button>`)
    .join("");
};

const renderSearchSuggestions = () => {
  const query = foodInput.value.trim();
  const suggestions = query ? getFoodSuggestions(query, 5) : [];

  searchSuggestions.innerHTML = suggestions
    .map((food) => `<button type="button" data-food="${escapeHTML(food.name)}">${escapeHTML(food.name)}</button>`)
    .join("");
};

const renderResults = (food, amount, measure) => {
  const multiplier = getServingMultiplier(food, amount, measure);
  const scaled = getScaledMacrosByMeasure(food, amount, measure);
  const servingDescription = getServingDescription(food, amount, measure);
  const basisDescription = measure === "quantity"
    ? `Based on ${food.servingType === "quantity"
      ? `${formatNumber(food.servingAmount || 1)} ${pluralizeUnit(food.servingUnit, food.servingAmount || 1)}`
      : `${formatNumber(food.servingWeight || 100)}g serving`}`
    : "Based on 100g";
  const macros = [
    ["Calories", scaled.calories, "kcal", "calories"],
    ["Protein", scaled.protein, "g", "protein"],
    ["Carbs", scaled.carbs, "g", "carbs"],
    ["Oil / fat", scaled.fat, "g", "fat"],
  ];

  selectedEntry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    foodName: food.name,
    meal: mealInput.value,
    grams: measure === "grams" ? amount : 0,
    amount,
    measure,
    servingDescription,
    nutrients: getScaledNutrients(food, amount, measure),
    ...scaled,
  };
  searchSuggestions.innerHTML = "";
  emptyState.classList.add("hidden");
  results.classList.remove("hidden");
  resultFood.textContent = `${food.name} - ${servingDescription}`;
  resultSummary.textContent = `${formatNumber(scaled.calories)} kcal`;
  matchLabel.textContent = food.custom ? "Custom" : "Estimate";
  addToDayButton.disabled = false;

  macroGrid.innerHTML = macros
    .map(
      ([label, value, unit, className]) => `
        <article class="macro-card ${className}">
          <span>${label}</span>
          <strong>${formatNumber(value)} ${unit}</strong>
          <small>${basisDescription}</small>
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
    "Try one of the suggestions, a shorter search, or add it as a custom food.";
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

const getLoggedNutrientTotal = (label, unit) => dailyLog.reduce((total, item) => {
  const entry = Object.entries(item.nutrients || {}).find(([nutrientLabel]) => normalizeNutrientKey(nutrientLabel) === normalizeNutrientKey(label));
  const parsed = entry ? parseNutrientValue(entry[1]) : null;

  if (!parsed) {
    return total;
  }

  const converted = convertUnit(parsed.amount, parsed.unit, unit);
  return converted === null ? total : total + converted;
}, 0);

const getDailyValueNutrientTotal = (label) => {
  const key = normalizeNutrientKey(label);
  const match = getDailyNutrientTotals().find((nutrient) => normalizeNutrientKey(nutrient.label) === key);
  return match?.amount || 0;
};

const getNutritionWarnings = () => {
  const totals = getDailyTotals();
  const fiber = getLoggedNutrientTotal("Fiber", "g");
  const sodium = getDailyValueNutrientTotal("Sodium");
  const potassium = getDailyValueNutrientTotal("Potassium");
  const warnings = [];

  if (dailyLog.length === 0) {
    return warnings;
  }

  if (totals.protein > 0 && totals.calories > 0 && totals.protein * 4 < totals.calories * 0.1) {
    warnings.push(["Protein", "Protein is under about 10% of calories today."]);
  }

  if (fiber > 0 && fiber < 14) {
    warnings.push(["Fiber", "Fiber is tracking low for the day."]);
  }

  if (sodium > 2300) {
    warnings.push(["Sodium", "Sodium is above the FDA Daily Value of 2,300 mg."]);
  }

  if (potassium > 0 && potassium < 2350) {
    warnings.push(["Potassium", "Potassium is still below about half the Daily Value."]);
  }

  if (totals.fat * 9 > totals.calories * 0.45) {
    warnings.push(["Fat", "Fat is over about 45% of calories today."]);
  }

  if (warnings.length === 0) {
    warnings.push(["Balanced", "No major nutrition warnings from the foods logged so far."]);
  }

  return warnings;
};

const getMealTotals = (items) => mealNames.map((meal) => {
  const foodsForMeal = items.filter((item) => item.meal === meal);
  const totals = foodsForMeal.reduce(
    (mealTotals, item) => ({
      calories: mealTotals.calories + item.calories,
      protein: mealTotals.protein + item.protein,
      carbs: mealTotals.carbs + item.carbs,
      fat: mealTotals.fat + item.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  return {
    meal,
    foods: foodsForMeal,
    totals,
  };
}).filter((meal) => meal.foods.length > 0);

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

  nutritionWarnings.innerHTML = getNutritionWarnings()
    .map(([title, body]) => `
      <article class="warning-card">
        <strong>${escapeHTML(title)}</strong>
        <span>${escapeHTML(body)}</span>
      </article>
    `)
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

  foodLogList.innerHTML = getMealTotals(dailyLog)
    .map((meal) => `
      <li class="meal-group">
        <div class="meal-group-header">
          <strong>${escapeHTML(meal.meal)}</strong>
          <span>${formatNumber(meal.totals.calories)} kcal, ${meal.foods.length} food${meal.foods.length === 1 ? "" : "s"}</span>
        </div>
        <ul class="meal-food-list">
          ${meal.foods.map((item) => `
            <li class="food-log-item">
              <div class="food-log-main">
                <strong>${escapeHTML(item.foodName)}</strong>
                <span>${escapeHTML(item.servingDescription)} - ${formatNumber(item.calories)} kcal, ${formatNumber(item.protein)}g protein, ${formatNumber(item.carbs)}g carbs, ${formatNumber(item.fat)}g fat</span>
              </div>
              <div class="log-actions" aria-label="Adjust ${escapeHTML(item.foodName)}">
                <button class="icon-button" type="button" data-action="subtract" data-id="${item.id}" title="Subtract this food">-</button>
                <button class="icon-button" type="button" data-action="add" data-id="${item.id}" title="Add another serving">+</button>
              </div>
            </li>
          `).join("")}
        </ul>
      </li>
    `)
    .join("");
};

const renderDailyHistory = () => {
  historyEmpty.classList.toggle("hidden", dailyHistory.length > 0);
  historyList.innerHTML = dailyHistory
    .map(
      (day) => {
        const mealTotals = getMealTotals(day.foods);

        return `
          <li class="history-item">
            <details>
              <summary>
                <span class="history-date">
                  <strong>${escapeHTML(day.dateLabel)}</strong>
                  <span>${day.foodCount} food${day.foodCount === 1 ? "" : "s"} logged</span>
                </span>
                <span class="history-macros">
                  <span>Calories<strong>${formatNumber(day.totals.calories)} kcal</strong></span>
                  <span>Protein<strong>${formatNumber(day.totals.protein)} g</strong></span>
                  <span>Carbs<strong>${formatNumber(day.totals.carbs)} g</strong></span>
                  <span>Oil / fat<strong>${formatNumber(day.totals.fat)} g</strong></span>
                </span>
              </summary>

              <div class="history-detail">
                ${mealTotals.map((meal) => `
                  <section class="history-meal">
                    <div class="meal-group-header">
                      <strong>${escapeHTML(meal.meal)}</strong>
                      <button class="secondary-button" type="button" data-action="copy-meal" data-day-id="${day.id}" data-meal="${escapeHTML(meal.meal)}">Copy meal</button>
                    </div>
                    <ul class="history-food-list">
                      ${meal.foods.map((item) => `
                        <li>
                          <span>${escapeHTML(item.foodName)}</span>
                          <strong>${escapeHTML(item.servingDescription)} - ${formatNumber(item.calories)} kcal</strong>
                        </li>
                      `).join("")}
                    </ul>
                  </section>
                `).join("")}
              </div>
            </details>
          </li>
        `;
      },
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
        const servingDescription = food.servingType === "quantity"
          ? `${formatNumber(food.servingAmount || 1)} ${pluralizeUnit(food.servingUnit, food.servingAmount || 1)}`
          : `${formatNumber(servingWeight)}g serving`;
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
            <span>${formatNumber(macros.calories)} kcal, ${formatNumber(macros.protein)}g protein, ${formatNumber(macros.carbs)}g carbs, ${formatNumber(macros.fat)}g fat for ${servingDescription}</span>
          </div>
          <button class="secondary-button" type="button" data-action="use-custom" data-id="${food.id}">Use</button>
          <button class="secondary-button" type="button" data-action="edit-custom" data-id="${food.id}">Edit</button>
          <button class="icon-button" type="button" data-action="remove-custom" data-id="${food.id}" title="Remove custom food">-</button>
        </li>
      `;
      },
    )
    .join("");
};

const renderCustomNutrientRow = (selectedKey = normalizeNutrientKey(dailyValues[0].label), amount = "") => `
  <div class="custom-nutrient-row">
    <select class="custom-nutrient-name" aria-label="Vitamin or mineral">
      ${dailyValues.map((nutrient) => {
        const key = normalizeNutrientKey(nutrient.label);
        return `<option value="${key}"${key === selectedKey ? " selected" : ""}>${nutrient.label}</option>`;
      }).join("")}
    </select>
    <input class="custom-nutrient-amount" type="number" min="0" step="0.1" placeholder="Amount" aria-label="Nutrient amount" value="${escapeHTML(amount)}" />
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

const resetCustomFoodForm = () => {
  customFoodForm.reset();
  customEditIdInput.value = "";
  customServingTypeInput.value = "weight";
  customServingWeightInput.value = 100;
  customServingUnitInput.value = "g";
  customNutrientFields.innerHTML = "";
  saveCustomFoodButton.textContent = "Save food";
  cancelCustomEditButton.classList.add("hidden");
  updateCustomServingControls();
};

const loadCustomFoodForEdit = (food) => {
  customEditIdInput.value = food.id;
  customNameInput.value = food.name;
  customServingTypeInput.value = food.servingType;
  customServingWeightInput.value = food.servingType === "quantity" ? food.servingAmount || 1 : food.servingWeight || 100;
  customServingUnitInput.value = food.servingType === "quantity" ? food.servingUnit || "serving" : "g";
  customCaloriesInput.value = formatNumber(food.servingMacros?.calories || food.calories);
  customProteinInput.value = formatNumber(food.servingMacros?.protein || food.protein);
  customCarbsInput.value = formatNumber(food.servingMacros?.carbs || food.carbs);
  customFatInput.value = formatNumber(food.servingMacros?.fat || food.fat);
  customNutrientFields.innerHTML = Object.entries(food.nutrients || {}).map(([label, value]) => {
    const key = normalizeNutrientKey(label);
    const parsed = parseNutrientValue(value);
    const amount = parsed
      ? formatNumber(food.servingType === "quantity" ? parsed.amount : parsed.amount * ((food.servingWeight || 100) / 100))
      : "";
    return renderCustomNutrientRow(key, amount);
  }).join("");
  saveCustomFoodButton.textContent = "Update food";
  cancelCustomEditButton.classList.remove("hidden");
  updateCustomServingControls();
  updateCustomNutrientUnits();
  customNameInput.focus();
};

const updateMeasureControls = () => {
  const food = findFood(foodInput.value);
  const canUseQuantity = Boolean(food?.custom);
  const canUseGrams = !food || !food.custom || food.servingType === "weight";
  const gramsOption = measureInput.querySelector("option[value='grams']");
  const quantityOption = measureInput.querySelector("option[value='quantity']");

  gramsOption.disabled = !canUseGrams;
  quantityOption.disabled = !canUseQuantity;

  if (!canUseQuantity && measureInput.value === "quantity") {
    measureInput.value = "grams";
    weightInput.value = 100;
  }

  if (!canUseGrams && measureInput.value === "grams") {
    measureInput.value = "quantity";
    weightInput.value = food.servingAmount || 1;
  }

  if (measureInput.value === "quantity" && food) {
    const unit = food.servingType === "quantity" ? food.servingUnit : "serving";
    amountLabel.textContent = `Quantity of ${unit}`;
    weightInput.min = "0.1";
    weightInput.step = "0.1";
    weightInput.max = "5000";
    weightInput.value = weightInput.value || (food.servingType === "quantity" ? food.servingAmount : 1);
  } else {
    amountLabel.textContent = "Weight in grams";
    weightInput.min = "0.1";
    weightInput.step = "0.1";
    weightInput.max = "5000";
  }
};

const updateCustomServingControls = () => {
  const isQuantity = customServingTypeInput.value === "quantity";
  customServingAmountLabel.textContent = isQuantity ? "Serving quantity" : "Serving weight in grams";
  customServingUnitInput.disabled = !isQuantity;
  customServingUnitInput.placeholder = isQuantity ? "serving, scoop, bar..." : "g";

  if (!isQuantity) {
    customServingUnitInput.value = "g";
  } else if (!customServingUnitInput.value.trim() || customServingUnitInput.value === "g") {
    customServingUnitInput.value = "serving";
  }

  const basis = isQuantity ? "quantity" : "serving";
  customCaloriesLabel.textContent = `Calories for that ${basis}`;
  customProteinLabel.textContent = `Protein for that ${basis}`;
  customCarbsLabel.textContent = `Carbs for that ${basis}`;
  customFatLabel.textContent = `Oil / fat for that ${basis}`;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = Number(weightInput.value);
  const query = foodInput.value;
  const food = findFood(query);
  const measure = measureInput.value === "quantity" && food?.custom ? "quantity" : "grams";

  if (!query.trim() || !Number.isFinite(amount) || amount <= 0) {
    return;
  }

  if (food) {
    renderResults(food, amount, measure);
  } else {
    renderNotFound(query);
  }
});

foodInput.addEventListener("input", updateMeasureControls);
foodInput.addEventListener("input", renderSearchSuggestions);
measureInput.addEventListener("change", updateMeasureControls);

const useFoodButton = (event) => {
  const button = event.target.closest("button[data-food]");
  if (!button) {
    return;
  }

  foodInput.value = button.dataset.food;
  updateMeasureControls();
  renderSearchSuggestions();
  form.requestSubmit();
};

quickPicks.addEventListener("click", useFoodButton);
searchSuggestions.addEventListener("click", useFoodButton);

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

historyList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='copy-meal']");
  if (!button) {
    return;
  }

  const day = dailyHistory.find((entry) => entry.id === button.dataset.dayId);
  const foodsToCopy = day?.foods.filter((food) => food.meal === button.dataset.meal) || [];

  if (foodsToCopy.length === 0) {
    return;
  }

  dailyLog = [
    ...foodsToCopy.map((food) => ({
      ...food,
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    })),
    ...dailyLog,
  ];
  saveDailyLog();
  renderDailyTotals();
});

addCustomNutrientButton.addEventListener("click", addCustomNutrientRow);
customServingTypeInput.addEventListener("change", updateCustomServingControls);
cancelCustomEditButton.addEventListener("click", resetCustomFoodForm);

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
  const editId = customEditIdInput.value;
  const servingType = customServingTypeInput.value === "quantity" ? "quantity" : "weight";
  const servingAmount = Number(customServingWeightInput.value);
  const servingWeight = servingType === "weight" ? servingAmount : 0;
  const servingUnit = servingType === "quantity"
    ? customServingUnitInput.value.trim() || "serving"
    : "g";
  const calories = Number(customCaloriesInput.value);
  const protein = Number(customProteinInput.value);
  const carbs = Number(customCarbsInput.value);
  const fat = Number(customFatInput.value);
  const values = [servingAmount, calories, protein, carbs, fat];

  if (!name || !Number.isFinite(servingAmount) || servingAmount <= 0 || values.some((value) => !Number.isFinite(value) || value < 0)) {
    return;
  }

  const per100Multiplier = servingType === "weight" ? 100 / servingWeight : 1;
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
    id: editId || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    aliases: [],
    calories: calories * per100Multiplier,
    protein: protein * per100Multiplier,
    carbs: carbs * per100Multiplier,
    fat: fat * per100Multiplier,
    servingType,
    servingAmount,
    servingUnit,
    servingWeight,
    servingMacros: {
      calories,
      protein,
      carbs,
      fat,
    },
    custom: true,
    nutrients,
    notes: servingType === "quantity"
      ? `Custom food based on your entered values for ${formatNumber(servingAmount)} ${pluralizeUnit(servingUnit, servingAmount)}.`
      : `Custom food based on your entered values for a ${formatNumber(servingWeight)}g serving.`,
  };

  customFoods = editId
    ? customFoods.map((food) => (food.id === editId ? customFood : food))
    : [
      customFood,
      ...customFoods.filter((food) => normalize(food.name) !== normalize(name)),
    ];
  saveCustomFoods();
  renderOptions();
  renderCustomFoods();
  resetCustomFoodForm();
  foodInput.value = name;
  measureInput.value = servingType === "quantity" ? "quantity" : "grams";
  weightInput.value = servingType === "quantity" ? servingAmount : servingWeight;
  updateMeasureControls();
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
    measureInput.value = food.servingType === "quantity" ? "quantity" : "grams";
    weightInput.value = food.servingType === "quantity" ? food.servingAmount || 1 : food.servingWeight || 100;
    updateMeasureControls();
    form.requestSubmit();
  }

  if (button.dataset.action === "edit-custom") {
    loadCustomFoodForEdit(food);
  }

  if (button.dataset.action === "remove-custom") {
    customFoods = customFoods.filter((item) => item.id !== food.id);
    saveCustomFoods();
    renderOptions();
    renderCustomFoods();
  }
});

renderOptions();
updateCustomServingControls();
updateMeasureControls();
renderDailyTotals();
renderCustomFoods();
renderDailyHistory();

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  navigator.serviceWorker.register("./service-worker.js");
}
