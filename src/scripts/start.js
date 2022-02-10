import Graph from './graph'

class Start {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>Start</h1>";
        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener("click", this.handleClick);

    }


    handleClick() {
        
        return Graph.prototype.setStarted(true);
        
    }
}

export default Start;