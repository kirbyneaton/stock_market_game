class Graph {
    constructor(game){
        this.game;
        getData();
        this.setupGraph(); 
    }


    async setupGraph(){
        // const body = document.body;
        // const div = document.createElement("div");
        // // div.innerText = chart;
        // // getData();
        // body.append(div);
        // // div.setAttribute("id", "graph");
        // const svg = document.getElementById('graph')
        
        let datePrice = await getData();

        const graphContainer = d3.select("#graph")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

        const x = d3.scaleTime().domain(d3.extent(datePrice, function(d) {return d["date"]})).range([0, 400]);
        graphContainer.append("g").attr("transform", "translate(50,400)").call(d3.axisBottom(x));

        const y = d3.scaleLinear().domain([5000,3500]).range([0, 400]);
        graphContainer.append("g").attr("transform", "translate(50,0)").call(d3.axisLeft(y));

        graphContainer.append("path")
            .datum(datePrice)
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("fill", "none")
            .attr("transform", "translate(50,0)")
            .attr("d",d3.line()
                .x((d) => {return x(d["date"])})
                .y((d) => {return y(d["price"])})
            );

        
            

        
    } 
    

}

const fakeData = [[1, 1], [2, 2], [3, 3], [4, 4]];

function formatDate(datestr) {
    return d3.timeParse("%Y-%m-%d")(datestr);
}
function formatPrice(pricestr){
    return parseFloat(pricestr);
}


async function getData() {
    const url = 'https://api.twelvedata.com/time_series?apikey=1d5e9b5c56104912ab90d8f25ca9a8e3&interval=1day&symbol=GSPC&country=United States&type=index&dp=2&start_date=2021-01-01 15:19:00&end_date=2021-12-31 15:19:00&format=JSON&previous_close=true&outputsize=366';
    const response = await fetch(url); 
    const data = await response.json();
    const closePrice = data.values.map((ele) => { return { date: formatDate(ele['datetime']), price: formatPrice(ele['close']) }});
    return closePrice;
}


getData().then(ele => {
    
    console.log(ele);
    
    // document.getElementById("graph").textContent = close;
    // document.getElementById('graph') = URL.createObjectURL(data);
    
});

export default Graph;



// old api
// https://sandbox.iexapis.com/stable/stock/AAPL/quote?token=Tpk_23574522c6f647ef96d53c57caf6bc25