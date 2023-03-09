const buttonForResult = document.getElementById("resultButton_Length");
const inputBox = document.getElementById("userInputBox_Length");
const outputBox = document.getElementById("outputBox_Length");
const clearButton = document.getElementById("clearButton_Length");
const in_typeSelect = document.getElementById("in_unit_selector_Length");
const out_typeSelect = document.getElementById("out_unit_selector_Length");
var inputTypeValue, resultTypeValue;
inputTypeValue = in_typeSelect.value;
resultTypeValue = out_typeSelect.value;

clearButton.addEventListener("click", () => {
  inputBox.value = "";
  outputBox.value = "Result is here";
  in_typeSelect.value = "mm";
  out_typeSelect.value = "c_unit_mm";
});

buttonForResult.addEventListener("click", function myResult() {
  const inputBox = document.getElementById("userInputBox_Length");
  const outputBox = document.getElementById("outputBox_Length");
  const in_typeSelect = document.getElementById("in_unit_selector_Length");
  const out_typeSelect = document.getElementById("out_unit_selector_Length");
  var inputTypeValue, resultTypeValue;
  inputTypeValue = in_typeSelect.value;
  resultTypeValue = out_typeSelect.value;

  // 1
  //mm calculation
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) / 10;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 0.0393700787;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 0.0032804;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) / 1000;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) / 1000000;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 0.0010936133;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 0.01;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 1000;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 1000000000;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 1000000;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.000000621371;
  }
  if (inputTypeValue == "mm" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.000000539957;
  }

  // 2
  // cm calculation
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 10;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 0.393700787;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 0.032804;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) / 100;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) / 100000;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 0.010936133;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 0.1;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 10000;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 10000000000;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 10000000;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.00000621371;
  }
  if (inputTypeValue == "cm" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.00000539957;
  }

  //3
  // inch calculation
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 25.4;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 2.54;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) / 12;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) * 0.0254;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) * 0.0000254;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 0.027777778;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 0.254;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 25400;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 25400000000;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 25400000;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.000013714902807775;
  }
  if (inputTypeValue == "inch" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) / 72913.385826772;
  }

  //4
  // ft calculation
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 304.8;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 30.48;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 12;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) * 0.3048;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) * 0.0003048;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 0.33333333;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 3.048;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 304800;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 30480000000;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 304800000;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.000189393939;
  }
  if (inputTypeValue == "ft" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.000164578834;
  }

  // 5
  // m calculation
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 1000;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 100;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 39.37;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 3.2804;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) * 0.001;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 0.33333333;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 10;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 1000000;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 1000000000000;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 1000000000;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.000621371192;
  }
  if (inputTypeValue == "m" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.000539956803;
  }

  // 6
  // km calculation
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 1000000;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 100000;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 39370.0787;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 3280.84;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) * 1000;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 1093.6133;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 10000;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 1000000000;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 1000000000000000;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 1000000000000;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.621371192;
  }
  if (inputTypeValue == "km" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.539956803;
  }

  // 7
  // for yard calculation
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 914.4;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 91.44;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 36;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 3;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) * 0.9144;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) * 0.0009144;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 9.144;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 914400;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 914400000000;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 914400000;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.00056181818;
  }
  if (inputTypeValue == "yard" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.000493736501;
  }

  // 8
  // for dm calculation
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 100;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 10;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 3.93700787;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 0.328084;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) * 0.1;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) * 0.0001;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 0.10936133;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 100000;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 100000000000;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 100000000;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 0.000053995680345572;
  }
  if (inputTypeValue == "dm" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.0000539957;
  }

  // 9
  // micrometer calculation
  if (
    inputTypeValue == "micrometer" &&
    resultTypeValue == "c_unit_micrometer"
  ) {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 0.001;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 0.00001;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) / 25400000;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) / 304800000;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) / 1000000000;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) / 1000000000000;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) / 914400;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 0.00001;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 100000000000;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 1000000;
  }
  if (inputTypeValue == "micrometer" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) / 1609344000;
  }
  if (
    inputTypeValue == "micrometer" &&
    resultTypeValue == "c_unit_nauticalmile"
  ) {
    outputBox.value = Number(inputBox.value) / 1852000000;
  }

  // 10
  // picometer calculation
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) / 1000000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) / 10000000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) / 25400000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) / 304800000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) / 1000000000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) / 1000000000000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) / 914400000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) / 100000000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 1000000;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 0.001;
  }
  if (inputTypeValue == "picometer" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) / 1609344000000000;
  }
  if (
    inputTypeValue == "picometer" &&
    resultTypeValue == "c_unit_nauticalmile"
  ) {
    outputBox.value = Number(inputBox.value) / 1852000000000000;
  }

  // 11
  // nanometer calculation
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) / 1000000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) / 10000000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) / 25400000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) / 304800000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) / 1000000000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) / 1000000000000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) / 914400000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) / 100000000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) / 1000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 1000;
  }
  if (inputTypeValue == "nanometer" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) / 1609344000000;
  }
  if (
    inputTypeValue == "nanometer" &&
    resultTypeValue == "c_unit_nauticalmile"
  ) {
    outputBox.value = Number(inputBox.value) / 1852000000000;
  }

  // 12
  // mile calculation
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 1609344;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 160934.4;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 63360;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 5280;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) * 1609.344;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) * 1.609344;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 1760;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 16093.44;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_micrometer") {
    outputBox.value = Number(inputBox.value) * 1609344000;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_picometer") {
    outputBox.value = Number(inputBox.value) * 1609344000000000;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_nanometer") {
    outputBox.value = Number(inputBox.value) * 1609344000000;
  }
  if (inputTypeValue == "mile" && resultTypeValue == "c_unit_nauticalmile") {
    outputBox.value = Number(inputBox.value) * 0.8689762419;
  }

  // 13
  // nauticalmile calculation
  if (
    inputTypeValue == "nauticalmile" &&
    resultTypeValue == "c_unit_nauticalmile"
  ) {
    outputBox.value = Number(inputBox.value);
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_mm") {
    outputBox.value = Number(inputBox.value) * 1852000;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_cm") {
    outputBox.value = Number(inputBox.value) * 185200;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_inch") {
    outputBox.value = Number(inputBox.value) * 72913.385826772;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_ft") {
    outputBox.value = Number(inputBox.value) * 6076.1154855643;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_m") {
    outputBox.value = Number(inputBox.value) * 1852;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_km") {
    outputBox.value = Number(inputBox.value) * 1.852;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_yard") {
    outputBox.value = Number(inputBox.value) * 2025.3718285214;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_dm") {
    outputBox.value = Number(inputBox.value) * 18520;
  }
  if (
    inputTypeValue == "nauticalmile" &&
    resultTypeValue == "c_unit_micrometer"
  ) {
    outputBox.value = Number(inputBox.value) * 1609344000;
  }
  if (
    inputTypeValue == "nauticalmile" &&
    resultTypeValue == "c_unit_picometer"
  ) {
    outputBox.value = Number(inputBox.value) * 1852000000000000;
  }
  if (
    inputTypeValue == "nauticalmile" &&
    resultTypeValue == "c_unit_nanometer"
  ) {
    outputBox.value = Number(inputBox.value) * 1852000000000;
  }
  if (inputTypeValue == "nauticalmile" && resultTypeValue == "c_unit_mile") {
    outputBox.value = Number(inputBox.value) * 1.1507794480235;
  }
  if (inputBox.value == "") {
    outputBox.value = "";
  }
});
// length part end

