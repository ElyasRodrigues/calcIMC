document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault()
  let peso = Number(document.querySelector("#kg").value);
  let altura = Number(document.querySelector("#altura").value)

  resultIMC(peso, altura).then((result)=>{
    document.querySelector("#imc-info").textContent = result
  }).catch((err) => {
    document.querySelector("#imc-info").textContent = err;
  })
})





function calcIMC(peso, altura){
  return new Promise((resolve, reject) => {
    if(typeof peso === "number" && typeof altura === "number"){
      resolve((peso / (altura * altura)).toFixed(2))
    } else{
      reject("Por favor, coloque apenas números.");
    }
  })
}

function resultIMC(peso, altura){
  return new Promise((resolve, reject) => {
    calcIMC(peso, altura).then((imc) => {
      if(imc < 18.5){
        resolve(`Seu IMC é ${imc} - MAGREZA`);
      }
      if(imc < 24.9){
        resolve(`Seu IMC é ${imc} - NORMAL`);
      }
      if(imc < 29.9){
        resolve(`Seu IMC é ${imc} - SOBREPESO`);
      }
      if(imc < 39.9){
        resolve(`Seu IMC é ${imc} - OBESIDADE`);
      }
      if(imc > 40){
        resolve(`Seu IMC é ${imc} - OBESIDADE GRAVE`);
      }
    }).catch((err) => {
      reject(err);
    })
  })
}

