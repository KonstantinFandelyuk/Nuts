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

// let productListPosTop = productList.getBoundingClientRect().top;

// let scroll = () => {
//   if (window.pageYOffset >= productListPosTop - 800) {
//     window.removeEventListener("scroll", scroll); // Важно
//     modalDelivery.classList.add("active");
//     deliveryList.classList.add("fadeInDown");
//   }
// };
// window.addEventListener("scroll", scroll);

const isNumericInput = (event) => {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
};

const enforceFormat = (event) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = (event) => {
  if (isModifierKey(event)) {
    return;
  }

  // I am lazy and don't like to type things more than once
  const target = event.target;
  const input = event.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    target.value = `(${zip}) ${middle} - ${last}`;
  } else if (input.length > 3) {
    target.value = `(${zip}) ${middle}`;
  } else if (input.length > 0) {
    target.value = `(${zip}`;
  }
};

const inputElement = document.getElementById("contact_phone");
inputElement.addEventListener("keydown", enforceFormat);
inputElement.addEventListener("keyup", formatToPhone);
