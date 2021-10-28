const addBtnList= document.querySelectorAll(".add-btn")
const result=document.querySelector(".total")

addBtnList.forEach(function(addBtn){
    addBtn.addEventListener("click",function(){
const view=addBtn.parentElement
console.log(view)
const image=view.querySelector(".animal img").src 
console.log(image)
const num1=view.querySelector(".animal p").innerHTML
console.log(num1)

result.innerHTML+=`<section class="result d-flex flex-row">
    <img src="${image}" alt="" height="70px"></section>
    `
const totalAnimals=document.querySelector(".total span")
totalAnimals.innerHTML=Number(num1)+Number(totalAnimals.innerHTML)
    })
    
})