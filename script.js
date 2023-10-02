gsap.from("#page3 a #img1", {
  transform: "translateY(100%)",
  scrollTrigger: {
    trigger: "#knwIss",
    scroller: "body",
    scrub: 2,
    start: "top 500",
    end: "top 400",
    ease: "linear",
  },
});
gsap.from("#page3 a #img2", {
  transform: "translateY(100%)",
  scrollTrigger: {
    trigger: "#notice1",
    scroller: "body",
    scrub: 2,
    start: "top 500",
    end: "top 400",
    ease: "linear",
  },
});
gsap.from("#page3 a #img3", {
  transform: "translateY(100%)",
  scrollTrigger: {
    trigger: "#notice2",
    scroller: "body",
    scrub: 2,
    start: "top 500",
    end: "top 400",
    ease: "linear",
  },
});

function menuOpen() {
  let list = document.getElementById("menu-wrapper");
  list.style.display = "block";
  let cancle = document.getElementById("cancle");
  cancle.style.display = "inline";
  let open = document.getElementById("open");
  open.style.display = "none";
}

function closeMenu() {
  let list = document.getElementById("menu-wrapper");
  list.style.display = "none";
  let cancle = document.getElementById("cancle");
  cancle.style.display = "none";
  let open = document.getElementById("open");
  open.style.display = "inline";
}
