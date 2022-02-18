import React from 'react'
import Question from './Question'
import Choices from './Choices'

const Poll = () => {
  return (
    <div className='poll'>
      <Question />
      <Choices />
    </div>
  )
}

export default Poll
