const navLinks = document.querySelectorAll(".js-nav-list");
const navMenu = document.querySelector(".js-nav-menu");
const subMenu = document.querySelectorAll(".js-submenu-list");
let body = document.querySelector(".js-body")

const icons = document.querySelectorAll(".js-icon");
const iconsDiv = document.querySelector(".js-icons");

const overlay = document.querySelector(".js-overlay");
const overlayX = document.querySelector(".js-close");

const tabContent = document.querySelectorAll(".js-tab-content");
const tabLinks = document.querySelectorAll(".js-tab-link");

const archivesBtn = document.querySelector(".js-archive-link");
const archiveList = document.querySelector(".js-archive-list-items");

const panel = document.querySelectorAll(".js-panel");
const accordion = document.querySelector(".js-accordion");
const accDesc = document.querySelectorAll(".js-accordion__description");
const plusSigns = document.querySelectorAll(".js-accordion__plusSign")

let required = document.querySelectorAll(".js-required");

let tablet = window.matchMedia("(max-width: 1090px)")



// VALIDATE FORM
function validateForm(){
 for(let i = 0; i < required.length; i++){
   let requiredInput = required[i];
   if(requiredInput.value.trim() == ""){
    requiredInput.classList.add("error");
    requiredInput.focus();
    requiredInput.nextElementSibling.style.display = "block";
    return false;
   }
 }
  return true;
}


// SUBMENU ACTIVATING
if(tablet.matches){
navLinks.forEach((elem)=>{
  elem.addEventListener("click",()=>{
    let subChild = elem.children[2];
    let arrChild = elem.children[1].children[0];
    arrChild.classList.toggle("active")
    if(arrChild.className.includes("active")){
      subChild.style.display ="block"
    } else{
      subChild.style.display="none"
    }
  })
})
}

// CLICK ON PANEL TURNS PLUS SIGN TURNS TO MINUS AND SHOWING TEXT
panel.forEach((onePanel) => {
  let panelBlock = onePanel.children[1];
  let plusSign = onePanel.children[0].children[1]; 

  onePanel.addEventListener("click", () => {
    // REMOVES MINUS SIGN
    plusSigns.forEach((sign)=>{
      if(sign.className.includes("accordion__plusSign--turnsToMinus")){
        sign.classList.remove("accordion__plusSign--turnsToMinus");
      }
    })
    // HIDING TEXT
    accDesc.forEach((elem)=>{
      if(elem.className.includes("accordion__description--showPanel")){
        elem.classList.remove("accordion__description--showPanel");
      }
    })

    plusSign.classList.toggle("accordion__plusSign--turnsToMinus");
    panelBlock.classList.toggle("accordion__description--showPanel");
  });
});



// IMAGE SLIDER FUNCTIONALITI
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 65,
  breakpoints: {
    820: {
      slidesPerView: 2,
    }
  },
  loop: true,
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});

// ARCHIVES BUTTON CLICK
archivesBtn.addEventListener("click", () => {
  archiveList.classList.toggle("active");
});



// OPENS UP MENU
icons.forEach((elem) => {
  elem.addEventListener("click", (icon) => {
    if (icon.target.className.includes("icon-menu")) {
      body.classList.add("active");
      navMenu.classList.add("active");
      iconsDiv.classList.toggle("active");
      body.classList.add("body--disabledScroll");
      subMenu.forEach((elem) => {
        elem.classList.add("active");
      });
    }
    if (icon.target.className.includes("icon-search")) {
      overlay.classList.toggle("active");
    }
  });
});


// RETURNS 2 ICON ON CLOSE ICON CLICK
if(tablet.matches){
icons.forEach((elem) => {
  elem.addEventListener("click", (icon) => {
    if (icon.target.className.includes("icon-close")) {
      navMenu.classList.remove("active");
      iconsDiv.classList.remove("active");
      body.classList.remove("active");
    }
  });
});
}


// OVERLAY X CLOSING
overlayX.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// CHANGE ACTIVE TAB COLOR
tabLinks.forEach((elem) => {
  elem.addEventListener("click", () => {
    tabLinks.forEach((el) => {
      el.classList.remove("active");
    });
    elem.classList.add("active");
  });
});

// OPENING TAG FUNCTION
function openTab(year) {
  tabContent.forEach((elem) => {
    elem.style.display = "none";
  });
  document.getElementById(year).style.display = "block";
}
