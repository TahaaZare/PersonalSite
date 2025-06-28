// escape کردن کاراکترهای HTML برای نمایش کد
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const translations = {
  en: {
    viewProject: "View Project",
    name: "Zre Dev",
    title:
      "Backend Developer | Python & PHP Enthusiast | Laravel, Django & Flask ⚡",
    projectsTitle: "Projects",
    githubTab: "GitHub Projects",
    realTab: "Portfolio",
    githubProjects: [
      {
        title: "Laravel Dual Date Converter",
        desc: "A Laravel package for converting Gregorian dates to Jalali and vice versa.",
        code: `DualDateHelper::toGregorian('13820821');    // 2003-11-12
DualDateHelper::toJalali('2003-11-12');     // 1382-08-21`,
        url: "https://github.com/TahaaZare/laravel-dual-date-converter",
      },
      {
        title: "Laravel UUID Tool",
        desc: "A simple Laravel helper package for working with UUIDs.",
        code: `$uuidTool = app('uuidtool');

$uuidString = $uuidTool->generate('string'); // String output
$uuidInt = $uuidTool->generate('int');       // Integer output

echo $uuidString;
// Example: 3c9c8827-2c4d-4986-a6ba-8590b7d5c1e0

echo $uuidInt;
// Example: 808234782387283472837473287`,
        url: "https://github.com/TahaaZare/LaravelUuidTool",
      },
      {
        title: "Laravel Snippets",
        desc: "Reusable Laravel helper functions for faster development.",
        code: 'responseSuccess("User created successfully.");',
        url: "https://github.com/TahaaZare/Laravel-Snippets",
      },
    ],
    proj1Desc: "Laravel + Filament booking app for barbershops",
    proj2Desc: "Simple Livewire ticketing system with admin panel",
  },
  fa: {
    viewProject: "نمایش پروژه",
    name: "طاها زارع",
    title:
      "توسعه‌دهنده بک‌اند، علاقه‌مند به پایتون و پی‌اچ‌پی، لاراول، جنگو و فلاسک⚡",
    projectsTitle: "پروژه‌ها",
    githubTab: "پروژه‌های گیت‌هاب",
    realTab: "نمونه کار ها",
    githubProjects: [
      {
        title: "مبدل تاریخ دوگانه لاراول",
        desc: "پکیجی برای تبدیل تاریخ میلادی به شمسی و بالعکس در لاراول.",
        code: `DualDateHelper::toGregorian('13820821');    // 2003-11-12
DualDateHelper::toJalali('2003-11-12');     // 1382-08-21`,
        url: "https://github.com/TahaaZare/laravel-dual-date-converter",
      },
      {
        title: "ابزار UUID لاراول",
        desc: "پکیج ساده کمکی برای کار با UUID در لاراول.",
        code: `$uuidTool = app('uuidtool');

$uuidString = $uuidTool->generate('string'); // String output
$uuidInt = $uuidTool->generate('int');       // Integer output

echo $uuidString;
// Example: 3c9c8827-2c4d-4986-a6ba-8590b7d5c1e0

echo $uuidInt;
// Example: 808234782387283472837473287`,
        url: "https://github.com/TahaaZare/LaravelUuidTool",
      },
      {
        title: "کدهای آماده لاراول",
        desc: "توابع کمکی قابل استفاده مجدد برای تسریع توسعه در لاراول.",
        code: 'API::success("کاربر با موفقیت ایجاد شد.");',
        url: "https://github.com/TahaaZare/Laravel-Snippets",
      },
    ],
    proj1Desc: "اپلیکیشن رزرو نوبت آرایشگاه با لاراول و فیلمنت",
    proj2Desc: "سیستم تیکت ساده با Livewire و پنل مدیریت",
  },
};

const realProjectsData = [
  {
    id: "proj1",
    title: {
      fa: "Zeone Academy",
      en: "Zeone Academy",
    },
    desc: {
      fa: `وب‌سایت Zeone Academy با استفاده از فریم‌ورک لاراول توسعه یافته است و چندزبانه می‌باشد، شامل زبان‌های :

فارسی، انگلیسی، روسی، ایتالیایی و ... است`,
      en: `The Zeone Academy website is developed using the Laravel framework and is multilingual, including:

Persian, English, Russian, Italian, and ...`,
    },
    images: ["assets/images/zeone/01.webp"],
    url: "https://zeoneacademy.com",
  },
  {
    id: "proj2",
    title: {
      fa: "وب سایت فروش کود های کشاورزی bionozhan",
      en: "Bionozhan agricultural fertilizer sales website",
    },
    desc: {
      fa: `وب‌سایت شرکت دانش‌بنیان کشت گستر نوژان به دو زبان فارسی و انگلیسی پیاده‌سازی شده است با استفاده از فریم‌ورک لاراول.`,
      en: `The website of the Knowledge-Based Kesht Gostar Nozhan Company has been implemented in both Persian and English using the Laravel framework.`,
    },
    images: ["assets/images/bionozhan/01.webp"],
    url: "#",
  },
];

