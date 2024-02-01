let fruits=["🍎","🍓","🍉","🍊","🍎","🍓","🍉","🍊","🍎","🍓"];

let fruitsList=document.getElementById("fruits-list");
let appleShelf=document.getElementById("apple-shelf");
let orangeShelf=document.getElementById("orange-shelf");
let strawberryShelf=document.getElementById("strawberry-shelf");
let waterMelonShelf=document.getElementById("watermelon-shelf");

for(let i=0;i<fruits.length;i++){
    fruitsList.textContent +=fruits[i]+" ";
}

 function sortFruit(){
    
    for(let i=0; i< fruits.length;i++){
        if(fruits[i] === "🍎"){
            appleShelf.textContent += "🍎";
        }
        else if(fruits[i] === "🍊"){
            orangeShelf.textContent += "🍊";
        }
        else if(fruits[i] === "🍓"){
            strawberryShelf.textContent += "🍓";
        }
        else{
            waterMelonShelf.textContent += "🍉";
        }   
    }
    //to stop the function after execution
    fruits=null;
    
 }
 fruits.term