import { useState } from "react";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions: Question[] = [
    {
      id: 1,
      question: "Bagaimana cara mengucapkan 'Halo' dalam bahasa Mandarin?",
      options: ["Nǐ hǎo", "Zàijiàn", "Xièxie", "Duìbùqǐ"],
      correct: 0,
      explanation: "'Nǐ hǎo' (你好) adalah cara paling umum untuk mengucapkan 'Halo' dalam bahasa Mandarin."
    },
    {
      id: 2,
      question: "Angka '5' dalam bahasa Mandarin diucapkan sebagai:",
      options: ["Sì", "Wǔ", "Liù", "Qī"],
      correct: 1,
      explanation: "'Wǔ' (五) adalah pengucapan untuk angka 5 dalam bahasa Mandarin."
    },
    {
      id: 3,
      question: "Pinyin 'zh' diucapkan mirip dengan bunyi:",
      options: ["J dalam 'Jam'", "Z dalam 'Zebra'", "Th dalam 'The'", "Ch dalam 'Chair'"],
      correct: 0,
      explanation: "Pinyin 'zh' diucapkan mirip dengan bunyi 'j' dalam kata 'jam' bahasa Indonesia."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const isQuizComplete = currentQuestion === questions.length - 1 && showResult;

  return (
    <section id="quiz" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quiz Singkat
          </h2>
          <p className="text-xl text-muted-foreground">
            Uji pemahaman Anda dengan quiz interaktif
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">
                Pertanyaan {currentQuestion + 1} dari {questions.length}
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                Skor: {score}/{questions.length}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {!isQuizComplete ? (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    {questions[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          selectedAnswer === index
                            ? showResult
                              ? index === questions[currentQuestion].correct
                                ? 'border-green-500 bg-green-50 text-green-700'
                                : 'border-red-500 bg-red-50 text-red-700'
                              : 'border-primary bg-primary/10 text-primary'
                            : showResult && index === questions[currentQuestion].correct
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-border hover:border-primary/50 hover:bg-accent'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showResult && (
                            <>
                              {index === questions[currentQuestion].correct && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                              {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                                <XCircle className="h-5 w-5 text-red-500" />
                              )}
                            </>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {showResult && (
                  <div className="p-4 rounded-lg bg-accent/20 border border-accent">
                    <p className="text-sm text-foreground">
                      <strong>Penjelasan:</strong> {questions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={resetQuiz}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset Quiz
                  </Button>
                  
                  {!showResult ? (
                    <Button
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Submit Jawaban
                    </Button>
                  ) : (
                    <Button
                      onClick={handleContinue}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {currentQuestion < questions.length - 1 ? 'Lanjut' : 'Selesai'}
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">
                  {score === questions.length ? '🎉' : score >= questions.length / 2 ? '👏' : '📚'}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Quiz Selesai!
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    Skor Anda: {score} dari {questions.length}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/20 border border-accent">
                  <p className="text-foreground">
                    {score === questions.length 
                      ? 'Sempurna! Anda benar-benar memahami materi dengan baik.' 
                      : score >= questions.length / 2 
                      ? 'Bagus! Terus berlatih untuk hasil yang lebih baik.' 
                      : 'Jangan menyerah! Ulangi materi dan coba lagi.'}
                  </p>
                </div>

                <Button
                  onClick={resetQuiz}
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Ulangi Quiz
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;