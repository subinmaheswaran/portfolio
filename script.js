// JavaScript for Notification Pop-Up and Animated Text

document.addEventListener('DOMContentLoaded', function() {
    // Notification pop-up functionality
    const notification = document.getElementById('notification');
    const closeButton = document.getElementById('close-notification');

    // Function to show the notification
    function showNotification(message) {
        notification.querySelector('p').textContent = message;
        notification.style.display = 'block';
    }

    // Event listener for closing the notification
    closeButton.addEventListener('click', function() {
        notification.style.display = 'none';
    });

    // Function to animate text
    function animateText(element, textArray, interval = 2000) {
        let index = 0;
        setInterval(() => {
            element.textContent = textArray[index];
            index = (index + 1) % textArray.length;
        }, interval);
    }

    // text array for animation
    const textArray = [
        'Welcome to my portfolio!',
        'Explore my skills.',
        'Feel free to contact me for more information.',
        'I am open to new opportunities!'
    ];

    // Call the animateText function
    const animatedTextElement = document.getElementById('animated-text');
    animateText(animatedTextElement, textArray);
});


