import React, { useState } from 'react';

const questions = [
    {
        questionText: "Who is the most handsome IT student",
        answerOptions: [
            { answerText: "cedrick", isCorrect: false },
            { answerText: "Janjan", isCorrect: false },
            { answerText: "romar", isCorrect: true },
            { answerText: "arnie", isCorrect: false },
        ],
    },
    {
        questionText: "Who is the CEO of Tesla?",
        answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
        ],
    },
    {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
        ],
    },
    {
        questionText: "How many continents are there?",
        answerOptions: [
            { answerText: "5", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
        ],
    },
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleRetakeQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    <h2>You scored {score} out of {questions.length}</h2>
                    <button onClick={handleRetakeQuiz}>Retake Quiz</button>
                </div>
            ) : (
                <div className="question-section">
                    <h3>Question {currentQuestion + 1}/{questions.length}</h3>
                    <h2>{questions[currentQuestion].questionText}</h2>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerOptionClick(option.isCorrect)}
                            >
                                {option.answerText}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
