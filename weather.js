/**
 * Construire la requete à l'aide de l'api meteo 
- Il faut vraiment comprendre l’utilisation de l’api météo et surtout faire passer les bonnes infos dans l’url. (concaténation).
- Testez avec des « console.log » et ne passez pas à l’étape suivante temps que vous n’arrivez pas à faire fonctionner votre requête.
- Pensez à stocker la requête dans une fonction.
- Maintenant que vous arrivez à récupérer la météo pour une ville, je vous laisse changer la
température.
- Ainsi que le nom de la ville
Étape – 3
- Ajoutez un évènement au bouton « changer de ville » afin de pouvoir choisir une ville et la
stocker à l’aide d’une boite de dialogue (prompt).
- Rajouter la librairie AOS pour mettre une animation sur le bouton « changer de ville »
- Afficher la date et l’heure au format français dans la console.
- Conseil :
- En cas d’erreur sur la requête api c’est que la ville n’existe pas donc vous pouvez dans ce
cas obliger l’utilisateur à rentrer encore une ville tant que c’est faux.
- Il y a plusieurs façons de faire, la plus simple reste à passer en paramètre de la fonction la
ville rentrée par l’utilisateur.
- EXO BONUS, pour ceux qui ont finis :
- Pour gérer les paramètres de votre API comme la clé, la ville, l’unité et l’url essayez de
créer une classe myApiMeteo
- EXO BONUS BONUS
- Gérez tout cela avec async et await
 */

 /* fetch base code from https://api.openweathermap.org/ */

const URL_API = "https://api.openweathermap.org/data/2.5/weather?appid=7afa0385a8b990f55a0a4fbfae34b358&lang=fr&units=metric&q="
let cityName;
let myRequest;
let data;
let form = document.querySelector("form");
form.addEventListener("submit",function (event) {
    cityName= document.querySelector("#cityName").value;
    myRequest = URL_API+cityName;
    data = getData(myRequest);
})

// function weather(cityName) {
//     cityName= document.querySelector("#cityName").value;
//     fetch(URL_API+cityName)
//     .then(function(response) {
//         if(response.ok) {
//             return response.json();
//         }else {
//             console.log('Mauvaise réponse du réseau');
//         }
//     })
//     .catch(function(error) {
//         console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
//     }).then(function (data) {
//         console.log(`A ${data.name} il fait ${data.main.temp}°C, la vitesse du vent est de ${data.wind.speed}km/h le temps est  ${data.weather[0].description} `);
//     });
// }

function getData(url) {
    fetch(url)
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }else {
            console.log('Mauvaise réponse du réseau');
        }
    }).then(function (data) {
        console.log(`A ${data.name} il fait ${data.main.temp}°C`)
    })
    .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
}




// async function getData(url = "") {
//     const response = await fetch(url)
//     .then(function(response) {
//         if(response.ok) {
//             return response.json();
//         }else {
//             console.log('Mauvaise réponse du réseau');
//         }
//     }).catch(function(error) {
//             console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
//         })
// };
        


// data = getData('https://api.openweathermap.org/data/2.5/weather?q=toulouse&appid=7afa0385a8b990f55a0a4fbfae34b358&lang=fr&units=metric')
