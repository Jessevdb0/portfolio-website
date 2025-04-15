/*
    All code in this document is based on W3schools tutorial: "How TO - Slideshow"
    https://www.w3schools.com/howto/howto_js_slideshow.asp and the following chatGPT chat https://chatgpt.com/share/67fe5b11-9e18-8003-85da-280572c39717
*/

document.querySelectorAll('.slideshow-container').forEach(container => {
  let slides = container.querySelectorAll('.mySlides');
  let index = 0;

  function showSlides(n) {
    if (n >= slides.length) index = 0;
    else if (n < 0) index = slides.length - 1;
    else index = n;

    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "flex";
  }

  // Initial display
  showSlides(index);

  container.querySelector('.prev').addEventListener('click', () => {
    showSlides(index - 1);
  });

  container.querySelector('.next').addEventListener('click', () => {
    showSlides(index + 1);
  });
});



