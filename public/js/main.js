const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const _Helper = {
  delay: (msSecond) =>
    new Promise((resolve) => {
      setTimeout(resolve, msSecond);
    }),
};

const UIController = {

  RenderSocialList() {
    const socialListItems = [
      {
        title: "Github",
        icon: `
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
        `,
        link: `https://github.com/nxgthanhcong`,
      },
      {
        title: "Intagram",
        icon: `
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 1000"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
                  ></path>
                </svg>
        `,
        link: `https://github.com/nxgthanhcong`,
      },
      {
        title: "Twitter",
        icon: `
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 248 204"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    id="white_background"
                    d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                  ></path>
                </svg>
        `,
        link: `https://github.com/nxgthanhcong`,
      },
      {
        title: "Linked",
        icon: `
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                  ></path>
                </svg>
        `,
        link: `https://github.com/nxgthanhcong`,
      },
    ];

    const elSocialList = $("#social-list");
    if (!elSocialList) {
      return;
    }

    const socialListContent = socialListItems.map(d => `
    <li>
              <a href="${d.link}" class="text-slate-400 hover:text-slate-200" title="${d.title}">
                ${d.icon}
              </a>
            </li>
    `).join("");

    elSocialList.innerHTML = socialListContent;
  },

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
        startDate: "Mar 2022",
        endDate: "Present",
        position: "Backend developer",
        company: "FptTelecom",
        description:
          "Deliver high-quality modules, application meet the complex business requirements, highability for handle failure. Write own library for fasting code, handle all security context. Build strong logging applications for tracking business steps",
        // links: [
        //   {
        //     title: "MusicKit.js",
        //     icon: `
        //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
        //     `,
        //   },
        //   {
        //     title: "9to5Mac",
        //     icon: `
        //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
        //     `,
        //   },
        // ],
        tags: [
          {
            title: "Asp.net framework",
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
          {
            title: "Reactjs",
          },
        ],
      },
      {
        startDate: "Mar",
        endDate: "July 2021",
        position: "Intern",
        company: "TopOnTech",
        description:
          "Maintain ERP system & other outsourcing projects, build cronjob crawl web data",
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
        startDate: "Dec 2021",
        endDate: "Mar 2022",
        position: "Lastyear student",
        company: "Home",
        description:
          "Build somes portfolio project for practicing css skill, learning more about reponsive, apply code struct for ReactJs projects, using CssModule,...",
        tags: [
          {
            title: "Html",
          },
          {
            title: "Css",
          },
          {
            title: "Js",
          },
          {
            title: "ReactJs",
          },
        ],
      },

      {
        startDate: "July",
        endDate: "Dec 2021",
        position: "Lastyear student",
        company: "Home",
        description:
          "Making Ecomerce graduation thesis application, combining multiple tech stack. Learning researching new technologies and apply to the project. Working with third api party",
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
            title: "Asp.netcore",
          },
          {
            title: "SqlServer",
          },
          {
            title: "Reactjs",
          },
          {
            title: "Docker",
          },
        ],
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
        <ul class="${d.links ? "flex" : "hidden"}  my-3 flex-wrap gap-4">
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
        <ul class="${d.tags ? "flex" : "hidden"}  my-3 flex flex-wrap gap-2">
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
            <ul class="${d.awards ? "flex" : "hidden"} my-3 flex-wrap gap-4">
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
            <ul class="${
              d.tags ? "flex" : "hidden"
            }  my-3 flex flex-wrap gap-2">
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
            item.style.opacity = "0.5";
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

  RegisterServiceWorker() {
    //pwa
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope,
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  },
};

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    UIController.RenderSocialList();
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
