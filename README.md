

# Tenzies Game

Tenzies is a simple yet exciting dice game where the goal is to select all the dice showing the same number as quickly as possible. This project is built using [Rect 19](https://github.com/facebook/react) and demonstrates interactive gameplay using React components.

---

## Features
- **Interactive Dice Selection**: Players can click on dice to freeze their values.
- **Dynamic Updates**: Dice rolls and number freezes update in real-time.
- **Win Condition**: The game ends when all dice show the same number.
- **Responsive Design**: Suitable for various screen sizes.

---

## How to Play
1. Roll the dice by clicking the "Roll" button.
2. Click on dice to freeze their values.
3. Keep rolling until all dice show the same number.
4. Celebrate your win!

---

## Installation
To run the Tenzies game locally, follow these steps:

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tenzies-game.git
   cd tenzies-game
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the game in your browser:
   ```
   http://localhost:3000
   ```

---

## Code Overview
The project structure includes:

```
Tenzies-Game/
├── src/
│   ├── components/
│   │   ├── dice.js 
│   ├── App.js    
│   └── index.js 
├── public/
│   └── index.html  
├── package.json 
└── README.md 
```

### Key Logic
- **Dice Selection**: Clicking on a die toggles its `isHeld` state.
- **Winning Condition**: The game checks if all dice values are the same and `isHeld` is true.

---

## Technologies Used
- React 19
- JavaScript (ES6+)
- HTML5 & CSS3

---

## Contributions
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your message here'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- Inspired by classic dice games.
- Thanks to the React community for their support!


