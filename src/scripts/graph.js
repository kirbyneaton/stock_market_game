class Graph {
    constructor(game){
        this.game;
        // this.game.innerHTML =
        this.setupGraph();
        chartIt();

    }

    setupGraph(){
        const body = document.body;
        const div = document.createElement("div");
        div.innerText = getData();
        body.append(div);
        // div.setAttribute("id", "graph");
        const svg = document.getElementById('graph')
    } 

}

const graph_container = d3.select('div')
    .classed('graph', true);


async function getData() {
    const url = 'https://api.twelvedata.com/time_series?apikey=1d5e9b5c56104912ab90d8f25ca9a8e3&interval=1day&symbol=GSPC&country=United States&type=index&dp=2&start_date=2021-01-01 15:19:00&end_date=2021-12-31 15:19:00&format=JSON&previous_close=true&outputsize=366';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getData().then(data => {
    // const { values } = data;
    console.log(data);
    document.getElementById("graph").textContent = data.values;
    // document.getElementById('graph') = URL.createObjectURL(data);
    
});

export default Graph;


// old api
// https://sandbox.iexapis.com/stable/stock/AAPL/quote?token=Tpk_23574522c6f647ef96d53c57caf6bc25