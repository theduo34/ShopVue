const offcanvas = document.getElementById('offcanvas');

const offcanvasHeader = document.createElement('div');
offcanvasHeader.classList.add('offcanvas-header');

const offcanvasTitle = document.createElement('h6');
offcanvasTitle.classList.add('offcanvas-title');

const userIcon = document.createElement('i');
userIcon.classList.add('fa-regular', 'fa-user', 'text-lowercase', 'fw-bold', 'fs-24');
userIcon.textContent = ' AQUASI.NINETY-NINE';

const button = document.createElement('button');
button.classList.add('btn', 'btn-close');
button.setAttribute('type', 'button');
button.setAttribute('data-bs-dismiss', 'offcanvas');

offcanvasTitle.appendChild(userIcon);
offcanvasHeader.appendChild(offcanvasTitle);
offcanvasHeader.appendChild(button);

const offcanvasBody = document.createElement('div');
offcanvasBody.classList.add('offcanvas-body');

const navbarNav = document.createElement('i');
navbarNav.textContent = 'carousel-caret-next';

offcanvasBody.appendChild(navbarNav);

offcanvas.appendChild(offcanvasHeader);
offcanvas.appendChild(offcanvasBody);

document.body.appendChild(offcanvas);

document.addEventListener('DOMContentLoaded', () => {
    const searchIcon= document.getElementById('search');
    const searchBar = document.getElementById('searchPanel');
    
    //Toggle search bar visibility
    searchIcon.addEventListener('click', () => {
        if(window.innerWidth < 992) {
            searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block'
       }
   });
   //Hide search bar clicking outside appeared search bar
    document.addEventListener('click', (e) => {
        const clickInside = searchIcon.contains(e.target) || searchBar.contains(e.target);
        if(!clickInside) {
            searchBar.style.display = 'none';
        }
    });
})

/*
left page of the main content, and where contains group list of categories of product. Based the selected category will determined the display product on the middle right page 
*/




