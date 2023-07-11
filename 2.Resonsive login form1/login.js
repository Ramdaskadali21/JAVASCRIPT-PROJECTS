const title =document.getElementById('title');
const namefield =document.getElementById('namefield');
const signinrk =document.getElementById('signinrk');
const signuprk =document.getElementById('signuprk');
signuprk.onclick =function(){
    title.innerHTML="Sign Up";
    namefield.style.display="block";
}
signinrk.onclick =function(){
    title.innerHTML="Login";
    namefield.style.display="none";
}
