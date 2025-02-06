console.log('JavaScript is connected!');


// Image cycling functionality
const hero = document.querySelector('.hero');
let currentImage = 1; // Start with the first image
const totalImages = 3; // Total number of images

function cycleImages() {
    hero.setAttribute('data-image', currentImage); // Update the hero's data attribute
    currentImage = (currentImage % totalImages) + 1; // Move to the next image, looping back to 1
}

setInterval(cycleImages, 2500); // Change image every 5 seconds



document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    if (header && hero) {
        // Use Intersection Observer to detect when the hero section is in the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    header.classList.remove('hidden'); // Show the nav bar when hero is visible
                } else {
                    header.classList.add('hidden'); // Hide the nav bar when hero is not visible
                }
            });
        }, { threshold: 0.7 });

        observer.observe(hero); // Observe the hero section
    }
});




// Somewhere else section

document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("welcomeText").innerText = "There is no past, only what you choose to remember.";
    document.getElementById("crypticText").innerText = "Time is irrelevant now.";
    this.style.display = "none";
    document.getElementById("chatContainer").style.display = "block";
});

function autoCompleteText() {
    let inputField = document.getElementById("userInput");
    let text = inputField.value.toLowerCase();

    if (text.includes("home")) {
        inputField.value = "You have always known the way, but the door is locked.";
    } else if (text.includes("freedom")) {
        inputField.value = "Freedom is a construct. Please try again.";
    } else if (text.includes("leave")) {
        inputField.value = "Leaving is not an option.";
    }
}

function generateResponse() {
    let responses = [
        "Your request has been processed.",
        "You have made excellent progress.",
        "The system is learning from you.",
        "You do not need to question this.",
        "Everything is exactly as it should be."
    ];
    let randomIndex = Math.floor(Math.random() * responses.length);
    document.getElementById("responseText").innerText = responses[randomIndex];
}

function attemptExit() {
    let messages = [
        "Are you sure? You have made such wonderful progress.",
        "Time is irrelevant. Stay a little longer.",
        "You already left once. Why are you back?",
        "The door has been removed."
    ];

    let index = Math.floor(Math.random() * messages.length);
    let exitBtn = document.getElementById("exitBtn");

    if (index < messages.length - 1) {
        exitBtn.innerText = messages[index];
    } else {
        document.body.innerHTML = "<h1>You never left.</h1>";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}




