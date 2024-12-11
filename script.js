jQuery("document").ready(function($){
    var flakes = '',
    randomColor;
    for(var i = 0, len = 400; i < len; i++) {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    flakes += '<div class="ball" style="background: #'+randomColor;
    flakes += '; animation-duration: '+(Math.random() * 9 + 2)+'s; animation-delay: ';
    flakes += (Math.random() * 2 + 0)+'s;"></div>';
    }
    document.getElementById('confetti').innerHTML = flakes;
   });


$(document).ready(function() {
// Array of thank you messages
const messages = [
    "Thank you for celebrating with us! 🎉",
    "Thanks for being awesome! 🌟",
    "You are the best! Thanks for coming! 🙌",
    "Thank you, you're a star! 🌟",
    "I'm so grateful to have you here with me today! 💖",
    "Your presence made this day even more special! 🎂",
    "Thanks for making this celebration unforgettable! 🎊",
    "You've truly made today memorable, thank you! 🥳",
    "You're amazing—thank you for being part of this day! 🌈"
];

// When the button is clicked
$('#lightCandleButton').click(function() {
    // Light up the candle flame
    $('.flame').addClass('lit');  // Assuming you'll add a "lit" class for styling the flame

    // Display a random thank you message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    $('#thankYouMessage').text(randomMessage);
});
});

const celebrateBtn = document.getElementById('celebrateBtn');

celebrateBtn.addEventListener('click', () => {
    // trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // button animation
    celebrateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
    }, 100);
});