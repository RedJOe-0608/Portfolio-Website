const navToggle = document.querySelector('.nav-toggle');
const sideBar = document.querySelector('.side-bar')
const closeBtn = document.querySelector('.close-btn');
const articles = document.querySelectorAll('.article');
const documentation = document.querySelectorAll('#documentation');

navToggle.addEventListener('click', () =>{
sideBar.classList.toggle('sideBarToggle');
})

closeBtn.addEventListener('click', () =>{
    sideBar.classList.toggle('sideBarToggle')

})

articles.forEach((article) =>{
article.addEventListener('click', () =>{
    console.log(article.dataset.id);
    window.open(`${article.dataset.id}.html`);
})
})

documentation.forEach((refer) =>{
    refer.addEventListener('click', () =>{
        // console.log(refer.dataset.id);
        let id = refer.dataset.id;
        if(id === 'css' || id === 'html' || id === 'js'){
            window.open(`https://www.w3schools.com/${id}`);
        }
        else if(id === 'reactjs'){
            window.open(`https://reactjs.org/`);
        }
        else{
            window.open(`https://${id}.com/`)
        }
    })
})