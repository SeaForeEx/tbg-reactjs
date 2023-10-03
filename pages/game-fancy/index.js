/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

// Define the scenes of the game as an object.
const scenes = {
  start: {
    text: 'You are standing at a door. Let\'s go in!',
    choices: {
      enter: 'room2',
    },
  },
  room1: {
    text: 'You see Eric Frey in the corner, playing an upright bass that he built himself with a milk carton and some rat hairs.',
    choices: {
      north: 'room5',
      east: 'room2',
    },
  },
  room2: {
    text: 'You enter Nashville Software School, a sign on the wall says BEWARE YE WHO DEPEND ON CHATGPT.',
    choices: {
      west: 'room1',
      east: 'room3',
    },
  },
  room3: {
    text: 'Aja is trying to explain to Charles how inventory works for Hip-Hop Pizza and Wangs and he is in tears',
    choices: {
      west: 'room2',
      east: 'room4',
    },
  },
  room4: {
    text: 'Justin Ferwerda is counting fat stacks of dollar bills because the dude is a genius.  He ignores Charles screaming for his help in the other room.',
    choices: {
      west: 'room3',
      north: 'room8',
    },
  },
  room5: {
    text: 'AJ is writing lyrics to the tasty bass licks Eric is laying down in the other room',
    choices: {
      north: 'room9',
      south: 'room1',
    },
  },
  room6: {
    text: 'Mark Hamilton is teaching the latest Cohort all about the Back End',
    choices: {
      north: 'room10',
      east: 'room7',
    },
  },
  room7: {
    text: 'Trinity is counting down the days that Charles graduates so she does\'t have to hear any more of his Matrix jokes',
    choices: {
      west: 'room6',
      east: 'room8',
    },
  },
  room8: {
    text: 'Wesley and Van are building the next big fashion app that will change the tech industry and the world.',
    choices: {
      west: 'room7',
      south: 'room4',
    },
  },
  room9: {
    text: 'Ryan is dealing with a bug in his back end capstone, cursing so much that he invented new profanities.',
    choices: {
      east: 'room10',
      south: 'room5',
    },
  },
  room10: {
    text: 'Allison is trying to figure out which company she is going to take over when she graduates, she has already turned down job applications from Eric and Charles.',
    choices: {
      west: 'room9',
      north: 'room14',
      south: 'room6',
    },
  },
  room11: {
    text: 'DeDe is working on a website that sells snacks called DEDE\'S NUTS',
    choices: {
      north: 'room15',
      east: 'room12',
    },
  },
  room12: {
    text: 'You are at a dead end.  Many students feel this way during the Bootcamp but please believe you can do this.  KEEP GOING!',
    choices: {
      west: 'room11',
    },
  },
  room13: {
    text: 'Danny is working on a driving simulation.  Also, he didn\'t show up to Allison\'s celebration party after we graduated.  Yes, Charles graduated, but for the sake of this game he is still a student.  He also wrote this game which is why he is mentioned frequently.  Get over it, Ryan!',
    choices: {
      east: 'room14',
    },
  },
  room14: {
    text: 'John and April are chatting in the instructor\'s lounge about how Cohort E21 is the greatest NSS Cohort of ALL TIME.',
    choices: {
      west: 'room13',
      east: 'room15',
    },
  },
  room15: {
    text: 'Ashley and Michael are chatting about how many job offers Charles has turned down because he is waiting for Bill Gates to call.',
    choices: {
      west: 'room2',
      south: 'room11',
      east: 'room16',
    },
  },
  room16: {
    text: 'You are almost out of NSS, ready to graduate.  Because all you have to do to graduate in this game is get out of the building, isn\'t that great?!  Dr. T is all that stands between you and freedom.  She asks you a singular question.  Who is Charles begging to help him with his coding?  (If you answer wrong, you start all over again)',
    choices: {
      aja: 'start',
      justin: 'end',
      april: 'start',
      john: 'start',
    },
  },
  end: {
    text: 'You guessed correctly and have exited NSS.  CONGRATULATIONS, you are now a Software Engineer, now go make that paper!',
    choices: {
      restart: 'start',
    },
  },
};

function FancyTextGame() {
  // Define and initialize the current scene state using the 'useState' hook.
  const [currentScene, setCurrentScene] = useState('start');

  // Define a function to handle player choices.
  const handleChoice = (choice) => {
    // Get data for the current scene based on the 'currentScene' state.
    const currentSceneData = scenes[currentScene];

    // Check if the chosen 'choice' is valid for the current scene.
    if (choice in currentSceneData.choices) {
      // Get the next scene based on the player's choice.
      const nextScene = currentSceneData.choices[choice];
      // Update the 'currentScene' state to navigate to the next scene.
      setCurrentScene(nextScene);
    }
  };

  // Get data for the current scene based on the 'currentScene' state.
  const currentSceneData = scenes[currentScene];

  return (
    <div>
      <h1>Text-Based Adventure Game</h1>
      <p>{currentSceneData.text}</p>

      {/* Render choices as buttons */}
      <div>
        {Object.keys(currentSceneData.choices).map((choice, index) => (
          <button
            key={index} // Use the index as a unique key (not recommended for production).
            type="button" // Specify the type attribute as "button."
            onClick={() => handleChoice(choice)} // Call the handleChoice function with the chosen 'choice.'
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

// Export the 'TextGame' component for use in other parts of your application.
export default FancyTextGame;
