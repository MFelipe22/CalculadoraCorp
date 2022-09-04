let sexo = "";

document.getElementById("boton-hombre").addEventListener("click", function () {
  sexo = "Hombre";
  document.getElementById("boton-hombre").style.backgroundColor = "#81CDFF";
  document.getElementById("boton-mujer").style.backgroundColor = "inherit";
});

document.getElementById("boton-mujer").addEventListener("click", () => {
  sexo = "Mujer";
  document.getElementById("boton-mujer").style.backgroundColor = "#EEC0F7";
  document.getElementById("boton-hombre").style.backgroundColor = "inherit";
});




function tirarAlerta(e){ 
  //pasa el evento por parametro
  e.preventDefault(); // esto hace que no se actualice la pagina
 
  let peso = parseInt(document.getElementById("peso").value); 
  let altura = parseInt(document.getElementById("altura").value);
  let edad = parseInt(document.getElementById("edad").value);
  let alturaEnMetros = altura / 100;
  
  let mb = ""
  
  
  sexo == "Hombre"
  ? mb = metabolismoBasalHombre(peso, altura, edad)
  : mb = metabolismoBasalMujer(peso, altura, edad);
  
  
  redireccionar()
  
  
  document.getElementById("imc").value = `Indice Masa Corporal: ${(peso /(alturaEnMetros * alturaEnMetros)).toFixed(2)}`; //MOSTRAR ESTO EN displayInfor.html PRIMER INPUT  -- > MOSTRAR ESTO EN displayInfor.html PRIMER INPUT  
  
  document.getElementById("mb").value = `Metabolismo Basal: ${(mb).toFixed()} Kcal`; //MOSTRAR ESTO EN displayInfor.html SEGUNDO INPUT  -- > MOSTRAR ESTO EN displayInfor.html SEGUNDO INPUT  
  
  
  document.querySelector("#mostrar-datos-imc").value = `Mantener peso:  ${(mantener(mb)).toFixed()} Kcal `;
  document.querySelector("#bajar-peso").value = `Bajar peso:  ${(bajar(mb)).toFixed()} Kcal `;
  document.querySelector("#aumentar-peso").value = `Aumentar peso:  ${(subir(mb)).toFixed()} Kcal `;
  
  
  
  
}

function redireccionar(){
  location.href = "displayInfo.html";
  
}

function bajar(mb){
  let bajar = (mb*101.98)/100
  return bajar
  
}

function mantener(mb){
  let mantener = (mb*119.98)/100
  return mantener
}

function subir(mb){
  let subir = (mb*137.98)/100
  return subir
}

function metabolismoBasalHombre(peso, altura, edad) {
  let tmbh = 0;
  tmbh = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
  return tmbh;
}

function metabolismoBasalMujer(peso, altura, edad) {
  let tmbm = 0;
  tmbm = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
  return tmbm;
}


