setInterval(
    var dob = new Date("01/12/2008");    
    var month_diff = Date.now() - dob.getTime();   
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();    
    var age = Math.abs(year - 1970);
document.getElementById("aaggee").innerHTML = age
, 1000);

function func1() {
    document.getElementById('star01').style.color = 'blue';
    document.getElementById('star02').style.color = 'black';
    document.getElementById('star03').style.color = 'black';
    document.getElementById('star04').style.color = 'black';
    document.getElementById('star05').style.color = 'black';
    document.getElementById('wsh').innerText='Thanks for rating us 1 star. We will try to improve and get another four stars also.'
}
function func2() {
    document.getElementById('star01').style.color = 'blue';
    document.getElementById('star02').style.color = 'blue';
    document.getElementById('star03').style.color = 'black';
    document.getElementById('star04').style.color = 'black';
    document.getElementById('star05').style.color = 'black';
    document.getElementById('wsh').innerText='Thanks for rating us 2 stars. We will try to improve and get another three stars also.'
}
function func3() {
    document.getElementById('star01').style.color = 'blue';
    document.getElementById('star02').style.color = 'blue';
    document.getElementById('star03').style.color = 'blue';
    document.getElementById('star04').style.color = 'black';
    document.getElementById('star05').style.color = 'black';
    document.getElementById('wsh').innerText='Thanks for rating us 3 stars. We will try to improve and get another two stars also.'
}
function func4() {
    document.getElementById('star01').style.color = 'blue';
    document.getElementById('star02').style.color = 'blue';
    document.getElementById('star03').style.color = 'blue';
    document.getElementById('star04').style.color = 'blue';
    document.getElementById('star05').style.color = 'black';
    document.getElementById('wsh').innerText='Thanks for rating us 4 stars. We will try to improve and get another one star also.'
}
function func5() {
    document.getElementById('star01').style.color = 'blue';
    document.getElementById('star02').style.color = 'blue';
    document.getElementById('star03').style.color = 'blue';
    document.getElementById('star04').style.color = 'blue';
    document.getElementById('star05').style.color = 'blue';
    document.getElementById('wsh').innerText='Thanks for rating us 5 stars.'
    

}
setInterval(() => {
    document.getElementsByTagName('h2')[0].innerHTML='About Sushant Manjunath Naik'
}, 2000);
setInterval(() => {
    document.getElementsByTagName('h2')[0].innerHTML='About Sushant Naik'
}, 3000);


function age(){
       var dob = new Date("01/12/2008");    
    var month_diff = Date.now() - dob.getTime();   
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();    
    var age = Math.abs(year - 1970);
document.getElementById("aaggee").innerHTML = age
document.getElementById("aaggeec").innerHTML = age-5
}


// function otpt() {
    // document.getElementsByName('star')[0].innerHTML=parseInt(star01.value)+parseInt(star02.value)+parseInt(star03.value)+parseInt(star04.value)+parseInt(star05.value)
// }


function pp() {
    alert('Thanks for Rating us.Please send your feedback via mail after clicking "OK" here.')
}
function kp() {
    alert("Details still didn't uploaded. You can report us via email.")
}

function mrd(){
    document.getElementById('mrd').innerHTML=document.getElementById('klm').innerHTML
    
}
function play() {
    document.getElementById('bio').innerHTML=document.getElementById('vcsv').innerHTML
}
function main(){
    document.getElementsByTagName('header')[0].innerHTML()=document.getElementById('main').innerHTML()
}
