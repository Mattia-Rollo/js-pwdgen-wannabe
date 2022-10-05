/*
chiedo all'utente il nome
chiedo all'utente il cognome
chiedo all'utente il colore preferito
chiedo all'utente la password

ragruppo i dati inseriti dall'utente 

Prendo l'elemento con la classe "new-passowrd" dove voglio inserire la password generata 
cambio il contenuto , inserendo la nuova password 

*/


const nameUser = prompt('come ti chiami?');
console.log(nameUser);
const surnameUser = prompt('qual\'è il tuo cognome?');
console.log(surnameUser);
const favoriteColor = prompt('qual\'è il tuo colore preferito?');
console.log(favoriteColor);
const age = prompt('quanti ani hai?');
console.log(age);


const generatedPassword = nameUser + surnameUser + favoriteColor + age;
console.log(generatedPassword);

const elemento = document.getElementsByClassName('new-password')[0];
console.log(elemento);
elemento.innerHTML = `
    la password generata è :<span>
    ${generatedPassword}</span><br><br>
    <span>livello sicurezza password -200%</span>

`;




