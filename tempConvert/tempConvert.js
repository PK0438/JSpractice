tempConvert = () => {
  const celInput = document.getElementById("celInput").value;
  const farInput = document.getElementById("farInput").value;

  if (celInput != "") {
    const cel = parseFloat(celInput);
    const far = (cel * 9) / 5 + 32;
    document.getElementById("farInput").value = far.toFixed(2);
    document.getElementById("celInput").value = "";
    document.getElementById("farInput").value = "";
    document.getElementById("result").innerHTML = `${cel}&degC = ${far.toFixed(2)}&degF`;
  } else if (farInput != "") {
    const far = parseFloat(farInput);
    const cel = ((far - 32) * 5) / 9;
    document.getElementById("celInput").value = cel.toFixed(2);
    document.getElementById("farInput").value = "";
    document.getElementById("celInput").value = "";
    document.getElementById("result").innerHTML = `${cel.toFixed(2)}&degC = ${far}&degF`;
  } else {
    alert("Please enter a value to convert.");
  }
};
