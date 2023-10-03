/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

// Define the scenes of the game as an object.
const scenes = {
  start: {
    text: 'You are standing at a crossroad. Do you want to go left or right?',
    choices: {
      left: 'forest',
      right: 'cave',
    },
  },
  forest: {
    text: 'You find yourself in a dense forest. There is a path leading deeper into the forest or back to the crossroad.',
    choices: {
      deeper: 'treasure',
      back: 'start',
    },
  },
  cave: {
    text: 'You enter a dark cave. It\'s very cold and damp. You see two tunnels, one on the left and one on the right.',
    choices: {
      left: 'treasure',
      right: 'dragon',
    },
  },
  treasure: {
    text: 'Congratulations! You have found the treasure and won the game!',
    choices: {
      restart: 'start',
    },
  },
  dragon: {
    text: 'Oh no! You encountered a fearsome dragon and got burned to ashes. Game over.',
    choices: {
      restart: 'start',
    },
  },
};

function TextGame() {
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
export default TextGame;
