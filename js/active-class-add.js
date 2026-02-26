/* ========== Language Dropdown ========== */
const langBtn = document.querySelector('.lang-btn');
const dropdownButtons = document.querySelectorAll('.drop__down button');

const savedLang = localStorage.getItem('selectedLang');

if (savedLang) {
    langBtn.childNodes[0].nodeValue = savedLang + " ";
    dropdownButtons.forEach(btn => {
        if (btn.innerText === savedLang) btn.classList.add('active');
    });
}

dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.innerText;

        langBtn.childNodes[0].nodeValue = lang + " ";
        dropdownButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        localStorage.setItem('selectedLang', lang);
    });
});


// active class add //
const inputItems = document.getElementsByClassName('input_items');
Array.from(inputItems).forEach(item => {
    item.addEventListener('click', function () {
        item.classList.add('active');
    });
});
