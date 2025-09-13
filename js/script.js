document.querySelectorAll('.toc-list a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {

      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".chapter").forEach(chapter => {

    let ul = null;


    Array.from(chapter.children).forEach(el => {
      const text = el.textContent.trim();

      if (text.startsWith("-")) {

        if (!ul) {
          ul = document.createElement("ul");
          chapter.insertBefore(ul, el);
        }


        const li = document.createElement("li");
        li.textContent = text.substring(1).trim();

        ul.appendChild(li);
        el.remove();
      } else {

        ul = null;
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card-content p");

  cards.forEach(p => {

    const lines = p.innerHTML.split("<br>").map(line => line.trim());


    p.innerHTML = lines.map(line => `<span class="news-link" data-title="${line}">${line}</span>`).join("<br>");


    p.querySelectorAll(".news-link").forEach(span => {
      span.addEventListener("click", () => {
        const title = span.dataset.title;

        sessionStorage.setItem("selectedNews", title);

        window.location.href = "autre.html";
      });
    });
  });
});


