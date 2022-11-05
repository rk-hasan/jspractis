// Promise Syntex

let prom = new Promise((resolve,reject)=>{
    resolve("your promise is grunted");
    reject(new Error("this is error"));
});

prom.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.message);
})


let prom2 = new Promise((resolve,reject)=>{
    let result = true;
    if(result){
        resolve("yes your promise is done by admin");
    }else{
        reject(new Error("Sorry your Promise is rejected by admin"));
    }
});

Promise.all([prom,prom2]).then(([res1,res2]) => console.log(res1,res2))


// Promise Chaining

const fun1 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Yes This fun1 is successfully done");
        reject("Sorry fun1 is not done");
    });
}

const fun2 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Yes This fun2 is successfully done");
        reject("Sorry fun1 is not done");
    });
}

const fun3 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Yes This fun3 is successfully done");
        reject("Sorry fun1 is not done");
    });
}

const fun4 = ()=>{
    return new Promise((resolve,reject)=>{
       
        reject("Sorry fun4 is not done");
    });
}

// fun1().then(res => console.log(res))
// .then(fun2().then(res => console.log(res)))
// .then(fun3().then(res => console.log(res)))
// .then(fun4().then(res => console.log(res)))


// Asyc -- Await 

const promFun =async () =>{
    try{
        const f1 = await fun1();
        console.log(f1);
        const f2 = await fun2();
        console.log(f2);
        const f3 = await fun3();
        console.log(f3);
        const f4 = await fun4();
        console.log(f4);
    }catch(e){
        console.log(e);
    }
};

promFun();




