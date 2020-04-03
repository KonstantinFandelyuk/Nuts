const bodyElement = document.getElementById("body");
const modalElement = document.getElementById("modal");
const buttonElement = document.querySelector(".burger__menu");
const closeModalElement = document.querySelector(".modal__close");
let productList = document.querySelector(".product__list");
let modalDelivery = document.querySelector(".delivery-modal");
let buttonThanks = document.querySelector(".button-thanks");
let deliveryList = document.querySelector(".delivery__list");

buttonElement.addEventListener("click", function () {
  bodyElement.classList.add("hidden-scroll");
  modalElement.classList.add("active");
});

closeModalElement.addEventListener("click", function () {
  modalElement.classList.remove("active");
  bodyElement.classList.remove("hidden-scroll");
});

$(document).ready(function () {
  $(".feedback-clients").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });
  $(".faq_item_title_inner").on("click", function () {
    $(this).parents(".faq_item").find(".faq_item_body").slideToggle(300);
    $(this).toggleClass("open");
    if ($(this).hasClass("show_all")) {
      if ($(this).hasClass("open")) {
      }
    }
  });
});
$(".button.button-header").on("click", function (e) {
  $(this);
  e.preventDefault();
  e.stopPropagation();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000,
  );
});

$(".nav__link").on("click", function (e) {
  $(this);
  e.preventDefault();
  e.stopPropagation();

  $("html, body")
    .animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000,
    )
    .ready(function () {
      $(".modal").removeClass("active");
      $("body").removeClass("hidden-scroll");
    });
});

buttonThanks.onclick = () => {
  if (modalDelivery.classList.contains("active")) {
    modalDelivery.classList.remove("active");
  }
};

let productListPosTop = productList.getBoundingClientRect().top;

let scroll = () => {
  if (window.pageYOffset >= productListPosTop - 800) {
    window.removeEventListener("scroll", scroll); // Важно
    modalDelivery.classList.add("active");
    deliveryList.classList.add("fadeInDown");
  }
};
window.addEventListener("scroll", scroll);
