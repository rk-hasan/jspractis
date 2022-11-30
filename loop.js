// for loop,while loop,do while loop,for in,of

// for loop

// for(expretion;condition;incriment/decriment){
//     // codeBlock
// }

// for loop 
for(i=0; i<=10; i++){
    console.log(i);
}
// nested loop
for (a=0; a<=10; a = a +10){
    for(b=a; b< a + 10; b++){
        console.log(b);
    }
}

// while loop
let c = 0;
while(c<=20){
    c++;
    console.log(c);
}

// do while loop
let d = 10;
do{
    d++;
    console.log(d);
}while(d<=100)

// loop with break;

for(z=0; z<=10; z++){
    if(z <= 5){
        break;
    }
    console.log(z);
}





