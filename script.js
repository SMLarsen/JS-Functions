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

function f7() {
  var string = document.getElementById('i7').value;
  document.getElementById("s7").innerHTML = string.match(/[aeiou]/gi).length;
}

function f8() {
  var n = document.getElementById('i8').value;
  var prime = true;
  if (n === 1) {
    prime = true;
  } else
    if (n % 2 === 0) {
      prime = false;
    } else {
      for (var i = 3; i < n /2; i += 2) {
        if (n % i === 0) {
          prime = false;
          break;
        }
      }
    }
  document.getElementById("s8").innerHTML = prime;
}

function f9() {
  document.getElementById("s9").innerHTML = typeof document.getElementById('i9').value;
}

function f11() {
  var array = document.getElementById('i11').value.split(",").sort(function(a, b){return a-b});
  var msg = "";
  if (array.length <= 2) {
    msg = "invalid input - enter at least three digits";
  } else {
    msg = "high = " + array[1] + ", low = " + array[array.length - 2];
  }
  document.getElementById("s11").innerHTML = msg;
}

function f12() {
  var num = Number(document.getElementById('i12').value);
  var sum = 0;
  var msg = "";
  if (num <= 1) {
    msg = "invalid input - enter at positive number of at least 2";
  } else {
    for (var i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    msg = sum === num ? true : false ;
  }
  document.getElementById("s12").innerHTML = msg;
}
