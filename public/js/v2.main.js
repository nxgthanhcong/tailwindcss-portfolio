const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const _Helper = {
  delay: (msSecond) =>
    new Promise((resolve) => {
      setTimeout(resolve, msSecond);
    }),
};

const UIController = {
  RenderNavigationMenu() {
    const navigationDataItems = [
      {
        dataItem: "about",
        href: "#about",
        title: "about",
      },
      {
        dataItem: "experiences",
        href: "#experiences",
        title: "experiences",
      },
      {
        dataItem: "projects",
        href: "#projects",
        title: "projects",
      },
    ];
    const elNavigationMenu = $("#navigation-menu");
    if (!elNavigationMenu) {
      return;
    }

    const navigationHtmlContent = navigationDataItems
      .map(
        ({ dataItem, href, title }) => `
    <li data-item="${dataItem}" class="nav-item ${
      dataItem === "about" ? "active" : ""
    }">
      <a href="${href}" class="inline-flex items-center gap-x-4 py-3">
        <span
          class="nav-item__indicator inline-block h-px w-8 bg-slate-500 duration-200"
        ></span>
        <span
          class="nav-item__text text-sm font-semibold uppercase tracking-widest text-slate-500 duration-200"
        >
          ${title}
        </span>
      </a>
    </li>
    `,
      )
      .join("");

    elNavigationMenu.innerHTML = navigationHtmlContent;
  },

  RenderExperienceList() {
    const experienceDataItems = [
      {
        startDate: "Mar",
        endDate: "Present",
        position: "Coder",
        company: "Fpt Telecom",
        description:
          "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        links: [
          {
            title: "MusicKit.js",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
            `,
          },
          {
            title: "9to5Mac",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
            `,
          },
        ],
        tags: [
          {
            title: "Asp.net",
          },
          {
            title: "Asp.netcore",
          },
          {
            title: "SqlServer",
          },
          {
            title: "JQuery",
          },
          {
            title: "Html",
          },
          {
            title: "Css",
          },
        ],
      },
      {
        startDate: "Apr",
        endDate: "Jun 2021",
        position: "Interner",
        company: "TopOnTech",
        description:
          "Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        tags: [
          {
            title: "Asp.net",
          },
          {
            title: "Asp.netcore",
          },
          {
            title: "SqlServer",
          },
        ],
      },
      {
        startDate: "2018",
        endDate: "2019",
        position: "Fresher",
        company: "Home",
        description:
          "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app. Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        links: [
          {
            title: "MusicKit.js",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
            `,
          },
          {
            title: "9to5Mac",
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
            `,
          },
        ],
      },
      {
        startDate: "2019",
        endDate: "2019",
        position: "Fresher",
        company: "Home",
        description:
          "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app. Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      },
    ];

    const elExperienceList = $("#experience-list");
    if (!elExperienceList) {
      return;
    }

    const experienceListContent = experienceDataItems
      .map(
        (d) => `
    <li
      class="hightlight-item group grid lg:grid-cols-8 mb-12 lg:mb-4 gap-x-8 rounded-md lg:p-4 duration-200 lg:hover:bg-[rgba(255,255,255,0.1)] lg:hover:shadow-[-1px_1px_10px_4px_rgba(0,0,0,0.02)] lg:hover:border-t lg:hover:border-[rgba(255,255,255,0.1)]"
    >
      <div class="lg:col-span-2">
        <h3 class="text-sm font-medium text-slate-500">
          ${("" + d.startDate).toUpperCase()} - ${(
            "" + d.endDate
          ).toUpperCase()}
        </h3>
      </div>
      <div class="lg:col-span-6">
        <h5 class="text-xl font-medium text-slate-200">
          ${"" + d.position} - ${"" + d.company}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </h5>
        <h6 class="hidden text-lg font-medium text-slate-500">Coder</h6>
        <p class="mt-3 text-lg leading-5 text-slate-400">
          ${"" + d.description}
        </p>
        <ul class="${d.links ? "flex" : "hidden"} mt-4 flex-wrap gap-4">
          ${
            d.links
              ? d.links
                  .map(
                    ({ title, icon }) => `
              <li class="text-slate-400 text-base font-medium flex flex-wrap gap-x-[2px] items-center">
                <span>${icon}</span>
                <span>${title}</span>
              </li> 
            `,
                  )
                  .join("")
              : ""
          }
        </ul>
        <ul class="${d.tags ? "flex" : "hidden"} mt-4 flex flex-wrap gap-2">
          ${
            d.tags
              ? d.tags
                  .map(
                    ({ title }) => `
              <li class="">
                <div
                  class="flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-sm font-normal text-[#71e4d0]"
                >
                  ${title}
                </div>
              </li> 
            `,
                  )
                  .join("")
              : ""
          }
        </ul>
      </div>
    </li>
    `,
      )
      .join("");

    elExperienceList.innerHTML = experienceListContent;
  },

  RenderBlogList() {
    const blogDataItems = [
      {
        imgUrl: "./images/spotify.webp",
        createDate: "Jan 2023",
        title: "Integrating AngolaSearch with WordPress Multisite",
      },
      {
        imgUrl: "./images/spotify.webp",
        createDate: "Jan 2023",
        title: "Integrating AngolaSearch with WordPress Multisite",
      },
      {
        imgUrl: "./images/spotify.webp",
        createDate: "Jan 2023",
        title: "Integrating AngolaSearch with WordPress Multisite",
      },
    ];

    const elBlogList = $("#blog-list");
    if (!elBlogList) {
      return;
    }

    const blogListContent = blogDataItems
      .map(
        ({ imgUrl, createDate, title }) => `
        <li
            class="hightlight-item group grid lg:grid-cols-8 mb-12 lg:mb-4 gap-x-8 rounded-md lg:p-4 duration-200 lg:hover:bg-[rgba(255,255,255,0.1)] lg:hover:shadow-[-1px_1px_10px_4px_rgba(0,0,0,0.02)] lg:hover:border-t lg:hover:border-[rgba(255,255,255,0.1)] gap-y-2"
          >
      <div class="col-span-3 lg:col-span-2">
        <img
          class="bg-[rgba(255, 255, 255, 0.15)] rounded border-2 border-solid border-[rgba(255,255,255,0.1)]"
          src="${imgUrl}"
          width="120px"
          alt=""
        />
      </div>
      <div class="col-span-6 -order-1 lg:order-none">
        <h5 class="text-normal font-medium text-slate-500">${createDate}</h5>
        <h6 class="text-xl font-medium text-slate-200">
          ${title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </h6>
      </div>
    </li>
    `,
      )
      .join("");

    elBlogList.innerHTML = blogListContent;
  },

  RenderProjectList() {
    const projectDataItems = [
      {
        imgUrl: "./images/spotify.webp",
        title: "Integrating AngolaSearch with WordPress",
        description:
          "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        awards: [
          {
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4" aria-hidden="true"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg>
            `,
            title: "200+ Installs",
          },
        ],
      },
      {
        imgUrl: "./images/spotify-profile.webp",
        title: "Integrating AngolaSearch with WordPress",
        description:
          "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        awards: [
          {
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
            `,
            title: "200",
          },
          {
            icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4" aria-hidden="true"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg>
            `,
            title: "200+ Installs",
          },
        ],
        tags: [
          {
            title: "Asp.net",
          },
          {
            title: "Asp.netcore",
          },
          {
            title: "SqlServer",
          },
        ],
      },
      {
        imgUrl: "./images/halcyon.webp",
        title: "Integrating AngolaSearch with WordPress",
        description:
          "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        tags: [
          {
            title: "Asp.net",
          },
          {
            title: "Asp.netcore",
          },
          {
            title: "SqlServer",
          },
        ],
      },
    ];

    const elProjectList = $("#project-list");
    if (!elProjectList) {
      return;
    }

    const projectListContent = projectDataItems
      .map(
        (d) =>
          `
          <li
            class="hightlight-item group grid lg:grid-cols-8 mb-12 lg:mb-4 gap-x-8 rounded-md lg:p-4 duration-200 lg:hover:bg-[rgba(255,255,255,0.1)] lg:hover:shadow-[-1px_1px_10px_4px_rgba(0,0,0,0.02)] lg:hover:border-t lg:hover:border-[rgba(255,255,255,0.1)] gap-y-2"
          >
          <div class="col-span-3 lg:col-span-2">
            <img
              class="bg-[rgba(255, 255, 255, 0.15)] rounded border-2 border-solid border-[rgba(255,255,255,0.1)]"
              src="./images/spotify.webp"
              alt=""
            />
          </div>
          <div class="col-span-6 -order-1 lg:order-none">
            <h5 class="text-xl font-medium text-slate-200">
              UI Engineer Co-op - Apple
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </h5>
            <p class="mt-3 text-lg leading-5 text-slate-400">
              When I’m not at the computer, I’m usually rock climbing,
              hanging out with my wife and two cats, or running around
              Hyrule searching for Korok seeds K o r o k s e e d s .
            </p>
            <ul class="${d.awards ? "flex" : "hidden"} mb-4 flex-wrap gap-4">
              ${
                d.awards
                  ? d.awards
                      .map(
                        ({ title, icon }) => `
                  <li class="text-slate-400 text-base font-medium flex flex-wrap gap-x-[2px] items-center">
                    <span>${icon}</span>
                    <span>${title}</span>
                  </li> 
                `,
                      )
                      .join("")
                  : ""
              }
            </ul>
            <ul class="${d.tags ? "flex" : "hidden"} mb-4 flex flex-wrap gap-2">
              ${
                d.tags
                  ? d.tags
                      .map(
                        ({ title }) => `
                  <li class="">
                    <div
                      class="flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-sm font-normal text-[#71e4d0]"
                    >
                      ${title}
                    </div>
                  </li> 
                `,
                      )
                      .join("")
                  : ""
              }
            </ul>
          </div>
        </li>
    `,
      )
      .join("");

    elProjectList.innerHTML = projectListContent;
  },

  ActiveSectionWhenScroll() {
    // actived item
    window.addEventListener("scroll", function () {
      // get list section
      const elSections = $$(".v2-section");
      if (!elSections) {
        return;
      }

      // get list navigation item
      const elNavigationItems = $$(".nav-item");
      if (!elNavigationItems) {
        return;
      }

      const windowHeight = this.window.innerHeight;
      elSections.forEach((el) => {
        const spaceToTop = el.getBoundingClientRect().top;
        const section = el.getAttribute("data-item");

        if ((spaceToTop > 0) & (spaceToTop < windowHeight - 400)) {
          elNavigationItems.forEach((navItem) => {
            navItem.classList.remove("active");
          });

          const nextActiveItem = $(`.nav-item[data-item='${section}']`);
          if (!nextActiveItem) {
            return;
          }
          nextActiveItem.classList.add("active");
        }
      });
    });
  },

  CursorAnimated() {
    document.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;

      const cursor = $(".cursor-overlay");
      cursor.style.backgroundImage = ` 
      radial-gradient(
        600px at ${x}px ${y}px,
        rgba(29, 78, 216, 0.15),
        transparent 80%
      )
      `;
    });
  },

  HighLightItemAnimated() {
    const list = ["#experience-list", "#project-list", "#blog-list"];
    list.forEach((l) => {
      const currentItemList = $$(`${l} .hightlight-item`);
      if (!currentItemList) {
        return;
      }

      currentItemList.forEach((item) => {
        item.addEventListener("mouseover", function () {
          currentItemList.forEach((item) => {
            item.style.opacity = "0.6";
          });
          this.style.opacity = "1";
        });
        item.addEventListener("mouseleave", function () {
          currentItemList.forEach((item) => {
            item.style.opacity = "1";
          });
        });
      });
    });
  },
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    UIController.RenderNavigationMenu();
    UIController.RenderExperienceList();
    UIController.RenderBlogList();
    UIController.RenderProjectList();
    //RenderProjectList
    UIController.ActiveSectionWhenScroll();
    UIController.CursorAnimated();
    UIController.HighLightItemAnimated();
  });
})();
