function generateNumber(){

    const  min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)
    const resultRandom = document.querySelector(".result-random")

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    resultRandom.innerHTML = result

}