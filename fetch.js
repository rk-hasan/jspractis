fetch("index.js").then((response)=>{
    response.json();
}).then((res)=>{
    console.log(res);
}).catch("Sorry this is some problem")

fetch("index.js").then(response => response.json()).then(res=> console.log("Hello this is result"))

