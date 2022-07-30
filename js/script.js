

  // Make mobile navigation work

  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
      headerEl.classList.toggle("nav-open");
  });


 
// Smooth scrolling animation


  const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }


    if (href !== "#" && href.startsWith("https")) {
        window.open(href)
    }

    // if (href !== "#" && href.startsWith("mailto")) {
    //   window.open(href)
    // }

   

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link")){
      headerEl.classList.toggle("nav-open");
    }
  });
});  



  // Sticky navigation
  
  const intro = document.querySelector(".section__navi");

  const obs = new IntersectionObserver(
      function (entries) {
          const ent = entries[0];
    

          if (ent.isIntersecting === false) {
              document.body.classList.add("sticky");
          }

          if (ent.isIntersecting === true) {
              document.body.classList.remove("sticky");
          }
      },
      {
          // In the viewport
          root: null,
          threshold: 0,
          rootMargin: "-80px",
      }
  );
  obs.observe(intro);








// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');

// const btnsOpenModal = document.querySelector('.nav__btn')
// const btnCloseModal = document.querySelector('.close-modal')


// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };



// // btnsOpenModal.addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });




