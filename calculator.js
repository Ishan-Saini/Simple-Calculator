console.log('loaded');
var inputBox = document.getElementById('input');
var numKeys = document.querySelectorAll('.num');
var clearKey = document.getElementById('itemC');
var opKey = document.querySelectorAll('.operation');
var equalKey = document.getElementById('item='); 


for(const i of numKeys){
    i.addEventListener('click', function(){
        inputBox.value = inputBox.value + i.innerHTML;
    });

}

for(const j of opKey){
    j.addEventListener('click', function(){
        inputBox.value = inputBox.value + j.innerHTML;
    });
}

clearKey.addEventListener('click',function(){
    inputBox.value = '';
});

equalKey.addEventListener('click',function(){
    inputBox.value = eval(inputBox.value);
});