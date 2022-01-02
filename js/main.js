//VAZIFA-1 KIM BIRINCHI BORISH
//O'zgaruvchilarni topib olamiz
const elFormRace = document.querySelector('.js-form-race');
const elInputAmount = elFormRace.querySelector('.js-form-amount');
const elOutputFoot = elFormRace.querySelector('.result-foot');
const elOutputBike = elFormRace.querySelector('.result-bike');
const elOutputCar = elFormRace.querySelector('.result-car');
const elOutputPlane = elFormRace.querySelector('.result-plane');

let walkSpeed = 3.6; // Piyoda - 3.6 km/soat
let bikeSpeed = 20.1; // Velosiped - 20.1 km/soat
let carSpeed = 70; // Mashina - 70 km/soat
let planeSpeed = 800; // Samolyot - 800 km/soat
let distance = '';

let timeResault = function () {
  distance = elInputAmount.value.trim();
  //Shartni yozamiz
  if (distance > 0) {
    let walkTime = distance / walkSpeed;
    walkHour = parseInt(walkTime, 10);
    walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);
    let bikeTime = distance / bikeSpeed;
    bikeHour = parseInt(bikeTime, 10);
    bikeMinute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60);
    let carTime = distance / carSpeed;
    carHour = parseInt(carTime, 10);
    carMinute = Math.round((parseFloat(carTime.toFixed(2), 10) - carHour) * 60);
    let planeTime = distance / planeSpeed;
    planeHour = parseInt(planeTime, 10);
    planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);

    //Natijani ko'rsatamiz
    elOutputFoot.textContent = `${walkHour} soat, ${walkMinute} daqiqa`;
    elOutputBike.textContent = `${bikeHour} soat, ${bikeMinute} daqiqa`;
    elOutputCar.textContent = `${carHour} soat, ${carMinute} daqiqa`;
    elOutputPlane.textContent = `${planeHour} soat, ${planeMinute} daqiqa`;
  }
};

//Formani ketib qolishini oldini olamiz
elFormRace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  timeResault();
});

//Resultatni usha zahoti(online) ko'rsatish uchun
elOutputFoot.addEventListener('keyup', () => {
  timeResault();
});
elOutputBike.addEventListener('keyup', () => {
  timeResault();
});
elOutputCar.addEventListener('keyup', () => {
  timeResault();
});
elOutputPlane.addEventListener('keyup', () => {
  timeResault();
});


//VAZIFA-2 TEMPERATURA CONVERTORI
const elFormTemp = document.querySelector('.js-form-temp');
const elTempInput = elFormTemp.querySelector('.js-form-celcy-input');
const elOutputTemp = elFormTemp.querySelector('.js-output-temperature');

//Selsiydan Farengeytga o'tkazuvchi funksiya
const displayTempResault = function () {
  let celsius = Number(elTempInput.value);
  let celsiusToFahranheit = (celsius * 9) / 5 + 32;
  elOutputTemp.textContent = `${celsiusToFahranheit} °F`
}
//Formani ketib qolishini oldini olamiz
elFormTemp.addEventListener('submit', (evt) => {
  evt.preventDefault();
  displayTempResault();
});

//Resultatni usha zahoti(online) ko'rsatish uchun
elTempInput.addEventListener('keyup', () => {
  displayTempResault();
});


//VAZIFA-3 YUGURUSHGA CHIQISH