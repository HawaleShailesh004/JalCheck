import { generateOptions } from "../assets/data/questionData.js"; // or wherever your function is
import questionsData from "../assets/data/questionData.js";
import { getProductById } from "./dataUtils.js";

export const getAllSteps = () => {
  const steps = [];

  questionsData.forEach((category) => {
    category.questions.forEach((q) => {
      const product = getProductById(q.id);

      let options = [];
      if (q.options && q.options.length > 0) {
        options = q.options;
      } else if (q.unit) {
        options = generateOptions(q.unit);
      } else {
        options = [{ label: "Default Option", points: 0 }];
      }

      steps.push({
        ...q,
        type: "question",
        product,
        options,
      });
    });

    if (category.breakText) {
      steps.push({
        type: "break",
        text: category.breakText,
      });
    }
  });

  return steps;
};
