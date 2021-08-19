function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';

    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput =  document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if(pin == typedNumber){
        notifyFail.style.display = 'none';
        notifySuccess.style.display = 'block';
    }
    else{
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}