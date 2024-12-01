// Day - 01
//Create function Js

//Htmlfile

<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
</head>
<body>

     <!-- function button html -->
<input type="button" onclick=msg() value="call">
<hr>
<input type="button" onclick=getcube(20) value="getcube">

<!-- <script src="firstfile.js"></script> -->
     <Script src="functionj.js"></Script>
</body>
</html>



                //js file
function msg (){
     document.write("hi msg function")
 }
 
 function getcube (number)
 {
      alert(number*number*number)
 }
