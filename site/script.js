
// Button and input box valies
const myBtn = document.getElementById("SubmitBtn");
const NameBox = document.getElementById("name_box");
const EmailBox = document.getElementById("email_box");
const CardNumb = document.getElementById("card_numb");
const messageElement = document.querySelector("form_Name");


//error messages
const NameError = document.getElementById("Name_Error");
const EmailError = document.getElementById("Email_Error");
const CardError =  document.getElementById("Card_Error");


// check for only numbers
function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  //check for any numbers
function containsNumbers(str) {
    return /\d/.test(str);
  }


  // runs card number through luhn algorithm
function LuhnChck(ccNumber){
    sum = 0;
     alternate = false;
    for (let i = ccNumber.length - 1; i >= 0; i--)
    {
             n = parseInt(ccNumber.substring(i, i + 1));
            if (alternate)
            {
                    n *= 2;
                    if (n > 9)
                    {
                            n = (n % 10) + 1;
                    }
            }
            sum += n;
            alternate = !alternate;
    }
    return (sum % 10 == 0);
}






// validates everything at once
function Validate(){
   output1 = NameBox.value ;
   output2 = EmailBox.value ;
   output3 = CardNumb.value ;
   
// checks for empty boxes
   if (output1 == "") {

    NameBox.style.background="red";
    document.querySelector("#Name_Error")
    .textContent="Please enter your name";



} else if (output1 !=  "") {

    console.log(containsOnlyNumbers(output1));
    NameBox.style.background="Green";
    document.querySelector("#Name_Error")
    .textContent=".";

    
}

if (output2 == "") {

  
    EmailBox.style.background="red";
    document.querySelector("#Email_Error")
    .textContent="Please enter your email";

} else if (output2 !=  "") {


   
    EmailBox.style.background="Green";
    document.querySelector("#Email_Error")
    .textContent=".";
    
}

if (output3 == "") {

  
    CardNumb.style.background="red";
    document.querySelector("#Card_Error")
    .textContent="Enter your card information";

} else if (output3 !=  "") {

 
  
    CardNumb.style.background="Green";
}



   if (containsNumbers(output1)== true){

    NameBox.style.background="red";
    document.querySelector("#Name_Error")
    .textContent="Please do not use numbers";
   }

   
   





if (Numb ==1){
    NameBox.style.background="red";
    Numb = 0;
} else{
   
}

//length check cant contain more that a specified length of characters

if (output1.length > 15){
    NameBox.style.background="red";
 
    document.querySelector("#Name_Error")
    .textContent="Please Use less than 15 characters";

} else if (output1.length <= 15) {
    
   
}

if (output2.length > 20){
    EmailBox.style.background="red";
   
    document.querySelector("#Email_Error")
    .textContent="Please use less than 15 charaters";
    
} else if (output2.length <= 20) {
   
    
}

if (output3.length != 16){
    CardNumb.style.background="red";
    
    document.querySelector("#Card_Error")
    .textContent="Make sure you entered all of your card numbers";
    
} else if (output3.length == 16) {
    
}
      

//email checks for @ symbol
if (output2.includes("@")==true){

    
   }else{
    EmailBox.style.background="red";
    document.querySelector("#Email_Error")
    .textContent="Only use Valid emails";
   }   

   //makes sure card number doesnt contain letters
if (containsOnlyNumbers(output3)!=true){
    CardNumb.style.background="red";
    document.querySelector("#Card_Error")
    .textContent="Card has to be Numbers";

}else{
 
}

//Applying Luhn algorithm to card number

if (LuhnChck(output3) == false){

    CardNumb.style.background="red";
    document.querySelector("#Card_Error")
    .textContent="Make sure you entered a Valid card number";

} else{
    

}



// if boxes are green accept the conditions entered.

if(EmailBox.style.background=="green"  && NameBox.style.background=="green" && CardNumb.style.background=="green" ){

  document.querySelector("#Success")
  .textContent="Success";



}

}

myBtn.addEventListener("click", Validate); 

     

               
            
                
                
               



