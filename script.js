 /For hamicon/
function slideShow(){
    var x= document.getElementById('function');
    if(x.style.display==="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}

/For homepage buttons/
function myFunction() {
    var x = document.getElementById("msg1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("msg2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  /BMI Calculator/
  function getbmivalue(){
    var weight = document.getElementById('weight').value;
      var height = document.getElementById('height').value;

      height = height * 12; // feet to inches;
      height = height * 0.025;  //now height in meter;

      var newbmivalue = weight / (Math.pow(height,2));

      newbmivalue = Math.round(newbmivalue);

      document.getElementById('bmivalue').value = newbmivalue;
  }

  /Submit button/
  function Response() {
    confirm("ThankYou!!\nYour response has been recorded successfully!");
  
  }
