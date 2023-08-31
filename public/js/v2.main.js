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
          },
          {
            title: "9to5Mac",
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
          },
          {
            title: "9to5Mac",
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
      class="group grid grid-cols-[max-content_auto] gap-x-8 rounded-md p-4 duration-200 hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[-1px_1px_10px_4px_rgba(0,0,0,0.02)] hover:border-t hover:border-[rgba(255,255,255,0.1)]"
    >
      <div>
        <h3 class="text-sm font-medium text-slate-500">
          ${("" + d.startDate).toUpperCase()} - ${(
            "" + d.endDate
          ).toUpperCase()}
        </h3>
      </div>
      <div>
        <h5 class="text-xl font-normal text-slate-200">
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
        <h6 class="text-lg font-medium text-slate-500">Coder</h6>
        <p class="mt-3 text-lg leading-5 text-slate-400">
          ${"" + d.description}
        </p>
        <ul class="${d.links ? "flex" : "hidden"} mt-4 flex-wrap gap-4">
          ${
            d.links
              ? d.links
                  .map(
                    ({ title }) => `
              <li class="text-slate-400 text-base font-medium flex flex-wrap gap-x-[2px] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
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
      class="group grid grid-cols-[max-content_auto] gap-x-4 rounded-md p-4 duration-200 hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[-1px_1px_10px_4px_rgba(0,0,0,0.02)] hover:border-t hover:border-[rgba(255,255,255,0.1)]"
    >
      <div>
        <img
          class="bg-[rgba(255, 255, 255, 0.15)] rounded border-2 border-solid border-[rgba(255,255,255,0.1)]"
          src="${imgUrl}"
          width="120px"
          alt=""
        />
      </div>
      <div>
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
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    UIController.RenderNavigationMenu();
    UIController.RenderExperienceList();
    UIController.RenderBlogList();
    UIController.ActiveSectionWhenScroll();
  });
})();
