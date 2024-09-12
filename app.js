let mobileMenu = document.querySelector('.mobile-menu');
let barsIcon = document.querySelector('.barsIcon');
let closeIcon = document.querySelector('.closeIcon');

barsIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('showNavbar');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('showNavbar');
});


// -------Mobile dropdown end here--------



let navlinks = document.querySelectorAll('.navlink')
let dropDownIcons = document.querySelectorAll('.icon')
let showDropDowns = document.querySelectorAll('.showDropDown')

navlinks.forEach((nav, navIndex) => {
    nav.addEventListener('click', () => {
        showDropDowns.forEach((show, index) => {
            let icon = dropDownIcons[index];

            if (navIndex === index) {
                show.classList.toggle('Show');
                icon.classList.toggle('rotate');
            } else {
                show.classList.remove('Show');
                icon.classList.remove('rotate');
            }
        });
    });
});


// -------desktop dropdown end here--------



let nav = document.querySelector('.nav_content')

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 500) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }

})


// ----------Scroll down Animation end here -----------


let show_lists = document.querySelectorAll('.show_list')
let head_boxes = document.querySelectorAll('.head_box');
let icons = document.querySelectorAll('.icon');

head_boxes.forEach((head_box, index) => {
    head_box.addEventListener('click', function () {
        let icon = icons[index];
        let show_list = show_lists[index];
        if (icon.classList.contains("fa-angle-right")) {
            icon.classList.remove('fa-angle-right');
            icon.classList.add('fa-angle-down');
            show_list.classList.add('Show')
        } else {
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-right');
            show_list.classList.remove('Show')
        }
    });
});



// --------Faq end here ---------------




var swiper = new Swiper(".mySwiper", {
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });











