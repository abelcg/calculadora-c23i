let screen = document.getElementById('screen');
//let buttons = document.getElementsByTagName('button');
let buttons = document.querySelectorAll('button');

//console.log(buttons);

let screenValue = ""; //variable muleta que irá recolectando el valor de la pantalla
/* 
const handleFocus = (event) => {     focus cuando clickeo en el input y el cuersos titila, blur cuando me voy con tab
    todo evento genera un objeto event 
    console.log(event);
} 

const handleChange = (e) => {
    console.log(e.target.value);
} */

//en vez ed agregar como un atributo el evento en cada etiqueta buuton lo haremos con un addevenlistener
//screen.addEventListener('change', handleFocus)
//screen.addEventListener('change', handleChange)

for(let item of buttons) {
    item.addEventListener('click', (e)=>{
       //console.log(e.target.innerHTML);
       let buttonText = e.target.innerHTML;
       console.log('Button text is ' + buttonText);
    
       switch (buttonText) {
        case 'X':
            buttonText = '*';
            console.log('Button text is ' + buttonText);
            screenValue += buttonText;
            screen.value = screenValue;
            return;
        case 'AC':
            screenValue = "";
            screen.value = screenValue;
            return;
        case '√':
            buttonText = 'sqrt(';
            console.log('Button text is ' + buttonText);
            screenValue += buttonText;
            screen.value = screenValue;
            return;
        case 'π':
            buttonText = '3.1416';
            console.log('Button text is ' + buttonText);
            screenValue += buttonText;
            screen.value = screenValue;
            return;
        case '%':
            buttonText = '/100*';
            console.log('Button text is ' + buttonText);
            screenValue += buttonText;
            screen.value = screenValue;
            return;
        case '=':
            screen.value = math.evaluate(screenValue);
            return;
        case '⌫':
            screenValue = screenValue.substring(0, screen.value.length - 1);
            screen.value = screenValue;
            return;
        default:
            screenValue += buttonText;
            screen.value = screenValue;
            return;
       }
       

    })
}
