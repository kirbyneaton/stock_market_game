class Graph {
    constructor(){
        
        this.i = 0;
        this.graphContainer;
        this.setupGraph();
        this.data = [];
        this.test();
        this.x;
        this.y;
        
        this.timer = setInterval(this.test.bind(this),100);
    }

    async test(){
        
        if (this.graphContainer === undefined){ return };
        if (this.i >= 251){
            clearInterval(this.timer);
        }
        this.graphContainer.append("path")
            .datum([this.data[this.i], this.data[this.i + 1]])
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("fill", "none")
            .attr("transform", "translate(50,0)")
            .attr("d", d3.line()
                .x((d) => { return this.x(d["date"]); })
                .y((d) => { return this.y(d["price"]); })
            );
        
        this.i += 1;
        console.log(this.data);
        
    }

    async setupGraph(){
        // const body = document.body;
        // const div = document.createElement("div");
        // // div.innerText = chart;
        // // getData();
        // body.append(div);
        // // div.setAttribute("id", "graph");
        // const svg = document.getElementById('graph')
        
        this.data = await getData();
        

        this.graphContainer = d3.select("#graph")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

        this.x = d3.scaleTime().domain(d3.extent(this.data, function(d) {return d["date"]})).range([0, 400]);
        this.graphContainer.append("g").attr("transform", "translate(50,400)").call(d3.axisBottom(this.x));

        this.y = d3.scaleLinear().domain([5000,3500]).range([0, 400]);
        this.graphContainer.append("g").attr("transform", "translate(50,0)").call(d3.axisLeft(this.y));

    }
}



// function animateLine() {
//     return console.log(getData());
    
//     // return function(t){
//     //     return line(datePrice.slice(start,end));
//     // } 
// };

// function incrementProgress(){
//     return progress += 1;
// }

// const fakeData = [[1, 1], [2, 2], [3, 3], [4, 4]];

function formatDate(datestr) {
    return d3.timeParse("%Y-%m-%d")(datestr);
}
function formatPrice(pricestr){
    return parseFloat(pricestr);
}

async function getData() {
    // const url = 'SP500lastyrdata.csv'
    // const response = await fetch(url); 
    // const data = await response.json();
    const data = getCsv();
    const closePrice = data.map((ele) => { return { date: formatDate(ele['datetime']), price: formatPrice(ele['close']) }});  //put back data.values.map for api
    return closePrice;
}


getData().then(ele => {
    
    console.log(ele);
    
    // document.getElementById("graph").textContent = close;
    // document.getElementById('graph') = URL.createObjectURL(data);
    
});





export default Graph;



// API:
// 'https://api.twelvedata.com/time_series?apikey=1d5e9b5c56104912ab90d8f25ca9a8e3&interval=1day&symbol=GSPC&country=United States&type=index&dp=2&start_date=2021-01-01 15:19:00&end_date=2021-12-31 15:19:00&format=JSON&previous_close=true&outputsize=366';

// old api
// https://sandbox.iexapis.com/stable/stock/AAPL/quote?token=Tpk_23574522c6f647ef96d53c57caf6bc25


