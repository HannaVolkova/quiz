let userForms = document.getElementById('start-question');
let userData = ['Max', 'img'];




userForms.addEventListener('submit', function(event){
    let inputName = userForms.elements.question1.value;
    let avatar = document.querySelector('input[name="question2"]:checked')
    let avatarContainet = document.querySelector('#smile');

   // let srcAvatar = avatar.previousElementSibling.children[0].src;
    //userData = [inputName, srcAvatar];

    event.preventDefault();
})

/*
avatarContainet.addEventListener('click', function(e){
    let allSmails = document.querySelectorAll('input[type="question2"]');
    for(let smile of allSmails){
        if(smile.checked){
            smile.previousElementSibling.children[0].classList.add('show');
        } else {
            smile.previousElementSibling.children[0].classList.remove('show');
        }
    }
    //if(e.target.tagName === 'INPUT'){
    //    e.target.previousElementSibling.children[0].classList.add('show');
   // }
})
*/