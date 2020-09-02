
jQuery(document).ready(function($) {
    
    let outs = document.querySelectorAll('.owl-out');

    for (let out of outs) {

        let owl = out.querySelector('.owl-carousel');
        let btns = out.querySelectorAll(':scope .thumb');

        let owlJq = $(owl);
        owlJq.owlCarousel({
            Type: Boolean,
            Default: false,
            loop: true,
            margin: 10,
            responsiveClass: true,
            nav:true,
            navText: [
                '<span aria-label="' + 'Previous' + '"><img class="carusel-prev-icon" src="./iamges/svg/Arrow-1.png" alt=""></span>',
                '<span aria-label="' + 'Next' + '"><svg class="arrow-right" aria-hidden="true"><use href="./images/svg/arrow.svg#arrow-right"></use></svg></span>'
            ],
            dots: false,
            responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
    }
        });

        for (let btn of btns) {
            btn.addEventListener('click', function () {
                owlJq.trigger('to.owl.carousel', [$(this).index()]);
            })
        }
    };

});