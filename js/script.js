/*
chiedo all'utente nome
chiedo all'utente il cognome
chiedo all'utente il colore preferito
chiedo all'utente la password

Prendo l'elemento con la classe "new-passowrd" dove voglio inserire la password generata 
cambio il contenuto , inserendo la nuova password





*/






const nameUser = prompt('come ti chiami?');
console.log(nameUser);
const surnameUser = prompt('qual\'è il tuo cognome?');
console.log(surnameUser);
const age = prompt('quanti ani hai?');
console.log(age);
const favoriteColor = prompt('qual\'è il tuo colore preferito?');
console.log(favoriteColor);

const generatedPassword = nameUser + surnameUser + age + favoriteColor;
console.log(generatedPassword);

const elemento = document.getElementsByClassName('new-password')[0];
console.log(elemento);
elemento.innerHTML = `
    <span> la password generata è :</span>
    ${generatedPassword}

`;


