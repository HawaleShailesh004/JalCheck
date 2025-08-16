const products = [
  {
    title: "Rice (Paddy)",
    keywords: ["rice", "paddy", "staple", "grain", "basmati"],
    footprints: {
      green: 961.05,
      blue: 286.21,
      grey: 157.14,
    },
    totalFootprint: 1404.4,
    unit: "L/kg",
    description:
      "India's primary staple crop with high water requirements, mainly rain-fed cultivation",
    tips: [
      "Choose drought-resistant varieties",
      "Support System of Rice Intensification (SRI)",
      "Reduce food waste",
    ],
    alternatives: [
      {
        name: "Millets (bajra/jowar)",
        savings: 842,
      },
      {
        name: "Quinoa",
        savings: 600,
      },
    ],
    sizeCategory: "medium",
    category: "Grains & Cereals",
    source: ["India total", "global proportions adapted"],
    countrySpecific: true,
    avgIndianConsumption: 70,
    impactNote:
      "Major water consumer in Indian agriculture, critical for food security",
    confidence: "high",
    imageUrl: "images/rice-paddy.jpg",
    id: "efb803c7-0934-410f-b7fc-9fa17e465d75",
  },
  {
    title: "Wheat",
    keywords: ["wheat", "roti", "chapati", "flour", "grain"],
    footprints: {
      green: 980,
      blue: 266,
      grey: 154,
    },
    totalFootprint: 1400,
    unit: "L/kg",
    description:
      "Second most important cereal crop in India, grown mainly in northern states",
    tips: [
      "Choose whole wheat over refined",
      "Support local wheat varieties",
      "Minimize bread waste",
    ],
    alternatives: [
      {
        name: "Barley",
        savings: 500,
      },
      {
        name: "Bajra flour",
        savings: 839,
      },
    ],
    sizeCategory: "medium",
    category: "Grains & Cereals",
    source: ["India total", "global proportions adapted"],
    countrySpecific: true,
    avgIndianConsumption: 55,
    impactNote:
      "Essential for food security in northern India with moderate water footprint",
    confidence: "high",
    imageUrl: "images/wheat.jpg",
    id: "420eb99e-a313-4ffc-b29c-0aa8e779a251",
  },
  {
    title: "Milk (Cow's)",
    keywords: ["milk", "dairy", "cow", "calcium", "protein"],
    footprints: {
      green: 863,
      blue: 132,
      grey: 65,
    },
    totalFootprint: 1060,
    unit: "L/kg",
    description:
      "India is world's largest milk producer, mostly from small-scale mixed farming systems",
    tips: [
      "Choose local dairy cooperatives",
      "Avoid wastage",
      "Consider plant-based alternatives occasionally",
    ],
    alternatives: [
      {
        name: "Coconut milk",
        savings: 800,
      },
      {
        name: "Soy milk",
        savings: 700,
      },
    ],
    sizeCategory: "medium",
    category: "Dairy",
    source: ["India mixed system breakdown"],
    countrySpecific: true,
    avgIndianConsumption: 60,
    impactNote:
      "Crucial protein source with relatively efficient water use in Indian context",
    confidence: "high",
    imageUrl: "images/milk-cows.jpg",
    id: "bd3f3fd6-df05-42a1-903b-5078a0b32d25",
  },
  {
    title: "Sugar (Refined Cane Sugar)",
    keywords: ["sugar", "cane", "sweetener", "refined", "jaggery"],
    footprints: {
      green: 1485,
      blue: 607.5,
      grey: 135,
    },
    totalFootprint: 2227.5,
    unit: "L/kg",
    description:
      "India is world's second-largest sugar producer, mainly from sugarcane cultivation",
    tips: [
      "Use jaggery as alternative",
      "Reduce sugar consumption",
      "Choose organic sugar",
    ],
    alternatives: [
      {
        name: "Jaggery (gur)",
        savings: 500,
      },
      {
        name: "Stevia",
        savings: 2000,
      },
    ],
    sizeCategory: "medium",
    category: "Sweeteners",
    source: ["India total range"],
    countrySpecific: true,
    avgIndianConsumption: 20,
    impactNote: "High water footprint crop, major consumer of irrigation water",
    confidence: "high",
    imageUrl: "images/sugar-refined-cane-sugar.jpg",
    id: "e061de0a-3ba7-4654-8a01-34a734539044",
  },

  {
    title: "Eggs (Chicken)",
    keywords: ["eggs", "chicken", "protein", "breakfast", "nutrition"],
    footprints: {
      green: 6309,
      blue: 815,
      grey: 699,
    },
    totalFootprint: 7823,
    unit: "L/kg",
    description:
      "Important protein source with lower environmental impact than meat",
    tips: [
      "Choose free-range eggs",
      "Use whole eggs to avoid waste",
      "Buy from local poultry farms",
    ],
    alternatives: [
      {
        name: "Tofu",
        savings: 6500,
      },
      {
        name: "Lentils",
        savings: 1949,
      },
    ],
    sizeCategory: "large",
    category: "Dairy & Eggs",
    source: ["Global data"],
    countrySpecific: false,
    avgIndianConsumption: 3,
    impactNote:
      "More water-efficient than meat but still significant footprint",
    confidence: "medium",
    imageUrl: "images/eggs-chicken.jpg",
    id: "1cd96a54-2463-48fd-804a-a49a8fdad4f8",
  },
  {
    title: "Potatoes",
    keywords: ["potato", "aloo", "vegetable", "starch", "tuber"],
    footprints: {
      green: 10.69,
      blue: 1.85,
      grey: 3.53,
    },
    totalFootprint: 16.07,
    unit: "L/kg",
    description:
      "Water-efficient crop in India, especially with drip irrigation systems",
    tips: [
      "Use drip irrigation methods",
      "Choose local varieties",
      "Avoid peeling to reduce waste",
    ],
    alternatives: [
      {
        name: "Sweet potato",
        savings: 5,
      },
      {
        name: "Cassava",
        savings: 8,
      },
    ],
    sizeCategory: "small",
    category: "Vegetables",
    source: ["India drip irrigation data"],
    countrySpecific: true,
    avgIndianConsumption: 25,
    impactNote:
      "Highly water-efficient vegetable crop suitable for Indian conditions",
    confidence: "high",
    imageUrl: "images/potatoes.jpg",
    id: "a4234f05-486a-45e3-a774-c0c560aefec6",
  },
  {
    title: "Tomatoes",
    keywords: ["tomato", "vegetable", "cooking", "sauce", "salad"],
    footprints: {
      green: 13,
      blue: 27,
      grey: 21,
    },
    totalFootprint: 61,
    unit: "L/kg",
    description:
      "Popular vegetable crop with moderate water requirements in Indian climate",
    tips: [
      "Grow in kitchen gardens",
      "Use drip irrigation",
      "Choose disease-resistant varieties",
    ],
    alternatives: [
      {
        name: "Bell peppers",
        savings: 20,
      },
      {
        name: "Cucumbers",
        savings: 15,
      },
    ],
    sizeCategory: "small",
    category: "Vegetables",
    source: ["Adapted from Mediterranean data"],
    countrySpecific: false,
    avgIndianConsumption: 12,
    impactNote:
      "Relatively water-efficient vegetable with high nutritional value",
    confidence: "medium",
    imageUrl: "images/tomatoes.jpg",
    id: "9e54be91-8ef9-4996-b015-8160e60cc193",
  },
  {
    title: "Lentils (Dal)",
    keywords: ["lentils", "dal", "pulses", "protein", "legumes"],
    footprints: {
      green: 4324,
      blue: 489,
      grey: 1060,
    },
    totalFootprint: 5873,
    unit: "L/kg",
    description:
      "Primary protein source in Indian vegetarian diet with nitrogen-fixing benefits",
    tips: [
      "Soak before cooking",
      "Choose local varieties",
      "Cook in pressure cooker",
    ],
    alternatives: [
      {
        name: "Chickpeas",
        savings: 1696,
      },
      {
        name: "Black gram (urad)",
        savings: 1000,
      },
    ],
    sizeCategory: "large",
    category: "Legumes & Pulses",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 15,
    impactNote:
      "Essential protein source for vegetarians, improves soil fertility",
    confidence: "medium",
    imageUrl: "images/lentils-dal.jpg",
    id: "fc0ccf27-5d2f-474c-9f4e-fbac841b7a7e",
  },
  {
    title: "Coffee (Roasted)",
    keywords: ["coffee", "beverage", "caffeine", "arabica", "robusta"],
    footprints: {
      green: 18153,
      blue: 139,
      grey: 633,
    },
    totalFootprint: 18925,
    unit: "L/kg",
    description:
      "High water footprint beverage, mainly grown in Western Ghats and southern India",
    tips: [
      "Reduce daily consumption",
      "Choose shade-grown coffee",
      "Support fair trade",
    ],
    alternatives: [
      {
        name: "Tea",
        savings: 10069,
      },
      {
        name: "Herbal tea",
        savings: 18000,
      },
    ],
    sizeCategory: "large",
    category: "Beverages",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 0.8,
    impactNote:
      "Very high water footprint luxury beverage with growing consumption",
    confidence: "medium",
    imageUrl: "images/coffee-roasted.jpg",
    id: "a58aae37-8cdc-4dc6-bc4e-21d3d73501df",
  },
  {
    title: "Tea (Black/Green)",
    keywords: ["tea", "chai", "beverage", "black", "green"],
    footprints: {
      green: 7232,
      blue: 898,
      grey: 726,
    },
    totalFootprint: 8856,
    unit: "L/kg",
    description:
      "India's national beverage with high water requirements for cultivation",
    tips: ["Avoid over-brewing", "Use less tea per cup", "Choose organic tea"],
    alternatives: [
      {
        name: "Herbal tea",
        savings: 7000,
      },
      {
        name: "Lemon water",
        savings: 8500,
      },
    ],
    sizeCategory: "large",
    category: "Beverages",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 1,
    impactNote: "High water footprint for India's most consumed beverage",
    confidence: "medium",
    imageUrl: "images/tea-blackgreen.jpg",
    id: "aa91f229-c9b6-4f4c-b085-f80317d75bba",
  },
  {
    title: "Bajra (Pearl Millet)",
    keywords: ["bajra", "millet", "drought", "grain", "nutritious"],
    footprints: {
      green: 437.74,
      blue: 67.34,
      grey: 56.12,
    },
    totalFootprint: 561.2,
    unit: "L/kg",
    description: "Drought-resistant crop well-suited to arid regions of India",
    tips: [
      "Include in regular diet",
      "Support millet cultivation",
      "Choose over water-intensive grains",
    ],
    alternatives: [
      {
        name: "Sorghum (jowar)",
        savings: 100,
      },
      {
        name: "Finger millet (ragi)",
        savings: 150,
      },
    ],
    sizeCategory: "small",
    category: "Grains & Cereals",
    source: ["India adaptation"],
    countrySpecific: true,
    avgIndianConsumption: 8,
    impactNote: "Climate-resilient crop with very low water footprint",
    confidence: "high",
    imageUrl: "images/bajra-pearl-millet.jpg",
    id: "d55296dd-63e1-4777-a9cb-6b6fef20ea3e",
  },
  {
    title: "Maize (Corn)",
    keywords: ["maize", "corn", "makka", "grain", "feed"],
    footprints: {
      green: 1248,
      blue: 192,
      grey: 160,
    },
    totalFootprint: 1600,
    unit: "L/kg",
    description: "Versatile crop used for food and animal feed in India",
    tips: [
      "Choose non-GMO varieties",
      "Support local farmers",
      "Use for diverse food preparations",
    ],
    alternatives: [
      {
        name: "Millets",
        savings: 1000,
      },
      {
        name: "Amaranth",
        savings: 800,
      },
    ],
    sizeCategory: "medium",
    category: "Grains & Cereals",
    source: ["Global average adapted"],
    countrySpecific: false,
    avgIndianConsumption: 6,
    impactNote: "Moderate water footprint with multiple uses in agriculture",
    confidence: "medium",
    imageUrl: "images/maize-corn.jpg",
    id: "4f1934d1-3ab8-4ac9-b5f8-1798ae0f6d1f",
  },
  {
    title: "Chickpea (Chana)",
    keywords: ["chickpea", "chana", "garbanzo", "legume", "protein"],
    footprints: {
      green: 3196,
      blue: 0,
      grey: 981,
    },
    totalFootprint: 4177,
    unit: "L/kg",
    description:
      "Important pulse crop in India with nitrogen-fixing properties",
    tips: [
      "Soak overnight before cooking",
      "Buy in bulk to reduce packaging",
      "Cook with pressure cooker",
    ],
    alternatives: [
      {
        name: "Black gram",
        savings: 1000,
      },
      {
        name: "Green gram",
        savings: 1200,
      },
    ],
    sizeCategory: "medium",
    category: "Legumes & Pulses",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 8,
    impactNote: "Moderate water footprint pulse with soil enrichment benefits",
    confidence: "medium",
    imageUrl: "images/chickpea-chana.jpg",
    id: "a6598f95-4e55-4c0f-9a03-b232d08b9bd9",
  },
  {
    title: "Groundnut (Peanut)",
    keywords: ["groundnut", "peanut", "oil", "protein", "snack"],
    footprints: {
      green: 1872,
      blue: 288,
      grey: 240,
    },
    totalFootprint: 2400,
    unit: "L/kg",
    description:
      "Important oilseed crop in India with moderate water requirements",
    tips: [
      "Choose unprocessed groundnuts",
      "Support organic farming",
      "Use for oil extraction locally",
    ],
    alternatives: [
      {
        name: "Sesame seeds",
        savings: 500,
      },
      {
        name: "Sunflower seeds",
        savings: 600,
      },
    ],
    sizeCategory: "medium",
    category: "Nuts & Seeds",
    source: ["Global average for oil crops"],
    countrySpecific: false,
    avgIndianConsumption: 3,
    impactNote: "Moderate water footprint oilseed with high nutritional value",
    confidence: "medium",
    imageUrl: "images/groundnut-peanut.jpg",
    id: "fa47d27b-f061-4e23-832c-6584ca2e6dcb",
  },
  {
    title: "Mustard Oil",
    keywords: ["mustard", "oil", "cooking", "sarson", "edible"],
    footprints: {
      green: 1872,
      blue: 288,
      grey: 240,
    },
    totalFootprint: 2400,
    unit: "L/kg",
    description:
      "Traditional cooking oil in northern India with moderate water footprint",
    tips: [
      "Use in moderation",
      "Choose cold-pressed varieties",
      "Support local oil mills",
    ],
    alternatives: [
      {
        name: "Sesame oil",
        savings: 400,
      },
      {
        name: "Coconut oil",
        savings: 600,
      },
    ],
    sizeCategory: "medium",
    category: "Oils & Fats",
    source: ["Global average for oil crops"],
    countrySpecific: false,
    avgIndianConsumption: 4,
    impactNote: "Traditional cooking medium with moderate environmental impact",
    confidence: "medium",
    imageUrl: "images/mustard-oil.jpg",
    id: "e870574e-af37-4696-a2ed-d8edf365388d",
  },
  {
    title: "Apples",
    keywords: ["apple", "fruit", "Kashmir", "Himachal", "nutrition"],
    footprints: {
      green: 546,
      blue: 84,
      grey: 70,
    },
    totalFootprint: 700,
    unit: "L/kg",
    description: "Temperate fruit mainly grown in Himalayan regions of India",
    tips: [
      "Buy during season",
      "Choose local varieties",
      "Store properly to avoid waste",
    ],
    alternatives: [
      {
        name: "Guava",
        savings: 300,
      },
      {
        name: "Papaya",
        savings: 400,
      },
    ],
    sizeCategory: "small",
    category: "Fruits",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 2,
    impactNote: "Moderate water footprint fruit with limited growing regions",
    confidence: "medium",
    imageUrl: "images/apples.jpg",
    id: "73995891-daa8-4b16-8d7e-5d31a8524fce",
  },
  {
    title: "Bananas",
    keywords: ["banana", "kela", "fruit", "potassium", "tropical"],
    footprints: {
      green: 379.2,
      blue: 268.6,
      grey: 142.2,
    },
    totalFootprint: 790,
    unit: "L/kg",
    description:
      "Widely grown tropical fruit in India with moderate water requirements",
    tips: [
      "Buy local varieties",
      "Use ripe bananas for cooking",
      "Avoid wastage of peels",
    ],
    alternatives: [
      {
        name: "Papaya",
        savings: 300,
      },
      {
        name: "Seasonal local fruits",
        savings: 400,
      },
    ],
    sizeCategory: "small",
    category: "Fruits",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 8,
    impactNote: "Popular affordable fruit with reasonable water efficiency",
    confidence: "medium",
    imageUrl: "images/bananas.jpg",
    id: "e510658b-3d33-4ace-af49-f8e3fd9e8194",
  },
  {
    title: "Mangoes",
    keywords: ["mango", "aam", "king fruit", "tropical", "summer"],
    footprints: {
      green: 1248,
      blue: 192,
      grey: 160,
    },
    totalFootprint: 1600,
    unit: "L/kg",
    description:
      "India's national fruit with seasonal availability and moderate water needs",
    tips: [
      "Consume during peak season",
      "Choose local varieties",
      "Use fully ripe mangoes",
    ],
    alternatives: [
      {
        name: "Papaya",
        savings: 1100,
      },
      {
        name: "Jackfruit",
        savings: 800,
      },
    ],
    sizeCategory: "medium",
    category: "Fruits",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 6,
    impactNote: "Beloved seasonal fruit with moderate environmental impact",
    confidence: "medium",
    imageUrl: "images/mangoes.jpg",
    id: "4fee2bc6-a318-43a1-91b4-f84d4edcaacc",
  },
  {
    title: "Onions",
    keywords: ["onion", "pyaz", "vegetable", "cooking", "storage"],
    footprints: {
      green: 234,
      blue: 36,
      grey: 30,
    },
    totalFootprint: 300,
    unit: "L/kg",
    description:
      "Essential cooking ingredient in India with relatively low water footprint",
    tips: [
      "Store in cool dry place",
      "Use whole onions to avoid waste",
      "Choose local varieties",
    ],
    alternatives: [
      {
        name: "Shallots",
        savings: 50,
      },
      {
        name: "Leeks",
        savings: 100,
      },
    ],
    sizeCategory: "small",
    category: "Vegetables",
    source: ["Global average for vegetables"],
    countrySpecific: false,
    avgIndianConsumption: 15,
    impactNote: "Essential ingredient with low environmental impact",
    confidence: "medium",
    imageUrl: "images/onions.jpg",
    id: "f3cc91b0-af88-4dcf-9700-36fbe10821ed",
  },
  {
    title: "Garlic (Fresh)",
    keywords: ["garlic", "lahsun", "spice", "medicinal", "cooking"],
    footprints: {
      green: 0,
      blue: 271,
      grey: 257,
    },
    totalFootprint: 528,
    unit: "L/kg",
    description:
      "Important spice and medicinal plant with moderate water requirements",
    tips: [
      "Store properly to prevent spoilage",
      "Use in small quantities",
      "Grow in kitchen garden",
    ],
    alternatives: [
      {
        name: "Ginger",
        savings: 200,
      },
      {
        name: "Asafoetida",
        savings: 400,
      },
    ],
    sizeCategory: "small",
    category: "Spices & Herbs",
    source: ["Adapted from irrigation data"],
    countrySpecific: false,
    avgIndianConsumption: 2,
    impactNote: "High-value crop with moderate water footprint per unit weight",
    confidence: "low",
    imageUrl: "images/garlic-fresh.jpg",
    id: "59b565d2-9890-4c9a-af23-7cf25c3c5fc9",
  },
  {
    title: "Green Chillies",
    keywords: ["chilli", "mirch", "spice", "hot", "vegetable"],
    footprints: {
      green: 234,
      blue: 36,
      grey: 30,
    },
    totalFootprint: 300,
    unit: "L/kg",
    description:
      "Essential spice in Indian cuisine with low water requirements",
    tips: [
      "Dry excess chillies for storage",
      "Grow in kitchen garden",
      "Use moderately for health",
    ],
    alternatives: [
      {
        name: "Black pepper",
        savings: 100,
      },
      {
        name: "Red chilli powder",
        savings: 50,
      },
    ],
    sizeCategory: "small",
    category: "Spices & Herbs",
    source: ["Global average for vegetables"],
    countrySpecific: false,
    avgIndianConsumption: 3,
    impactNote: "Low water footprint spice essential for Indian cooking",
    confidence: "medium",
    imageUrl: "images/green-chillies.jpg",
    id: "98e823d8-4c85-46dc-8e97-417c3f33c4b4",
  },
  {
    title: "Turmeric",
    keywords: ["turmeric", "haldi", "spice", "medicinal", "golden"],
    footprints: {
      green: 1248,
      blue: 192,
      grey: 160,
    },
    totalFootprint: 1600,
    unit: "L/kg",
    description:
      "Sacred spice in India with medicinal properties and moderate water needs",
    tips: [
      "Buy in powder form to reduce processing",
      "Store in airtight containers",
      "Use for health benefits",
    ],
    alternatives: [
      {
        name: "Ginger powder",
        savings: 800,
      },
      {
        name: "Coriander powder",
        savings: 600,
      },
    ],
    sizeCategory: "medium",
    category: "Spices & Herbs",
    source: ["Global crop proportions adapted"],
    countrySpecific: false,
    avgIndianConsumption: 1.5,
    impactNote: "High-value medicinal spice with moderate environmental impact",
    confidence: "low",
    imageUrl: "images/turmeric.jpg",
    id: "cc7b675a-1717-45ec-a890-c19ce64bf406",
  },
  {
    title: "Black Pepper",
    keywords: ["pepper", "kali mirch", "spice", "Kerala", "peppercorn"],
    footprints: {
      green: 1248,
      blue: 192,
      grey: 160,
    },
    totalFootprint: 1600,
    unit: "L/kg",
    description:
      "Premium spice mainly grown in Western Ghats with moderate water requirements",
    tips: [
      "Buy whole peppercorns",
      "Grind fresh for better flavor",
      "Store in cool dry place",
    ],
    alternatives: [
      {
        name: "White pepper",
        savings: 100,
      },
      {
        name: "Long pepper",
        savings: 200,
      },
    ],
    sizeCategory: "medium",
    category: "Spices & Herbs",
    source: ["Global crop proportions adapted"],
    countrySpecific: false,
    avgIndianConsumption: 0.5,
    impactNote: "High-value export spice with moderate water footprint",
    confidence: "low",
    imageUrl: "images/black-pepper.jpg",
    id: "2dd626d9-bb77-428d-b033-45668b02ee70",
  },
  {
    title: "Rice Flour",
    keywords: ["rice flour", "chawal", "flour", "gluten-free", "idli"],
    footprints: {
      green: 801,
      blue: 741,
      grey: 139,
    },
    totalFootprint: 1681,
    unit: "L/kg",
    description:
      "Processed rice product used in South Indian cuisine and gluten-free cooking",
    tips: [
      "Make fresh at home",
      "Store in airtight containers",
      "Use for traditional recipes",
    ],
    alternatives: [
      {
        name: "Millet flour",
        savings: 1000,
      },
      {
        name: "Chickpea flour",
        savings: 500,
      },
    ],
    sizeCategory: "medium",
    category: "Flours & Processed",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 5,
    impactNote: "Processed rice product with additional water requirements",
    confidence: "medium",
    imageUrl: "images/rice-flour.jpg",
    id: "03c26b7b-3869-43f1-8176-f14154e38fca",
  },
  {
    title: "Wheat Flour",
    keywords: ["wheat flour", "atta", "flour", "roti", "bread"],
    footprints: {
      green: 1225,
      blue: 332.5,
      grey: 192.5,
    },
    totalFootprint: 1750,
    unit: "L/kg",
    description: "Most common flour in India, essential for daily bread making",
    tips: [
      "Buy from local mills",
      "Store in cool dry place",
      "Use whole wheat over refined",
    ],
    alternatives: [
      {
        name: "Millet flour",
        savings: 1200,
      },
      {
        name: "Barley flour",
        savings: 800,
      },
    ],
    sizeCategory: "medium",
    category: "Flours & Processed",
    source: ["India wheat data adapted"],
    countrySpecific: true,
    avgIndianConsumption: 45,
    impactNote:
      "Essential processed grain with moderate processing water footprint",
    confidence: "high",
    imageUrl: "images/wheat-flour.jpg",
    id: "3c1440c4-4b22-42ae-a48d-677c5e5eda45",
  },
  {
    title: "Bread (from Wheat)",
    keywords: ["bread", "pav", "wheat", "bakery", "processed"],
    footprints: {
      green: 910,
      blue: 247,
      grey: 143,
    },
    totalFootprint: 1300,
    unit: "L/kg",
    description:
      "Processed wheat product with growing consumption in urban India",
    tips: [
      "Make bread at home",
      "Choose whole grain varieties",
      "Avoid wastage",
    ],
    alternatives: [
      {
        name: "Roti/chapati",
        savings: 400,
      },
      {
        name: "Millet bread",
        savings: 700,
      },
    ],
    sizeCategory: "medium",
    category: "Processed Foods",
    source: ["Global average"],
    countrySpecific: false,
    avgIndianConsumption: 8,
    impactNote:
      "Processed food with additional manufacturing water requirements",
    confidence: "medium",
    imageUrl: "images/bread-from-wheat.jpg",
    id: "2d0c8613-9f37-4261-a06f-df5839f58837",
  },
  {
    title: "Edible Oil (General)",
    keywords: ["oil", "cooking", "edible", "refined", "sunflower"],
    footprints: {
      green: 1872,
      blue: 288,
      grey: 240,
    },
    totalFootprint: 2400,
    unit: "L/kg",
    description:
      "Essential cooking medium with high water footprint from oilseed cultivation",
    tips: [
      "Use oil sparingly",
      "Choose cold-pressed varieties",
      "Reuse oil when possible",
    ],
    alternatives: [
      {
        name: "Coconut oil",
        savings: 800,
      },
      {
        name: "Mustard oil",
        savings: 100,
      },
    ],
    sizeCategory: "medium",
    category: "Oils & Fats",
    source: ["Global average for oil crops"],
    countrySpecific: false,
    avgIndianConsumption: 15,
    impactNote:
      "High consumption cooking ingredient with significant water footprint",
    confidence: "medium",
    imageUrl: "images/edible-oil-general.jpg",
    id: "8e8d2808-3026-484b-bfc1-02828b6ea33e",
  },
  {
    title: "Fish (Aquaculture)",
    keywords: ["fish", "aquaculture", "protein", "omega", "farmed"],
    footprints: {
      green: 1629,
      blue: 179,
      grey: 166,
    },
    totalFootprint: 1974,
    unit: "L/kg",
    description:
      "Growing protein source in India through fish farming with moderate water requirements",
    tips: [
      "Choose locally farmed fish",
      "Support sustainable aquaculture",
      "Avoid overfishing",
    ],
    alternatives: [
      {
        name: "Plant proteins",
        savings: 1000,
      },
      {
        name: "Tofu",
        savings: 700,
      },
    ],
    sizeCategory: "medium",
    category: "Seafood",
    source: ["Global average for aquafeed"],
    countrySpecific: false,
    avgIndianConsumption: 5,
    impactNote:
      "Moderate water footprint protein source from sustainable aquaculture",
    confidence: "medium",
    imageUrl: "images/fish-aquaculture.jpg",
    id: "88aae3e6-fbac-4e65-bb1e-b43bc06bee25",
  },
  {
    title: "Mutton",
    keywords: ["mutton", "goat", "meat", "protein", "red meat"],
    footprints: {
      green: 7851,
      blue: 398,
      grey: 61,
    },
    totalFootprint: 8310,
    unit: "L/kg",
    description:
      "High water footprint meat consumed occasionally in Indian households",
    tips: [
      "Reduce consumption frequency",
      "Choose locally raised goats",
      "Use all parts of meat",
    ],
    alternatives: [
      {
        name: "Chicken",
        savings: -57,
      },
      {
        name: "Lentils",
        savings: 2437,
      },
    ],
    sizeCategory: "large",
    category: "Meat & Poultry",
    source: ["Global average for sheep meat"],
    countrySpecific: false,
    avgIndianConsumption: 1.5,
    impactNote: "Very high water footprint meat with limited consumption",
    confidence: "medium",
    imageUrl: "images/mutton.jpg",
    id: "c8294c90-a35f-497c-acc9-2f950f7d7351",
  },
  {
    title: "Pork",
    keywords: ["pork", "meat", "pig", "protein", "livestock"],
    footprints: {
      green: 4680,
      blue: 720,
      grey: 600,
    },
    totalFootprint: 6000,
    unit: "L/kg",
    description:
      "Water-intensive meat production requiring significant feed crops and processing water in India's growing meat industry",
    tips: [
      "Choose locally sourced pork to reduce transport water costs",
      "Consider smaller portions to reduce overall water impact",
      "Support farms using water-efficient feeding practices",
    ],
    alternatives: [
      {
        name: "Chicken",
        savings: 2000,
      },
      {
        name: "Fish",
        savings: 3500,
      },
    ],
    sizeCategory: "large",
    category: "Food & Beverages",
    source: ["Global average adapted for India", "Crop proportions estimation"],
    countrySpecific: true,
    avgIndianConsumption: 0.5,
    impactNote:
      "High water footprint due to feed crop irrigation and processing needs",
    confidence: "medium",
    imageUrl: "images/pork.jpg",
    id: "25021132-8956-4c8b-990f-1db5a1d75041",
  },
  {
    title: "Butter",
    keywords: ["butter", "dairy", "milk", "fat", "cooking"],
    footprints: {
      green: 4695,
      blue: 465,
      grey: 393,
    },
    totalFootprint: 5553,
    unit: "L/kg",
    description:
      "High water footprint dairy product reflecting India's significant milk production and processing industry",
    tips: [
      "Use ghee alternatives for cooking",
      "Buy from local dairy cooperatives",
      "Store properly to avoid waste",
    ],
    alternatives: [
      {
        name: "Coconut oil",
        savings: 4500,
      },
      {
        name: "Mustard oil",
        savings: 4800,
      },
    ],
    sizeCategory: "large",
    category: "Food & Beverages",
    source: ["Global average"],
    countrySpecific: true,
    avgIndianConsumption: 3.2,
    impactNote:
      "Dairy processing requires substantial water for cleaning and cooling",
    confidence: "medium",
    imageUrl: "images/butter.jpg",
    id: "e5a926cc-2b0c-4aad-bfa8-7e27304e1e98",
  },
  {
    title: "Cheese",
    keywords: ["cheese", "dairy", "paneer", "protein", "milk"],
    footprints: {
      green: 4230,
      blue: 420,
      grey: 350,
    },
    totalFootprint: 5000,
    unit: "L/kg",
    description:
      "Water-intensive dairy product with growing consumption in urban India, particularly paneer varieties",
    tips: [
      "Opt for locally made paneer",
      "Reduce food waste through proper storage",
      "Choose plant-based alternatives occasionally",
    ],
    alternatives: [
      {
        name: "Tofu",
        savings: 3000,
      },
      {
        name: "Cottage cheese",
        savings: 1500,
      },
    ],
    sizeCategory: "large",
    category: "Food & Beverages",
    source: ["Global average", "Milk proportions adapted"],
    countrySpecific: true,
    avgIndianConsumption: 2.8,
    impactNote:
      "High water requirement for milk production and cheese processing",
    confidence: "medium",
    imageUrl: "images/cheese.jpg",
    id: "fb63953e-4628-4b99-bd89-6e32ff8ef203",
  },
  {
    title: "Cotton T-shirt",
    keywords: ["t-shirt", "cotton", "clothing", "garment", "textile"],
    footprints: {
      green: 1107,
      blue: 1215,
      grey: 378,
    },
    totalFootprint: 2700,
    unit: "L/piece",
    description:
      "Significant water usage in India's cotton textile industry, world's largest cotton producer",
    tips: [
      "Buy quality t-shirts that last longer",
      "Support organic cotton brands",
      "Wash in cold water to extend garment life",
    ],
    alternatives: [
      {
        name: "Bamboo t-shirt",
        savings: 1500,
      },
      {
        name: "Hemp t-shirt",
        savings: 1800,
      },
    ],
    sizeCategory: "large",
    category: "Clothing & Textiles",
    source: ["Global average for 250g T-shirt"],
    countrySpecific: true,
    avgIndianConsumption: 8,
    impactNote:
      "Cotton cultivation in India heavily dependent on irrigation water",
    confidence: "high",
    imageUrl: "images/cotton-t-shirt.jpg",
    id: "f629fa9f-fd7c-44c5-a8e0-18c3b7011314",
  },
  {
    title: "Jeans (Cotton)",
    keywords: ["jeans", "denim", "cotton", "pants", "clothing"],
    footprints: {
      green: 1474,
      blue: 1588,
      grey: 718,
    },
    totalFootprint: 3781,
    unit: "L/pair",
    description:
      "High water footprint garment reflecting cotton cultivation and denim processing in India's textile sector",
    tips: [
      "Invest in durable, well-made jeans",
      "Wash less frequently to preserve fabric",
      "Choose darker colors to hide wear",
    ],
    alternatives: [
      {
        name: "Organic cotton jeans",
        savings: 1000,
      },
      {
        name: "Recycled denim",
        savings: 2000,
      },
    ],
    sizeCategory: "large",
    category: "Clothing & Textiles",
    source: ["Levi's 501 data", "Cotton production proportions"],
    countrySpecific: true,
    avgIndianConsumption: 2,
    impactNote:
      "Denim processing requires significant water for dyeing and finishing",
    confidence: "medium",
    imageUrl: "images/jeans-cotton.jpg",
    id: "b271b394-4bf8-496d-a265-96bdfa1af039",
  },
  {
    title: "Cotton (Lint)",
    keywords: ["cotton", "lint", "fiber", "textile", "crop"],
    footprints: {
      green: 5163,
      blue: 2955,
      grey: 996,
    },
    totalFootprint: 9113,
    unit: "L/kg",
    description:
      "India's major cash crop with high water requirements, crucial for textile industry and farmer livelihoods",
    tips: [
      "Support sustainable cotton farming practices",
      "Choose products made from organic cotton",
      "Promote efficient irrigation methods",
    ],
    alternatives: [
      {
        name: "Bamboo fiber",
        savings: 6000,
      },
      {
        name: "Hemp fiber",
        savings: 7000,
      },
    ],
    sizeCategory: "large",
    category: "Raw Materials",
    source: ["WaterFootprint.org global average"],
    countrySpecific: true,
    avgIndianConsumption: 15,
    impactNote: "Major water consumer in India's agriculture sector",
    confidence: "high",
    imageUrl: "images/cotton-lint.jpg",
    id: "df2458cb-ff47-4544-83bc-67378028d52b",
  },
  {
    title: "Cotton Swabs",
    keywords: [
      "cotton swabs",
      "ear buds",
      "hygiene",
      "personal care",
      "cotton",
    ],
    footprints: {
      green: 1.5,
      blue: 1.6,
      grey: 0.5,
    },
    totalFootprint: 3.6,
    unit: "L/piece",
    description:
      "Small personal care item with modest water footprint, commonly used across Indian households",
    tips: [
      "Use reusable alternatives where possible",
      "Buy in bulk to reduce packaging",
      "Consider bamboo alternatives",
    ],
    alternatives: [
      {
        name: "Bamboo cotton swabs",
        savings: 1.5,
      },
      {
        name: "Reusable silicone swabs",
        savings: 3,
      },
    ],
    sizeCategory: "small",
    category: "Personal Care",
    source: ["Global average for Johnson's cotton bud"],
    countrySpecific: true,
    avgIndianConsumption: 150,
    impactNote:
      "Individual impact low but high volume usage increases total footprint",
    confidence: "medium",
    imageUrl: "images/cotton-swabs.jpg",
    id: "12f8fcc5-d269-4179-baa5-57e47351300a",
  },
  {
    title: "Diapers",
    keywords: ["diapers", "baby care", "disposable", "hygiene", "infant"],
    footprints: {
      green: 370,
      blue: 330,
      grey: 110,
    },
    totalFootprint: 810,
    unit: "L/piece",
    description:
      "Growing market in urban India with significant water usage for manufacturing and materials",
    tips: [
      "Consider cloth diapers for reduced environmental impact",
      "Buy in appropriate sizes to minimize waste",
      "Choose eco-friendly brands when available",
    ],
    alternatives: [
      {
        name: "Cloth diapers",
        savings: 600,
      },
      {
        name: "Biodegradable diapers",
        savings: 200,
      },
    ],
    sizeCategory: "medium",
    category: "Baby Care",
    source: ["Global average"],
    countrySpecific: true,
    avgIndianConsumption: 800,
    impactNote:
      "High volume usage by families with infants increases overall impact",
    confidence: "medium",
    imageUrl: "images/diapers.jpg",
    id: "709f1984-3677-4e07-8e60-b3f0e35a79f4",
  },
  {
    title: "Brick",
    keywords: ["brick", "construction", "building", "clay", "masonry"],
    footprints: {
      green: 0.31,
      blue: 1.71,
      grey: 1.3,
    },
    totalFootprint: 3.32,
    unit: "L/piece",
    description:
      "Essential construction material in India with water usage for clay processing and manufacturing",
    tips: [
      "Use recycled bricks where structurally appropriate",
      "Support local brick kilns to reduce transport",
      "Consider alternative building materials",
    ],
    alternatives: [
      {
        name: "Fly ash bricks",
        savings: 1.5,
      },
      {
        name: "Compressed earth blocks",
        savings: 2,
      },
    ],
    sizeCategory: "small",
    category: "Construction Materials",
    source: ["Global average"],
    countrySpecific: true,
    avgIndianConsumption: 2000,
    impactNote:
      "Large construction projects require millions of bricks, amplifying water impact",
    confidence: "medium",
    imageUrl: "images/brick.jpg",
    id: "e3cb6927-e668-4be5-974c-29ff9e0973bf",
  },
  {
    title: "Sugar (from Sugarcane)",
    keywords: ["sugar", "sugarcane", "sweetener", "agriculture"],
    footprints: {
      green: 999,
      blue: 215,
      grey: 119,
    },
    totalFootprint: 1333,
    unit: "L/kg",
    description:
      "The water footprint of sugar is heavily dependent on sugarcane cultivation, which is a major irrigated crop in India, placing stress on regional water resources.",
    tips: [
      "Reduce consumption of sugary products",
      "Choose organic and locally sourced sugar",
    ],
    alternatives: [
      {
        name: "Jaggery (gur)",
        savings: 200,
      },
      {
        name: "Honey",
        savings: 500,
      },
    ],
    sizeCategory: "medium",
    category: "Sugars",
    source: ["Indian regional data (Uttar Pradesh)", "CORE"],
    countrySpecific: true,
    avgIndianConsumption: 19,
    impactNote:
      "Sugarcane is a thirsty crop, and its cultivation contributes to water stress in states like Uttar Pradesh and Maharashtra. The footprint includes irrigation and processing water.",
    confidence: "medium-high",
    imageUrl: "images/sugar-from-sugarcane.jpg",
    id: "f7eeff4c-5569-4070-b541-5835eab39d57",
  },
  {
    title: "Tea (Indian Chai)",
    keywords: ["tea", "chai", "beverage", "caffeine", "drink"],
    footprints: {
      green: 27,
      blue: 2,
      grey: 1,
    },
    totalFootprint: 30,
    unit: "L/cup",
    description:
      "The water footprint of a cup of tea is mainly from growing the tea leaves, with a small portion for processing. A large part of this is rain-fed (green water).",
    tips: ["Use smaller teacups", "Avoid milk in tea to save water"],
    alternatives: [
      {
        name: "Herbal tea",
        savings: 10,
      },
    ],
    sizeCategory: "small",
    category: "Beverages",
    source: ["Water Footprint Network", "Science and Culture"],
    countrySpecific: true,
    avgIndianConsumption: 1095,
    impactNote:
      "Despite a low per-cup footprint, the high daily consumption in India makes it a significant collective water consumer. The footprint is primarily from green water.",
    confidence: "high",
    imageUrl: "images/tea-indian-chai.jpg",
    id: "090d68a6-4995-4a3a-b2c8-fba1acbbaca2",
  },
  {
    title: "Milk (Dairy)",
    keywords: ["milk", "dairy", "beverage", "protein"],
    footprints: {
      green: 1273.6,
      blue: 82.14,
      grey: 13.69,
    },
    totalFootprint: 1369,
    unit: "L/kg",
    description:
      "The water footprint of milk is primarily due to the water required to grow feed for the cows. India’s large dairy sector relies heavily on both rain-fed and irrigated feed crops.",
    tips: [
      "Reduce consumption of dairy products",
      "Choose local, sustainably-sourced milk",
    ],
    alternatives: [
      {
        name: "Pea milk",
        savings: 1200,
      },
      {
        name: "Oat milk",
        savings: 1000,
      },
    ],
    sizeCategory: "large",
    category: "Dairy & Eggs",
    source: ["Indian regional study", "global proportions adapted"],
    countrySpecific: true,
    avgIndianConsumption: 156,
    impactNote:
      "India is the world's largest milk producer, making its dairy sector a major collective water consumer. The footprint is tied to animal feed, particularly grains and fodder.",
    confidence: "high",
    imageUrl: "images/milk-dairy.jpg",
    id: "52fadbb4-9a38-4255-8239-5524d7ae9872",
  },
  {
    title: "Eggs",
    keywords: ["eggs", "poultry", "protein", "breakfast"],
    footprints: {
      green: 2018,
      blue: 615,
      grey: 531,
    },
    totalFootprint: 3164,
    unit: "L/kg",
    description:
      "The water footprint of eggs is mainly from the water required to grow the feed for the hens (corn and soy), and for drinking water.",
    tips: [
      "Support local poultry farms with sustainable practices",
      "Reduce food waste",
    ],
    alternatives: [
      {
        name: "Tofu",
        savings: 2500,
      },
      {
        name: "Lentils/Dals",
        savings: 836,
      },
    ],
    sizeCategory: "medium",
    category: "Dairy & Eggs",
    source: ["Global study (North China)", "applied to India"],
    countrySpecific: false,
    avgIndianConsumption: 4.6,
    impactNote:
      "Poultry farming for eggs is a rapidly growing sector in India. The footprint is primarily from feed production, which places demand on both green and blue water resources.",
    confidence: "high",
    imageUrl: "images/eggs.jpg",
    id: "0d7dcbf9-fc47-4483-810a-31368388adb3",
  },
  {
    title: "Chicken Meat",
    keywords: ["chicken", "poultry", "meat", "protein"],
    footprints: {
      green: 3526,
      blue: 430,
      grey: 344,
    },
    totalFootprint: 4300,
    unit: "L/kg",
    description:
      "The water footprint of chicken is primarily from the grains and other feed required to raise the birds. Chicken has a significantly lower water footprint than other meats like mutton and beef.",
    tips: [
      "Choose local, sustainably-sourced chicken",
      "Reduce meat consumption",
    ],
    alternatives: [
      {
        name: "Lentils/Dals (Pulses)",
        savings: 300,
      },
      {
        name: "Tofu",
        savings: 3000,
      },
    ],
    sizeCategory: "medium",
    category: "Meat & Pulses",
    source: ["Global average", "Water Footprint Network"],
    countrySpecific: false,
    avgIndianConsumption: 3.2,
    impactNote:
      "The fastest-growing meat sector in India. Its relatively lower water footprint makes it a more water-efficient protein source compared to red meat, but still impactful due to scale.",
    confidence: "high",
    imageUrl: "images/chicken-meat.jpg",
    id: "d1f429e5-f9e1-4671-a996-ef7f7efadfdc",
  },

  {
    title: "Beef",
    keywords: ["beef", "cattle", "red meat", "meat"],
    footprints: {
      green: 14476,
      blue: 616,
      grey: 308,
    },
    totalFootprint: 15400,
    unit: "L/kg",
    description:
      "Beef has the highest water footprint of all meats, primarily from water for feed and drinking. Beef is consumed by a very small fraction of the Indian population but has a disproportionately high environmental impact.",
    tips: [
      "Choose local and sustainably-sourced beef if consumed",
      "Drastically reduce beef consumption",
    ],
    alternatives: [
      {
        name: "Chicken",
        savings: 11100,
      },
      {
        name: "Lentils/Dals (Pulses)",
        savings: 11400,
      },
    ],
    sizeCategory: "very large",
    category: "Meat & Pulses",
    source: ["Global average", "Water Footprint Network"],
    countrySpecific: false,
    avgIndianConsumption: 2.2,
    impactNote:
      "The virtual water footprint of beef is extremely high due to the long life cycle of cattle and the vast amount of feed required. In India, its impact is notable despite being rare.",
    confidence: "high",
    imageUrl: "images/beef.jpg",
    id: "9230223d-7bac-44fc-ba22-269e57856c70",
  },
  {
    title: "Lentils/Dals (Pulses)",
    keywords: ["lentils", "dals", "pulses", "protein"],
    footprints: {
      green: 3120,
      blue: 480,
      grey: 400,
    },
    totalFootprint: 4000,
    unit: "L/kg",
    description:
      "Lentils and dals, being a primary protein source for a large part of the Indian population, have a significant water footprint. However, they are a more water-efficient protein source than meat.",
    tips: [
      "Choose local and sustainably-grown pulses",
      "Grow your own lentils",
    ],
    alternatives: [
      {
        name: "Tofu",
        savings: 1000,
      },
    ],
    sizeCategory: "medium",
    category: "Meat & Pulses",
    source: ["Global average", "Water Footprint Network"],
    countrySpecific: false,
    avgIndianConsumption: 10.26,
    impactNote:
      "Pulses are a key part of India's food security and a great protein alternative to meat, which requires less water. However, the sheer scale of consumption means their water footprint is still collectively significant.",
    confidence: "high",
    imageUrl: "images/lentilsdals-pulses.jpg",
    id: "0ff217b2-af37-401d-83cc-b26f84ea6543",
  },
  {
    title: "Coffee",
    keywords: ["coffee", "caffeine", "beverage", "drink"],
    footprints: {
      green: 135.8,
      blue: 2.8,
      grey: 1.4,
    },
    totalFootprint: 140,
    unit: "L/cup",
    description:
      "The water footprint of coffee is dominated by the water needed to grow the coffee beans, a process that is largely rain-fed. The footprint of a single cup is surprisingly large due to the high water demands of the plant.",
    tips: [
      "Reduce consumption",
      "Choose local coffee brands that promote sustainable practices",
      "Avoid milk to save water",
    ],
    alternatives: [
      {
        name: "Tea",
        savings: 110,
      },
    ],
    sizeCategory: "small",
    category: "Beverages",
    source: ["Global average", "Water Footprint Network"],
    countrySpecific: false,
    avgIndianConsumption: 30,
    impactNote:
      "The footprint of a single cup is high, but the overall impact in India is lower than tea due to lower consumption. The large majority of the footprint is from green water.",
    confidence: "high",
    imageUrl: "images/coffee.jpg",
    id: "b0990b2c-d3f3-43d9-bde0-8d44638ecce4",
  },

  {
    title: "Jeans",
    keywords: ["jeans", "denim", "clothing", "fabric"],
    footprints: {
      green: 3402.9,
      blue: 302.48,
      grey: 75.62,
    },
    totalFootprint: 3781,
    unit: "L/unit",
    description:
      "The water footprint of a pair of jeans is predominantly from the cultivation of cotton (over 90%), followed by the water used in the dyeing and finishing processes.",
    tips: [
      "Repair and reuse jeans",
      "Wash jeans less frequently",
      "Buy from brands that use sustainable production methods",
    ],
    alternatives: [
      {
        name: "Jeans from recycled materials",
        savings: 3700,
      },
      {
        name: "Jeans from organic cotton",
        savings: 2500,
      },
    ],
    sizeCategory: "large",
    category: "Clothing & Fabrics",
    source: ["Global average (Levi’s LCA)", "applied to India"],
    countrySpecific: true,
    avgIndianConsumption: 0.3,
    impactNote:
      "The production of jeans places a significant strain on water resources due to the high amount of water needed for cotton cultivation and the water-intensive dyeing process.",
    confidence: "high",
    imageUrl: "images/jeans.jpg",
    id: "71314911-005a-4f56-889f-87b7443358a0",
  },
  {
    title: "Saree/Salwar (Cotton)",
    keywords: ["saree", "salwar", "kurta", "cotton", "traditional wear"],
    footprints: {
      green: 2323,
      blue: 160,
      grey: 134.75,
    },
    totalFootprint: 2618,
    unit: "L/unit",
    description:
      "The water footprint is an estimate based on the weight of a traditional cotton-based Indian garment. The high footprint is due to the water-intensive nature of cotton production in India.",
    tips: [
      "Choose durable, long-lasting garments",
      "Opt for fabrics with lower water footprints",
    ],
    alternatives: [
      {
        name: "Linen",
        savings: 2000,
      },
      {
        name: "Silk",
        savings: 200,
      },
    ],
    sizeCategory: "medium",
    category: "Clothing & Fabrics",
    source: ["Estimation based on cotton footprint", "Guardian"],
    countrySpecific: true,
    avgIndianConsumption: 0.5,
    impactNote:
      "While traditional clothing is often long-lasting, the high water footprint of the raw cotton used in its production is a significant environmental concern.",
    confidence: "low",
    imageUrl: "images/sareesalwar-cotton.jpg",
    id: "914749ee-2fc9-45f1-bd6b-b8cf57d6000c",
  },
  {
    title: "Towel/Bedsheet (Cotton)",
    keywords: ["towel", "bedsheet", "cotton", "home fabrics"],
    footprints: {
      green: 3252.2,
      blue: 224,
      grey: 188.65,
    },
    totalFootprint: 3665.2,
    unit: "L/unit",
    description:
      "The water footprint of home fabrics like towels and bedsheets is primarily from the raw cotton used in their production. This is an estimate based on the average weight of these items.",
    tips: [
      "Use fewer home fabrics",
      "Choose brands that use sustainable cotton",
      "Opt for high-durability fabrics",
    ],
    alternatives: [
      {
        name: "Bamboo fabrics",
        savings: 2000,
      },
      {
        name: "Recycled fabrics",
        savings: 3500,
      },
    ],
    sizeCategory: "large",
    category: "Clothing & Fabrics",
    source: ["Estimation based on cotton footprint", "Guardian"],
    countrySpecific: true,
    avgIndianConsumption: 2,
    impactNote:
      "The collective water footprint of home fabrics is substantial due to the sheer volume of cotton used in their production, contributing to water stress in cotton-growing areas.",
    confidence: "low",
    imageUrl: "images/towelbedsheet-cotton.jpg",
    id: "7d7842d2-b829-4639-b476-ef6ae05daad8",
  },
  {
    title: "Smartphone",
    keywords: ["smartphone", "mobile", "electronics", "gadget"],
    footprints: {
      green: 2600,
      blue: 5200,
      grey: 5200,
    },
    totalFootprint: 13000,
    unit: "L/unit",
    description:
      "The water footprint of a smartphone is primarily from the manufacturing process, which includes mining minerals, refining metals, and fabricating components. This is a global average, with a high proportion of blue and grey water.",
    tips: [
      "Use your smartphone for as long as possible",
      "Buy refurbished phones",
      "Recycle your old phones responsibly",
    ],
    alternatives: [],
    sizeCategory: "large",
    category: "Electronics & Gadgets",
    source: ["Global average", "Trucost"],
    countrySpecific: false,
    avgIndianConsumption: 0.2,
    impactNote:
      "While the per-unit footprint is large, the total impact is rising rapidly in India due to increasing ownership and frequent upgrades, contributing to water stress in manufacturing regions.",
    confidence: "medium",
    imageUrl: "images/smartphone.jpg",
    id: "d917d187-8736-4237-839d-4d0d45c47568",
  },
  {
    title: "Laptop",
    keywords: ["laptop", "computer", "electronics", "gadget"],
    footprints: {
      green: 38000,
      blue: 76000,
      grey: 76000,
    },
    totalFootprint: 190000,
    unit: "L/unit",
    description:
      "The water footprint of a laptop is substantial, dominated by the water used in the manufacturing of components, particularly the high-purity water required for semiconductor fabrication.",
    tips: [
      "Extend the lifespan of your laptop",
      "Buy refurbished laptops",
      "Properly dispose of electronic waste",
    ],
    alternatives: [],
    sizeCategory: "very large",
    category: "Electronics & Gadgets",
    source: ["Global average", "Techsavers"],
    countrySpecific: false,
    avgIndianConsumption: 0.008,
    impactNote:
      "With a massive per-unit footprint, the production of laptops contributes significantly to water consumption, particularly blue water in semiconductor manufacturing hubs globally.",
    confidence: "medium",
    imageUrl: "images/laptop.jpg",
    id: "1e9f38c7-731f-46fe-8796-811ea5b78c5b",
  },
  {
    title: "TV",
    keywords: ["tv", "television", "electronics", "entertainment"],
    footprints: {
      green: 10000,
      blue: 20000,
      grey: 20000,
    },
    totalFootprint: 50000,
    unit: "L/unit",
    description:
      "The water footprint of a TV is primarily in the manufacturing of its components, including the screen. The high footprint is due to the water-intensive processes involved in electronics production.",
    tips: [
      "Keep your TV for as long as possible",
      "Repair rather than replace",
    ],
    alternatives: [],
    sizeCategory: "very large",
    category: "Electronics & Gadgets",
    source: ["Global average", "applied to TV manufacturing"],
    countrySpecific: false,
    avgIndianConsumption: 0.025,
    impactNote:
      "The collective water footprint of TVs is a growing concern due to increasing household ownership and the high water demands of electronics manufacturing.",
    confidence: "low",
    imageUrl: "images/tv.jpg",
    id: "82cc7e67-f4f6-4787-869c-613caa1bcaee",
  },
  {
    title: "Paper (A4 Ream)",
    keywords: ["paper", "ream", "stationery", "miscellaneous"],
    footprints: {
      green: 3510,
      blue: 58.5,
      grey: 2281.5,
    },
    totalFootprint: 5850,
    unit: "L/ream",
    description:
      "The water footprint of paper is from a combination of growing timber (green water) and the pulping and bleaching processes (blue and grey water).",
    tips: [
      "Use recycled paper",
      "Print double-sided",
      "Go digital where possible",
    ],
    alternatives: [
      {
        name: "Digital documentation",
        savings: 5850,
      },
      {
        name: "Recycled paper",
        savings: 3000,
      },
    ],
    sizeCategory: "large",
    category: "Miscellaneous",
    source: ["Global average", "UPM-Kymmene"],
    countrySpecific: true,
    avgIndianConsumption: 6.2,
    impactNote:
      "Paper production is a major consumer of water. While India's paper industry is becoming more efficient, the total water footprint is still high due to the volume of paper consumed.",
    confidence: "medium-high",
    imageUrl: "images/paper-a4-ream.jpg",
    id: "4e02ae64-086e-4ded-9221-eae87745f2bb",
  },
  {
    title: "Leather Shoes",
    keywords: ["leather", "shoes", "footwear", "miscellaneous"],
    footprints: {
      green: 7520,
      blue: 240,
      grey: 240,
    },
    totalFootprint: 8000,
    unit: "L/pair",
    description:
      "The water footprint of leather shoes is largely from the water required to raise the cattle. The tanning and processing of the hide also contribute, with a significant grey water footprint from pollutants.",
    tips: [
      "Repair your shoes instead of replacing them",
      "Choose shoes from sustainable materials",
    ],
    alternatives: [
      {
        name: "Canvas shoes",
        savings: 7000,
      },
      {
        name: "Vegan leather",
        savings: 6500,
      },
    ],
    sizeCategory: "large",
    category: "Miscellaneous",
    source: ["Global average", "Circumfauna"],
    countrySpecific: true,
    avgIndianConsumption: 1.7,
    impactNote:
      "The footprint is very high due to the long life cycle of cattle and the water-intensive nature of animal husbandry. Tanning processes also contribute to water pollution.",
    confidence: "high",
    imageUrl: "images/leather-shoes.jpg",
    id: "4e5da03e-f495-4045-b87d-65d2843e75d9",
  },
];

export default products;