// رندر پروژه‌های گیت‌هاب
function renderGithubProjects(lang) {
  const container = document.getElementById("github-projects");
  container.innerHTML = "";

  translations[lang].githubProjects.forEach((project) => {
    const li = document.createElement("li");
    li.className =
      "bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300";

    const viewText = lang === "fa" ? "مشاهده در گیت‌هاب" : "View on GitHub";

    li.innerHTML = `
        <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
        <p class="text-base text-gray-700 mb-3">${project.desc}</p>
        <pre><code class="language-php">${escapeHtml(project.code)}</code></pre>
        <a href="${
          project.url
        }" target="_blank" class="text-blue-600 hover:underline text-sm font-semibold flex items-center mt-3">
          ${viewText}
          <svg class="github-icon mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.933 0-1.311.468-2.381 1.236-3.221-.124-.302-.536-1.52.117-3.165 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.645.244 2.863.12 3.165.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.628-5.479 5.922.431.372.815 1.102.815 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
      `;

    container.appendChild(li);
  });

  Prism.highlightAll();
}

function renderRealProjects(lang) {
  const container = document.getElementById("real-projects");
  container.innerHTML = "";

  realProjectsData.forEach((project) => {
    const card = document.createElement("li");
    card.className =
      "bg-white rounded-2xl shadow-md p-6 hover:shadow-xl border transition-shadow duration-300 cursor-pointer";

    const viewText = lang === "fa" ? "جزئیات بیشتر" : "Detail";

    card.innerHTML = `
        <h3 class="text-2xl font-bold mb-2">${project.title[lang]}</h3>
        <p class="text-base text-gray-600 mb-4">${project.desc[lang]}</p>
        <img src="${project.images[0]}" alt="${project.title[lang]}" class="rounded-lg mb-4 w-full object-cover h-48" />
        <button class="text-blue-600 hover:underline font-semibold text-sm">${viewText}</button>
      `;

    card.addEventListener("click", () => openModal(project, lang));

    container.appendChild(card);
  });
}

function openModal(project, lang) {
  document.getElementById("modal-title").innerText = project.title[lang];
  document.getElementById("modal-desc").innerText = project.desc[lang];

  const gallery = document.getElementById("modal-gallery");
  gallery.innerHTML = "";
  project.images.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = project.title[lang];
    img.className =
      "rounded-lg w-full object-cover cursor-pointer hover:opacity-80 transition";
    gallery.appendChild(img);
  });

  const link = document.getElementById("modal-link");
  link.href = project.url;

  document.getElementById("project-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("project-modal").classList.add("hidden");
}

function switchLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.getElementById("modal-link").innerText = t.viewProject;

  document.body.classList.toggle("text-right", lang === "fa");
  document.body.classList.toggle("text-left", lang !== "fa");

  document.getElementById("name").innerText = t.name;
  document.getElementById("title").innerText = t.title;
  document.getElementById("projects-title").innerText = t.projectsTitle;

  document.getElementById("tab-github").innerText = t.githubTab;
  document.getElementById("tab-real").innerText = t.realTab;

  renderGithubProjects(lang);
  renderRealProjects(lang);

  switchTab("github");
}

function switchTab(tab) {
  document.getElementById("github-projects").classList.add("hidden");
  document.getElementById("real-projects").classList.add("hidden");
  document.getElementById("tab-github").classList.remove("tab-active");
  document.getElementById("tab-real").classList.remove("tab-active");

  if (tab === "github") {
    document.getElementById("github-projects").classList.remove("hidden");
    document.getElementById("tab-github").classList.add("tab-active");
  } else if (tab === "real") {
    document.getElementById("real-projects").classList.remove("hidden");
    document.getElementById("tab-real").classList.add("tab-active");
  }
}

switchLang("fa");
switchTab("github");
