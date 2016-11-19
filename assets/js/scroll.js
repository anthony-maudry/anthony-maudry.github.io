/**
 * Javascript for scroll
 *
 * @author Anthony Maudry <amaudry@gmail.com>
 */
(function () {
    // var pixelsScroll = 10; // in px / 300ms
    // document.addEventListener('scroll', function () {
    //     var header = this.querySelector('.header'), nav = header.querySelector('nav'), body = this.querySelector('body');
    //
    //     if (header.classList.contains('header--scrolling') && body.scrollTop < nav.offsetHeight) {
    //         console.info('there');
    //         header.classList.remove('header--scrolling')
    //     } else if (!header.classList.contains('header--scrolling') && body.scrollTop > nav.offsetHeight) {
    //         console.info('there');
    //         header.classList.add('header--scrolling');
    //     }
    // }, true);


    // document.querySelector('body').addEventListener('click', function (e) {
    //     if (e.target.matches('.header > nav > a')) {
    //         var target = document.querySelector(e.target.getAttribute('href')),
    //             header = document.querySelector('.header'), body = document.querySelector('body'),
    //             previousPosition = null;
    //         if (!target) {
    //             return true;
    //
    //         }
    //
    //         e.stopPropagation();
    //         e.preventDefault();
    //
    //         // document.querySelector('.header').classList.add('header--scrolling');
    //         var timer = setInterval(function () {
    //             var position = body.scrollTop - target.offsetCoords().top,
    //                 offset = target.offsetCoords().top - body.scrollTop,
    //                 scroll = pixelsScroll > Math.abs(position - header.offsetHeight) ? Math.abs(position - header.offsetHeight) : pixelsScroll;
    //             console.info(offset, position, scroll, header.offsetHeight, pixelsScroll, target.offsetCoords().top, body.scrollTop);
    //             switch (true) {
    //                 case (target.offsetCoords().top === body.scrollTop + header.offsetHeight) :
    //                     clearInterval(timer);
    //                     previousPosition = null;
    //                     break;
    //                 case (target.offsetCoords().top > body.scrollTop + header.offsetHeight) :
    //                     body.scrollTop += scroll;
    //                     break;
    //                 case (target.offsetCoords().top < body.scrollTop + header.offsetHeight) :
    //                     body.scrollTop -= scroll;
    //                     break;
    //             }
    //         }, 10);
    //     }
    // });
})();