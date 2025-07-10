document.addEventListener('DOMContentLoaded', function() {
    // Function to set the theme based on the current time
    function setTimeBasedTheme() {
        const now = new Date();
        const hour = now.getHours(); // Get the current hour (0-23)

        // Let's define day as 6 AM to 6 PM (18:00)
        const isDayTime = hour >= 6 && hour < 18; // 6 AM to 5:59 PM is day

        if (isDayTime) {
            document.body.classList.remove('dark-theme');
        } else {
            document.body.classList.add('dark-theme');
        }
    }

    // Calls the function immediately when the page loads
    setTimeBasedTheme();

    // Update the theme periodically every minute to make the transition happen automatically without refreshing if time crosses boundary
    setInterval(setTimeBasedTheme, 60 * 1000);

    //  Card Flip Logic
    const cardWrapper = document.querySelector('.card-wrapper');

    // Toggle card flip on click
    cardWrapper.addEventListener('click', function() {
        cardWrapper.classList.toggle('flipped');
    });

});