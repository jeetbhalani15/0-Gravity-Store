const icon = document.querySelector('#toggle');
const password = document.querySelector('#login__password');
icon.addEventListener('click',()=>{
    console.log("hello")
    const type = password.getAttribute("type") ===
    "password" ? "text" : "password";
    password.setAttribute("type",type);
    icon.classList.toggle("fa-eye-slash");
})