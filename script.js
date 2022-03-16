const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e) =>{
    e.preventDefault();
    if(eInput.value == ""){
        eField.classList.add("shake","error");
    }else{
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value != "")? errorTxt.innerText = "Enter a valid Email": errorTxt.innerText="Email can't be blank";
        }else{
            eField.classList.remove("error");
        }
    }
    if(pInput.value == ""){
        pField.classList.add("shake","error");
    }
    setTimeout(()=>{
        eField.classList.remove("shake");
        pField.classList.remove("shake")
    },500);

    eInput.onkeyup =()=>{
        checkEmail();
    }

    function checkEmail(){
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value != "")? errorTxt.innerText = "Enter a valid Email": errorTxt.innerText="Email can't be blank";
        }else{
            eField.classList.remove("error");
        }
    }
    
    eInput.onkeyup =()=>{
       
        if(!pInput.value == ""){
            pField.classList.add("error");
        }else{
            eField.classList.remove("error");
        }
    }
}

if(!eField.classList.contains("error") && !eField.classList.contains("error")){
    window.location.href = "#";
    console.log("form submitted")
}