// mass and weight part start
const resultButtonMW = document.getElementById("resultButtonMassWeight");
const inputBoxMW = document.getElementById("userInputBoxMassWeight");
const outputBoxMW = document.getElementById("outputBoxMassWeight");
const inputMW = document.getElementById("in_unit_selector_mass_weight");
const outputMW = document.getElementById("out_unit_selector_mass_weight");
const inTypeMW = inputMW.value;
const outTypeMW = outputMW.value;
const clearButtonMW = document.getElementById("clearButtonMassWeight");
clearButtonMW.addEventListener("click", () => {
  inputBoxMW.value = "";
  outputBoxMW.value = "";
  inputMW.value = "miligram";
  outputMW.value = "c_unit_miligram";
});

resultButtonMW.addEventListener("click", function myMW() {
  const inputBoxMW = document.getElementById("userInputBoxMassWeight");
  const outputBoxMW = document.getElementById("outputBoxMassWeight");
  const inputMW = document.getElementById("in_unit_selector_mass_weight");
  const outputMW = document.getElementById("out_unit_selector_mass_weight");
  const inTypeMW = inputMW.value;
  const outTypeMW = outputMW.value;
  // 1
  // calculation for miligram
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.01;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.1;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.001;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.00001;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.000001;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) / 1000000000;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.000035274;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0000022046;
  }
  if (inTypeMW == "miligram" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.00000015747304441777;
  }

  // 2
  // calculation for decigram
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 100;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 10;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.1;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.001;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0001;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0000001;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0035274;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.00022046;
  }
  if (inTypeMW == "decigram" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.000015747304441777;
  }

  // 3
  // calcultion for centigram
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 10;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.1;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.01;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0001;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.00001;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.00000001;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.00035274;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.000022046;
  }
  if (inTypeMW == "centigram" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0000015747304441777;
  }

  // 4
  // calculation for gram
  if (inTypeMW == "gram" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 1000;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 10;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 100;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.01;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.001;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.000001;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.035274;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0022046;
  }
  if (inTypeMW == "gram" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.00015747304441777;
  }

  // 5
  // calculation for hectogram
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 100000;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 1000;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 10000;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) / 0.01;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.1;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0001;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 3.527396195;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.22046;
  }
  if (inTypeMW == "hectogram" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.015747304441777;
  }

  // 6
  // calculation for kilogram
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 1000000;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 10000;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 100000;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) / 0.001;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) / 0.1;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.001;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 35.27396195;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 2.2046;
  }
  if (inTypeMW == "kilogram" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 1.5747304441777;
  }

  // 7
  // calculation for metricton
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 1000000000;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 10000000;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 100000000;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) / 0.000001;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 1000;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 10000;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 35273.96195;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 2204.6226218;
  }
  if (inTypeMW == "metricton" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 1.5747304441777;
  }

  // 8
  // calculation for ounce
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 28349.523125;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 283.49523125;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 2834.9523125;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 28.349523125;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0283495231;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.2834952313;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0000283495;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0625;
  }
  if (inTypeMW == "ounce" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0044642857;
  }

  // 9
  // calculation for pound
  if (inTypeMW == "pound" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 453592.37;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 4535.9237;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 45359.237;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 453.59237;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.45359237;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 4.5359237;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0004535924;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 16;
  }
  if (inTypeMW == "pound" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0714285714;
  }

  // 10
  // calculation for stone
  if (inTypeMW == "stone" && outTypeMW == "c_unit_stone") {
    outputBoxMW.value = Number(inputBoxMW.value);
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_miligram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 6350293.18;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_decigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 63502.9318;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_centigram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 635029.318;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_gram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 6350.29318;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_kilogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 6.35029318;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_hectogram") {
    outputBoxMW.value = Number(inputBoxMW.value) * 63.5029318;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_metricton") {
    outputBoxMW.value = Number(inputBoxMW.value) * 0.0063502932;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_ounce") {
    outputBoxMW.value = Number(inputBoxMW.value) * 224;
  }
  if (inTypeMW == "stone" && outTypeMW == "c_unit_pound") {
    outputBoxMW.value = Number(inputBoxMW.value) * 14;
  }
  if (inputBoxMW.value == "") {
    outputBoxMW.value = "";
  }
});
// type solution
function hideItemBMR() {
  document.getElementById("");
  document.getElementById("BmiHideAll").style.display = "none";
  document.getElementById("BmrHideAll").style.display = "block";
  const bmr_style = document.getElementById("forBMR");
  bmr_style.style.backgroundColor = "white";
  // document.getElementById("forBMR").style.Color = "white";
}
function hideItemBMI() {
  document.getElementById("");
  document.getElementById("BmiHideAll").style.display = "block";
  document.getElementById("BmrHideAll").style.display = "none";
}

