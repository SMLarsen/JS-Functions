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

function f2() {
  var i2 = document.getElementById('i2').value.split("");
  var max = (i2.length - 1);
  var p = true;
  for (var i = 0; i <= max / 2 && p === true; i++) {
    p = i2[i] === i2[max - i] ? true : false;
  }
  document.getElementById("s2").innerHTML = p === true ? "is" : "is not";
}
