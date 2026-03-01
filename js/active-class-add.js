/* ========== Language Dropdown ========== */
const langBtn = document.querySelector('.lang-btn');
const dropdownButtons = document.querySelectorAll('.drop__down button');

const savedLang = localStorage.getItem('selectedLang');

/* ========== restore active on reload ========== */
if (savedLang) {
    dropdownButtons.forEach(btn => {
        btn.classList.remove('active');

        if (btn.innerText.trim() === savedLang) {
            btn.classList.add('active');
            langBtn.childNodes[0].nodeValue = savedLang + " ";
        }
    });
}

/* ===== click handler ===== */
dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.innerText.trim();

        dropdownButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        langBtn.childNodes[0].nodeValue = lang + " ";
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


