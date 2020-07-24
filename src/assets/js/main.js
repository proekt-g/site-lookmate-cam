window.addEventListener('load', function() {

    function clickMenuBurger() {
        this.closest('.header-menu').classList.toggle('menu_state_open');
        this.closest('.header-menu').querySelector('.header-menu-desktop').classList.toggle('open');
        if (window.outerWidth <= 500) {
            document.querySelectorAll('section .container').forEach(function(item) {
                item.classList.toggle('hidden');
            });
        }
    }

    function clickAnchor() {
        event.preventDefault();
        if (window.innerWidth <= 900 && this.className === 'header-menu-desktop__element') document.querySelector('.header-menu__burger').click();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        if ($(this).attr("href") === '#app') dn -= 100;
        $('html, body').animate({ scrollTop: dn - 104 }, 1000);
    }

    AOS.init();
    document.querySelector('.start__btn').addEventListener('click', clickAnchor);
    document.querySelector('.header__btn').addEventListener('click', clickAnchor);
    document.querySelectorAll('.header-menu-desktop__element').forEach(function(item) {
        item.addEventListener('click', clickAnchor);
    });
    document.querySelector('.header-menu__burger').addEventListener('click', clickMenuBurger);
});