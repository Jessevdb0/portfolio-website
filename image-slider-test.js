/*
    All code in this document is based on W3schools tutorial: "How TO - Slideshow"
    https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

document.querySelectorAll('.slideshow-container').forEach(container => {
  let slides = container.querySelectorAll('.mySlides');
  let currentIndex = 0;

  const showSlide = (n) => {
    slides.forEach((slide, i) => {
      slide.style.display = (i === n) ? 'flex' : 'none';
    });
  };

  // Show first slide
  showSlide(currentIndex);

  container.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  container.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
});


