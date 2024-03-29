<script setup lang="ts">
const projects: Array<{
    logo?: string;
    description: string;
    url: string;
    name: string;
    github?: string;
    shop?: string;
    img?: string;
}> = [
    {
        name: "Believers Sword",
        description: "A Bible Reading App for Believers who likes to study the Bible.",
        url: "https://www.believersword.com/",
        img: "https://i.imgur.com/p1JAvW2.png",
    },
    {
        name: "Fams Tree",
        description: "Create Family tree for preserving heritage, and connecting family.",
        url: "https://fam-tree.brojenuel.com/",
        img: "https://i.imgur.com/M5lBO6E.png",
    },
    {
        name: "Facebook Clone",
        description: "Facebook clone template for your next social media project.",
        url: "https://facebook-clone-nu-ecru.vercel.app/",
        shop: "https://www.buymeacoffee.com/brojenuel/e/165281",
        img: "https://i.imgur.com/Yx7DRz0.png",
    },
    {
        name: "Laravel MongoDB Docs",
        description:
            "This package adds functionalities to the Eloquent model and Query builder for MongoDB, using the original Laravel API. This library extends the original Laravel classes, so it uses exactly the same methods.",
        url: "https://laravel-mongodb.vercel.app",
        img: "/img/work/laravel mongodb.png",
    },
    {
        name: "Portfolio Website",
        description:
            "A Portfolio website for Kate Awisan as a Data Entry Freelance, Customer Service Associate, Social Media Assistant, And Data Entry Role.",
        url: "https://kateawisan.netlify.app",
        img: "/img/work/kate portfolio.png",
    },
    {
        name: "GIF Search Engine",
        description: "Search The GIF in the internet using GIF search.",
        url: "https://gif-find.netlify.app",
        img: "/img/work/gif search.png",
    },
];

function clickLink(link: string) {
    window.open(link, "_blank");
}
</script>
<template>
    <div id="personal-projects-area" class="w-full max-w-1100px mx-auto px-10px pt-25">
        <div class="px-3 pb-5">
            <span class="lg:text-size-24px text-size-20px font-bold">My Personal Projects</span>
            <div>
                I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in
                different industries and verticals. Eventually, I decided that it would be a fun challenge to try
                designing and building my own.
                <div class="inline-block">
                    <NuxtLink
                        to="/my-work"
                        class="border px-2 py-1px rounded-full flex items-center gap-1 hover:text-[var(--primary)] !hover:border-[var(--primary)] hover:underline dark:border-white"
                    >
                        <span class="icon--solar icon--solar--programming-broken"></span>
                        Check More Projects
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div
                v-for="project in projects"
                :href="project.url"
                target="_blank"
                :key="project.url"
                :title="'Visit ' + project.name"
                class="rounded-lg flex flex-col gap-5 justify-center relative overflow-hidden group hover:cursor-pointer"
                @click="clickLink(project.url)"
            >
                <NuxtImg
                    class="transform scale-100 group-hover:scale-105 transition-all w-full h-full"
                    :src="project.img"
                    width="300"
                    height="300"
                    format="webp"
                    loading="lazy"
                    :alt="`BroJenuel - ${project.name}`"
                />
                <div
                    class="absolute -bottom-300px group-hover:bottom-0 transition-all m-3 p-2 rounded-md overflow-hidden text-[var(--light)] z-5"
                >
                    <div class="flex items-center gap-2">
                        <h3 class="text-lg font-bold">{{ project.name }}</h3>
                        <div class="flex items-center">
                            <NuxtLink
                                v-if="project.shop"
                                :href="project.url"
                                target="_blank"
                                class="hover:bg-gray-50 hover:text-gray-900 rounded-md flex items-center p-1"
                                :aria-label="`${project.name} - shop`"
                                title="Get it On Shop"
                            >
                                <span class="icon--solar icon--solar--shop-broken text-2xl"></span>
                            </NuxtLink>
                            <NuxtLink
                                v-if="project.github"
                                :href="project.github"
                                target="_blank"
                                class="hover:bg-gray-50 hover:text-gray-900 rounded-md flex items-center p-1"
                                :aria-label="`${project.name} - shop`"
                                title="See Source Code"
                            >
                                <span class="icon--solar icon--solar--shop-broken text-2xl"></span>
                            </NuxtLink>
                        </div>
                    </div>
                    <p>{{ project.description }}</p>
                </div>
                <div
                    class="w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all duration-400 z-4"
                    style="
                        background: rgb(36, 0, 0);
                        background: linear-gradient(180deg, rgba(36, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
                    "
                ></div>
            </div>
        </div>
    </div>
</template>
