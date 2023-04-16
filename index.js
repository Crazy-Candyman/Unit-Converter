let input = document.getElementById("input");
let lengthConverter = document.getElementById("convert-length");
let volumeConverter = document.getElementById("convert-volume");
let massConverter = document.getElementById("convert-mass");
let inputBtn = document.getElementById("input-btn");
let meter = 3.281; //feet
let liter = 0.264; //gallon
let kilogram = 2.204; //pound

inputBtn.addEventListener("click", function () {
  let meterToFeet = input.value * meter;
  let feetToMeter = input.value / meter;
  let literToGallon = input.value * liter;
  let gallonToLiter = input.value / liter;
  let kilogramToPound = input.value * kilogram;
  let poundToKilogram = input.value / kilogram;

  lengthConverter.textContent = `${input.value} meters = ${meterToFeet.toFixed(
    3
  )} feet | ${input.value} feet = ${feetToMeter.toFixed(3)} meters`;

  volumeConverter.textContent = `${
    input.value
  } gallons = ${literToGallon.toFixed(3)} liters | ${
    input.value
  } liters = ${gallonToLiter.toFixed(3)} gallons`;

  massConverter.textContent = `${input.value} kilos = ${kilogramToPound.toFixed(
    3
  )} pounds | ${input.value} pounds = ${poundToKilogram.toFixed(3)} kilos`;
});
