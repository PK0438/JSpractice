distConvert = () => {
  const miInput = document.getElementById("miInput").value;
  const kmInput = document.getElementById("kmInput").value;
  const ftInput = document.getElementById("ftInput").value;

  if (miInput != "") {
    const mi = parseFloat(miInput);
    const km = mi * 1.60934;
    const ft = mi * 5280;
    document.getElementById("kmInput").value = km.toFixed(2);
    document.getElementById("ftInput").value = ft.toFixed(2);
    document.getElementById("miInput").value = "";
    document.getElementById("kmInput").value = "";
    document.getElementById("ftInput").value = "";
    document.getElementById("result").innerHTML = `${mi} Miles = ${km.toFixed(2)} KM = ${ft.toFixed(2)} Feet`;
  } else if (kmInput != "") {
    const km = parseFloat(kmInput);
    const mi = km * 0.621371;
    const ft = km * 3280.84;
    document.getElementById("miInput").value = mi.toFixed(2);
    document.getElementById("ftInput").value = ft.toFixed(2);
    document.getElementById("kmInput").value = "";
    document.getElementById("miInput").value = "";
    document.getElementById("ftInput").value = "";
    document.getElementById("result").innerHTML = `${km} KM = ${mi.toFixed(2)} Miles = ${ft.toFixed(2)} Feet`;
  } else if (ftInput != "") {
    const ft = parseFloat(ftInput);
    const mi = ft * 0.000189394;
    const km = ft * 0.0003048;
    document.getElementById("miInput").value = mi.toFixed(2);
    document.getElementById("kmInput").value = km.toFixed(2);
    document.getElementById("miInput").value = "";
    document.getElementById("kmInput").value = "";
    document.getElementById("ftInput").value = "";
    document.getElementById("result").innerHTML = `${ft} Feet = ${mi.toFixed(2)} Miles = ${km.toFixed(2)} KM`;
  } else {
    alert("Please enter a value to convert.");
  }
};