// BMI and BMR Calculation

const resultButtonForBMI = document.getElementById("resultButtonBMI");
const clearButtonForBMI = document.getElementById("clearButtonForBMI");
const inputBoxForWeight_BMI = document.getElementById("BMI_InputBoxWeight");
const inputBoxForFeet_BMI = document.getElementById("BMI_InputBoxFeet");
const inputBoxForInch_BMI = document.getElementById("BMI_InputBoxInch");
const outputBoxForBMI = document.getElementById("outputBoxForBMI");
const descriptionBox = document.getElementById("descriptionBox_forBMI");
descriptionBox.style.display = "none";
if (
  inputBoxForInch_BMI == "" &&
  inputBoxForInch_BMI == "0" &&
  inputBoxForInch_BMI == 0
) {
  inputBoxForInch_BMI == 0.000001;
}

resultButtonForBMI.addEventListener("click", () => {
  // here some const
  const inputBoxForWeight_BMI = document.getElementById("BMI_InputBoxWeight");
  const inputBoxForFeet_BMI = document.getElementById("BMI_InputBoxFeet");
  const inputBoxForInch_BMI = document.getElementById("BMI_InputBoxInch");
  const BMIWeightUnit = document.getElementById("BMI_weight_select_unit");
  const BMIFeetUnit = document.getElementById("BMI_feet_select_unit");
  const BMIInchUnit = document.getElementById("BMI_inch_select_unit");
  const BMI_Type_Weight = BMIWeightUnit.value;
  const BMI_Type_Feet = BMIFeetUnit.value;
  const BMI_Type_INch = BMIInchUnit.value;
  const outputBoxForBMI = document.getElementById("outputBoxForBMI");

  if (
    BMI_Type_Weight == "BMI_kg" &&
    BMI_Type_Feet == "BMI_feet" &&
    BMI_Type_INch == "BMI_inch"
  ) {
    const feetToMeter = Number(inputBoxForFeet_BMI.value) * 0.3048;
    const inchToMeter = Number(inputBoxForFeet_BMI.value) * 0.0254;
    const addTwoValue = feetToMeter + inchToMeter;
    const addTwoSquare = Number(addTwoValue) * Number(addTwoValue);
    const toFixingResult = Number(inputBoxForWeight_BMI.value) / addTwoSquare;
    outputBoxForBMI.value = toFixingResult.toFixed(2);
  }
  if (outputBoxForBMI.value <= 18.5) {
    const BMI_2_Digit = Number(outputBoxForBMI.value);
    const toFixedDigit = BMI_2_Digit.toFixed(2);
    descriptionBox.style.display = "block";
    descriptionBox.value = `আপনার BMI এর মান  ${toFixedDigit} , শরীরের ওজন কম । আপনার পর্যাপ্ত পরিমাণে খাবার গ্রহন করতে হবে । `;
  }
  if (outputBoxForBMI.value > 18.5 && outputBoxForBMI.value < 24.9) {
    const BMI_2_Digit = Number(outputBoxForBMI.value);
    const toFixedDigit = BMI_2_Digit.toFixed(2);
    descriptionBox.style.display = "block";
    descriptionBox.value = `আপনার BMI এর মান  ${toFixedDigit} , শরীরের ওজন সঠিক । সুস্বাস্থ্যের আদর্শ মান । `;
  }
  if (outputBoxForBMI.value > 25 && outputBoxForBMI.value < 29.9) {
    const BMI_2_Digit = Number(outputBoxForBMI.value);
    const toFixedDigit = BMI_2_Digit.toFixed(2);
    descriptionBox.style.display = "block";
    descriptionBox.value = `আপনার BMI এর মান  ${toFixedDigit} , শরীরের ওজন অতিরিক্ত । ব্যায়াম করে অতিরিক্ত ওজন কমাতে হবে । `;
  }
  if (outputBoxForBMI.value > 30 && outputBoxForBMI.value < 34.9) {
    const BMI_2_Digit = Number(outputBoxForBMI.value);
    const toFixedDigit = BMI_2_Digit.toFixed(2);
    descriptionBox.style.display = "block";
    descriptionBox.value = `আপনার BMI এর মান  ${toFixedDigit} , মোটা হওয়ার প্রথম স্তর, বেছে খাদ্য গ্রহণ ও ব্যায়াম করা প্রয়োজন । `;
  }
  if (outputBoxForBMI.value > 35 && outputBoxForBMI.value < 39.9) {
    const BMI_2_Digit = Number(outputBoxForBMI.value);
    const toFixedDigit = BMI_2_Digit.toFixed(2);
    descriptionBox.style.display = "block";
    descriptionBox.value = `আপনার BMI এর মান  ${toFixedDigit} , মোটা হওয়ার  দ্বিতীয় স্তর, পরিমিত খাদ্য গ্রহণ ও ব্যায়াম করা প্রয়োজন । `;
  }
  if (outputBoxForBMI.value > 40) {
    const BMI_2_Digit = Number(outputBoxForBMI.value);
    const toFixedDigit = BMI_2_Digit.toFixed(2);
    descriptionBox.style.display = "block";
    descriptionBox.value = `আপনার BMI এর মান  ${toFixedDigit} , অতিরিক্ত মোটাত্ব,  মৃত্যুঝুকির   । ডাক্তারের  পরামরর্শের  প্রয়োজন । `;
  }
});
clearButtonForBMI.addEventListener("click", () => {
  descriptionBox.style.display = "none";
  inputBoxForWeight_BMI.value = "";
  inputBoxForFeet_BMI.value = "";
  inputBoxForInch_BMI.value = "";
  outputBoxForBMI.value = "";
});

