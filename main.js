// card name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameError = document.querySelector('.form__cardholder-error');

// card number
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberError = document.querySelector('.form__inputnumber-error');

// Mes
let monthCard = document.querySelector('.card_month');
let monthInput = document.querySelector('#cardMonth');
let monthError = document.querySelector('.form__input--mm--error');

// Mes
let yearCard = document.querySelector('.card_yeard');
let yearInput = document.querySelector('#cardYear');
let yearError = document.querySelector('.form__input--yy--error');

// Cvc
let cvcInput = document.querySelector('#cardCvc');
let cvcCard = document.querySelector('.card-back__cvc');
let cvcError = document.querySelector('.form__input--cvc--error');

// Formularios
let form = document.querySelector('.form');
let thanks = document.querySelector('.thanks-section');


// Ingreso dinamico del nombre
nameInput.addEventListener('input', e => {
  if (nameInput.value === '') {
    nameCard.innerHTML = 'JANE APPLESEED';
  } else {
    var ExpRegNomApe = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    if (ExpRegNomApe.test(nameInput.value)) {
      nameCard.innerHTML = nameInput.value;
    } else {
      let temp = nameInput.value;
      nameInput.value = temp.toString().slice(0, -1);
      nameCard.innerHTML = nameInput.value;
    }
  }

  if (nameInput.value != null) {
    hiddenError(nameInput, nameError);
  }

});


// Ingreso dinamico del numero
numberInput.addEventListener('input', e => {
  let inputvalue = e.target.value;

  let regExp = /[A-z]/g;
  numberCard.innerHTML = numberInput.value;

  if (regExp.test(numberInput.value)) {
    showError(numberInput, numberError, 'Wrong format, numbers only');
    //numberError.innerHTML = 'Wrong format, numbers only'
  } else {
    numberInput.value = inputvalue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
    hiddenError(numberInput, numberError);
    //numberError.innerHTML = '';
    //numberInput.style.borderColor = '';
  }


});


// Ingreso dinamico del mes
monthInput.addEventListener('input', e => {
  let Monthvalue = e.target.value;
  if (Monthvalue.length === 2) {
    if ((Monthvalue > 0 && Monthvalue <= 12)) {
      monthCard.innerHTML = monthInput.value;
      hiddenError(monthInput, monthError);
      // hiddenError(monthInput, monthError);
    } else {
      showError(monthInput, monthError, 'Month incorrect');
    }
  } else {
    hiddenError(monthInput, monthError);
  }

  // este orden es importante
  if (Monthvalue.length === 1) {
    showError(monthInput, monthError, 'Month incorrect');
    if (Monthvalue <= 0 && Monthvalue === "0") {
      showError(monthInput, monthError, 'Month incorrect');
    }
  }

});



// Ingreso dinamico del año
yearInput.addEventListener('input', e => {

  debugger;
  let Yearvalue = e.target.value;
  let yearActual = new Date().getFullYear().toString().slice(-2);


  if (Yearvalue.length === 2) {
    if (Yearvalue >= yearActual) {
      yearCard.innerHTML = yearInput.value;
      hiddenError(yearInput, yearError);
      // hiddenError(monthInput, monthError);
    } else {
      showError(yearInput, yearError, 'Year incorrect');
    }
  } else if (Yearvalue.length === 0) {
    hiddenError(yearInput, yearError);
  } else {

    showError(yearInput, yearError, 'Year incorrect');
  }

});


//Verificacion del cvc
cvcInput.addEventListener('input', e => {
  if (cvcInput.value.length > 2) {
    cvcCard.innerHTML = cvcInput.value;
     hiddenError(cvcInput, cvcError);
  }
});

//Boton confirmar
let confirmBtn = document.querySelector('.form__submit');
confirmBtn.addEventListener('click', e => {
  e.preventDefault();
  var todobien = true
  if (nameInput.value === '') {
    showError(nameInput, nameError, "Cant't be empty");
    todobien = false;
  }
  if (numberInput.value === '') {
    showError(numberInput, numberError, "Cant't be empty");
    todobien = false;
  }
  if (monthInput.value === '') {
    showError(monthInput, monthError, "Cant't be empty");
    todobien = false;
  }
  if (yearInput.value === '') {
    showError(yearInput, yearError, "Cant't be empty");
    todobien = false;
  }
  if (cvcInput.value === '') {
    showError(cvcInput, cvcError, "Cant't be empty");
    todobien = false;
  }

  if (todobien) {
    form.style.setProperty('display', 'none');
    thanks.style.setProperty('display', 'block');
  }

});





// funciones de  Errores
function showError(divInput, divError, msgError) {
  divError.innerHTML = msgError;
  divInput.style.borderColor = '#FF0000';
}

function hiddenError(divInput, divError) {
  divError.innerHTML = '';
  divInput.style.borderColor = '';
}