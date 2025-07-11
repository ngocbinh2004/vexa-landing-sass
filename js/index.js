document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector("aside");
  const overlay = document.querySelector(".overlay");
  const menuBtn = document.querySelector("nav button");
  const closeBtn = document.querySelector(".logo-aside button");

  if (menuBtn && closeBtn && aside && overlay) {
    menuBtn.addEventListener("click", () => {
      aside.classList.add("active");
      overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      aside.classList.remove("active");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      aside.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});

// let btnOpenSidebar = document.querySelector(".btn-open-sidebar");

// if (btnOpenSidebar) {
//   btnOpenSidebar.onclick = function () {
//     document.querySelector(".overlay").classList.toggle("active-overlay");
//     document.querySelector(".sidebar-right").classList.toggle("active");
//   };

//   document.querySelector(".overlay").onclick = function () {
//     document.querySelector(".overlay").classList.toggle("active-overlay");
//     document.querySelector(".sidebar-right").classList.toggle("active");
//   };
// }

const arrClientContent = [
  {
    content: "UI/UX Desgin",
    image: "1-1.jpg",
  },
  {
    content: "Web Design",
    image: "1-2.jpg",
  },
  {
    content: "Brand Design",
    image: "1-1.jpg",
  },
  {
    content: "Graphic Design",
    image: "1-2.jpg",
  },
];

// innerHTML và document.createElement
// từ mảng tạo ra giao diện html
// sau khi tạo giao diện HTML thì tạo tiếp sự kiện onmouseenter

// document
//   .querySelectorAll(".client-content-list-item")
//   .forEach((item, index) => {
//     item.onmouseenter = function (event) {
//       console.log(event.target.getAttribute("data-image"));
//       document.querySelector(".client-content-image img").src =
//         "./img/" + event.target.getAttribute("data-image");
//     };
//   });

for (let item of arrClientContent) {
  let theDiv = document.createElement("div");
  theDiv.className = "client-content-list-item";
  theDiv.innerHTML = `
            <p>${item.content}</p>
            <i class="fa-solid fa-arrow-right"></i>
  `;
  theDiv.onmouseenter = function () {
    document.querySelector(".client-content-image img").src =
      "./img/" + item.image;
  };
  document.querySelector(".client-content-list").appendChild(theDiv);
}

// Project
const arrProjectList = [
  {
    image: "./img/work-thumb1-1.jpg",
    title: "NICE BLOCK APPLE & MANGO",
    content:
      "Nice Block Apple & Mango about ice block that has theme cute branding and fun coloring. The client want us to create more unique and creative design than before.",
  },
  {
    image: "./img/work-thumb1-2.jpg",
    title: "DANIEL BARKLE CARD HOLOGRAPHIC",
    content:
      "We love our residential design and build projects - big and small! From full builds, major renovations or a new lease of life to individual space and creating perfect place.",
  },
];

let content = "";
for (let item of arrProjectList) {
  content += `
          <div class="project-bottom-item">
            <div class="project-bottom-item-image">
              <img src="${item.image}" alt="" />
            </div>
            <div class="project-bottom-item-content">
              <h2>${item.title}</h2>
              <p>${item.content}</p>
              <div class="project-bottom-item-content-group-button">
                <button>BRANDING</button>
                <button>LOGO DESIGN</button>
                <button>MOCKUP</button>
              </div>
              <button class="btn-view-project">
                <span>View project</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
  `;
  document.querySelector(".project-bottom").innerHTML = content;
}

const arrMeetMaker = [
  {
    title: "Terry Souro",
    image: "./img/team-1-1.jpg",
  },
  {
    title: "Souro Terry",
    image: "./img/team-1-2.jpg",
  },
  {
    title: "Stephen",
    image: "./img/team-1-3.jpg",
  },
  {
    title: "Terry Souro",
    image: "./img/team-1-4.jpg",
  },
];

let layoutMeetMaker = "";
for (let meetMaker of arrMeetMaker) {
  layoutMeetMaker += `
  <div class="meet-marker-content-item">
            <img src="${meetMaker.image}" alt="" />
            <div class="meet-marker-content-item-detail">
              <!-- text -->
              <div class="meet-marker-content-item-detail-title">
                <h3>${meetMaker.title}</h3>
                <p>Creative Director</p>
              </div>
              <div class="meet-maket-action">
                <button><i class="fa-solid fa-plus"></i></button>
                <div class="meet-maker-social">
                  <a href="" target="_blank"
                    ><i class="fa-brands fa-linkedin"></i
                  ></a>
                  <a href="" target="_blank"
                    ><i class="fa-brands fa-twitter"></i
                  ></a>
                  <a href="" target="_blank"
                    ><i class="fa-brands fa-facebook"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
  `;
  document.querySelector(".meet-marker-content").innerHTML = layoutMeetMaker;
}

// INSIGHT
const arrInsight = [
  {
    title: "New user-friendly design framework for global IT products",
    image: "./img/insight_1-1.jpg",
  },
  {
    title: "Introduction to Branding for UI/UX Designers",
    image: "./img/insight_1-2.jpg",
  },
  {
    title: "Blender for Beginners: A Tutorial That’ll Help You Get Started",
    image: "./img/insight_1-3.jpg",
  },
];

let layoutInsight = "";

for (let insight of arrInsight) {
  layoutInsight += `
          <div class="insight-card-item">
            <div class="insight-card-item-content">
              <div class="insight-card-item-content-top">
                <span>20 Jan 2024</span>
                <h3>
                  <a href="/">${insight.title}</a>
                </h3>
              </div>

              <div class="insight-card-item-content-bottom">
                <div class="insight-card-item-content-bottom-list">
                  <ul>
                    <li>
                      <a href="">BRANDING</a>
                    </li>
                    <li>
                      <a href="">LOGO DESIGN</a>
                    </li>
                    <li>
                      <a href="">MOCKUP</a>
                    </li>
                  </ul>
                </div>
                <div class="insight-card-item-content-bottom-read-more">
                  <a href="">Read More
                    <i class="fa fa-arrow-up"></i >
                  </a>
                  
                </div>
              </div>
            </div>

            <div class="insight-card-item-image">
              <img src="${insight.image}" alt="" />
            </div>
          </div>
  `;
  document.querySelector(".insight-card").innerHTML = layoutInsight;
}
