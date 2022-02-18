import React from 'react'

const Choices = () => {
  const choiceText = [
    "Yes",
    "No",
    "Not sure"
]

  return (
    <div className='choices'>
      <div className='choice-list'>
        {choiceText.map((currentChoice, index) =>
          <button key={index} className='choice-btn' onClick={() =>{console.log('KLIK')}} >
            {currentChoice}
            </button> )}</div>
    </div>
  )
}

export default Choices

