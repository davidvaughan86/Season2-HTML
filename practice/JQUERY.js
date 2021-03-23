const colorList = document.querySelector('.nameList')
const listInput = document.querySelector('.listInput')
const addListBtn = document.querySelector('.addList')

addListBtn.addEventListener('click', function(){

    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value)
   
    newLi.appendChild(liContent);
    colorList.appendChild(newLi)



})