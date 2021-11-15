
const scrollToTopBtn = document.getElementById("scrollToTopBtn")
const rootElement = document.documentElement
const target = document.querySelector("footer");

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToTopBtn.classList.add('btn--show')
    } else {
      scrollToTopBtn.classList.remove('btn--show')
    }
  });
}

let observer = new IntersectionObserver(callback);
observer.observe(target);

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop)