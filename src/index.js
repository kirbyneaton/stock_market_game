import Controls from './scripts/controls'
import Graph from './scripts/graph'
// import {getData} from './scripts/data'

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main")
    new Controls(main)
    const graph = document.getElementById("graph")
    new Graph(graph)
    

    // getData();
})

