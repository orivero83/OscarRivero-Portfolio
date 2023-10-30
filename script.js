  // JavaScript para mostrar el botón en una altura específica
  window.addEventListener('scroll', function() {
    var boton = document.querySelector('.floatingButton');
    var alturaEspecifica = 900; // Cambia esta altura según tus necesidades

    if (window.scrollY >= alturaEspecifica) {
        boton.style.display = 'block';
    } else {
        boton.style.display = 'none';
    }
});


 
 
 
 
 // Función para mostrar u ocultar el menú

 function toggleMenutlf() {
  var menu = document.querySelector('.menu-tlf');
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
  }
}



/* ---------------------- codigo completo de translate ---------------------- */

function toggleDiv() {
    var div = document.getElementById("google_translate_element");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block"; 
    } else {
        div.style.display = "none"; 
        desaparecerYReaparecer();
    }
}

/* ---------------------------- FIN TRANSLATE BTN --------------------------- */



/* ------------------------------ testimonio 3d ----------------------------- */


const slider = document.querySelector('.slider');
const stopButton = document.getElementById('stopAnimation');
const accelerateButton = document.getElementById('accelerateAnimation');
const resetButton = document.getElementById('resetAnimationSpeed');
let animationPaused = false;
let initialDuration;

stopButton.addEventListener('click', () => {
  if (animationPaused) {
    slider.style.animationPlayState = 'running';
    animationPaused = false;
    stopButton.textContent = 'Detener';
  } else {
    slider.style.animationPlayState = 'paused';
    animationPaused = true;
    stopButton.textContent = 'Reanudar';
  }
});

accelerateButton.addEventListener('click', () => {
  const animationDuration = window.getComputedStyle(slider).getPropertyValue('animation-duration');
  const currentDuration = parseFloat(animationDuration);
  const newDuration = currentDuration * 0.5; // Puedes ajustar este valor para acelerar más o menos.
  slider.style.animationDuration = `${newDuration}s`;
});

resetButton.addEventListener('click', () => {
  slider.style.animationDuration = initialDuration;
});


initialDuration = window.getComputedStyle(slider).getPropertyValue('animation-duration');


/* ------------------------------FIN testimonio 3d ----------------------------- */



/* --------------------------------- EMAIL FORM-------------------------------- */

const btn = document.getElementById('button');
const messageBox = document.getElementById('messageBox');
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_vt6rvmg';
        const templateID = 'template_djsoldn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                showMessage('Email sent!', false);
                this.reset();
            }, (err) => {
                btn.value = 'Send Email';
                showMessage(JSON.stringify(err), true);
            });
    });

function showMessage(message, isError) {
    messageBox.textContent = message;
    messageBox.classList.remove(isError ? 'success' : 'error');
    messageBox.classList.add(isError ? 'error' : 'success');
    messageBox.style.display = 'block';

    setTimeout(function () {
        messageBox.style.display = 'none';
    }, 4000);
};
/* ---------------------------- FIN   EMAIL form ---------------------------- */