function getCsv(){
    let csvData =
        [
            {
                datetime: "2022-02-07",
                open: "4505.75",
                high: "4521.86",
                low: "4471.47",
                close: "4483.87"
            },
            {
                datetime: "2022-02-04",
                open: "4482.79",
                high: "4539.66",
                low: "4451.5",
                close: "4500.53"
            },
            {
                datetime: "2022-02-03",
                open: "4535.41",
                high: "4542.88",
                low: "4470.39",
                close: "4477.44"
            },
            {
                datetime: "2022-02-02",
                open: "4566.39",
                high: "4595.31",
                low: "4544.32",
                close: "4589.38"
            },
            {
                datetime: "2022-02-01",
                open: "4519.57",
                high: "4550.49",
                low: "4483.53",
                close: "4546.54"
            },
            {
                datetime: "2022-01-31",
                open: "4431.79",
                high: "4516.89",
                low: "4414.02",
                close: "4515.55"
            },
            {
                datetime: "2022-01-28",
                open: "4336.19",
                high: "4432.72",
                low: "4292.46",
                close: "4431.85"
            },
            {
                datetime: "2022-01-27",
                open: "4380.58",
                high: "4428.74",
                low: "4309.5",
                close: "4326.51"
            },
            {
                datetime: "2022-01-26",
                open: "4408.43",
                high: "4453.23",
                low: "4304.8",
                close: "4349.93"
            },
            {
                datetime: "2022-01-25",
                open: "4366.64",
                high: "4411.01",
                low: "4287.11",
                close: "4356.45"
            },
            {
                datetime: "2022-01-24",
                open: "4356.32",
                high: "4417.35",
                low: "4222.62",
                close: "4410.13"
            },
            {
                datetime: "2022-01-21",
                open: "4471.38",
                high: "4494.52",
                low: "4395.34",
                close: "4397.94"
            },
            {
                datetime: "2022-01-20",
                open: "4547.35",
                high: "4602.11",
                low: "4477.95",
                close: "4482.73"
            },
            {
                datetime: "2022-01-19",
                open: "4588.03",
                high: "4611.55",
                low: "4530.2",
                close: "4532.76"
            },
            {
                datetime: "2022-01-18",
                open: "4632.24",
                high: "4632.24",
                low: "4568.7",
                close: "4577.11"
            },
            {
                datetime: "2022-01-14",
                open: "4637.99",
                high: "4665.13",
                low: "4614.75",
                close: "4662.85"
            },
            {
                datetime: "2022-01-13",
                open: "4733.56",
                high: "4744.13",
                low: "4650.29",
                close: "4659.03"
            },
            {
                datetime: "2022-01-12",
                open: "4728.59",
                high: "4748.83",
                low: "4706.71",
                close: "4726.35"
            },
            {
                datetime: "2022-01-11",
                open: "4669.14",
                high: "4714.13",
                low: "4638.27",
                close: "4713.07"
            },
            {
                datetime: "2022-01-10",
                open: "4655.34",
                high: "4673.02",
                low: "4582.24",
                close: "4670.29"
            },
            {
                datetime: "2022-01-07",
                open: "4697.66",
                high: "4707.95",
                low: "4662.74",
                close: "4677.03"
            },
            {
                datetime: "2022-01-06",
                open: "4693.39",
                high: "4725.01",
                low: "4671.26",
                close: "4696.05"
            },
            {
                datetime: "2022-01-05",
                open: "4787.99",
                high: "4797.7",
                low: "4699.44",
                close: "4700.58"
            },
            {
                datetime: "2022-01-04",
                open: "4804.51",
                high: "4818.62",
                low: "4774.27",
                close: "4793.54"
            },
            {
                datetime: "2022-01-03",
                open: "4778.14",
                high: "4796.64",
                low: "4758.17",
                close: "4796.56"
            },
            {
                datetime: "2021-12-31",
                open: "4775.21",
                high: "4786.83",
                low: "4765.75",
                close: "4766.18"
            },
            {
                datetime: "2021-12-30",
                open: "4794.23",
                high: "4808.93",
                low: "4775.33",
                close: "4778.73"
            },
            {
                datetime: "2021-12-29",
                open: "4788.64",
                high: "4804.06",
                low: "4778.08",
                close: "4793.06"
            },
            {
                datetime: "2021-12-28",
                open: "4795.49",
                high: "4807.02",
                low: "4780.04",
                close: "4786.35"
            },
            {
                datetime: "2021-12-27",
                open: "4733.99",
                high: "4791.49",
                low: "4733.99",
                close: "4791.19"
            },
            {
                datetime: "2021-12-23",
                open: "4703.96",
                high: "4740.74",
                low: "4703.96",
                close: "4725.79"
            },
            {
                datetime: "2021-12-22",
                open: "4650.36",
                high: "4697.67",
                low: "4645.53",
                close: "4696.56"
            },
            {
                datetime: "2021-12-21",
                open: "4594.96",
                high: "4651.14",
                low: "4583.16",
                close: "4649.23"
            },
            {
                datetime: "2021-12-20",
                open: "4587.9",
                high: "4587.9",
                low: "4531.1",
                close: "4568.02"
            },
            {
                datetime: "2021-12-17",
                open: "4652.5",
                high: "4666.7",
                low: "4600.22",
                close: "4620.64"
            },
            {
                datetime: "2021-12-16",
                open: "4719.13",
                high: "4731.99",
                low: "4651.89",
                close: "4668.67"
            },
            {
                datetime: "2021-12-15",
                open: "4636.46",
                high: "4712.6",
                low: "4611.22",
                close: "4709.85"
            },
            {
                datetime: "2021-12-14",
                open: "4642.99",
                high: "4660.47",
                low: "4606.52",
                close: "4634.09"
            },
            {
                datetime: "2021-12-13",
                open: "4710.3",
                high: "4710.3",
                low: "4667.6",
                close: "4668.97"
            },
            {
                datetime: "2021-12-10",
                open: "4687.64",
                high: "4713.57",
                low: "4670.24",
                close: "4712.02"
            },
            {
                datetime: "2021-12-09",
                open: "4691",
                high: "4695.26",
                low: "4665.98",
                close: "4667.45"
            },
            {
                datetime: "2021-12-08",
                open: "4690.86",
                high: "4705.06",
                low: "4674.52",
                close: "4701.21"
            },
            {
                datetime: "2021-12-07",
                open: "4631.97",
                high: "4694.04",
                low: "4631.97",
                close: "4686.75"
            },
            {
                datetime: "2021-12-06",
                open: "4548.37",
                high: "4612.6",
                low: "4540.51",
                close: "4591.67"
            },
            {
                datetime: "2021-12-03",
                open: "4589.49",
                high: "4608.03",
                low: "4495.12",
                close: "4538.43"
            },
            {
                datetime: "2021-12-02",
                open: "4504.73",
                high: "4595.46",
                low: "4504.73",
                close: "4577.1"
            },
            {
                datetime: "2021-12-01",
                open: "4602.82",
                high: "4652.94",
                low: "4510.27",
                close: "4513.04"
            },
            {
                datetime: "2021-11-30",
                open: "4640.25",
                high: "4646.02",
                low: "4560",
                close: "4567"
            },
            {
                datetime: "2021-11-29",
                open: "4628.75",
                high: "4672.95",
                low: "4625.26",
                close: "4655.27"
            },
            {
                datetime: "2021-11-26",
                open: "4664.63",
                high: "4664.63",
                low: "4585.43",
                close: "4594.62"
            },
            {
                datetime: "2021-11-24",
                open: "4675.78",
                high: "4702.87",
                low: "4659.89",
                close: "4701.46"
            },
            {
                datetime: "2021-11-23",
                open: "4678.48",
                high: "4699.39",
                low: "4652.66",
                close: "4690.7"
            },
            {
                datetime: "2021-11-22",
                open: "4712",
                high: "4743.83",
                low: "4682.17",
                close: "4682.94"
            },
            {
                datetime: "2021-11-19",
                open: "4708.44",
                high: "4717.75",
                low: "4694.22",
                close: "4697.96"
            },
            {
                datetime: "2021-11-18",
                open: "4700.72",
                high: "4708.8",
                low: "4672.78",
                close: "4704.54"
            },
            {
                datetime: "2021-11-17",
                open: "4701.5",
                high: "4701.5",
                low: "4684.41",
                close: "4688.67"
            },
            {
                datetime: "2021-11-16",
                open: "4679.42",
                high: "4714.95",
                low: "4679.42",
                close: "4700.9"
            },
            {
                datetime: "2021-11-15",
                open: "4689.3",
                high: "4697.42",
                low: "4672.86",
                close: "4682.8"
            },
            {
                datetime: "2021-11-12",
                open: "4655.24",
                high: "4688.47",
                low: "4650.77",
                close: "4682.85"
            },
            {
                datetime: "2021-11-11",
                open: "4659.39",
                high: "4664.55",
                low: "4648.31",
                close: "4649.27"
            },
            {
                datetime: "2021-11-10",
                open: "4670.26",
                high: "4684.85",
                low: "4630.86",
                close: "4646.71"
            },
            {
                datetime: "2021-11-09",
                open: "4707.25",
                high: "4708.53",
                low: "4670.87",
                close: "4685.25"
            },
            {
                datetime: "2021-11-08",
                open: "4701.48",
                high: "4714.92",
                low: "4694.39",
                close: "4701.7"
            },
            {
                datetime: "2021-11-05",
                open: "4699.26",
                high: "4718.5",
                low: "4681.32",
                close: "4697.53"
            },
            {
                datetime: "2021-11-04",
                open: "4662.93",
                high: "4683",
                low: "4662.59",
                close: "4680.06"
            },
            {
                datetime: "2021-11-03",
                open: "4630.65",
                high: "4663.46",
                low: "4621.19",
                close: "4660.57"
            },
            {
                datetime: "2021-11-02",
                open: "4613.34",
                high: "4635.15",
                low: "4613.34",
                close: "4630.65"
            },
            {
                datetime: "2021-11-01",
                open: "4610.62",
                high: "4620.34",
                low: "4595.06",
                close: "4613.67"
            },
            {
                datetime: "2021-10-29",
                open: "4572.87",
                high: "4608.08",
                low: "4567.59",
                close: "4605.38"
            },
            {
                datetime: "2021-10-28",
                open: "4562.84",
                high: "4597.55",
                low: "4562.84",
                close: "4596.42"
            },
            {
                datetime: "2021-10-27",
                open: "4580.22",
                high: "4584.57",
                low: "4551.66",
                close: "4551.68"
            },
            {
                datetime: "2021-10-26",
                open: "4578.69",
                high: "4598.53",
                low: "4569.17",
                close: "4574.79"
            },
            {
                datetime: "2021-10-25",
                open: "4553.69",
                high: "4572.62",
                low: "4537.36",
                close: "4566.48"
            },
            {
                datetime: "2021-10-22",
                open: "4546.12",
                high: "4559.67",
                low: "4524",
                close: "4544.9"
            },
            {
                datetime: "2021-10-21",
                open: "4532.24",
                high: "4551.44",
                low: "4526.89",
                close: "4549.78"
            },
            {
                datetime: "2021-10-20",
                open: "4524.42",
                high: "4540.87",
                low: "4524.4",
                close: "4536.19"
            },
            {
                datetime: "2021-10-19",
                open: "4497.34",
                high: "4520.4",
                low: "4496.41",
                close: "4519.63"
            },
            {
                datetime: "2021-10-18",
                open: "4463.72",
                high: "4488.75",
                low: "4447.47",
                close: "4486.46"
            },
            {
                datetime: "2021-10-15",
                open: "4447.69",
                high: "4475.82",
                low: "4447.69",
                close: "4471.37"
            },
            {
                datetime: "2021-10-14",
                open: "4386.75",
                high: "4439.73",
                low: "4386.75",
                close: "4438.26"
            },
            {
                datetime: "2021-10-13",
                open: "4358.01",
                high: "4372.87",
                low: "4329.92",
                close: "4363.8"
            },
            {
                datetime: "2021-10-12",
                open: "4368.31",
                high: "4374.89",
                low: "4342.09",
                close: "4350.65"
            },
            {
                datetime: "2021-10-11",
                open: "4385.44",
                high: "4415.88",
                low: "4360.59",
                close: "4361.19"
            },
            {
                datetime: "2021-10-08",
                open: "4406.51",
                high: "4412.02",
                low: "4386.22",
                close: "4391.34"
            },
            {
                datetime: "2021-10-07",
                open: "4383.73",
                high: "4429.97",
                low: "4383.73",
                close: "4399.76"
            },
            {
                datetime: "2021-10-06",
                open: "4319.57",
                high: "4365.57",
                low: "4290.49",
                close: "4363.55"
            },
            {
                datetime: "2021-10-05",
                open: "4309.87",
                high: "4369.23",
                low: "4309.87",
                close: "4345.72"
            },
            {
                datetime: "2021-10-04",
                open: "4348.84",
                high: "4355.51",
                low: "4278.94",
                close: "4300.46"
            },
            {
                datetime: "2021-10-01",
                open: "4317.16",
                high: "4375.19",
                low: "4288.52",
                close: "4357.04"
            },
            {
                datetime: "2021-09-30",
                open: "4370.67",
                high: "4382.55",
                low: "4306.24",
                close: "4307.54"
            },
            {
                datetime: "2021-09-29",
                open: "4362.41",
                high: "4385.57",
                low: "4355.08",
                close: "4359.46"
            },
            {
                datetime: "2021-09-28",
                open: "4419.54",
                high: "4419.54",
                low: "4346.33",
                close: "4352.63"
            },
            {
                datetime: "2021-09-27",
                open: "4442.12",
                high: "4457.3",
                low: "4436.19",
                close: "4443.11"
            },
            {
                datetime: "2021-09-24",
                open: "4438.04",
                high: "4463.12",
                low: "4430.27",
                close: "4455.48"
            },
            {
                datetime: "2021-09-23",
                open: "4406.75",
                high: "4465.4",
                low: "4406.75",
                close: "4448.98"
            },
            {
                datetime: "2021-09-22",
                open: "4367.43",
                high: "4416.75",
                low: "4367.43",
                close: "4395.64"
            },
            {
                datetime: "2021-09-21",
                open: "4374.45",
                high: "4394.87",
                low: "4347.96",
                close: "4354.19"
            },
            {
                datetime: "2021-09-20",
                open: "4402.95",
                high: "4402.95",
                low: "4305.91",
                close: "4357.73"
            },
            {
                datetime: "2021-09-17",
                open: "4469.74",
                high: "4471.52",
                low: "4427.76",
                close: "4432.99"
            },
            {
                datetime: "2021-09-16",
                open: "4477.09",
                high: "4485.87",
                low: "4443.8",
                close: "4473.75"
            },
            {
                datetime: "2021-09-15",
                open: "4447.49",
                high: "4486.87",
                low: "4438.37",
                close: "4480.7"
            },
            {
                datetime: "2021-09-14",
                open: "4479.33",
                high: "4485.68",
                low: "4435.46",
                close: "4443.05"
            },
            {
                datetime: "2021-09-13",
                open: "4474.81",
                high: "4492.99",
                low: "4445.7",
                close: "4468.73"
            },
            {
                datetime: "2021-09-10",
                open: "4506.92",
                high: "4520.47",
                low: "4457.66",
                close: "4458.58"
            },
            {
                datetime: "2021-09-09",
                open: "4513.02",
                high: "4529.9",
                low: "4492.07",
                close: "4493.28"
            },
            {
                datetime: "2021-09-08",
                open: "4518.09",
                high: "4521.79",
                low: "4493.95",
                close: "4514.07"
            },
            {
                datetime: "2021-09-07",
                open: "4535.38",
                high: "4535.38",
                low: "4513",
                close: "4520.03"
            },
            {
                datetime: "2021-09-03",
                open: "4532.42",
                high: "4541.45",
                low: "4521.3",
                close: "4535.43"
            },
            {
                datetime: "2021-09-02",
                open: "4534.48",
                high: "4545.85",
                low: "4524.66",
                close: "4536.95"
            },
            {
                datetime: "2021-09-01",
                open: "4528.8",
                high: "4537.11",
                low: "4522.02",
                close: "4524.09"
            },
            {
                datetime: "2021-08-31",
                open: "4529.75",
                high: "4531.39",
                low: "4515.8",
                close: "4522.68"
            },
            {
                datetime: "2021-08-30",
                open: "4513.76",
                high: "4537.36",
                low: "4513.76",
                close: "4528.79"
            },
            {
                datetime: "2021-08-27",
                open: "4474.1",
                high: "4513.33",
                low: "4474.1",
                close: "4509.37"
            },
            {
                datetime: "2021-08-26",
                open: "4493.75",
                high: "4495.9",
                low: "4468.99",
                close: "4470"
            },
            {
                datetime: "2021-08-25",
                open: "4490.45",
                high: "4501.71",
                low: "4485.66",
                close: "4496.19"
            },
            {
                datetime: "2021-08-24",
                open: "4484.4",
                high: "4492.81",
                low: "4482.28",
                close: "4486.23"
            },
            {
                datetime: "2021-08-23",
                open: "4450.29",
                high: "4489.88",
                low: "4450.29",
                close: "4479.53"
            },
            {
                datetime: "2021-08-20",
                open: "4410.56",
                high: "4444.35",
                low: "4406.8",
                close: "4441.67"
            },
            {
                datetime: "2021-08-19",
                open: "4382.44",
                high: "4418.61",
                low: "4367.73",
                close: "4405.8"
            },
            {
                datetime: "2021-08-18",
                open: "4440.94",
                high: "4454.32",
                low: "4397.59",
                close: "4400.27"
            },
            {
                datetime: "2021-08-17",
                open: "4462.12",
                high: "4462.12",
                low: "4417.83",
                close: "4448.08"
            },
            {
                datetime: "2021-08-16",
                open: "4461.65",
                high: "4480.26",
                low: "4437.66",
                close: "4479.71"
            },
            {
                datetime: "2021-08-13",
                open: "4464.84",
                high: "4468.37",
                low: "4460.82",
                close: "4468"
            },
            {
                datetime: "2021-08-12",
                open: "4446.08",
                high: "4461.77",
                low: "4435.96",
                close: "4460.83"
            },
            {
                datetime: "2021-08-11",
                open: "4442.18",
                high: "4449.44",
                low: "4436.42",
                close: "4447.7"
            },
            {
                datetime: "2021-08-10",
                open: "4435.79",
                high: "4445.21",
                low: "4430.03",
                close: "4436.75"
            },
            {
                datetime: "2021-08-09",
                open: "4437.77",
                high: "4439.39",
                low: "4424.74",
                close: "4432.35"
            },
            {
                datetime: "2021-08-06",
                open: "4429.07",
                high: "4440.82",
                low: "4429.07",
                close: "4436.52"
            },
            {
                datetime: "2021-08-05",
                open: "4408.86",
                high: "4429.76",
                low: "4408.86",
                close: "4429.1"
            },
            {
                datetime: "2021-08-04",
                open: "4415.95",
                high: "4416.17",
                low: "4400.23",
                close: "4402.66"
            },
            {
                datetime: "2021-08-03",
                open: "4392.74",
                high: "4423.79",
                low: "4373",
                close: "4423.15"
            },
            {
                datetime: "2021-08-02",
                open: "4406.86",
                high: "4422.18",
                low: "4384.81",
                close: "4387.16"
            },
            {
                datetime: "2021-07-30",
                open: "4395.12",
                high: "4412.25",
                low: "4389.65",
                close: "4395.26"
            },
            {
                datetime: "2021-07-29",
                open: "4403.59",
                high: "4429.97",
                low: "4403.59",
                close: "4419.15"
            },
            {
                datetime: "2021-07-28",
                open: "4402.95",
                high: "4415.47",
                low: "4387.01",
                close: "4400.64"
            },
            {
                datetime: "2021-07-27",
                open: "4416.38",
                high: "4416.38",
                low: "4372.51",
                close: "4401.46"
            },
            {
                datetime: "2021-07-26",
                open: "4409.58",
                high: "4422.73",
                low: "4405.45",
                close: "4422.3"
            },
            {
                datetime: "2021-07-23",
                open: "4381.2",
                high: "4415.18",
                low: "4381.2",
                close: "4411.79"
            },
            {
                datetime: "2021-07-22",
                open: "4361.27",
                high: "4369.87",
                low: "4350.06",
                close: "4367.48"
            },
            {
                datetime: "2021-07-21",
                open: "4331.13",
                high: "4359.7",
                low: "4331.13",
                close: "4358.69"
            },
            {
                datetime: "2021-07-20",
                open: "4265.11",
                high: "4336.84",
                low: "4262.05",
                close: "4323.06"
            },
            {
                datetime: "2021-07-19",
                open: "4296.4",
                high: "4296.4",
                low: "4233.13",
                close: "4258.49"
            },
            {
                datetime: "2021-07-16",
                open: "4367.43",
                high: "4375.09",
                low: "4322.53",
                close: "4327.16"
            },
            {
                datetime: "2021-07-15",
                open: "4369.02",
                high: "4369.02",
                low: "4340.7",
                close: "4360.03"
            },
            {
                datetime: "2021-07-14",
                open: "4380.11",
                high: "4393.68",
                low: "4362.36",
                close: "4374.3"
            },
            {
                datetime: "2021-07-13",
                open: "4381.07",
                high: "4392.37",
                low: "4366.92",
                close: "4369.21"
            },
            {
                datetime: "2021-07-12",
                open: "4372.41",
                high: "4386.68",
                low: "4364.03",
                close: "4384.63"
            },
            {
                datetime: "2021-07-09",
                open: "4329.38",
                high: "4371.6",
                low: "4329.38",
                close: "4369.55"
            },
            {
                datetime: "2021-07-08",
                open: "4321.07",
                high: "4330.88",
                low: "4289.37",
                close: "4320.82"
            },
            {
                datetime: "2021-07-07",
                open: "4351.01",
                high: "4361.88",
                low: "4329.79",
                close: "4358.13"
            },
            {
                datetime: "2021-07-06",
                open: "4356.46",
                high: "4356.46",
                low: "4314.37",
                close: "4343.54"
            },
            {
                datetime: "2021-07-02",
                open: "4326.6",
                high: "4355.43",
                low: "4326.6",
                close: "4352.34"
            },
            {
                datetime: "2021-07-01",
                open: "4300.73",
                high: "4320.66",
                low: "4300.73",
                close: "4319.94"
            },
            {
                datetime: "2021-06-30",
                open: "4290.65",
                high: "4302.43",
                low: "4287.96",
                close: "4297.5"
            },
            {
                datetime: "2021-06-29",
                open: "4293.21",
                high: "4300.52",
                low: "4287.04",
                close: "4291.8"
            },
            {
                datetime: "2021-06-28",
                open: "4284.9",
                high: "4292.14",
                low: "4274.67",
                close: "4290.61"
            },
            {
                datetime: "2021-06-25",
                open: "4274.45",
                high: "4286.12",
                low: "4271.16",
                close: "4280.7"
            },
            {
                datetime: "2021-06-24",
                open: "4256.97",
                high: "4271.28",
                low: "4256.97",
                close: "4266.49"
            },
            {
                datetime: "2021-06-23",
                open: "4249.27",
                high: "4256.6",
                low: "4241.43",
                close: "4241.84"
            },
            {
                datetime: "2021-06-22",
                open: "4224.61",
                high: "4255.84",
                low: "4217.27",
                close: "4246.44"
            },
            {
                datetime: "2021-06-21",
                open: "4173.4",
                high: "4226.24",
                low: "4173.4",
                close: "4224.79"
            },
            {
                datetime: "2021-06-18",
                open: "4204.78",
                high: "4204.78",
                low: "4164.4",
                close: "4166.45"
            },
            {
                datetime: "2021-06-17",
                open: "4220.37",
                high: "4232.29",
                low: "4196.05",
                close: "4221.86"
            },
            {
                datetime: "2021-06-16",
                open: "4248.87",
                high: "4251.89",
                low: "4202.45",
                close: "4223.7"
            },
            {
                datetime: "2021-06-15",
                open: "4255.28",
                high: "4257.16",
                low: "4238.35",
                close: "4246.59"
            },
            {
                datetime: "2021-06-14",
                open: "4248.31",
                high: "4255.59",
                low: "4234.07",
                close: "4255.15"
            },
            {
                datetime: "2021-06-11",
                open: "4242.9",
                high: "4248.38",
                low: "4232.25",
                close: "4247.44"
            },
            {
                datetime: "2021-06-10",
                open: "4228.56",
                high: "4249.74",
                low: "4220.34",
                close: "4239.18"
            },
            {
                datetime: "2021-06-09",
                open: "4232.99",
                high: "4237.09",
                low: "4218.74",
                close: "4219.55"
            },
            {
                datetime: "2021-06-08",
                open: "4233.81",
                high: "4236.74",
                low: "4208.41",
                close: "4227.26"
            },
            {
                datetime: "2021-06-07",
                open: "4229.34",
                high: "4232.34",
                low: "4215.66",
                close: "4226.52"
            },
            {
                datetime: "2021-06-04",
                open: "4206.05",
                high: "4233.45",
                low: "4206.05",
                close: "4229.89"
            },
            {
                datetime: "2021-06-03",
                open: "4191.43",
                high: "4204.39",
                low: "4167.93",
                close: "4192.85"
            },
            {
                datetime: "2021-06-02",
                open: "4206.82",
                high: "4217.37",
                low: "4198.27",
                close: "4208.12"
            },
            {
                datetime: "2021-06-01",
                open: "4216.52",
                high: "4234.12",
                low: "4197.59",
                close: "4202.04"
            },
            {
                datetime: "2021-05-28",
                open: "4210.77",
                high: "4218.36",
                low: "4203.57",
                close: "4204.11"
            },
            {
                datetime: "2021-05-27",
                open: "4201.94",
                high: "4213.38",
                low: "4197.78",
                close: "4200.88"
            },
            {
                datetime: "2021-05-26",
                open: "4191.59",
                high: "4202.61",
                low: "4184.11",
                close: "4195.99"
            },
            {
                datetime: "2021-05-25",
                open: "4205.94",
                high: "4213.42",
                low: "4182.52",
                close: "4188.13"
            },
            {
                datetime: "2021-05-24",
                open: "4170.16",
                high: "4209.52",
                low: "4170.16",
                close: "4197.05"
            },
            {
                datetime: "2021-05-21",
                open: "4168.61",
                high: "4188.72",
                low: "4151.72",
                close: "4155.86"
            },
            {
                datetime: "2021-05-20",
                open: "4121.97",
                high: "4172.8",
                low: "4121.97",
                close: "4159.12"
            },
            {
                datetime: "2021-05-19",
                open: "4098.45",
                high: "4116.93",
                low: "4061.41",
                close: "4115.68"
            },
            {
                datetime: "2021-05-18",
                open: "4165.94",
                high: "4169.15",
                low: "4125.99",
                close: "4127.83"
            },
            {
                datetime: "2021-05-17",
                open: "4169.92",
                high: "4171.92",
                low: "4142.69",
                close: "4163.29"
            },
            {
                datetime: "2021-05-14",
                open: "4129.58",
                high: "4183.13",
                low: "4129.58",
                close: "4173.85"
            },
            {
                datetime: "2021-05-13",
                open: "4074.99",
                high: "4131.58",
                low: "4074.99",
                close: "4112.5"
            },
            {
                datetime: "2021-05-12",
                open: "4130.55",
                high: "4134.73",
                low: "4056.88",
                close: "4063.04"
            },
            {
                datetime: "2021-05-11",
                open: "4150.34",
                high: "4162.04",
                low: "4111.53",
                close: "4152.1"
            },
            {
                datetime: "2021-05-10",
                open: "4228.29",
                high: "4236.39",
                low: "4188.13",
                close: "4188.43"
            },
            {
                datetime: "2021-05-07",
                open: "4210.34",
                high: "4238.04",
                low: "4201.64",
                close: "4232.6"
            },
            {
                datetime: "2021-05-06",
                open: "4169.14",
                high: "4202.7",
                low: "4147.33",
                close: "4201.62"
            },
            {
                datetime: "2021-05-05",
                open: "4177.06",
                high: "4187.72",
                low: "4160.94",
                close: "4167.59"
            },
            {
                datetime: "2021-05-04",
                open: "4179.04",
                high: "4179.04",
                low: "4128.59",
                close: "4164.66"
            },
            {
                datetime: "2021-05-03",
                open: "4191.98",
                high: "4209.39",
                low: "4188.03",
                close: "4192.66"
            },
            {
                datetime: "2021-04-30",
                open: "4198.1",
                high: "4198.1",
                low: "4174.85",
                close: "4181.17"
            },
            {
                datetime: "2021-04-29",
                open: "4206.14",
                high: "4218.78",
                low: "4176.81",
                close: "4211.47"
            },
            {
                datetime: "2021-04-28",
                open: "4185.14",
                high: "4201.53",
                low: "4181.78",
                close: "4183.18"
            },
            {
                datetime: "2021-04-27",
                open: "4188.25",
                high: "4193.35",
                low: "4176.22",
                close: "4186.72"
            },
            {
                datetime: "2021-04-26",
                open: "4185.03",
                high: "4194.19",
                low: "4182.36",
                close: "4187.62"
            },
            {
                datetime: "2021-04-23",
                open: "4138.78",
                high: "4194.17",
                low: "4138.78",
                close: "4180.17"
            },
            {
                datetime: "2021-04-22",
                open: "4170.46",
                high: "4179.57",
                low: "4123.69",
                close: "4134.98"
            },
            {
                datetime: "2021-04-21",
                open: "4128.42",
                high: "4175.02",
                low: "4126.35",
                close: "4173.42"
            },
            {
                datetime: "2021-04-20",
                open: "4159.18",
                high: "4159.18",
                low: "4118.38",
                close: "4134.94"
            },
            {
                datetime: "2021-04-19",
                open: "4179.8",
                high: "4180.81",
                low: "4150.47",
                close: "4163.26"
            },
            {
                datetime: "2021-04-16",
                open: "4174.14",
                high: "4191.31",
                low: "4170.75",
                close: "4185.47"
            },
            {
                datetime: "2021-04-15",
                open: "4139.76",
                high: "4173.49",
                low: "4139.76",
                close: "4170.42"
            },
            {
                datetime: "2021-04-14",
                open: "4141.58",
                high: "4151.69",
                low: "4120.87",
                close: "4124.66"
            },
            {
                datetime: "2021-04-13",
                open: "4130.1",
                high: "4148",
                low: "4124.43",
                close: "4141.59"
            },
            {
                datetime: "2021-04-12",
                open: "4124.71",
                high: "4131.76",
                low: "4114.82",
                close: "4127.99"
            },
            {
                datetime: "2021-04-09",
                open: "4096.11",
                high: "4129.48",
                low: "4095.51",
                close: "4128.8"
            },
            {
                datetime: "2021-04-08",
                open: "4089.95",
                high: "4098.19",
                low: "4082.54",
                close: "4097.17"
            },
            {
                datetime: "2021-04-07",
                open: "4074.29",
                high: "4083.13",
                low: "4068.31",
                close: "4079.95"
            },
            {
                datetime: "2021-04-06",
                open: "4075.57",
                high: "4086.23",
                low: "4068.14",
                close: "4073.94"
            },
            {
                datetime: "2021-04-05",
                open: "4034.44",
                high: "4083.42",
                low: "4034.44",
                close: "4077.91"
            },
            {
                datetime: "2021-04-01",
                open: "3992.78",
                high: "4020.63",
                low: "3992.78",
                close: "4019.87"
            },
            {
                datetime: "2021-03-31",
                open: "3967.25",
                high: "3994.41",
                low: "3966.98",
                close: "3972.89"
            },
            {
                datetime: "2021-03-30",
                open: "3963.34",
                high: "3968.01",
                low: "3944.35",
                close: "3958.55"
            },
            {
                datetime: "2021-03-29",
                open: "3969.31",
                high: "3981.83",
                low: "3943.25",
                close: "3971.09"
            },
            {
                datetime: "2021-03-26",
                open: "3917.12",
                high: "3978.19",
                low: "3917.12",
                close: "3974.54"
            },
            {
                datetime: "2021-03-25",
                open: "3879.34",
                high: "3919.54",
                low: "3853.5",
                close: "3909.52"
            },
            {
                datetime: "2021-03-24",
                open: "3919.93",
                high: "3942.08",
                low: "3889.07",
                close: "3889.14"
            },
            {
                datetime: "2021-03-23",
                open: "3937.6",
                high: "3949.13",
                low: "3901.57",
                close: "3910.52"
            },
            {
                datetime: "2021-03-22",
                open: "3916.48",
                high: "3955.31",
                low: "3914.16",
                close: "3940.59"
            },
            {
                datetime: "2021-03-19",
                open: "3913.14",
                high: "3930.12",
                low: "3886.75",
                close: "3913.1"
            },
            {
                datetime: "2021-03-18",
                open: "3953.5",
                high: "3969.62",
                low: "3910.86",
                close: "3915.46"
            },
            {
                datetime: "2021-03-17",
                open: "3949.57",
                high: "3983.87",
                low: "3935.74",
                close: "3974.12"
            },
            {
                datetime: "2021-03-16",
                open: "3973.59",
                high: "3981.04",
                low: "3953.44",
                close: "3962.71"
            },
            {
                datetime: "2021-03-15",
                open: "3942.96",
                high: "3970.08",
                low: "3923.54",
                close: "3968.94"
            },
            {
                datetime: "2021-03-12",
                open: "3924.52",
                high: "3944.99",
                low: "3915.21",
                close: "3943.34"
            },
            {
                datetime: "2021-03-11",
                open: "3915.54",
                high: "3960.27",
                low: "3915.54",
                close: "3939.34"
            },
            {
                datetime: "2021-03-10",
                open: "3891.99",
                high: "3917.35",
                low: "3885.73",
                close: "3898.81"
            },
            {
                datetime: "2021-03-09",
                open: "3851.93",
                high: "3903.76",
                low: "3851.93",
                close: "3875.44"
            },
            {
                datetime: "2021-03-08",
                open: "3844.39",
                high: "3881.06",
                low: "3819.25",
                close: "3821.35"
            },
            {
                datetime: "2021-03-05",
                open: "3793.58",
                high: "3851.69",
                low: "3730.19",
                close: "3841.94"
            },
            {
                datetime: "2021-03-04",
                open: "3818.53",
                high: "3843.67",
                low: "3723.34",
                close: "3768.47"
            },
            {
                datetime: "2021-03-03",
                open: "3863.99",
                high: "3874.47",
                low: "3818.86",
                close: "3819.72"
            },
            {
                datetime: "2021-03-02",
                open: "3903.64",
                high: "3906.41",
                low: "3868.57",
                close: "3870.29"
            },
            {
                datetime: "2021-03-01",
                open: "3842.51",
                high: "3914.5",
                low: "3842.51",
                close: "3901.82"
            },
            {
                datetime: "2021-02-26",
                open: "3839.66",
                high: "3861.08",
                low: "3789.54",
                close: "3811.15"
            },
            {
                datetime: "2021-02-25",
                open: "3915.8",
                high: "3925.02",
                low: "3814.04",
                close: "3829.34"
            },
            {
                datetime: "2021-02-24",
                open: "3873.71",
                high: "3928.65",
                low: "3859.6",
                close: "3925.43"
            },
            {
                datetime: "2021-02-23",
                open: "3857.07",
                high: "3895.98",
                low: "3805.59",
                close: "3881.37"
            },
            {
                datetime: "2021-02-22",
                open: "3885.55",
                high: "3902.92",
                low: "3874.71",
                close: "3876.5"
            },
            {
                datetime: "2021-02-19",
                open: "3921.16",
                high: "3930.41",
                low: "3903.07",
                close: "3906.71"
            },
            {
                datetime: "2021-02-18",
                open: "3915.86",
                high: "3921.98",
                low: "3885.03",
                close: "3913.97"
            },
            {
                datetime: "2021-02-17",
                open: "3918.5",
                high: "3933.61",
                low: "3900.43",
                close: "3931.33"
            },
            {
                datetime: "2021-02-16",
                open: "3939.61",
                high: "3950.43",
                low: "3923.85",
                close: "3932.59"
            },
            {
                datetime: "2021-02-12",
                open: "3911.65",
                high: "3937.23",
                low: "3905.78",
                close: "3934.83"
            },
            {
                datetime: "2021-02-11",
                open: "3916.4",
                high: "3925.99",
                low: "3890.39",
                close: "3916.38"
            },
            {
                datetime: "2021-02-10",
                open: "3920.78",
                high: "3931.5",
                low: "3884.94",
                close: "3909.88"
            },
            {
                datetime: "2021-02-09",
                open: "3910.49",
                high: "3918.35",
                low: "3902.64",
                close: "3911.23"
            },
            {
                datetime: "2021-02-08",
                open: "3892.59",
                high: "3915.77",
                low: "3892.59",
                close: "3915.59"
            }
        ].reverse();
    return csvData;
}