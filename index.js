
const calculate = document.getElementById('calculate');


function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if( name.value !== '' && height !== '' && weight !== ''){
        
        const valueIMC = (weight / (height * height)).toFixed(2);

        let classification = '';
        if(valueIMC < 18.5){
            classification = 'Abaixo do Peso.';

        }else if (valueIMC <25){
            classification = 'Com peso ideal. Parabéns';
        } else if (valueIMC < 30){
            classification = 'Levemente acima do peso';
        }else if (valueIMC < 35){
            classification = 'Com obesidade grau I.'
        }else if (valueIMC < 40){
            classification = 'Com obesidade grau II'
        }else{
            classification = 'Com obesidade grau III. Cuidado'
        }


        result.textContent = `${name} seu IMC é ${valueIMC} e você está ${classification}`;
        
    }else{
        result.textContent = 'Preencha todos os Campos!!!'
    }

}

calculate.addEventListener('click', imc);

