let shops = document.querySelector("#shops");
let blogs = document.querySelector("#blogs");
let mainPage = document.querySelector(".main");
let blog = document.querySelector(".trends");
let card = document.querySelector(".trend");
let card2 = document.querySelector("#trendSec");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
let home = document.querySelector("#home");
let abouts = document.querySelector(".abouts");
let contacts = document.querySelector(".contacts");
let shows = document.querySelectorAll(".show");
let newImg = document.querySelector("#newImg");
let cart = document.querySelector(".cart");
let addCarts = document.querySelectorAll(".addCart");
let backBtn = document.querySelector(".backBtn");





home.addEventListener("click", () => {
    mainPage.style.display = "flex";
    blog.style.display = "block";
    card.style.display = "block";
    card2.style.display = "block";
    contacts.style.display = "none"
    abouts.style.display = "none"
    home.style.color = "rgb(5, 167, 167)";
    shops.style.color = "rgb(58, 56, 56)";
    blogs.style.color = "rgb(58, 56, 56)";
    about.style.color = "rgb(58, 56, 56)";
    contact.style.color = "rgb(58, 56, 56)";
})


shops.addEventListener("click", () => {
    mainPage.style.display = "none";
    blog.style.display = "none";
    abouts.style.display = "none"
    card.style.display = "block";
    card2.style.display = "block";
    contacts.style.display = "none"
    cart.style.display = "none";
    shops.style.color = "rgb(5, 167, 167)";
    blogs.style.color = "rgb(58, 56, 56)";
    home.style.color = "rgb(58, 56, 56)";
    about.style.color = "rgb(58, 56, 56)";
    contact.style.color = "rgb(58, 56, 56)";
})


blogs.addEventListener("click", () => {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "none"
    contacts.style.display = "none"
    blog.style.display = "block";
    cart.style.display = "none";
    blogs.style.color = "rgb(5, 167, 167)";
    home.style.color = "rgb(58, 56, 56)";
    shops.style.color = "rgb(58, 56, 56)";
    about.style.color = "rgb(58, 56, 56)";
    contact.style.color = "rgb(58, 56, 56)";
})

about.addEventListener("click", () => {
    abouts.style.display = "block"
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    cart.style.display = "none";
    contacts.style.display = "none"
    about.style.color = "rgb(5, 167, 167)";
    home.style.color = "rgb(58, 56, 56)";
    shops.style.color = "rgb(58, 56, 56)";
    blogs.style.color = "rgb(58, 56, 56)";
    contact.style.color = "rgb(58, 56, 56)";
})

contact.addEventListener("click", () => {
    contacts.style.display = "block"
    abouts.style.display = "none"
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    cart.style.display = "none";
    contact.style.color = "rgb(5, 167, 167)";
    about.style.color = "rgb(58, 56, 56)";
    home.style.color = "rgb(58, 56, 56)";
    shops.style.color = "rgb(58, 56, 56)";
    blogs.style.color = "rgb(58, 56, 56)";
})


let showsArray = Array.from(shows);
showsArray.forEach(img => {
    img.addEventListener("click", () => {
        newImg.src = img.src;
        cart.style.display = "flex";
        contacts.style.display = "none"
        abouts.style.display = "none"
        mainPage.style.display = "none";
        card.style.display = "none";
        card2.style.display = "none";
        blog.style.display = "none";
    })
});

let addCartArray = Array.from(addCarts);
addCartArray.forEach(btns => {
    btns.addEventListener("click",(event)=>{
        alert("Added To Cart");
        location.reload();
    })
})
backBtn.addEventListener("click",()=>{
   // window.history.back();
   card.style.display = "block";
    card2.style.display = "block";
})