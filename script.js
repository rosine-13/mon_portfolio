// =========================
// Effet Machine à écrire
// =========================

const texts = [
    "Développeuse Web",
    "Data Analyst Junior",
    "Passionnée par l'Intelligence Artificielle",
    "Créatrice de solutions numériques"
];

let index = 0;
let letter = 0;
let currentText = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {

    currentText = texts[index];

    if(!isDeleting){

        typing.textContent = currentText.substring(0, letter++);

        if(letter > currentText.length){

            isDeleting = true;

            setTimeout(type,1500);

            return;
        }

    }else{

        typing.textContent = currentText.substring(0, letter--);

        if(letter < 0){

            isDeleting = false;

            index++;

            if(index >= texts.length){

                index = 0;

            }

        }

    }

    setTimeout(type,100);

}

type();

// =========================
// Bouton Retour en haut
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =========================
// Envoi de formulaire EmailJS
// =========================

// Initialisation de la clé publique
emailjs.init("Jp66gG16NNAkkgBSA");

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Remplacer par tes identifiants EmailJS
    const serviceID = "service_62zjpng";
    const templateID = "template_0cmlfg9";

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert("Votre message a bien été envoyé !");
        form.reset();
      }, (error) => {
        alert("Erreur lors de l'envoi : " + JSON.stringify(error));
      });
  });
}