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
const imageCheckbox1 = document.querySelector("#imageCheckbox1");
const imageCheckbox2 = document.querySelector("#imageCheckbox2");
const imageCheckbox3 = document.querySelector("#imageCheckbox3");
const image = document.querySelector("#image");

imageCheckbox1.addEventListener("change", function () {
    if (imageCheckbox1.checked) {
        image.src = "./assets/images/presentation/image-1.jpg";
    } else {
        image.src = "./assets/images/presentation/image-1.jpg";
    }
});

imageCheckbox2.addEventListener("change", function () {
    if (imageCheckbox2.checked) {
        image.src = "./assets/images/presentation/image-2.jpg";
    } else {
        image.src = "./assets/images/presentation/image-2.jpg";
    }
});

imageCheckbox3.addEventListener("change", function () {
    if (imageCheckbox3.checked) {
        image.src = "./assets/images/presentation/image-3.jpg";
    } else {
        image.src = "./assets/images/presentation/image-3.jpg";
    }
});

//  Section FAQ
const faqWrapper1 = document.querySelector(".item-1");
const faqBtn1 = document.querySelector(".answear__faq-1");
if (faqWrapper1) {
    faqWrapper1.addEventListener("click", function (e) {
        faqBtn1.classList.toggle("faq_active");
    });
}

const faqWrapper2 = document.querySelector(".item-2");
const faqBtn2 = document.querySelector(".answear__faq-2");
if (faqWrapper2) {
    faqWrapper2.addEventListener("click", function (e) {
        faqBtn2.classList.toggle("faq_active");
    });
}

const faqWrapper3 = document.querySelector(".item-3");
const faqBtn3 = document.querySelector(".answear__faq-3");
if (faqWrapper3) {
    faqWrapper3.addEventListener("click", function (e) {
        faqBtn3.classList.toggle("faq_active");
    });
}

const faqWrapper4 = document.querySelector(".item-4");
const faqBtn4 = document.querySelector(".answear__faq-4");
if (faqWrapper4) {
    faqWrapper4.addEventListener("click", function (e) {
        faqBtn4.classList.toggle("faq_active");
    });
}
// Поворот иконки кнопки при нажатии
const rotateButton1 = document.getElementById("rotateButton-1");
const faq__btn1 = document.querySelector(".faq__wrapper-1");

faq__btn1.onclick = function () {
    rotateButton1.classList.toggle("rotate");
};

const rotateButton2 = document.getElementById("rotateButton-2");
const faq__btn2 = document.querySelector(".faq__wrapper-2");

faq__btn2.onclick = function () {
    rotateButton2.classList.toggle("rotate");
};

const rotateButton3 = document.getElementById("rotateButton-3");
const faq__btn3 = document.querySelector(".faq__wrapper-3");

faq__btn3.onclick = function () {
    rotateButton3.classList.toggle("rotate");
};

const rotateButton4 = document.getElementById("rotateButton-4");
const faq__btn4 = document.querySelector(".faq__wrapper-4");

faq__btn4.onclick = function () {
    rotateButton4.classList.toggle("rotate");
};

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
