const textareaEL = document.getElementById("text-area")
const remainingcounterEl = document.getElementById("remaining-counter")
const totalcounterEl = document.getElementById("total-counter")
const wordcounterEL = document.getElementById("word-count")


let word = 0;




textareaEL.addEventListener("keyup", ()=>{
    updateCounter();
    updateremainCounter();
})
textareaEL.addEventListener("keydown", ()=>{
    updateCounter();
    updateremainCounter();
})


function wordCount(){
    for(let i=0;i<=(textareaEL.value.length);i++){
        
    }
}


function updateCounter(){
    totalcounterEl.innerText = textareaEL.value.length;
}

function updateremainCounter(){
    remainingcounterEl.innerText = (textareaEL.getAttribute("maxlength") - textareaEL.value.length);
}