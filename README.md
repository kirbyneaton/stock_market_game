# Overview

Think you can time the market to grow your money faster? This game simulates how a player's money would compare to a market index if they had instead elected to sell and get out of the market at a specified time. The game is meant to illustrate the difficulty of consistently timing the market well, the pitfalls of hindsight bias, and the philosophy pioneered by Vanguard founder, Jack Bogle, which preached investment over speculation.

The rules are easy: click the start button to begin investing and then click the sell button whenever you feel the market is ripe to see how your market-timing skills compare in the long-run against a simple buy and hold approach. Did you beat the market?

<a href="https://kirbyneaton.github.io/stock_market_game/">Live Site</a>

# Table of Contents
- [Overview](#overview)
- [Functionality and MVPs](#functionality-and-mvps)
- [Technologies, Libraries, APIs](#technologies-libraries-apis)
- [Core Features](#core-features)
- [Future Directions](#future-directions)

# Functionality and MVPs

In Ride the Bull, players are able to:
- Open a "How to Play" overlay with instructions and click Start to begin the game
- See the value of their money as it follows the market index
- Sell and freeze the value of their portfolio to compare against the market when time is up

# Technologies, Libraries, APIs 

This project was implemented with the following technologies:
- Financial data from APIs, including [https://twelvedata.com/] and [https://www.marketwatch.com/]
- Webpack to bundle the source JavaScript code
- D3 to display the price graph

# Core Features

- Feature 1: Clicking Start button animates the graph, tracking realtime coordnates
```javascript
this.timer = setInterval(this.draw.bind(this), 80);
```
```javascript
async draw(){
        
        if (this.graphContainer === undefined){ return };
        if (this.i >= 251){
            clearInterval(this.timer);
        };
        if (this.started){
        this.graphContainer.append("path")
            .datum([this.data[this.i], this.data[this.i + 1]])
            .attr("stroke", "#1aaab2")
            .attr("stroke-width", 1.5)
            .attr("fill", "none")
            .attr("transform", "translate(50,40)")
            .attr("d", d3.line()
                .x((d) => { return this.x(d["date"]); })
                .y((d) => { return this.y(d["price"]); })
            );
        if (!this.sold){
            this.updateScore();
        }
        this.updateMarketValue();
        this.updateDiff();
        this.i += 1;
        };
    }
```

- Feature 2: Clicking Sell button stops the user's score from tracking the market and begins calculating the difference
```javascript
if (!this.sold){
            this.updateScore();
        }
```
```javascript
 updateScore(){
        this.score = this.data[this.i]["price"];
        const score = document.getElementById("score");
        score.innerHTML = this.score;
    }
```

# Future Directions

- Visually indicate the "Sell" on the graph
- Allow for multiple buy/sell cycles
- Be able to choose from different market indices (Dow Jones, S&P 500, crypto) to "play against"
- Be able to choose additional settings such as audio tracks/sound effects, and speed/length of gameplay




