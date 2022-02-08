

    async function getData() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    getData().then(data => {
        console.log(data);
    });



export default Data;
