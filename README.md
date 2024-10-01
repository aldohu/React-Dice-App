# Dice Roll App

A simple dice roll app that fetches dice images from an API and displays them with smooth animations when the dice are rolled.

## Features
- Roll two dice by clicking a button.
- Fetch dice images dynamically from an API.
- Button disables while fetching the dice images.
- Dice animations on roll.
- State management for dice values and button.

## Components
### Dice Component
- Renders a dice image based on the current dice state.
- Fetches the dice image from the API.

## Project Plan

Here are the steps followed to complete this project:

- [x] **Create dice component**: A component that handles individual dice display.
- [x] **Pull images for dice from API**: Fetches dice images dynamically from a public API.
- [x] **Make states for button and disable during request**: The button is disabled while images for the dice are being fetched to prevent multiple clicks.
- [x] **Make state for dice one and dice two**: Two separate states manage the dice values.
- [x] **Animate dice on roll**: Add animations to the dice when their values change on button click.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dice-roll-app.git
