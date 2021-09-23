let menuComp = document.getElementById("menuItems");
menuComp.style.maxHeight = "0px";
const menuToggle = () => {
  if (menuComp.style.maxHeight === "0px") {
    menuComp.style.maxHeight = "200px";
  } else {
    menuComp.style.maxHeight = "0px";
  }
};
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click",menuToggle)

// --------------single product images------------------
const bigImage = document.getElementById("single-prod-img");
const smallImage = document.querySelectorAll(".small-img");
smallImage.forEach((s)=>{
  s.addEventListener("click",(e)=>{
    let val = s.getAttribute("src")
    bigImage.setAttribute("src",val)
    // we can also be done by this
    // bigImage.src = s.src
  })
}) 
// -------------------------js for account page--------------------
const login =  document.getElementById("loginBtn");
const signup =  document.getElementById("signupBtn");

const loginForm = document.getElementById("loginForm")
const signupForm = document.getElementById("signupForm")
const indicator = document.getElementById("indicator");
// event on signup and login buttons
login.addEventListener("click",(e)=>{
loginForm.style.transform = "translateX(300px)";
signupForm.style.transform = "translateX(300px)";
indicator.style.transform = "translateX(0px)"
})

signup.addEventListener("click",(e)=>{
  signupForm.style.transform = "translateX(0px)"
  loginForm.style.transform = "translateX(0px)"
  indicator.style.transform = "translateX(100px)"
  })