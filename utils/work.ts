const works = [
    {
        show_at_home: true,
        on_going: true,
        overline: "Software",
        title: "Believers Sword",
        description:
            "This is a simple desktop application to help in studying the bible. It has features like bookmark, highlights, prayer list, sermon page, etc.",
        techs: ["electron", "electron.builder", "Vue3", "windiCss", "Naive-UI"],
        thumbnail: "https://i.imgur.com/HOGyZ7ql.png",
        date: "2023-04-17",
        logo: "https://believers-sword.brojenuel.com/_nuxt/believers-sword.7fcefc1c.svg",
        article_link: "/blog/Believers-Sword",
        url_new_tab: false,
        external_link: "https://believers-sword.brojenuel.com/",
        github_link: "https://github.com/BroJenuel/believers-sword-next",
    },
    {
        show_at_home: true,
        on_going: true,
        overline: "Web App",
        title: "Fams Tree",
        description:
            "Fams Tree is an application tool that you can use to create family tree. You can then save, or export it to different format like PDF, SVG, PNG, etc.",
        techs: ["Vue3", "vite", "unocss", "TypeScript", "firebase"],
        thumbnail: "https://i.imgur.com/Wz7ym2ih.png",
        date: "2023-06-15",
        article_link: "/blog/I-Created-a-Family-Tree-Editor-Check-it-Out-",
        url_new_tab: true,
        external_link: "https://fam-tree.brojenuel.com/",
        github_link: null,
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Template",
        title: "FaceBook Clone",
        description:
            "This is a facebook like Clone. I created it using VueJs and WindiCSS. WindiCSS a tailwind like library but faster.",
        techs: ["Vue3", "vite", "windiCSS", "TypeScript"],
        thumbnail: "https://i.imgur.com/sCZY0BHm.png",
        date: "2023-06-15",
        article_link: "/blog/Facebook-Like-Clone-With-Source-Code",
        url_new_tab: true,
        external_link: "https://facebook-clone-nu-ecru.vercel.app/",
        github_link: null,
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Web App",
        title: "Random Name Selector",
        description:
            "This is a simple wheel of fortune like. You can add, edit, remove people, and an awesome simple congratulation if a user has been picked.",
        techs: ["Vue3", "Vite", "WindiCSS", "TypeScript"],
        thumbnail: "https://i.imgur.com/PILgM1ll.png",
        date: "2023-05-18",
        article_link: null,
        url_new_tab: true,
        external_link: "https://brojenuel.github.io/random-name-select/dist/",
        github_link: "https://brojenuel.github.io/random-name-select/",
    },

    {
        show_at_home: true,
        on_going: false,
        overline: "Documentation Website",
        title: "Laravel MongoDB Docs",
        description:
            "A Documentation website for Laravel MongoDB, a package that you can use to easily connect your laravel project to mongodb.",
        techs: ["vitepress", "vue"],
        thumbnail: "https://i.imgur.com/joyBgJBl.png",
        date: "2023-02-20",
        logo: "https://i.imgur.com/h3aGbdQs.png",
        article_link: null,
        url_new_tab: true,
        external_link: "https://laravel-mongodb.vercel.app",
        github_link: "https://github.com/BroJenuel/laravel-mongodb/tree/master/docs",
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Portfolio Website",
        title: "Portfolio Website",
        description:
            "Created a simple but cool looking portfolio website for my wife. I used pure VueJS to create the website and hosted it on netlify.",
        techs: ["vue", "javascript"],
        thumbnail: "https://i.imgur.com/RwAoRLyl.png",
        date: "2022-04-05",
        logo: "https://kateawisan.netlify.app/img/profile-img.d44572f5.jpg",
        article_link: null,
        url_new_tab: true,
        external_link: "https://kateawisan.netlify.app/",
        github_link: "https://github.com/BroJenuel/kate-awisan-resume-web",
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Search Engine",
        title: "Get GIF's",
        description:
            "Search the wide internet to get GIFs that you can download/copy and send/post to someone or somebody.",
        techs: ["vue", "API", "javascript"],
        thumbnail: "gif-search.webp",
        date: "2022-03-19",
        logo: "https://i.imgur.com/IFXqlzCs.png",
        article_link: null,
        url_new_tab: true,
        external_link: "https://gif-find.netlify.app",
        github_link: "https://github.com/BroJenuel-Box/get-gifs",
    },
    {
        show_at_home: false,
        on_going: false,
        overline: "Personal Website",
        title: "Portfolio Final Version",
        description:
            "I created a new portfolio website, and it is being served as an SSR for good SEO. I added blogs for publishing my articles.",
        techs: ["vue", "Nuxt", "javascript", "SSR", "SupaBase", "Disqus"],
        thumbnail: "https://i.imgur.com/dynz10Bl.png",
        date: "2022-02-17",
        logo: "https://i.imgur.com/3iN1kQym.jpg",
        article_link: null,
        url_new_tab: false,
        external_link: "https://BroJenuel.com",
        github_link: "https://github.com/BroJenuel/BroJenuelBlog",
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Web App",
        title: "Lets Chat Up",
        description:
            "Lets Chat is a web app that I made where a user can chat with another person or more than one person, depending on the room selected.",
        techs: ["nodejs", "javascript"],
        thumbnail: "https://i.imgur.com/HR7h6EPl.png",
        date: "2022-01-01",
        article_link: null,
        url_new_tab: true,
        external_link: "https://lets-chat-b6w7.onrender.com/",
        github_link: "https://github.com/BroJenuel-Box/lets-chat",
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Android App",
        title: "Simple World Time App",
        description:
            "World time is an app wherein you can check the time around the world and also check if its night time or day time.",
        techs: ["ReactNative", "javascript"],
        thumbnail: "https://i.imgur.com/D2BH206l.png",
        date: "2019-05-02",
        logo: "https://i.imgur.com/la9CFWFs.png",
        article_link: null,
        url_new_tab: true,
        external_link: "https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view",
        github_link: "https://github.com/BroJenuel/MyPortFolio/tree/master/appDev/world_time",
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Web App",
        title: "Simple Web Calculator",
        description:
            "This is a simple web calculator app, with brownish and orange color palette design. I intended to create and design a calculator, and this is the result.",
        techs: ["vue", "javascript"],
        thumbnail: "https://i.imgur.com/vhysawnl.png",
        date: "2018-11-03",
        article_link: null,
        url_new_tab: true,
        external_link: "https://calculator.brojenuel.com/",
        github_link: "https://github.com/BroJenuel/portfolio/tree/master/calculator-vue",
    },
    {
        show_at_home: true,
        on_going: false,
        overline: "Personal Website",
        title: "Portfolio Version v1",
        description: "This is my very first portfolio website created from scratch.",
        techs: ["vue", "javascript", "Vuetify"],
        thumbnail: "https://i.imgur.com/tVN4aOVl.png",
        date: "2017-12-01",
        article_link: null,
        url_new_tab: true,
        external_link: "https://jenuelganawed-v1.netlify.app/#/challenge",
        github_link: "https://github.com/BroJenuel/jenuel-portfolio-v1",
    },
];

export const useWorks = (limit: "all" | number = "all") => {
    if (limit == "all") return works;
    else return works.slice(0, limit);
};

export const useGetOngoingWorks = () => {
    return works.filter((item) => item.on_going == true);
};

export const useGetShowInHome = () => {
    return works.filter((item) => item.show_at_home == true);
};
