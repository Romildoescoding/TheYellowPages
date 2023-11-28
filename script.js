const opacityChanger = function (e) {
  const opc = Number.parseFloat(this);
  if (e.target.hasAttribute("href")) {
    const link = e.target;
    const siblings = link.closest("ul").querySelectorAll("li");
    const parent = link.closest("li");
    siblings.forEach(function (el) {
      if (el != parent) {
        el.style.opacity = opc;
      }
    });
  }
};

//Passing an arguement into the handler
document
  .querySelector("ul")
  .addEventListener("mouseover", opacityChanger.bind(0.5));
document
  .querySelector("ul")
  .addEventListener("mouseout", opacityChanger.bind(1));

//DISPLAYING THE SEARCHBAR OPTIONS...
// let toggle = 1;
// const displayOptions = function(e){
//   e.preventDefault();
//   console.log(toggle);
//   e.currentTarget.blur();
//   if(toggle){
//   document.querySelectorAll('.option').forEach(function(el){
//       el.style.opacity = 1;
//     });
//     toggle = 0;
//   }
//     else{
//       document.querySelectorAll('.option').forEach(function(el){
//         el.style.opacity = 0;
//       });
//       toggle = 1;
//     }
// };

const displayOptions = function (e) {
  // e.preventDefault();
  // e.currentTarget.blur();
  document.querySelectorAll(".option").forEach(function (el) {
    const computedStyle = window.getComputedStyle(el);

    const currentOpacity = computedStyle.getPropertyValue("opacity");
    // console.log(currentOpacity);

    if (currentOpacity === "1") {
      el.style.opacity = 0;
      setTimeout(() => (el.style.display = "none"), 400);
    } else {
      el.style.opacity = 1;
      el.style.display = "";
    }
  });
};

document.getElementById("test").addEventListener("click", displayOptions);

//UPDATING THE VALUES OF THE SEARCHBAR
document.querySelectorAll(".option").forEach((e) => {
  e.addEventListener("click", function (el) {
    displayOptions();
    const target = el.target;
    document.getElementById("test").placeholder = target.placeholder;
    // console.log(target.placeholder);
    el.target.blur();
  });
});

//Scrolling back to Top on DOM loaded
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

//SEARCH OPTION WORKING
document.querySelector(".searchbutton").addEventListener("click", function () {
  //Enabling scroll-y
  // document.body.style.overflowY = "auto";

  // let rect = document.querySelector(".businesses").getBoundingClientRect();
  // // Scroll to the target element with an offset of 50 pixels
  // window.scrollTo({
  //   top: rect.top + window.scrollY - 177,
  //   behavior: "smooth",
  // });

  //Implementing the selection of bussiness boxes
  let value = document.querySelector('input[id="test"]').placeholder;
  UpdateBoxes(value, ".box");
});

//If the user did not select anything
//   if(value == "Select the business") return;

//   filteredPlaceholder = value.toLowerCase().split(" ").join("");
//   document.querySelectorAll(".box").forEach(function (e) {
//     e.style.display = "";
//     if (e.classList.contains(filteredPlaceholder)) return;
//     e.style.display = "none";
//   });
// });

const UpdateBoxes = function (value, classname) {
  //Enabling scroll-y
  document.body.style.overflowY = "auto";

  let rect = document.querySelector(".businesses").getBoundingClientRect();
  // Scroll to the target element with an offset of 50 pixels
  window.scrollTo({
    top: rect.top + window.scrollY - 177,
    behavior: "smooth",
  });

  if (value == "Select the business") return;

  filteredPlaceholder = value.toLowerCase().split(" ").join("");
  document.querySelectorAll(`${classname}`).forEach(function (e) {
    e.style.display = "";
    if (e.classList.contains(filteredPlaceholder)) return;
    e.style.display = "none";
  });
};

document.querySelector(".angleup").addEventListener("click", function (e) {
  e.preventDefault();
  let categories = document.querySelector(".categories");
  let computedStyle = window.getComputedStyle(categories);

  if (computedStyle.getPropertyValue("opacity") === "0") {
    setTimeout(() => {
      categories.style.opacity = "1";
    }, 100);
    categories.style.display = "block";
  } else {
    categories.style.opacity = "0";
    setTimeout(() => {
      categories.style.display = "none";
    }, 400);
  }
});

let elements = document.querySelectorAll(".categories-ele");
elements.forEach(function (e) {
  e.addEventListener("click", function (el) {
    const val = el.target.textContent.toLowerCase().split(" ").join("");
    console.log(val);
    // UpdateBoxes(val,'.categories-ele');

    document.body.style.overflowY = "auto";

    let rect = document.querySelector(".businesses").getBoundingClientRect();
    // Scroll to the target element with an offset of 50 pixels
    window.scrollTo({
      top: rect.top + window.scrollY - 177,
      behavior: "smooth",
    });

    document.querySelectorAll(".box").forEach(function (e) {
      e.style.display = "";
      if (e.classList.contains(val)) return;
      e.style.display = "none";
    });
  });
});
