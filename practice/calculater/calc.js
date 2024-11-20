//all button
// let buttons = document.querySelectorAll(".btn");
// let result = document.querySelector(".display");

// let string = "";

// const displayResult = function () {
//   Array.from(buttons).map((button) => {
//     button.addEventListener("click", (e) => {
 
//       if(e.target.innerHTML === "="){
//         string = eval(string);
//         result.value = string;
//       }
//       else if(e.target.innerHTML === "AC"){
//       string = "";
//       result.value = string;
//       }else{
//         string += e.target.innerHTML;
//         result.value = string;   
//       }
//     });
//   });
// };
// displayResult();

// single button
let buttons = ["1","2","3","-","4","5","6","+","7","8","9","/","=","0","AC","*"];
let result = document.querySelector(".display");
let calc = document.querySelector(".buttons");
let allCalc = document.querySelector(".calc");

let darkMode = document.querySelector(".dark");
darkMode.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("dark-class");
    result.classList.toggle("dark-class")
    calc.classList.toggle("dark-class")
    allCalc.classList.toggle("dark-class") 
})


let str = "";

const displayResult = function(value) {
 
    if(value === "="){
     try {
      str = eval(str);
      result.value = str;
     } catch (error) {
      result.value = "Error"
     }
    }
    else if(value === "AC"){
    str = "";
    result.value = str;
    }else{
      str += value;
      result.value = str;   
    }
};

document.addEventListener("keydown",(e)=>{
    const validKey = ["1","2","3","-","4","5","6","+","7","8","9","/","Enter","0","AC","*","Backspace"];

    if(validKey.includes(e.key)){
        if(e.key == "Enter"){
            displayResult("=");
        }
        else if(e.key == "Backspace"){
            displayResult("AC");
        }
        else{
            displayResult(e.key);
        }
    }
})

buttons.forEach((button)=>{
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("btn");
    
    buttonEl.innerHTML = button;
    
    // buttonEl.onclick = () =>{
    //     displayResult(button);
    // };
     buttonEl.addEventListener("click", () =>displayResult(button));

    calc.appendChild(buttonEl);

    // darkmode
    darkMode.addEventListener("click",()=>{
        buttonEl.classList.toggle("dark-class")
        
    })
});


