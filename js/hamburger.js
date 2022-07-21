//We need to grab the empty <article> .hamburger-nav-menu so that we can append to them the <ul> element we will create and
//generate the interio <li> and <a> elements
//we also need to grab the hamburger icon itself
//selectors
const navBox = document.querySelector('.hamburger-nav-menu');
const hamburger = document.querySelector('.hamburger-image');
let menuInactive = true;

//the event listener checks the state of the menuInactive variable, of the value is true it creates a menu, if false it deletes it
hamburger.addEventListener('click', () => {
    if (menuInactive) {
        createMenu()
        console.log('working')
        menuInactive = false;
    } else {
        deleteMenu()
        console.log('not working')
        menuInactive = true;
    }
})

function createMenu() {
    //This is just an excuse to get a loop in here as I don't think this makes the code much less verbose
    const navLinksArray = [
        'Services',
        'Contact'
    ];
    //create <ul> that our links will be appened to
    const navList = document.createElement('ul');
    navList.classList.add('hamburger-navbar', 'menu-fade-in');

    //iterate over the navLinksArray, generating a <li> with inner <a> element each time
    for (let i = 0; i < navLinksArray.length; i++) {
        //create the <li> element that will house our nav-link
        const navItem = document.createElement('li');
        navItem.classList.add('hamburger-item');

        //create the <a> element and append to the <li>
        const navLink = document.createElement('a');
        navLink.classList.add('hamburger-link');
        navLink.setAttribute('href',`#${navLinksArray[i]}`);
        navLink.innerText = `${navLinksArray[i]}`;
        navItem.appendChild(navLink);

        //append the complete <li> to the <ul>
        navList.appendChild(navItem);
    }

    //append the completed <ul> element to the exterior <article>
    navBox.appendChild(navList);
    
}

function deleteMenu() {
    //grab the <ul> from the <nav> element
    const menu = navBox.firstElementChild;

    //add the fade out animation
    menu.classList.add('menu-fade-out');

    //await the end of the animation and then delete
    menu.addEventListener('animationend', () => {
        menu.remove()
    })

}