// calculation for BMR

const bmr_outputBox = document.getElementById("outputBoxForBMR");
const bmr_resultButton = document.getElementById("resultButtonBMR");
const bmr_clearButton = document.getElementById("clearButtonForBMR");
const bmr_descriptionBox = document.getElementById("descriptionBox_forBMR");

bmr_descriptionBox.style.display = "none";

bmr_resultButton.addEventListener("click", () => {
  const bmrWeight_input = document.getElementById("BMR_InputBoxWeight");
  const bmrAge_input = document.getElementById("BMR_InputBoxAge");
  const bmrGender_select = document.getElementById("selectAnyGenderForBMR");
  const bmrHeight_feet = document.getElementById("BMR_InputBoxFeet");
  const bmrHeight_inch = document.getElementById("BMR_InputBoxInch");
  const phycalCondition = document.getElementById(
    "selectAnyPhysicalConditionForBMR"
  );
  // type checking
  const phycalConditionType = phycalCondition.value;
  const select_bmr_gender = bmrGender_select.value;

  // end type checking
  const feetTocm = Number(bmrHeight_feet.value * 30.48);
  const inchTocm = Number(bmrHeight_feet.value * 2.54);
  const addFeetAndInch = feetTocm + inchTocm;
  if (select_bmr_gender == "male" && phycalConditionType == "if_not_diligent") {
    const bmr_outputBoxValue =
      (66 +
        Number(bmrWeight_input.value) * 13.7 +
        5 * Number(addFeetAndInch) -
        6.8 * Number(bmrAge_input.value)) *
      1.2;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (
    select_bmr_gender == "male" &&
    phycalConditionType == "if_lightly_diligent"
  ) {
    const bmr_outputBoxValue =
      (66 +
        Number(bmrWeight_input.value) * 13.7 +
        5 * Number(addFeetAndInch) -
        6.8 * Number(bmrAge_input.value)) *
      1.375;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (select_bmr_gender == "male" && phycalConditionType == "Industrious") {
    const bmr_outputBoxValue =
      (66 +
        Number(bmrWeight_input.value) * 13.7 +
        5 * Number(addFeetAndInch) -
        6.8 * Number(bmrAge_input.value)) *
      1.55;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (
    select_bmr_gender == "male" &&
    phycalConditionType == "if_more_diligent"
  ) {
    const bmr_outputBoxValue =
      (66 +
        Number(bmrWeight_input.value) * 13.7 +
        5 * Number(addFeetAndInch) -
        6.8 * Number(bmrAge_input.value)) *
      1.725;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (
    select_bmr_gender == "male" &&
    phycalConditionType == "if_very_diligent"
  ) {
    const bmr_outputBoxValue =
      (66 +
        Number(bmrWeight_input.value) * 13.7 +
        5 * Number(addFeetAndInch) -
        6.8 * Number(bmrAge_input.value)) *
      1.9;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }

  //female bmr part start

  if (
    select_bmr_gender == "female" &&
    phycalConditionType == "if_not_diligent"
  ) {
    const bmr_outputBoxValue =
      (655 +
        Number(bmrWeight_input.value) * 9.6 +
        1.8 * Number(addFeetAndInch) -
        4.7 * Number(bmrAge_input.value)) *
      1.2;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (
    select_bmr_gender == "female" &&
    phycalConditionType == "if_lightly_diligent"
  ) {
    const bmr_outputBoxValue =
      (655 +
        Number(bmrWeight_input.value) * 9.6 +
        1.8 * Number(addFeetAndInch) -
        4.7 * Number(bmrAge_input.value)) *
      1.375;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (select_bmr_gender == "female" && phycalConditionType == "Industrious") {
    const bmr_outputBoxValue =
      (655 +
        Number(bmrWeight_input.value) * 9.6 +
        1.8 * Number(addFeetAndInch) -
        4.7 * Number(bmrAge_input.value)) *
      1.55;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (
    select_bmr_gender == "female" &&
    phycalConditionType == "if_more_diligent"
  ) {
    const bmr_outputBoxValue =
      (655 +
        Number(bmrWeight_input.value) * 9.6 +
        1.8 * Number(addFeetAndInch) -
        4.7 * Number(bmrAge_input.value)) *
      1.725;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
  if (
    select_bmr_gender == "female" &&
    phycalConditionType == "if_very_diligent"
  ) {
    const bmr_outputBoxValue =
      (655 +
        Number(bmrWeight_input.value) * 9.6 +
        1.8 * Number(addFeetAndInch) -
        4.7 * Number(bmrAge_input.value)) *
      1.9;

    const fullNumberBmr = Math.floor(bmr_outputBoxValue);
    bmr_outputBox.value = fullNumberBmr;
    bmr_descriptionBox.style.display = "block";
    bmr_descriptionBox.value = ` আপনার BMR এর মান  ${bmr_outputBox.value},  আপনার প্রতিদিন প্রায়  ${bmr_outputBox.value}  কিলোক্যালরি খাদ্য গ্রহণ করতে হবে আপনার ওজন ঠিক রাখার জন্য ।`;
  }
});
const bmrWeight_input = document.getElementById("BMR_InputBoxWeight");
const bmrAge_input = document.getElementById("BMR_InputBoxAge");
const bmrGender_select = document.getElementById("selectAnyGenderForBMR");
const bmrHeight_feet = document.getElementById("BMR_InputBoxFeet");
const bmrHeight_inch = document.getElementById("BMR_InputBoxInch");
const phycalCondition = document.getElementById(
  "selectAnyPhysicalConditionForBMR"
);
const phycalConditionType = phycalCondition.value;
const select_bmr_gender = bmrGender_select.value;

bmr_clearButton.addEventListener("click", () => {
  bmrWeight_input.value = "";
  bmr_outputBox.value = "";
  bmrHeight_feet.value = "";
  bmrHeight_inch.value = "";
  bmrAge_input.value = "";
  phycalCondition.value = "primaryValue";
  bmrGender_select.value = "male";
  bmr_descriptionBox.style.display = "none";
});

if (bmrHeight_inch == "" && bmrHeight_inch == "0" && bmrHeight_inch == 0) {
  bmrHeight_inch = Number(0.00000001);
}

// Discount Calculation
const ammountInputBox = document.getElementById("Discout_InputBox");
const parcentInputBox = document.getElementById("parcent_InputBox");
const outputBoxForDiscount = document.getElementById("outputBoxForDiscount");
const resultButtonDiscount = document.getElementById("resultButtonDiscount");
const clearButtonDiscount = document.getElementById("clearButtonForDiscount");
const descriptionBoxDiscount = document.getElementById(
  "descriptionBox_forDiscount"
);
descriptionBoxDiscount.style.display = "none";
resultButtonDiscount.addEventListener("click", () => {
  const totalAmmount = Number(ammountInputBox.value);
  const totalDiscount = Number(parcentInputBox.value);
  const discount_ammount = (totalAmmount * totalDiscount) / 100;
  const convertIntegerNumber = discount_ammount.toFixed(2);
  outputBoxForDiscount.value = (totalAmmount - convertIntegerNumber).toFixed(2);
  descriptionBoxDiscount.style.display = "block";
  descriptionBoxDiscount.value = `Your  Discounted  Ammount  is ${convertIntegerNumber},  &  Total  Ammount  is  ${totalAmmount},  You  Can  Pay ${outputBoxForDiscount.value}  !  Thank You`;
});
clearButtonDiscount.addEventListener("click", () => {
  ammountInputBox.value = "";
  parcentInputBox.value = "";
  descriptionBoxDiscount.value = "";
  outputBoxForDiscount.value = "";
  descriptionBoxDiscount.style.display = "none";
});

// Temperature Calculation Start
const resultButtonTemperature = document.getElementById(
  "resultButtonTemperature"
);
const TemperatureInputBox = document.getElementById("Temperature_InputBox");
const outputBoxForTemperature = document.getElementById(
  "outputBoxForTemperature"
);
const clearButtonTemperature = document.getElementById(
  "clearButtonForTemperature"
);
const descriptionBoxTemperature = document.getElementById(
  "descriptionBox_forTemperature"
);
descriptionBoxTemperature.style.display = "none";

const in_type_for_Temperature = document.getElementById(
  "in_type_for_temperature"
);
const out_type_for_Temperature = document.getElementById(
  "out_type_for_temperature"
);
// for select type => C , K , F
const in_select_type_tem = in_type_for_Temperature.value;
const out_select_type_tem = out_type_for_Temperature.value;

resultButtonTemperature.addEventListener("click", () => {
  const TemperatureInputBox = document.getElementById("Temperature_InputBox");
  const outputBoxForTemperature = document.getElementById(
    "outputBoxForTemperature"
  );
  const clearButtonTemperature = document.getElementById(
    "clearButtonForTemperature"
  );
  const descriptionBoxTemperature = document.getElementById(
    "descriptionBox_forTemperature"
  );
  const in_type_for_Temperature = document.getElementById(
    "in_type_for_temperature"
  );
  const out_type_for_Temperature = document.getElementById(
    "out_type_for_temperature"
  );
  // for select type => C , K , F
  const in_select_type_tem = in_type_for_Temperature.value;
  const out_select_type_tem = out_type_for_Temperature.value;
  // Celsius Part
  if (in_select_type_tem == "Celsius" && out_select_type_tem == "Celsius") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value = Number(TemperatureInputBox.value);
    descriptionBoxTemperature.value = `${TemperatureInputBox.value} Degree  Celsius   =  ${outputBoxForTemperature.value}  Celsius `;
  }
  if (in_select_type_tem == "Celsius" && out_select_type_tem == "Fahrenheit") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value =
      (Number(TemperatureInputBox.value) * 9 + 160) / 5;
    descriptionBoxTemperature.value = `${TemperatureInputBox.value} Degree Celsius   =  ${outputBoxForTemperature.value}  Fahrenheit `;
  }
  if (in_select_type_tem == "Celsius" && out_select_type_tem == "Kelvin") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value = Number(TemperatureInputBox.value) + 273;
    descriptionBoxTemperature.value = `${TemperatureInputBox.value}  Degree Celsius   =  ${outputBoxForTemperature.value}  Kelvin `;
  }

  // Fahrenheit Part
  if (
    in_select_type_tem == "Fahrenheit" &&
    out_select_type_tem == "Fahrenheit"
  ) {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value = Number(TemperatureInputBox.value);
    descriptionBoxTemperature.value = `${TemperatureInputBox.value}  Degree Fahrenheit   =  ${outputBoxForTemperature.value}  Fahrenheit `;
  }
  if (in_select_type_tem == "Fahrenheit" && out_select_type_tem == "Celsius") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value =
      (Number(TemperatureInputBox.value) * 5 - 160) / 9;
    descriptionBoxTemperature.value = `${TemperatureInputBox.value}  Degree Fahrenheit   =  ${outputBoxForTemperature.value}  Celsius `;
  }
  if (in_select_type_tem == "Fahrenheit" && out_select_type_tem == "Kelvin") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value =
      (Number(TemperatureInputBox.value) * 5 + 2297) / 9;
    descriptionBoxTemperature.value = `${TemperatureInputBox.value}  Degree  Fahrenheit  =  ${outputBoxForTemperature.value}  Kelvin `;
  }

  // Kelvin Part
  if (in_select_type_tem == "Kelvin" && out_select_type_tem == "Kelvin") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value = Number(TemperatureInputBox.value);
    descriptionBoxTemperature.value = `${TemperatureInputBox.value}  Degree Kelvin   =  ${outputBoxForTemperature.value}  Kelvin `;
  }
  if (in_select_type_tem == "Kelvin" && out_select_type_tem == "Fahrenheit") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value =
      (Number(TemperatureInputBox.value) * 9 - 2297) / 5;
    descriptionBoxTemperature.value = `${TemperatureInputBox.value}  Degree Kelvin   =  ${outputBoxForTemperature.value}  Fahrenheit `;
  }
  if (in_select_type_tem == "Kelvin" && out_select_type_tem == "Celsius") {
    descriptionBoxTemperature.style.display = "block";
    outputBoxForTemperature.value = Number(TemperatureInputBox.value) - 273;
    descriptionBoxTemperature.value = `${TemperatureInputBox.value}  Degree Kelvin   =  ${outputBoxForTemperature.value}  Celsius `;
  }
});
clearButtonTemperature.addEventListener("click", () => {
  TemperatureInputBox.value = "";
  outputBoxForTemperature.value = "";
  descriptionBoxTemperature.value = "";
  descriptionBoxTemperature.style.display = "none";
});
