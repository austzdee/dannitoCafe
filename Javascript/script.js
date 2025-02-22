function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
    answer.previousElementSibling.setAttribute('aria-expanded', !isVisible);

}