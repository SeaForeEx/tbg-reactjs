/* eslint-disable react/no-array-index-key */
// Disable the linting rule that warns against using array index as keys for now.

import React, { Component } from 'react';

class TextGame extends Component {
  // Define the scenes of the game as an object.
  scenes = {
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

  constructor() {
    super();
    // Initialize the component's state with the 'currentScene' set to 'start'.
    this.state = {
      currentScene: 'start',
    };
  }

  // Function to handle player choices and update the current scene.
  handleChoice(choice) {
    const { currentScene } = this.state; // Destructure the state object to get 'currentScene'.
    const currentSceneData = this.scenes[currentScene]; // Get data for the current scene.

    // Check if the chosen 'choice' is a valid option for the current scene.
    if (choice in currentSceneData.choices) {
      // Get the next scene based on the player's choice.
      const nextScene = currentSceneData.choices[choice];
      // Update the 'currentScene' in the component's state to navigate to the next scene.
      this.setState({ currentScene: nextScene });
    }
  }

  render() {
    const { currentScene } = this.state; // Destructure the state object to get 'currentScene'.
    const currentSceneData = this.scenes[currentScene]; // Get data for the current scene.

    return (
      <div>
        <h1>Text-Based Adventure Game</h1>
        <p>{currentSceneData.text}</p>

        {/* Render choices as buttons */}
        <div>
          {/* Map over the choices for the current scene and render them as buttons */}
          {Object.keys(currentSceneData.choices).map((choice, index) => (
            <button
              key={index}
              type="button" // Specify the type attribute as "button"
              onClick={() => this.handleChoice(choice)} // Call the handleChoice function with the chosen 'choice'
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default TextGame;
