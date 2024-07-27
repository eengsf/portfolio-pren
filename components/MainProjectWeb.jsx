import MainProjectWebDetail from "./MainProjectWebDetail";

const obj = {
  dashboardKit: {
    img: "dashboard-kit.png",
    name: "Dashboard Kit",
    desc: "This application is a project that utilizes an API to display a list of customer tickets. It includes features to search for customers, pagination, filtering, and sorting by name.",
    tech: ["Next.js", "Tailwindcss", "Redux Toolkit"],
    linkDemo: "https://dashboard-kit-henna.vercel.app/",
    linkCode: "/",
  },
  articleListApp: {
    img: "article-list-app.png",
    name: "Article List App",
    desc: "This application is a project that utilizes an API to display articles. It includes a feature to search for articles from several countries, specific categories, and other general topics.",
    tech: ["Next.js", "Tailwindcss"],
    linkDemo: "https://article-list-one.vercel.app/",
    linkCode: "/",
  },
  animeListApp: {
    img: "anime-list-app.png",
    name: "Anime List App",
    desc: "This application is a project that utilizes an API to display a list of popular anime. It includes a feature to search for anime titles and a pagination system.",
    tech: ["Next.js", "Tailwindcss"],
    linkDemo: "https://anime-list-app-seven.vercel.app/",
    linkCode: "/",
  },
  topicCRUD: {
    img: "topic-crud.png",
    name: "Topic CRUD",
    desc: `This application is a simple project that features CRUD (Create, Read, Update, Delete) operations using Next.js, Tailwind CSS, and MongoDB as its database.`,
    tech: ["Next.js", "Tailwindcss", "Mongodb"],
    linkDemo: "https://cobafullstack.vercel.app/",
    linkCode: "/",
  },
  catatanBelanja: {
    img: "catatan-belanja.png",
    name: "Shopping List",
    desc: "This application is a simple project to display saved shopping lists. It includes a feature to filter existing shopping lists.",
    tech: ["React.js", "Vite.js"],
    linkDemo: "https://catatan-belanja-zeta.vercel.app/",
    linkCode: "/",
  },
  responsifWeb: {
    img: "responsif-web.png",
    name: "Responsif Web",
    desc: `An interactive and responsive web project with several supported animation views, built with modern Next.js technology.`,
    tech: ["Next.js", "Tailwindcss", "Redux Toolkit", "Framer Motion"],
    linkDemo: "https://asc-sf.vercel.app/",
    linkCode: "/",
  },
  portfolio: {
    img: "portfolio-v2.png",
    name: "Portfolio",
    desc: "Personal Website and portfolio built with Next.js and Tailwind CSS.",
    tech: [
      "Next.js",
      "Tailwindcss",
      "Redux Toolkit",
      "Framer Motion",
      "Mongodb",
    ],
    linkDemo: "https://portfolio-v2-rho-murex.vercel.app/",
    linkCode: "/",
  },
  onlineShop: {
    img: "onlineshopeeng.png",
    name: "Online Shop",
    desc: "A simple online shop application with features for category filtering, sorting, and searching for products, as well as adding items to a shopping cart that is saved to each user's account.",
    tech: ["Laravel", "MySQL", "React.js", "Tailwindcss"],
    linkDemo: "https://online-shop.vercel.app/",
    linkCode: "/",
  },
};

const MainProjectWeb = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-0 py-8 md:grid-cols-2">
      <MainProjectWebDetail
        img={obj.dashboardKit.img}
        name={obj.dashboardKit.name}
        desc={obj.dashboardKit.desc}
        tech={obj.dashboardKit.tech}
        linkCode={obj.dashboardKit.linkCode}
        linkDemo={obj.dashboardKit.linkDemo}
      />
      <MainProjectWebDetail
        img={obj.portfolio.img}
        name={obj.portfolio.name}
        desc={obj.portfolio.desc}
        tech={obj.portfolio.tech}
        linkCode={obj.portfolio.linkCode}
        linkDemo={obj.portfolio.linkDemo}
      />
      <MainProjectWebDetail
        img={obj.onlineShop.img}
        name={obj.onlineShop.name}
        desc={obj.onlineShop.desc}
        tech={obj.onlineShop.tech}
        linkCode={obj.onlineShop.linkCode}
        linkDemo={obj.onlineShop.linkDemo}
      />
      <MainProjectWebDetail
        img={obj.responsifWeb.img}
        name={obj.responsifWeb.name}
        desc={obj.responsifWeb.desc}
        tech={obj.responsifWeb.tech}
        linkCode={obj.responsifWeb.linkCode}
        linkDemo={obj.responsifWeb.linkDemo}
      />
      <MainProjectWebDetail
        img={obj.articleListApp.img}
        name={obj.articleListApp.name}
        desc={obj.articleListApp.desc}
        tech={obj.articleListApp.tech}
        linkCode={obj.articleListApp.linkCode}
        linkDemo={obj.articleListApp.linkDemo}
      />
      <MainProjectWebDetail
        img={obj.animeListApp.img}
        name={obj.animeListApp.name}
        desc={obj.animeListApp.desc}
        tech={obj.animeListApp.tech}
        linkCode={obj.animeListApp.linkCode}
        linkDemo={obj.animeListApp.linkDemo}
      />
      {/* <MainProjectWebDetail
        img={obj.topicCRUD.img}
        name={obj.topicCRUD.name}
        desc={obj.topicCRUD.desc}
        tech={obj.topicCRUD.tech}
        linkCode={obj.topicCRUD.linkCode}
        linkDemo={obj.topicCRUD.linkDemo}
      /> */}
      <MainProjectWebDetail
        img={obj.catatanBelanja.img}
        name={obj.catatanBelanja.name}
        desc={obj.catatanBelanja.desc}
        tech={obj.catatanBelanja.tech}
        linkCode={obj.catatanBelanja.linkCode}
        linkDemo={obj.catatanBelanja.linkDemo}
      />
    </div>
  );
};
export default MainProjectWeb;
