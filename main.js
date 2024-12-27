(function () {
    "use strict";

    function swapStyle() {
        var el = document.querySelector('nav');
        el.classList.toggle('show');
    }

    var menu = document.querySelectorAll('.menu-btn');
    for (let item of menu) {
        item.addEventListener('click', swapStyle);
    }
    
    
})();