//testimonials list

const testimonialsArray = [{
        testimonial: "Chien provide an excellent service, always reliable and dependable, our Sally always returns happy from her walks.",
        customer: "Claire",
        dog: "Sally"
    },
    {
        testimonial: "Milo loves his walks with Chien, and is always so excited when Laura arrives to collect him, as I am disabled they have been a godsend by keeping him exercised and socialised as I am no longer able to.",
        customer: "Justin",
        dog: "Milo"
    },
    {
        testimonial: "Excellent service at a great price, our pup used to be quite a handful but Chien's dog training services have really helped Charlie, 10/10 would recommend.",
        customer: "Nicole",
        dog: "Charlie"
    },
    {
        testimonial: "Chien's pet sitting service is brilliant, and at an affordable price, I really feel like they love my Cleo as much as I do.",
        customer: "Sam",
        dog: "Cleo"
    },
    {
        testimonial: "Fantastic, Callum has such an easy way with him he puts my Lucie at ease and she can hardly contain herself when he comes to the door. I wouldn't leave my dog with anyone else.",
        customer: "Emma",
        dog: "Lucie"
    },
    {
        testimonial: "No job too big! As I am getting older I can't walk my dogs as much as they need and was seriously considering getting them rehomed when a friend recommended Chien. They are absolutely brilliant, affordable, and my dogs are getting the exercise they need.",
        customer: "Keith",
        dog: "Murphy, Archer, Poppy, Rosie & Taz"
    },
    {
        testimonial: "Pip is a rescue dog and used to be quite unsociable around other dogs, but within a few weeks of being walked and trained by Laura and Callum his anxiety is all but gone and he is so much happier in himself. Cheers for that!",
        customer: "Gary",
        dog: "Pip"
    },
    {
        testimonial: "My dogs are insanely active and it was really hard to keep them stimulated during the week while I work. Chien have been great for the boys, varied walks, long walks, always interesting things to do. I'm so glad I made the decision to get a dog walker as my dogs have never been happier.",
        customer: "Terry",
        dog: "Yoda & Obi-Wan"
    },
];


let counter = 0;
const timer = 12000;
//selectors
const testimonialsEntry = document.querySelector('.testimonial-list');
const text = document.querySelector('.testimonial-text');
const customer = document.querySelector('.testimonial-customer');
const dog = document.querySelector('.testimonial-dog');


//initial values - I hard coded the first testimonial as otherwise the section was blank when the page first loaded
//there's probably a more elegant solution to this
text.innerText = testimonialsArray[0].testimonial;
customer.innerText = testimonialsArray[0].customer;
dog.innerText = `Owner of ${testimonialsArray[0].dog}` ;

//Testimonials loading logic
function loadTestimonials() {
    //check to see if the tab is visible or not before running the code. This was done in response to a weird bug
    //wherein page would forget to delete testimonials before creating new ones. 
    if(!document.hidden){
        //some kind of psuedo loop, it executes the code for each element in the array, and then starts over again
        if (counter < testimonialsArray.length - 1) {
            deleteTestimonials()
            //setTimeOut I felt was better than listening for the end of the deletion animation as it would
            //yield a less abrupt transition from one testimonial to another
            setTimeout(()=>{
                createTestimonials()
            }, 1000)
            //Increments the counter which selects the next element in the array
            return counter++
        } else {
            //At the end of the function we rest the counter so that the code will start again
            return counter = 0;
        } 
    }
    }
    




//testimonial creation logic
function createTestimonials() {


    //create the <li> element that contains the Testimonial and apply the class to fade it in
    const testimonialLi = document.createElement('li');
    testimonialLi.classList.add('testimonial-slides', 'fade-in');

    //create the <p> element that will hold the body of the testimonial, apply class for styling, and append to <li>
    const testimonialText = document.createElement('p');
    testimonialText.classList.add('testimonial-text');
    testimonialText.innerText = testimonialsArray[counter].testimonial;
    testimonialLi.appendChild(testimonialText);

    //create the <small> element for the owner, give it a class for styles and append to <li>
    const testimonialOwner = document.createElement('small');
    testimonialOwner.classList.add('testimonial-customer');
    testimonialOwner.innerText = testimonialsArray[counter].customer;
    testimonialLi.appendChild(testimonialOwner);

    //create the <small> element for the dog and append it yada yada yada
    const testimonialDog = document.createElement('small');
    testimonialDog.classList.add('testimonial-dog');
    testimonialDog.innerText = `Owner of ${testimonialsArray[counter].dog}`;
    testimonialLi.appendChild(testimonialDog);

    //append the <li> to the containing <ul>
    testimonialsEntry.appendChild(testimonialLi);
}

//testimonial deletion logic
function deleteTestimonials() {
    //I couldn't get this to work by selecting the <li> directly so had to reference it via the parent <ul>
    const testimonial = testimonialsEntry.firstElementChild
    //check to see if the element exists
    if (testimonial) {
        //add the class to make it move left and fade away
        testimonial.classList.add('fade-out');
        //once the animation has finished, delete it
        testimonial.addEventListener('animationend', () => {
            testimonial.remove()
        })

    }
}

//testimonial creation timer
        setInterval(loadTestimonials, timer)
   