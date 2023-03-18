const txtOp1 = document.getElementById("op1");
const txtOperador = document.getElementById("operador");
const txtOp2 = document.getElementById("op2");
const Btn = document.getElementById("calcular");
const Result = document.getElementById("Resultado");

Btn.addEventListener("click", calcular);

function calcular(){
    const operador = txtOperador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if ((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op2) ){
        let Resultado;
        switch(operador){
            case "+":
                 Resultado = op1 + op2;
                break;
            case "-":
                 Resultado = op1 - op2;
                break;
            case "*":
                 Resultado = op1*op2;
                break;
            case "/":
                 Resultado = op1/op2;
                break;
        }
        Result.style = "color: green";
        Result.innerText = "= " + Resultado    
     }else{
        Result.style = "color: red";
        Result.innerText = "ERROR PAYASO"
    }

        
}
