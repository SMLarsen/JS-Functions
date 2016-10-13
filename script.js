function nRev() {
  var array = document.getElementById('sNum').value.split("");
  var max = (array.length - 1);
  var s = "";
  for (var i = 0; i <= max / 2; i++) {
    s = array[i];
    array[i] = array[max - i];
    array[max - i] = s;
  }

  document.getElementById("nRev").innerHTML = array.join("");
}
