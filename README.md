# Stock Market Game
Think you can time the market to grow your money faster? This game lets the player (not) put thier money where their mouth is and see how their money would've grown if they had gotten into/out of the market at the specified times. The rules are easy--just buy and sell whenever you feel the market is ripe and see how your skills compare to a simple buy and hold approach. Did you beat the market?

# Functionality & MVPs

In Stock Market Game, players will be able to:
- Start and reset the game
- Use the keyboard/mouse to toggle the buy and sell button in order to get into (value of their money will follow the index) or out of (value will not change) the market
- Choose from different market indices (Dow Jones, S&P 500) to "play against"
- Choose additional settings such as the background theme, audio tracks/sound effects, and speed/length of gameplay

In addition, this project will include:
- An About page detailing the thesis of the game, meant to illustrate the difficulty of consistently timing the market well, the pitfalls of hindsight bias, and the philosophy pioneered by Vanguard founder, Jack Bogle, which preached investment over speculation
- A production README

# Wireframes

<img width="799">

# Technologies, Libraries, APIs 

This project will be implemented with the following technologies:
- Financial data from APIs, including [https://iexcloud.io/]
- Webpack to bundle the source JavaScript code
- D3 to display the price graph

# Implementation Timeline

- Friday afternoon & Weekend: Set up project skeleton, webpack, and render graph using D3 for the main component of gameplay. Successfully connect financial data API.
- Monday: Implement core functionality such as the buy/sell button, main menu nav, and user control options.
- Tuesday: Begin CSS styling, and fix any API/D3 issues. If time, begin implementing additional features, such as background themes and audio.
- Wednesday: Focus on CSS styling, animations, and making it beautiful and intuitive to the user. If time, implement bonuses, like additional data sources.

# Bonus Features

- Include crypto data as an option
- Allow players to pause the game
- Create custom speed/length of gameplay options




