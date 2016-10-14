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

function f3() {
  var i3 = document.getElementById('i3').value.split("");
  var array = [];
  var combo = "";
  for (var i = 0; i < i3.length; i++) {
    combo = i3[i];
    array.push(combo);
    for (var j = i + 1; j < i3.length; j++) {
      combo += i3[j];
      array.push(combo);
    }
  }
  document.getElementById("s3").innerHTML = array;
}

function f4() {
  var string = document.getElementById('i4').value.split("");
  document.getElementById("s4").innerHTML =   string.sort().join("");
}

function f5() {
  var string = document.getElementById('i5').value;
  document.getElementById("s5").innerHTML =   string.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
}

function f6() {
  var array = document.getElementById('i6').value.split(" ");
  var max = 0;
  var maxI = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i].length;
      maxI = i;
    }
  }
  document.getElementById("s6").innerHTML =   array[maxI];
}
