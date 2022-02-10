import Graph from './graph'

class BuySell {
    constructor(ele){
        this.ele = ele
        this.ele.innerHTML = "<h1>Sell</h1>"
        this.handleClick = this.handleClick.bind(this)
        this.ele.addEventListener("click", this.handleClick)
        
    }


    handleClick(){
        this.ele.children[0].innerText = "Sold!";
    }
}

export default BuySell;