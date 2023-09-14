//Wait for the page to fully load before hiding the loader
window.addEventListener('load', function(){
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hide-loader');

    //Hide loader after a short delay (you can adjust the delay time)
    this.setTimeout(() => {
        loader.style.display = 'none';
        document.body.classList.add('loaded');
    }, 1000);
});