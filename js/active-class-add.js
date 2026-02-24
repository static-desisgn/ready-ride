/*=============== active class add ============*/
const trigger = document.querySelector('.custom__dropdown');
const target = document.querySelector('.drop__down');
const btnText = trigger.querySelector('.lang-btn');
const links = target.querySelectorAll('a');

//  Click to toggle dropdown //
trigger.addEventListener('click', e => {
    if (e.target.closest('.lang-btn')) {
        e.preventDefault();
        target.classList.toggle('active');
    }
});

// Click on a link → active + update button //
links.forEach(link => {
    link.addEventListener('click', e => {

        // Remove active from all links
        links.forEach(l => l.classList.remove('active'));

        // Add active to clicked link
        link.classList.add('active');

        // Update button text
        btnText.firstChild.textContent = link.textContent;

        // Hide dropdown
        target.classList.remove('active');
    });
});

//  Click outside → hide dropdown //
document.addEventListener('click', e => {
    if (!trigger.contains(e.target) && !target.contains(e.target)) {
        target.classList.remove('active');
    }
});


// active class add //
const inputItems = document.getElementsByClassName('input_items');
Array.from(inputItems).forEach(item => {
    item.addEventListener('click', function () {
        item.classList.add('active');
    });
});
