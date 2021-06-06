var ruselt = document.getElementById(ruselt);

function checkgpa() {
    var obtainedMarks = document.getElementById("obtainedmarks").Value;
    if(obtainedMarks  >=80 && obtainedMarks <=100){
        ruselt.innerHTML = '5.00'
    }else if(obtainedMarks  >=70 && obtainedMarks <80){
        ruselt.innerHTML ='4.00'
    }else if(obtainedMarks  >=60 && obtainedMarks <70){
        ruselt.innerHTML ='3.50'
    }else if(obtainedMarks  >=50 && obtainedMarks <60){
        ruselt.innerHTML ='3.00'
    }else if(obtainedMarks  >=40 && obtainedMarks <50){
        ruselt.innerHTML =2.00
    }else if(obtainedMarks  >=33 && obtainedMarks <40){
        ruselt.innerHTML =1.00
    }
    else if(obtainedMarks  <33){
        ruselt.innerHTML =0.00
    }else{
        ruselt.innerHTML = "'Number must be between 0 to 100'"
    }
}