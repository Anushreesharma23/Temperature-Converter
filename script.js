function convertTemperature() {
  var temperature = parseFloat(document.getElementById("inputTemperature").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit, result;

  if (fromUnit === "celsius") {
    result = (temperature * 9 / 5) + 32;
    toUnit = "Fahrenheit";
  } else if (fromUnit === "fahrenheit") {
    result = (temperature - 32) * 5 / 9;
    toUnit = "Celsius";
  } else {
    result = "Invalid unit";
    toUnit = "";
  }

  document.getElementById("output").textContent = result.toFixed(2) + " " + toUnit;
}

  