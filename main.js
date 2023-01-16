let mypiclogo = document.querySelector('img');
setInterval(function(){
   let mySrc = mypiclogo.getAttribute('src');
   if(mySrc === 'images/logo1.jpg')
   {
       mypiclogo.setAttribute('src','images/logo2.jpg');
   }
   else if(mySrc === 'images/logo2.jpg')
   {
       mypiclogo.setAttribute('src','images/logo3.jpg');
   }

   else if (mySrc === 'images/logo3.jpg')
   {
       mypiclogo.setAttribute('src','images/logo4.jpg');
   }

   else if (mySrc === 'images/logo4.jpg')
   {
       mypiclogo.setAttribute('src','images/logo5.jpg');
   }

   else if (mySrc === 'images/logo5.jpg')
   {
       mypiclogo.setAttribute('src','images/logo6.jpg');
   }

   else if (mySrc === 'images/logo6.jpg')
   {
       mypiclogo.setAttribute('src','images/logo7.jpg');
   }
   else if (mySrc === 'images/logo7.jpg')
   {
       mypiclogo.setAttribute('src','images/logo8.jpg');
   }
   else if (mySrc === 'images/logo8.jpg')
   {
       mypiclogo.setAttribute('src','images/logo9.jpg');
   }

   else if (mySrc === 'images/logo9.jpg')
   {
       mypiclogo.setAttribute('src','images/logo10.jpg');
   }

   else if (mySrc === 'images/logo10.jpg')
   {
       mypiclogo.setAttribute('src','images/logo11.jpg');
   }

   else if (mySrc === 'images/logo11.jpg')
   {
       mypiclogo.setAttribute('src','images/logo12.jpg');

   }
  else{
      mypiclogo.setAttribute('src','images/logo1.jpg');
  }

}, 2000);