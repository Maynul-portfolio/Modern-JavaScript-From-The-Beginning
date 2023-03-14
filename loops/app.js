

// for(i = 0; i < 100; i++){
//     console.log((i+1)+'Md:Maynul islam')
// }

console.log('while loops')


var isrunning = true;

while (isrunning){
    const rand = Math.floor(Math.random()* 10 + 1)
    if(rand == 9){
        console.log('Winer ' + rand);
        isrunning = false


    }else{
        console.log('You got ' + rand);
    }
}

// console.log('break')

// while (true){
//     const rand = Math.floor(Math.random()* 10 + 1)
//     if(rand == 9){
//         console.log('Winer ' + rand);
//         break


//     }else{
//         console.log('You got ' + rand);
//     }
// }


