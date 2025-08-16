// questionsData.
export const generateOptions = (unit) => {
  switch (unit) {
    case "kg/week":
      return [
        { label: "<1 kg", points: 5 },
        { label: "1-3 kg", points: 3 },
        { label: "3-5 kg", points: 2 },
        { label: ">5 kg", points: 0 },
      ];
    case "litres/week":
      return [
        { label: "<2 L", points: 5 },
        { label: "2-5 L", points: 3 },
        { label: "5-10 L", points: 2 },
        { label: ">10 L", points: 0 },
      ];
    case "units/week":
      return [
        { label: "<3", points: 5 },
        { label: "3-6", points: 3 },
        { label: "6-10", points: 2 },
        { label: ">10", points: 0 },
      ];
    case "cups/week":
    case "cups/day":
      return [
        { label: "<5", points: 5 },
        { label: "5-10", points: 3 },
        { label: "10-15", points: 2 },
        { label: ">15", points: 0 },
      ];
    case "units/year":
    case "pairs/year":
    case "reams/year":
      return [
        { label: "<2", points: 5 },
        { label: "2-5", points: 3 },
        { label: "5-10", points: 2 },
        { label: ">10", points: 0 },
      ];
    default:
      return [
        { label: "Low", points: 5 },
        { label: "Medium", points: 3 },
        { label: "High", points: 0 },
      ];
  }
};


let questionsData = [
  {
    category: "Food & Beverages",
    questions: [
      {
        id: "efb803c7-0934-410f-b7fc-9fa17e465d75",
        item: "Rice (Paddy)",
        unit: "kg/week",
        question: "How much rice do you usually consume in a week?",
      },
      {
        id: "420eb99e-a313-4ffc-b29c-0aa8e779a251",
        item: "Wheat",
        unit: "kg/week",
        question: "Roughly how much wheat or wheat products do you use weekly?",
      },
      {
        id: "bd3f3fd6-df05-42a1-903b-5078a0b32d25",
        item: "Milk (Cow's)",
        unit: "litres/week",
        question: "How many litres of milk do you drink in a week?",
      },
      {
        id: "e061de0a-3ba7-4654-8a01-34a734539044",
        item: "Sugar (Refined Cane Sugar)",
        unit: "kg/week",
        question: "Sweet tooth check! How much sugar do you go through weekly?",
      },
      {
        id: "eb1b3113-ee93-4e5e-90ad-2ac6607bda6a",
        item: "Chicken Meat",
        unit: "kg/week",
        question: "How much chicken do you eat in an average week?",
      },
      {
        id: "1cd96a54-2463-48fd-804a-a49a8fdad4f8",
        item: "Eggs (Chicken)",
        unit: "units/week",
        question: "Egg lover? How many eggs per week?",
      },
      {
        id: "fc0ccf27-5d2f-474c-9f4e-fbac841b7a7e",
        item: "Lentils (Dal)",
        unit: "kg/week",
        question: "How many kilos of lentils or dals do you cook weekly?",
      },
      {
        id: "b0990b2c-d3f3-43d9-bde0-8d44638ecce4",
        item: "Coffee",
        unit: "cups/week",
        question: "Coffee count — how many cups in a week?",
      },
      {
        id: "aa91f229-c9b6-4f4c-b085-f80317d75bba",
        item: "Tea",
        unit: "cups/day",
        question: "Tea time! How many cups of tea do you sip daily?",
      },
      {
        id: "184ce458-526f-4780-ba5f-fc2c4effdb48",
        item: "Mutton",
        unit: "kg/week",
        question: "Do you eat mutton or beef? Roughly how much per week?",
      },
    ],
    breakText:
      "🥗 Great start! That covers your diet — ready to see how your wardrobe stacks up?",
  },
  {
    category: "Clothing & Fabrics",
    questions: [
      {
        id: "2bcaed23-b0b5-4ce4-8216-30d07464c173",
        item: "Cotton T-shirt",
        unit: "units/year",
        question: "How many cotton T-shirts do you buy each year?",
      },
      {
        id: "71314911-005a-4f56-889f-87b7443358a0",
        item: "Jeans",
        unit: "units/year",
        question: "How many pairs of jeans do you pick up annually?",
      },
      {
        id: "914749ee-2fc9-45f1-bd6b-b8cf57d6000c",
        item: "Saree/Salwar (Cotton)",
        unit: "units/year",
        question:
          "How many sarees or salwar suits (cotton) do you get in a year?",
      },
      {
        id: "7d7842d2-b829-4639-b476-ef6ae05daad8",
        item: "Towel/Bedsheet (Cotton)",
        unit: "units/year",
        question: "Towels and bedsheets bought in the last year?",
      },
    ],
    breakText:
      "👕 Nice! That’s your wardrobe done. Let’s check out your gadgets next.",
  },
  {
    category: "Electronics & Gadgets",
    questions: [
      {
        id: "d917d187-8736-4237-839d-4d0d45c47568",
        item: "Smartphone",
        unit: "units/year",
        question: "How many smartphones have you bought this year?",
      },
      {
        id: "1e9f38c7-731f-46fe-8796-811ea5b78c5b",
        item: "Laptop",
        unit: "units/year",
        question: "Laptops purchased this year?",
      },
      {
        id: "82cc7e67-f4f6-4787-869c-613caa1bcaee",
        item: "TV",
        unit: "units/year",
        question: "Any TVs bought in the past year?",
      },
    ],
    breakText: "📱 Tech check complete. Just one last section to go!",
  },
  {
    category: "Miscellaneous",
    questions: [
      {
        id: "4e02ae64-086e-4ded-9221-eae87745f2bb",
        item: "Paper (A4 Ream)",
        unit: "reams/year",
        question: "How many reams of paper do you use annually?",
      },
      {
        id: "4e5da03e-f495-4045-b87d-65d2843e75d9",
        item: "Leather Shoes",
        unit: "pairs/year",
        question: "Leather shoes bought in the past year?",
      },
    ],
    breakText: "🎉 All done! Let’s see your water footprint score.",
  },
];


// Add options dynamically to all questions
questionsData = questionsData.map((category) => ({
    ...category,
    questions: category.questions.map((question) => ({
        ...question,
        options: generateOptions(question.unit),
    })),
}));

export default questionsData;
