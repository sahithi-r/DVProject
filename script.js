document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');

    toggleButton.addEventListener('click', function () {
        // Toggle the 'active' class on div1 and div2
        div1.classList.toggle('active');
        div2.classList.toggle('active');
    });
});

