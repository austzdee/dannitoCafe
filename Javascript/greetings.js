window.onload = function() {
    const greetingContainer = document.getElementById('greeting-container');
    
    const now = new Date();
    const hours = now.getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = 'Good morning! Start your day with a perfect cup of coffee.';
    } else if (hours < 18) {
        greetingMessage = 'Good afternoon! How about a little coffee break?';
    } else {
        greetingMessage = 'Good evening! Relax with a warm cup of coffee.';
    }

    greetingContainer.innerHTML = `<h2>${greetingMessage}</h2>`;
};
