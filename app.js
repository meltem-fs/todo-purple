const text = document.querySelector(".text")
const btn = document.querySelector(".btn")
const results = document.querySelector(".results");


btn.addEventListener("click",() => {
    if(!text.value){
        alert("write sth")
    }else{
        results.innerHTML += `<div class="result">
       <i class="fa-regular fa-square"></i>
       
        <p>${text.value}</p>
        <i class="fa-sharp fa-solid fa-trash-can"></i>
     </div> `;
    }
    
    text.value =""
})

window.onload = function () {
  text.focus();
};


text.addEventListener("keydown" , (e) => {
    if(e.code==="Enter"){
        btn.click()
    }
})


results.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-square")) {
      e.target.classList.remove("fa-square", "fa-regular");
      e.target.classList.add("fa-solid", "fa-check");
      e.target.parentElement.classList.add("check")
      
    } else if (e.target.classList.contains("fa-check")) {
      e.target.classList.remove("fa-solid", "fa-check");
      e.target.classList.add("fa-square", "fa-regular");
      e.target.parentElement.classList.remove("check");

    } else if(e.target.classList.contains("fa-sharp")){
        console.log(e.target);
        e.target.parentElement.remove()
    }
})