const goToTop = document.getElementById('gototop');

goToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const pageLoaded = () => {
    // Animate on scroll
    AOS.init(
        {
            duration: 800,
            once: true
        }
    );

    // Remove loader
    const loader = document.getElementById('loader_block');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 300);

    window.removeEventListener('load', pageLoaded);
}
window.addEventListener('load', pageLoaded);