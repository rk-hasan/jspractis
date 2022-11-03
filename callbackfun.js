//sync
let test1 = (callback) =>{
    console.log("this is test 1");
    callback();
}

// Async
let test2 = (callback) =>{
    setTimeout(() => {
        console.log("test 2 is loading....");
        callback();
    }, 2000);
}

let test3 = () =>{
    console.log("this is test 3");
}

test1(()=>{
    test2(()=>{
        test3();
    });
});

// Callback Function Basic Example

function make(x){
    console.log(x * x);
}

function result(num,callback){
    callback(num);
}
result(6,make);

// Another Example for callback function

let userName = (name) =>{
    alert (`this is your name : ${name}`)
}

let showName = (callback) =>{
    let input = prompt("Enter your name");
    callback(input);
}

showName(userName);


