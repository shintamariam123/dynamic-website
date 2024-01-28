const buttonClick = () => {
    if(email.value){
        if(email.value.endsWith("@gmail.com")){
            res.style.display="none"
            em.style.display="none"
            email.style.display="none"
            output.style.display="block"
  output.innerHTML="Thank you for subscribing!!!"
  mailenter.style.display = "none"
  email.value=""
        }else{
            mailenter.style.display = "block"
         mailenter.innerHTML="Please enter valid email address"  
         email.value=""
        }

}else{
    mailenter.style.display = "block"
    mailenter.innerHTML="Enter all required fields"
    email.value=""
}
}



 
// const billAmount = getElementById('amount')
// const serviceNo = getElementById('service')
// const personNo = getElementById('persons')
const tipCalculator = () =>{
    tipOutput.style.display = "block"
}
const tipGenerate = () =>{
if(amount.value && service.value && persons.value){
    let  balance = (amount.value * service.value) / persons.value
    balance = balance.toFixed(2);
total.innerHTML = balance
total.style.color = "#882525"
total.style.fontSize = "23px"
amount.value=""
service.value=""
persons.value=""



}else{
    alert("Fill all required fields!!!")
}
 }

 if(localStorage.getItem("user")){
  
       }else{
           alert("Please Login!!!")
           window.location="login.html"
       }
 const logout = () =>{
    localStorage.removeItem("user")
    window.location="login.html"
 }
