import BuySell from './scripts/buy_sell'
import Start from './scripts/start'
import Graph from './scripts/graph'
// import {getData} from './scripts/data'

document.addEventListener("DOMContentLoaded", () => {
    const buttonBuySell = document.getElementById("button-buy-sell")
    new BuySell(buttonBuySell)
    const buttonStart = document.getElementById("button-start")
    new Start(buttonStart)
    const graph = document.getElementById("graph")
    let newGraph = new Graph(graph)
    

    // getData();
})

