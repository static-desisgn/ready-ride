
//================ Pure JS Counter ==================//
const counters = document.querySelectorAll('.counter');

const animateCounters = (counter) => {
    const target = parseFloat(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    const prefix = counter.dataset.prefix || '';
    let count = 0;
    const duration = 3000; 
    const increment = target / (duration / 20);

    const updateCounter = () => {
        if (count < target) {
            count += increment;
            if (target % 1 !== 0) {
                counter.innerText = prefix + (count).toFixed(1) + suffix;
            } else {
                counter.innerText = prefix + Math.floor(count).toLocaleString() + suffix;
            }
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = prefix + target.toLocaleString() + suffix;
        }
    };

    updateCounter();
};

// Scroll trigger
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => {
    observer.observe(counter);
});


