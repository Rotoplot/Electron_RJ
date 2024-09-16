import React, { useState } from 'react';
import Joyride from 'react-joyride';



const App = () => {
  const [userInput, setUserInput] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  const [run, setRun] = useState(false);

  const skipButn = false;

  const handleClickStart = () => {
    setRun(true);
  };
  
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleSubmit = () => {
    // Replace 'expectedValue' with the actual value you expect
    if (userInput === 'a') {
      setIsInputValid(true);
    } else {
      alert('Incorrect value. Please try again.');
    }
  };


  const steps = [
    {
      target: '.my-first-step',
      floaterProps: {
        disableAnimation: false,
      },
      spotlightPadding: 20,
      content: 'This is the first step!',
    },
    {
      target: '.my-other-step',
      styles: {
        options: {
          width: 300,
        },
      },
      content: 'This is the second step!',
    },
    {
      target: '.mystepThree',
      content: 'This is the third step!',
    },
    {
        target: '.steptxtbox',
        content: (
          <div>
            <p>Please enter the correct value in the input field.</p>
            <input
              id="name"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Enter value"
              type="text"
            />
            <button onClick={handleSubmit}>Submit</button>
            {isInputValid && <p>Correct!</p>}
          </div>
        ),
        disableBeacon: true, // Disable the beacon for this step
    },
    {
      target: 'body', // We use body to position relative to the window
      content: (
        <div style={{ position: 'absolute', top: '20px', left: '010px', 
        background: '#fff', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          This is a custom tooltip at a specific position!
        </div>
      ),
      placement: 'right', 
    }
  ];


//
  return (
    <div>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton = {skipButn}        
        showProgress={true}  
        styles={{          
            buttonNext: {
            background: '#812990'
        },
            options: {
              arrowColor: '#e3ffeb',
              backgroundColor: '#e3ffeb',
              overlayColor: 'rgba(0, 0, 0, 0.5)',
              spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
              primaryColor: '#000',
              textColor: '#004a14',
              width: 380,
            zIndex: 10000,
          },
          
        }}
      />
      <div className="my-first-step">
        <h1>Welcome to Electron with React!</h1>
      </div>
      <div className="my-other-step">
        <button onClick={handleClickStart}>click here to Start Onboarding</button>
      </div>
      <div className="mystepThree">
        <p  >another line</p>
      </div>
      <div className='steptxtbox'>
        <p>Value to enter : </p>
        <input />
      </div>
    </div>
  );
};

export default App;
