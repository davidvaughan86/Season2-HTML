const dogForm = document.querySelector('.dogForm');
const ownerInfo = document.querySelector('.ownerInfo')
const first = document.querySelector('.first');

const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const dogName = document.querySelector('.dogName');
const dogAge = document.querySelector('.dogAge');
const dogBreed = document.querySelector('.dogBreed');
const dogSubmit = document.querySelector('.dogSubmit');


dogSubmit.addEventListener('click', function(){
    const dogList = document.createElement('LI');
    const dogList2 = document.createElement('LI');
    const dogInfo = document.createTextNode(first.value);
    const dogInfo2 = document.createTextNode(phone.value);
    
    
    dogList.appendChild(dogInfo);
    dogList2.appendChild(dogInfo2);
    dogForm.appendChild(dogList);
    ownerInfo.appendChild(dogList2);
    
})
