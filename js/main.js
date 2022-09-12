

//task2

function btn() {
    var x=parseFloat(document.getElementById('first').value);
    var y=parseFloat(document.getElementById('second').value);

    var d=document.getElementById('reply');

    if(true){
        d.innerHTML=(x*y).toFixed(2);
    }
}


//task1

function btn2() {

    var t=0;

    var o=document.getElementById('rep')
    for ( c = 11; c<15; c++) {
            t=t+c;
        }
        o.innerHTML=t;
}