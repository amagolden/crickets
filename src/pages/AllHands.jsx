import '../global.css';
import QuestionForm from '../components/form';
import QuestionCard from '../components/question';
import AppNavbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function AllHands() {

  return (
    <>
    <AppNavbar />
      <div className="polls-page">
        <h1>This is All Hands</h1>
      </div>
    </>
  );
}

export default AllHands;
