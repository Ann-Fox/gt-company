// Прокрутка при клике
const menuLinks = document.querySelectorAll(".link-id[data-goto]");

if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;

        if (
            menuLink.dataset.goto &&
            document.querySelector(menuLink.dataset.goto)
        ) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =
                gotoBlock.getBoundingClientRect().top + scrollY ||
                document.documentElement.scrollTop -
                    document.querySelector("header");


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });

            e.preventDefault();
        }
    }
}

// Меню бургер

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Presentation image
const presentationBtns = document.querySelectorAll(".presentation__radio");

presentationBtns.forEach((el, index) => {
    el.addEventListener("change", function () {
        if (el.checked) {
            image.src = `assets/images/presentation/image-${index + 1}.jpg`;
        } else {
            image.src = `assets/images/presentation/image-${index + 1}.jpg`;
        }
    });
});

//  Section FAQ
const faqWrapper = document.querySelectorAll(".faq__item");

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq__item");

    items.forEach(function (item) {
        const toggleAnswer = item.querySelector(".answer");
        const toggleButton = item.querySelector(".rotateButton");

        item.addEventListener("click", function (e) {
            if (toggleAnswer.classList.contains("answer__active")) {
                toggleAnswer.classList.remove("answer__active");
                toggleButton.classList.remove("rotate");
            } else {
                toggleAnswer.classList.add("answer__active");
                toggleButton.classList.add("rotate");
            }
        });
    });
});


// Кнопка checkbox
const btnEl = document.querySelector(".checkbox-icon");
if (btnEl) {
    btnEl.addEventListener("click", function (e) {
        btnEl.classList.toggle("active");
    });
}

// Initialize Swiper
new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".next-Btn",
        prevEl: ".prev-btn",
    },
    mousewheel: true,
    keyboard: true,
});
