import React from 'react'
// import Choices from './Choices'

const Question = () => {
  const questionText = "Do you like this widget?"

  return (
    <div className='question'>
      <h1 className='question-title'>Vote!</h1>
      <div className='question-text'>{questionText}</div>
    </div>
  )
}

export default Question
