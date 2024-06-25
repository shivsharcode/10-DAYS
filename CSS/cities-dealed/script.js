document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('c-d-scroll-container-id');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    function updateButtonState() {
        scrollLeftBtn.disabled = scrollContainer.scrollLeft === 0;
        scrollRightBtn.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
    }

    scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -220, behavior: 'smooth' });
        setTimeout(updateButtonState, 300); // Adjust timeout if needed
    });

    scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 220, behavior: 'smooth' });
        setTimeout(updateButtonState, 300); // Adjust timeout if needed
    });

    scrollContainer.addEventListener('scroll', updateButtonState);

    updateButtonState();
});
