import { useState } from 'react';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [stage, setStage] = useState('start'); // 'start', 'quiz', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      {stage === 'start' && <StartScreen onStart={() => setStage('quiz')} />}
      {stage === 'quiz' && <Question />}
      {stage === 'result' && <Result />}
    </div>
  );
}