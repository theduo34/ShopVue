/*
 Visibility of navbar toggler icon on small screen enable the  function named 
 createOffcanvas to show off whenever toggler icon is been triggered with
 event listener 'click'
*/
const offcanvas = document.getElementById('offcanvas');

let createOffcanvas = function () {
    //display view for header section when the toggler icon is triggered
    const offcanvasHeader = () => {
        const offcanvasHeader = document.createElement('div');
        offcanvasHeader.classList.add('offcanvas-header');

        const offcanvasTitle = document.createElement('h6');
        offcanvasTitle.classList.add('offcanvas-title');

        const userIcon = document.createElement('i');
        userIcon.classList.add('fa-regular', 'fa-user', 'text-lowercase', 'fw-bold', 'fs-24');
        userIcon.textContent = ' AQUASI.NINETY-NINE';
        //button to hide the offcanvas
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-close');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-dismiss', 'offcanvas');

        offcanvasTitle.appendChild(userIcon);
        offcanvasHeader.appendChild(offcanvasTitle);
        offcanvasHeader.appendChild(button);
    }
    //section to contain the content or the body part of the offcanvas 
    const offcanvasBody = () => {
        const offcanvasBody = document.createElement('div');
        offcanvasBody.classList.add('offcanvas-body');
        //Group of an unordered list group
        const listItems = document.createElement('ul');
        listItems.classList.add('list-group');
        //containing the list group items
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        const link = document.createElement('a');
        link.href = '';
        link.textContent = items

        li.appendChild(link);
        listItems.appendChild(li);

        offcanvasBody.appendChild(listItems);
        offcanvasBody.appendChild(listItems);

    }
    offcanvas.appendChild(offcanvasHeader);
    offcanvas.appendChild(offcanvasBody);
}

/*
 Search bar set to only appear on smaller screen(<992px). This is done with search icon been show 
 in the navbar only on smaller screen(<992px).Triggered event listener of click enable the
 block display of the search bar,and disappear when contains target event outside the search input
*/
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
const leftContent = document.getElementsByClassName('content-left');

const listGroup = document.createElement('ul');
listGroup.classList.add('list-group');
//function to create group of list
const  createItem = ( title, link) => {
    let item = document.createElement('li');
    item.classList.add('list-group-item',);
    let a = document.createElement('a');
    a.href = link;
    a.textContent = title;
    let i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-angle-right', 'end-icon', 'text-center');
    a.appendChild(i);
    item.appendChild(a);
    return item;
}

let items = [createItem("Electronics", "electronics.html"), 
            createItem("Fashion", "fashion.html"), 
            createItem("Health & Beauty", "healthBeauty.html"),
            createItem("Meals & Drinks", 'mealsDrinks.html'),
            createItem("Phones & Accessories", "phoneAccessories.html"),
            createItem("Repair & Constructions", "repairConstruction.html"),
            createItem("Services", "services.html"),
            createItem("Property", "property.html"),
            createItem("Babies & Kids", "babiesKids.html"),
            createItem("Pets", "pets.html"),
            createItem("Furniture & Appliances", "furnitureAppliances")];
items[1].classList.add('disabled');
//Adding elements to the list group
for(let i of items){
    listGroup.append(i);
};

//Adding list group to the content left
leftContent[0].prepend(listGroup);

//Add active class to the clicked item
leftContent[0].addEventListener('click', (e) => {
    for(let item of items){
        item.classList.remove('active');
    }
    e.target.classList.add('active')
});





