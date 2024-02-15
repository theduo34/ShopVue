const offcanvas = document.getElementById('list-items');

const offcanvasHeader = document.createElement('div');
offcanvasHeader.classList.add('offcanvas-header');

const offcanvasTitle = document.createElement('h6');
offcanvasTitle.classList.add('offcanvas-title');

const userIcon = document.createElement('i');
userIcon.classList.add('fa-regular', 'fa-user', 'text-lowercase')
userIcon.textContent = ' AQUASI.NINETY-NINE';

const button = document.createElement('button');
button.classList.add('btn', 'btn-close', 'btn-close-white');
button.setAttribute('type', 'button');
button.setAttribute('data-bs-dismiss', 'offcanvas');

offcanvasTitle.appendChild(userIcon);
offcanvasHeader.appendChild(offcanvasTitle);
offcanvasHeader.appendChild(button);

const offcanvasBody = document.createElement('div');
offcanvasBody.classList.add('offcanvas-body');

const navbarNav = document.createElement('p');
navbarNav.textContent = 'Settings';

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

