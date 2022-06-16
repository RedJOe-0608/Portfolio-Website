const navToggle = document.querySelector('.nav-toggle');
const sideBar = document.querySelector('.side-bar')
const closeBtn = document.querySelector('.close-btn');
const articles = document.querySelectorAll('.article');
const documentation = document.querySelectorAll('#documentation');
// const articles = document.querySelectorAll('.article');



navToggle.addEventListener('click', () =>{
sideBar.classList.toggle('sideBarToggle');
})

closeBtn.addEventListener('click', () =>{
    sideBar.classList.toggle('sideBarToggle')

})

articles.forEach((article) =>{
article.addEventListener('click', () =>{
    if(!article.classList.contains('websites')){
        console.log(article.dataset.id);
        window.open(`${article.dataset.id}.html`);

    }
    else{
        if(article.dataset.id === 'our-menu'){
            window.open('https://astounding-pudding-b47985.netlify.app/');
        }
        if(article.dataset.id === 'back-roads'){
            window.open('https://dashing-salmiakki-41c114.netlify.app/');
        }
        if(article.dataset.id === 'about-page'){
            window.open('https://fastidious-sherbet-ec5b13.netlify.app/');
        }
        if(article.dataset.id === 'questions'){
            window.open('https://leafy-fox-5c6823.netlify.app/');
        }
        if(article.dataset.id === 'video-project'){
            window.open('https://delicate-marshmallow-7afa8f.netlify.app/');
        }
    }

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