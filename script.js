document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleSwitch');
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');

    toggleButton.addEventListener('click', function () {
        // Toggle the 'active' class on div1 and div2
        div1.classList.toggle('at');
        div2.classList.toggle('at');
    
// Change the button text based on the active content
    const buttonText = div1.classList.contains('at') ? 'Bowling' : 'Batting';
    toggleButton.textContent = buttonText;

        if (div1.classList.contains('at')) {
            div2.classList.remove('at');
        } else {
            div1.classList.remove('at');
        }
});
});
