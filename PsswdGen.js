const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= upperCase.toLowerCase();
const numbers="0123456789";
const spc="!@#$%^&*()_+?><:";

const chk=document.querySelectorAll('#chk');
const btn=document.getElementById('btn');
const len=document.getElementById('len').value;

let pswd="";
function getPswd(){
    
    if(chk[0].checked){
        pswd+=upperCase[Math.floor(Math.random()*upperCase.length)];
     }
     if(chk[1].checked){
         pswd+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
      }
      if(chk[2].checked){
         pswd+=numbers[Math.floor(Math.random()*numbers.length)];
      }
      if(chk[3].checked){
         pswd+=spc[Math.floor(Math.random()*spc.length)];
      }
      
     if(len > pswd.length){
        getPswd();
       }else{
        document.getElementById('random').value=pswd.slice(0,len+1);
        pswd="";
       }

}

btn.addEventListener('click',()=>getPswd() );





