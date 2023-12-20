import React, { useState } from 'react';
import './Answer.css';
import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';

const Answer = () => {
  const [questionsData, setQuestionsData] = useState([
    {
      id: 1,
      question: 'Что такое механические часы?',
      answer: 'Механические часы - это часы, которые работают за счет механического механизма и не требуют использования батареек. Они заводятся вручную или автоматически с помощью движения руки владельца.',
    },
    {
      id: 2,
      question: 'Какая разница между кварцевыми и механическими часами?',
      answer: 'Основное различие заключается в механизме. Кварцевые часы используют кварцевый кристалл для обеспечения точности времени, в то время как механические часы работают на основе механических зубчатых колес и пружин.',
    },
    {
      id: 3,
      question: 'Что такое водонепроницаемость часов?',
      answer: 'Водонепроницаемость часов указывает на их способность сопротивляться воздействию влаги. Она измеряется в метрах (например, 50 метров), что указывает на уровень водонепроницаемости.',
    },
    {
      id: 4,
      question: 'Как ухаживать за кожаным ремешком часов?',
      answer: 'Для ухода за кожаным ремешком используйте мягкую щетку и чистую влажную ткань. Избегайте контакта с влагой и химикатами, чтобы сохранить его качество и внешний вид.',
    },
    {
      id: 5,
      question: 'Что такое хронограф в часах?',
      answer: 'Хронограф - это функция, позволяющая измерять промежутки времени с высокой точностью. Он представляет собой дополнительные циферблаты и кнопки на циферблате часов.',
    },
    {
      id: 6,
      question: 'Как правильно настроить дату на часах?',
      answer: 'Для настройки даты на часах используйте переключатель даты (обычно находится на боковой стороне корпуса). Избегайте изменения даты в промежутке между 21:00 и 3:00, чтобы избежать повреждения механизма.',
    },
    {
      id: 7,
      question: 'Что такое тахиметр на часах?',
      answer: 'Тахиметр - это шкала, используемая для измерения скорости. Он находится на внешнем круге циферблата и работает с использованием хронографа.',
    },
    {
      id: 8,
      question: 'Как выбрать размер часов?',
      answer: 'Выбирайте размер часов в зависимости от размера вашего запястья. Слишком крупные или слишком мелкие часы могут выглядеть неудачно. Средний размер для мужчин - от 40 мм до 44 мм, для женщин - от 32 мм до 38 мм.',
    },
    {
      id: 9,
      question: 'Что такое GMT-функция в часах?',
      answer: 'GMT-функция позволяет отслеживать время в двух разных часовых поясах одновременно. Это полезно для путешествий и коммуникации с людьми из разных частей мира.',
    },
    {
      id: 10,
      question: 'Как долго прослужат батарейки в кварцевых часах?',
      answer: 'Средний срок службы батарейки в кварцевых часах составляет от 1 до 3 лет. Точные сроки зависят от марки часов и функций, используемых в часах.',
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setSelectedQuestion(id);
  };

  const handleAddQuestion = () => {
    if (newQuestion && newAnswer) {
      const newQuestionData = {
        id: questionsData.length + 1,
        question: newQuestion,
        answer: newAnswer,
      };

      setQuestionsData([...questionsData, newQuestionData]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  const handleAnswerChange = (event) => {
    setNewAnswer(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="app-container" >

        <div className="questions-container">

          <h2>Вопросы</h2>
          <ul>
            {questionsData.map((question) => (
              <li key={question.id} onClick={() => handleQuestionClick(question.id)}>
                {question.question}
              </li>
            ))}
          </ul>
        </div>
        <div className="answer-container">
          <h2>Ответ</h2>
          {selectedQuestion !== null ? (
            <p>{questionsData.find((question) => question.id === selectedQuestion).answer}</p>
          ) : (
            <p>Выберите вопрос для просмотра ответа.</p>
          )}
          <div className="add-question-container">
            <h2>Добавить вопрос</h2>
            <input
              type="text"
              placeholder="Вопрос"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <textarea
              placeholder="Ответ"
              value={newAnswer}
              onChange={handleAnswerChange}
            />
            <button onClick={handleAddQuestion}>Добавить</button>

          </div>

        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Answer;
