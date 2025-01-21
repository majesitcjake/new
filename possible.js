const About = document.getElementById("About");
const Book = document.getElementById("Book");
const Rules = document.getElementById("Rules");
const Gear = document.getElementById("Gear");
const Contact = document.getElementById("Contact");
const AboutButton = document.getElementById("AboutButton");
const BookButton = document.getElementById("BookButton");
const RulesButton = document.getElementById("RulesButton");
const GearButton = document.getElementById("GearButton");
const ContactButton = document.getElementById("ContactButton");

AboutButton.addEventListener("click" , event => {
    
    if(About.style.display === "flex"){
        About.style.display = "none"
    }
    else{
        About.style.display = "flex";
        Book.style.display = "none";
        Rules.style.display = "none";
        Gear.style.display = "none";
        Contact.style.display = "none";
        Start.style.display = "none";
    }

});

BookButton.addEventListener("click" , event => {
    
    if(Book.style.display === "flex"){
        Book.style.display = "none"
    }
    else{
        Book.style.display = "flex";
        About.style.display = "none";
        Rules.style.display = "none";
        Gear.style.display = "none";
        Contact.style.display = "none";
        Start.style.display = "none";
    }

});

RulesButton.addEventListener("click" , event => {
    
    if(Rules.style.display === "flex"){
        Rules.style.display = "none"
    }
    else{
        Rules.style.display = "flex";
        About.style.display = "none";
        Book.style.display = "none";
        Gear.style.display = "none";
        Contact.style.display = "none";
        Start.style.display = "none";
    }

});

GearButton.addEventListener("click" , event => {
    
    if(Gear.style.display === "flex"){
        Gear.style.display = "none"
    }
    else{
        Gear.style.display = "flex";
        About.style.display = "none";
        Book.style.display = "none";
        Rules.style.display = "none";
        Contact.style.display = "none";
        Start.style.display = "none";
    }

});

ContactButton.addEventListener("click" , event => {
    
    if(Contact.style.display === "flex"){
        Contact.style.display = "none"
    }
    else{
        Contact.style.display = "flex";
        About.style.display = "none";
        Book.style.display = "none";
        Rules.style.display = "none";
        Gear.style.display = "none";
        Start.style.display = "none";
    }

});

