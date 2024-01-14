document.querySelectorAll(".crd button").forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Added To Cart');
    });
});

//slider
let trendFood = document.querySelectorAll(".trendFood");
let count = 0;
trendFood.forEach((img , index) => {
    img.style.left = `${index*100}%`
})

function myFun(params) {
    trendFood.forEach((currentImg)=>{
        currentImg.style.transform = `translateX(-${count*100}%)`
    })
    
}

setInterval(() => {
    count++;
    if (count== trendFood.length) {
        count=0;
        
    }
myFun()
}, 2000);

// card detail
let card = document.querySelectorAll("#crd");
card.forEach((currentCard)=>{
   currentCard.addEventListener("click", function (params) {
    console.log(currentCard);
    

    let div = document.createElement("div");
    div.classList.add("cardDiv");
    div.innerHTML = `
    
    <img src="${currentCard.firstElementChild.src}" alt="">
    <h2>Fresh Foods</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nulla! Totam, consequatur commodi sapiente provident quasi laboriosam eos. Dolore, iusto?</p>
    <h3 id="icon">X</h3>
    
    
    `
    document.querySelector("body").appendChild(div);
    document.querySelector("#icon").addEventListener("click" , function name(params) {
        div.style.display= "none"
        
    })
   })
})


