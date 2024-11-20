const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const link = document.querySelector(".link");
const h1 = document.querySelector("h1");

link.addEventListener("click", function (e) {
  e.preventDefault();
  let s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(window.scrollX, window.scrollY);
  // window.scrollTo({
  //     left:s1coords.left + window.scrollX,
  //     top:window.scrollY
  //     + s1coords.top,
  //     behavior:"smooth"
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});

// h1.addEventListener("mouseenter",()=>{
//     alert("Hy")
// })

// smooth navigation
document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  // e.preventDefault();
  // console.log(e.target);

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    // console.log("LINK");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//   get parentElement childElement
console.log(h1.parentElement.children); //to find out all children of h1
[...h1.parentElement.children].forEach((el) => {
  if (el !== h1) {
    // el.style.transform = "scale(0.5)"
  }
});
// console.log(h1.closest(".section-1"));

// tab-section
const tabContainer = document.querySelector(".tab_container");
const tabs = document.querySelectorAll(".btn");
const tabContent = document.querySelectorAll(".tab-content");

tabContainer.addEventListener("click", (e) => {
  //    const clicked = e.target.parentElement;//it return parentelement of both span and button but we neewd button so we use closest
  const clicked = e.target.closest(".btn");

  if (!clicked) return;

  tabs.forEach(t=>{
    t.classList.remove("tab-btn-active");
    clicked.classList.add("tab-btn-active");
})
  tabContent.forEach(t=>{
    t.classList.remove("tabs-content-active");
    document.querySelector(`.tab-content-${clicked.dataset.tab}`).classList.add("tabs-content-active");
})
})

// Sticky Navbar
const nav = document.querySelector(".navbar");

// window.addEventListener("scroll",function() {
//     const initialcoords = section1.getBoundingClientRect();
//     if(window.scrollY >= initialcoords.top){
//         nav.classList.add("sticky");
//     }
//     else{
//         nav.classList.remove("sticky");
//     }
// })

//intersection observer API

const navHeight = nav.getBoundingClientRect().height;

const callbackFun = function (entries,observer){
     const [entry] = entries;
     
     if(!entry.isIntersecting) { nav.classList.add("sticky")}
    //  else {nav.classList.remove("sticky")}
     
}
const option = {
    root:null,
    threshold:0,
    rootMargin:`-${navHeight}px`,
}

const observer = new IntersectionObserver(callbackFun,option);
observer.observe(nav);//we want to observ the setion that is pass to the parameter

// Reveal Section
const allSection = document.querySelectorAll(".section");

const revealSection = function(entries,observer){
    const [entry] = entries;

    if(!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden")
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.10,
})

allSection.forEach((section)=>{
    sectionObserver.observe(section);
    section.classList.add("section-hidden")
})