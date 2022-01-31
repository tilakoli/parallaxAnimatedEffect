// parallax
let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

// window.confirm("are you sure");
let keys = ["Mercury", "Venus"];

let slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  MouseEvents: true,
  mouseWheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    },
  },
});
