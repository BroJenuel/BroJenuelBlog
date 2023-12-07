const icons = {
    solar: [
        "list-linear",
        "shop-bold",
        "close-square-bold",
        "money-bag-bold",
        "cpu-bolt-broken",
        "adhesive-plaster-bold",
        "dollar-bold",
        "chart-square-bold",
        "screencast-2-bold",
        "ranking-bold-duotone",
        "code-square-bold",
        "window-frame-bold-duotone",
        "meditation-round-bold",
        "chat-round-like-bold",
        "calendar-bold-duotone",
        "server-path-line-duotone",
        "settings-minimalistic-bold",
        "documents-line-duotone",
        "home-smile-angle-broken",
        "programming-broken",
        "mailbox-broken",
        "shop-broken",
        "square-top-down-broken",
        "documents-broken",
        "iphone-broken",
        "global-broken",
        "printer-2-broken",
        "document-broken",
        "square-top-down-linear",
        "close-circle-broken",
        "double-alt-arrow-up-bold",
        "sledgehammer-broken"
    ],
    mdi: [
        "timeline-clock-outline",
        "timeline-clock",
        "close",
        "mail",
        "facebook-box",
        "youtube",
        "linkedin",
        "dev-to",
        "instagram",
        "gmail",
        "coffee",
        "white-balance-sunny",
        "moon-waning-crescent",
        "github",
    ],
    iconamoon: ["home-duotone"],
    "fluent-mdl2": ["blog"],
    pajamas: ["project"],
    ic: ["outline-play-arrow"],
    logos: [
        "vue",
        "nuxt-icon",
        "nodejs-icon",
        "typescript-icon",
        "tailwindcss-icon",
        "windi-css",
        "sass",
        "figma",
        "bootstrap",
        "unocss",
        "codeigniter-icon",
        "laravel",
        "postgresql",
        "firebase",
        "phpstorm",
        "webstorm",
        "google-gmail",
    ],
    ri: ["reactjs-line"],
    devicon: ["angular", "laravel", "git", "vscode"],
    "skill-icons": [
        "electron",
        "django",
        "nextjs-dark",
        "nuxtjs-dark",
        "javascript",
        "html",
        "css",
        "php-dark",
        "python-dark",
        "ruby",
        "java-dark",
        "golang",
        "mysql-dark",
        "mongodb",
        "supabase-light",
        "vercel-dark",
        "linkedin",
    ],
    raphael: ["parent"],
    "simple-icons": ["laragon", "kofi"],
    la: ["facebook", "youtube", "linkedin", "dev", "instagram"],
    fluent: ["mail-16-regular"],
    ph: ["code-fill"],
    "emojione-v1": ["laptop-computer"],
};

// to avoid duplications
export default Object.fromEntries(
    Object.entries(icons).map(([category, iconSet]) => [category, Array.from(new Set(iconSet))])
);
