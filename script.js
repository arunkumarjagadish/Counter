let add = document.getElementById('btn-add');
let subtract = document.getElementById('btn-minus');

let int= document.getElementById('number');
let integer =0;

add.addEventListener('click' ,function(){
    integer +=1;
    int.innerHTML =integer;
})
subtract.addEventListener('click', function(){
 integer -=1;
 int.innerHTML = integer;   
})
