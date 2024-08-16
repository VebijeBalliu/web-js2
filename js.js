



function dark(el) {
    const header = document.querySelector('header');
    const body = document.body;
    const footer = document.querySelector('footer'); 

  
    if (body.classList.contains('darkMode')) {
        el.innerText = 'Click here to go dark'; 
        header.classList.remove('darkMode');
        body.classList.remove('darkMode');
        footer.classList.remove('darkMode'); 

       
        localStorage.setItem('theme', 'light');
    } else {
        el.innerText = 'Click here to go light'; 
        header.classList.add('darkMode');
        body.classList.add('darkMode'); 
        footer.classList.add('darkMode'); 

       
        localStorage.setItem('theme', 'dark');
    }
}


window.onload = function () {
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const button = document.querySelector('.themebutton');

    if (theme === 'dark') {
        header.classList.add('darkMode');
        body.classList.add('darkMode');
        footer.classList.add('darkMode');
        button.innerText = 'Click here to go light'; 
    } else {
        button.innerText = 'Click here to go dark'; 
    }
}
