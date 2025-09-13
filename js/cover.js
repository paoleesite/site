document.addEventListener("DOMContentLoaded", () => {



  const cover = document.getElementById("cover");
  if (cover) {

    document.body.style.overflow = "hidden";

    const coverLink = cover.querySelector("a");

    const openCurtain = () => {
      cover.classList.add("open");


      setTimeout(() => {

        if (coverLink) {
          const div = document.createElement("div");
          div.className = coverLink.className;
          div.innerHTML = coverLink.innerHTML;
          coverLink.replaceWith(div);
        }


        cover.classList.add("behind");
        document.body.style.overflow = "auto";
      }, 1000);
    };


    setTimeout(openCurtain, 1500);
  }




  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
