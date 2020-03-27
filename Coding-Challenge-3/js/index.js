numberButton = document.getElementById("submitBtn");
inputNumber = document.getElementsByClassName("fizzBuzzNumber")[0];
resultSection = document.getElementsByClassName("resultsSection")[0];
numberButton.addEventListener("click", doNumber);

function doNumber(event){
    event.preventDefault();
    console.log("Funciona");
    if(inputNumber.value > 0){
        console.log("positivo");
        for(i = 1; i<= inputNumber.value; i++){
            console.log("Funciona" + i)
            const newP = document.createElement("p");
            if(i % 5 == 0 && i % 3 == 0){
                newP.innerHTML = "fizzbuzz";
            }else if(i % 5 == 0){
                newP.innerHTML = "buzz";
            }else if(i % 3 == 0){
                newP.innerHTML = "fizz";
            }
            else newP.innerHTML = i;
            resultSection.appendChild(newP);
            newP.addEventListener("click", par =>{
                newP.innerHTML = "";
            })
        }


    }
}

function deleteBox(par){

}