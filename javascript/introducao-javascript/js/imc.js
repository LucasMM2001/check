let titulo = document.querySelector('.titulo');
titulo.textContent = 'LucasNutrição';

let pacientes = document.querySelectorAll('.paciente')



for (let i = 0; i < pacientes.length; i++) {

   let paciente = pacientes[i];

   let peso = paciente.querySelector('.info-peso');
   let altura = paciente.querySelector('.info-altura')
   let pesoPaciente = peso.textContent;
   let alturaPaciente = altura.textContent;


   let resultado = paciente.querySelector('.info-imc');


   let validarPeso = true;
   let validarAltura = true;


   if (pesoPaciente <= 0 || pesoPaciente >= 300) {
      resultado.textContent = 'Peso Inválido';
      console.log('Peso Inválido');
      validarPeso = false;
      paciente.classList.add("paciente-invalido");
   }

   if (alturaPaciente <= 0 || alturaPaciente >= 3.00) {
      resultado.textContent = 'Altura Inválida';
      console.log('Altura Inválida');
      validarAltura = false;
      paciente.classList.add("paciente-invalido");
   }

   if (validarPeso && validarAltura) {
      let Imc = calcularImc(pesoPaciente,alturaPaciente);
      resultado.textContent = Imc;
   

   }


}

function calcularImc(pesoPaciente,alturaPaciente) {
   let Imc = 0;
   Imc = pesoPaciente / (alturaPaciente * alturaPaciente);
   return Imc.toFixed(2);
   
}

let botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {

   event.preventDefault();


   let form = document.querySelector("#form-adiciona");

   let name = form.nome.value;
   let peso = form.peso.value;
   let altura =  form.altura.value;
   let gordura = form.gordura.value;

   



   let pacienteTr = document.createElement('tr');


   let nameTd = document.createElement('td');
   let pesoTd = document.createElement('td');
   let alturaTd = document.createElement('td');
   let gorduraTd = document.createElement('td');
   let imcTd = document.createElement ('td');


   

   nameTd.textContent = name;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura; 
   imcTd.textContent = calculaImc(peso,altura);
   

   

  
   
  
   pacienteTr.appendChild(nameTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);

   let tabela = document.querySelector("#tabela-pacientes");

   tabela.appendChild(pacienteTr);

   
});

function calculaImc(peso,altura) {
    
    let Imc = peso / (altura * altura);
    console.log(Imc);
    return Imc.toFixed(2);
    
 }
