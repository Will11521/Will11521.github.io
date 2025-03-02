document.addEventListener('DOMContentLoaded', () => {
    // Select all "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more');

    // On page load, check localStorage and apply purple color to clicked buttons
    learnMoreButtons.forEach(button => {
        const buttonId = button.getAttribute('data-id');
        const isClicked = localStorage.getItem(`button-${buttonId}`);
        if (isClicked === 'clicked') {
            button.style.backgroundColor = '#A855F7'; // Matches --purple-color
        }
    });

    // Add click event listener to each "Learn More" button
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Change the button's background color to purple
            button.style.backgroundColor = '#A855F7'; // Matches --purple-color

            // Save the clicked state in localStorage
            const buttonId = button.getAttribute('data-id');
            localStorage.setItem(`button-${buttonId}`, 'clicked');
            // Navigation to the href URL will occur automatically
        });
    });
});