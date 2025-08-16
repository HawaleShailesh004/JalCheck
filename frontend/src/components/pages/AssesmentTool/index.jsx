import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import ProgressBar from "./ProgressBar";
import ResultPage from "./ResultPage";
import { motion, AnimatePresence } from "framer-motion";
import { getAllSteps } from "../../../utils/questionDataUtils";

export default function AssessmentTool() {
  const steps = getAllSteps();
  console.log(steps.length);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizQuestions, setQuizQuestions] = useState([]);

  const totalSteps = steps.filter((s) => s.type === "question").length;

  const handleAnswer = (questionId, questionText, answerOption) => {
    setQuizQuestions([
      ...quizQuestions,
      { id: questionId, questionText, ans: answerOption.label },
    ]);
    localStorage.setItem("questions", JSON.stringify(quizQuestions));
    setAnswers((prev) => ({ ...prev, [questionId]: answerOption }));
    setTimeout(() => setCurrentStep((prev) => prev + 1));
  };

  const answeredCount = Object.keys(answers).length;
  const stepPercent = Math.round((answeredCount / totalSteps) * 100);

  return (
    <div className="max-w-5xl mx-auto p-6 mt-30 min-h-screen flex flex-col items-center">
      {currentStep < steps.length && (
        <>
          <ProgressBar
            currentPercent={stepPercent}
            current={answeredCount}
            total={totalSteps}
          />

          <AnimatePresence mode="wait">
  {steps[currentStep].type === "question" ? (
    <StepCard
      key={steps[currentStep].id}
      data={steps[currentStep]}
      onAnswer={(questionText, ans) => {
        console.log(ans);
        handleAnswer(steps[currentStep].id, questionText, ans);
      }}
      stepNumber={answeredCount + 1}
      totalSteps={totalSteps}
    />
  ) : (
    <motion.div
      key={`break-${currentStep}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-[90%] mx-auto flex flex-col items-center justify-center rounded-3xl shadow-2xl overflow-hidden p-10"
    >
      {/* Background gradient + blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-mid/80 to-cyan-500/90 backdrop-blur-xl" />

      {/* Decorative wave background */}
      <img
        src="/images/wave-bg.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          {steps[currentStep].text}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/80 text-lg max-w-lg mx-auto mb-6"
        >
          Take a short break! Stretch, breathe, and get ready for the next
          section 💪
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentStep((prev) => prev + 1)}
          className="mt-4 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold shadow-lg hover:shadow-xl hover:bg-white/90 transition-all"
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

        </>
      )}

      {currentStep >= steps.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-[100%] my-10"
        >
          <ResultPage />
        </motion.div>
      )}
    </div>
  );
}
