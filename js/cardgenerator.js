//generate service cards as the client scrolls down the page, exterior of the card will already be present but without information to render
//gaining it's proportions from the content being constructed inside of it.

//an array of objects holding the data for our cards
const cardData = [{
        card: document.querySelector('#card-1'),
        heading: "Free Consultation",
        paragraph: "Book now for a free, no obligation visit, where we can get to know your pet and discuss their needs!",
        btnText: "Book Today!"
    },
    {
        card: document.querySelector('#card-2'),
        heading: "Dog Walking",
        paragraph: "It can be difficult to give your dogs the exercise they need, with us you can be sure in the knowledge that they are reliably walked and cared for, while making lots of new friends!",
        btnText: "Read More!"
    },
    {
        card: document.querySelector('#card-3'),
        heading: "Grooming Services",
        paragraph: "We are able to cater to all your pet's grooming needs. Animals that are anxious about being groomed are our specialty!",
        btnText: "Book Today!"
    },
    {
        card: document.querySelector('#card-4'),
        heading: "Home visits & House sitting",
        paragraph: "Animals are far more comfortable in their own environments, and we cater to caring for your pets in their own home while you're away.",
        btnText: "Read More!"
    },
]
//the dimensions of the screen
const clientHeight = document.documentElement.clientHeight;

// a card counter to count the amount of cards that have been created or later removed
let cardCounter = 0;
const MAX_CARD_COUNT = 3;
//the event listener 
document.addEventListener('scroll', () => {
    const cardPosition = cardData[cardCounter].card.getBoundingClientRect().y;
    const cardHeight = cardData[cardCounter].card.getBoundingClientRect().height;

    if (clientHeight > cardPosition + cardHeight * 2 / 3) {
        cardCreator();
        cardCounter++
    }

})

//card creator

function cardCreator() {
    const cardContainer = cardData[cardCounter].card;
    //create the outer card <article> and apply classes
    const outerCard = document.createElement('article');
    outerCard.classList.add('service-card');
    //create the image element, add classes and attributes
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', `./img/${cardCounter}.jpg`);
    cardImg.classList.add('card-img');
    outerCard.appendChild(cardImg);

    //create the text area for the card, and add classes
    const textArea = document.createElement('div');
    textArea.classList.add('card-divider');

    //create the heading, add classes and text, append to the textArea
    const heading = document.createElement('h4');
    heading.classList.add('card-heading');
    heading.innerText = cardData[cardCounter].heading;
    textArea.appendChild(heading);

    //now create the card text, add classes and append to the textarea
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = cardData[cardCounter].paragraph;
    textArea.appendChild(cardText);

    //append the textArea to the outerCard
    outerCard.appendChild(textArea);
    outerCard.classList.add('fade-in');
    cardContainer.appendChild(outerCard);
}