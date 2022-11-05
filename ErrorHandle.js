// try{
//     document.write("This is error handleing class");
//     alert(x);
//     document.write("Yes You are right");
// }catch(err){
//     console.log(err.message);
// }finally{
//     document.write("Yes You are right");
// }

document.querySelector("#btn").addEventListener('click',()=>{
    const data = document.querySelector("#txt").value;
    
    try{
        if(data < 5){
            throw ("sorry your input is very low")
        }else if(data > 10){
            throw ("Sorry your input is very high")
        }else{
           throw ("yes your input is right")
        }

    }catch(err){
        console.log(err);
    }
})