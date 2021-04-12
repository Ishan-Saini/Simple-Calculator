console.log('loaded');

//use 'const' to prevent reassigning
const inputBox = document.getElementById('input');
const numKeys = document.querySelectorAll('.num');
const clearKey = document.getElementById('itemC');
const opKey = document.querySelectorAll('.operation');
const equalKey = document.getElementById('item='); 


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