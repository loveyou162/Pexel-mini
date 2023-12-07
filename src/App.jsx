import React, { useState } from 'react';
import './App.css';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import ListImg from './components/loadimg/ListImg';
import PopupImg from './components/loadimg/PopupImg';
import { useSelector } from 'react-redux';
const App = () => {
  const showPopup = useSelector(state => state.ui.showPopup);
  console.log(showPopup);
  const [courseGoals, setCourseGoals] = useState([
    {
      text: 'Do all exercises!',
      id: 'g1',
    },
    {
      text: 'Finish the course!',
      id: 'g2',
    },
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredText,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p
      style={{
        textAlign: 'center',
      }}
    >
      {' '}
      No goals found.Maybe add one ?{' '}
    </p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals"> {content} </section> <ListImg />
      {showPopup && <PopupImg />}
    </div>
  );
};

export default App;
