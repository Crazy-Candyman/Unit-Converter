# Unit Converter 🔢

## About the Project

This web app is a simple unit converter that converts your input value to lengths, volume, and mass. Length will converted to feets and meters. Volume will be converted to liters and gallons. Mass will be converted to kilograms and pounds.

## Screenshot

![](/screenshots/Unit_Converter.png)

## Links

Live URL: _[Preview Site](https://crazy-candyman.github.io/Unit-Converter/)_

## Built With

    - HTML
    - CSS
    - JavaScript

**JavaScript code from the solution**

```javascript
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
```

## Atrribution

This is a solo project by Scrimba that challenges a students skills upon completing the Learn JavaScript Course.

Challenged by Scrimba <br/>
Created by [@Crazy-Candyman](https://github.com/Crazy-Candyman)
