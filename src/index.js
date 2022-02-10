import BuySell from './scripts/buy_sell'
import Start from './scripts/start'
import Graph from './scripts/graph'

document.addEventListener("DOMContentLoaded", () => {
    const buttonBuySell = document.getElementById("button-buy-sell")
    new BuySell(buttonBuySell)
    const buttonStart = document.getElementById("button-start")
    new Start(buttonStart)
    const graph = document.getElementById("graph")
    new Graph(graph)
    
    //modal
    const modal = document.getElementById("modal");
    const aboutButton = document.getElementById("about");
    const closeButton = document.getElementsByClassName("modal-close")[0];
    aboutButton.onclick = function() {
        modal.style.display = "block";
    }
    closeButton.onclick =  function (){
        modal.style.display = "none";
    }

})

