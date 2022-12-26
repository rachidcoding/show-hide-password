
document.getElementById("showhide").onmouseover = function showpass(){

   var password = document.getElementById("password");

   if( password.type == 'password' ){

    password.type = 'text';

   }else{

    password.type = 'password';

   }
}



document.getElementById("showhide").onmouseleave = function hidepass(){

    var password = document.getElementById("password");
 
    if( password.type == 'password' ){

     password.type = 'text';

    }else{

     password.type = 'password';
     
    }
 }