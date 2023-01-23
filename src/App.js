
import Exercise from './Component/Exersice';

import { useState, useEffect } from 'react';

function App() {

  const [bodyText, setBodyText] = useState('users');

  const [subBodyText, setSubBodyText] = useState(0);

  useEffect(() => {
    console.log("ha ha");
  }, [subBodyText, bodyText]);

  return (
    <>
      <div>
        <Exercise

          name="Pathum Nissanka"
          score="762"
          average="29.30"
          innings="27"
        />

        <Exercise
          name="Kusal Mendis"
          score="624"
          average="29.71"
          innings="23"
        />

        <Exercise
          name="Dasun Shanaka"
          score="621"
          average="31.05"
          innings="27"
        />
        {/* 
      <Component01 taskName="Task 01" stat="stat01" />
      <Component01 taskName="Task 02" stat="stat02" />

      <Mapping />

      <Exercise02 /> */}



      </div>

      {/*---------------------------------------------------- useEffect lesson----------------------------------------------------------------------- */}

      <div>
        <button

          style={{

           background: 'red',
            margin: '10px'

          }}

          onClick={() => {

            setBodyText('Users')

          }}>
          Users

        </button>

        <button
          onClick={() => {
            setBodyText('Posts');
          }}>

          Posts

        </button>

        <button

          onClick={() => {
            setBodyText('About Us');
          }}>

          About Us

        </button>
      </div>

      <h1>{bodyText}</h1>
      <h1> {subBodyText} </h1>

      <button
        onClick={() => {
          setSubBodyText(subBodyText + 1);
        }}
      >
        click me
      </button>


      <button

        onClick={() => {
          setSubBodyText(subBodyText - 1);
        }}
      >
        Remove
      </button>


    </>
  );
}

export default App;
