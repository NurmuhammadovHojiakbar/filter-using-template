let filterCards = {
    radios: [
        {
            name: "all",
            text: "All"
        },
        {
            name:"phone",
            text: "Modern Smartphones",
        },
        {
            name:"computer",
            text: "Desktop Computers",
        },
        {
            name:"laptop",
            text: "Laptops",
        },
        {
            name:"camera",
            text: "Cameras",
        },
        {
            name:"computer-tools",
            text: "Computer Tools",
        },
        {
            name:"home-technics",
            text: "Home Technics",
        }
    ],
    cards:[
        {
            name: "MacBook 13 pro",
            type: "laptop",
            year: 2019,
            price: "1299$"
        },
        {
            name: "Hp desktop",
            type: "computer",
            year: 2017,
            price: "450$"
        },
        {
            name: "Samsung A51",
            type: "phone",
            year: 2020,
            price: "250$"
        },
        {
            name: "Camera",
            type: "camera",
            year: 2021,
            price: "140$"
        },
        {
            name: "Acer",
            type: "laptop",
            year: 2017,
            price: "300$"
        },
        {
            name: "Mechanic Keyboard",
            type: "computer-tools",
            year: 2019,
            price: "1299$"
        },
        {
            name: "Samsung TV",
            type: "home-technics",
            year: 2021,
            price: "600$"
        },
        {
            name: "Iphone X",
            type: "phone",
            year: 2020,
            price: "700$"
        },
    ]
}

const siteForm = document.querySelector(".site-form");
const cardContainer = document.querySelector(".card-container");
const radioTemplate = document.querySelector(".radio-template").content;
const cardTemplate = document.querySelector(".card-template").content;

// Create Dinamic Elements

function createRadio(radio){
    const elRadio = radioTemplate.cloneNode(true);
    elRadio.querySelector(".input-radio").value = radio.name;
    elRadio.querySelector(".input-radio__control").textContent = radio.text;
    return elRadio;
}
const radioFrame = document.createDocumentFragment();

filterCards.radios.forEach((el)=>{
    radioFrame.appendChild(createRadio(el))
})
siteForm.appendChild(radioFrame);

function createCard(card){
    const elCard = cardTemplate.cloneNode(true);
    elCard.querySelector(".card").classList.add(card.type);
    elCard.querySelector(".card-title").textContent = card.name;
    elCard.querySelector(".card-year").textContent = card.year;
    elCard.querySelector(".card-price").textContent = card.price;
    return elCard;
}

const cardFrame = document.createDocumentFragment();

filterCards.cards.forEach((card)=>{
    cardFrame.appendChild(createCard(card))
})

cardContainer.appendChild(cardFrame);

// Filter Script Codes

siteForm.addEventListener("click", evt =>{
    let elCards = document.querySelectorAll(".card")
    elCards.forEach(elCard =>{
        if(evt.target.matches("input")){
            evt.target.addEventListener("change",function(){
                if (evt.target.value != "all") {
                    for (let c of elCards){
                        if(!c.classList.contains(evt.target.value)){
                            c.classList.add("none")
                        }
                        if(c.classList.contains(evt.target.value)){
                            c.classList.remove("none")
                        }                         
                    }                              
                }
                if(evt.target.value == "all") {
                    elCard.classList.remove("none")
                }
            })
        }
    })    
})