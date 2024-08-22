import './App.css';
import QuestionForm from './components/form';
import QuestionCard from './components/question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

let defaultQuestions = [
  {
    id: 1,
    question: 'Can you explain our Q3 goals?',
    submitter: 'Angela',
    isAnswered: false,
    isAnonymous: false,
    voteCount: 1,
  },
  {
    id: 2,
    question: 'We would like new food in the cafeteria',
    submitter: 'Angela',
    isAnswered: false,
    isAnonymous: false,
    voteCount: 1,
  },
  {
    id: 3,
    question: 'When is our Halloween party?',
    submitter: 'Angela',
    isAnswered: false,
    isAnonymous: false,
    voteCount: 1,
  },
  {
    id: 4,
    question: 'Are we ethically going in the right direction?',
    submitter: 'Angela',
    isAnswered: false,
    isAnonymous: true,
    voteCount: 1,
  }
]

function App() {

  const [questions, setQuestions] = useState(defaultQuestions);
  const [sortedQuestions, setSortedQuestions] = useState([]);

  const handleAddQuestion = (value) => {
    setQuestions(
      [...questions, 
      {id: (questions.length + 1), 
        question: value,
        submitter: 'Angela', 
        isAnswered: false, 
        isAnonymous: false, 
        voteCount: 1 
      }]);
  }

  const handleUpVote = (id) => {
    setQuestions(questions.map(item => 
      item.id === id ? { ...item, voteCount: item.voteCount + 1 } : item
    ));
  }

  const handleDownVote = (id) => {
    setQuestions(questions.map(item => 
      item.id === id && item.voteCount > 0 ? { ...item, voteCount: item.voteCount - 1 } : item
    ));
  }

  useEffect(() => {
    const sorted = questions.sort((a, b) => b.voteCount - a.voteCount);
    setSortedQuestions(sorted);
  }, [questions]);

  return (
    <div className="App">
      <h1>Poll</h1>
      <h3>Add a Question</h3>
      <QuestionForm 
        handleAddQuestion={handleAddQuestion}
      />
      <h3>Vote on Submitted Questions</h3>
      {sortedQuestions.map(element => 
        <QuestionCard
          key={element.id}
          id={element.id} 
          question={element.question}
          votes={element.voteCount}
          handleUpVote={handleUpVote}
          handleDownVote={handleDownVote} 
          submitter={element.submitter}
          isAnon={element.isAnonymous}
        />)}
    </div>
  );
}

export default App;
