<script setup lang="ts">
const projects: Array<{
    logo: string;
    description: string;
    url: string;
    name: string;
    github?: string;
    shop?: string;
    img?: string;
}> = [
    {
        logo: "https://www.believersword.com/_nuxt/believers-sword.7fcefc1c.svg",
        name: "Believers Sword",
        description: "A Bible Reading App for Believers who likes to study the Bible.",
        url: "https://www.believersword.com/",
        img: "https://i.imgur.com/p1JAvW2.png",
    },
    {
        logo: "https://fam-tree.brojenuel.com/assets/Logo-d128d310.svg",
        name: "Fams Tree",
        description: "Create Family tree for preserving heritage, and connecting family.",
        url: "https://fam-tree.brojenuel.com/",
        img: "https://i.imgur.com/M5lBO6E.png",
    },
    {
        logo: "https://camo.githubusercontent.com/18c3fe50597afdc7a3eeafc92ee4ddffa88ff679be10a977f171a13736e183b2/68747470733a2f2f66616365626f6f6b6272616e642e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30342f665f6c6f676f5f5247422d4865782d426c75655f3531322e706e67",
        name: "Facebook Clone",
        description: "Facebook clone template for your next social media project.",
        url: "https://facebook-clone-nu-ecru.vercel.app/",
        shop: "https://www.buymeacoffee.com/brojenuel/e/165281",
        img: "https://i.imgur.com/Yx7DRz0.png",
    },
];
</script>
<template>
    <div id="personal-projects-area" class="w-full max-w-1200px mx-auto px-10px pt-15">
        <div class="flex md:flex-row flex-col items-center pb-3">
            <div class="flex items-center">
                <div class="w-full max-w-600px lg:max-w-700px mx-auto mb-20px basis-1/2 flex items-center">
                    <div class="px-20px lg:text-8xl md:text-7xl text-6xl">💪</div>
                    <div class="text-left">
                        <h2 class="lg:text-5xl lg:text-4xl sm:text-3xl text-2xl w-auto whitespace-nowrap">
                            My Personal
                        </h2>
                        <h2 class="lg:text-6xl font-900 text-4xl whitespace-nowrap flex">
                            <span>Projects</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="px-3">
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
                :key="project.url"
                class="rounded-lg flex flex-col gap-5 justify-center relative overflow-hidden group"
            >
                <NuxtImg
                    class="transform scale-100 group-hover:scale-105 transition-all"
                    :src="project.img"
                    width="700"
                    height="700"
                    format="webp"
                    loading="lazy"
                />
                <div
                    class="absolute -bottom-300px group-hover:bottom-0 transition-all m-3 p-2 rounded-md overflow-hidden text-[var(--light)] z-5"
                >
                    <div class="flex items-center gap-2">
                        <h3 class="text-lg font-bold">{{ project.name }}</h3>
                        <div class="flex items-center">
                            <NuxtLink
                                :href="project.url"
                                target="_blank"
                                class="hover:bg-gray-900 rounded-md flex items-center p-1"
                                title="Visit Link"
                            >
                                <span class="icon--solar icon--solar--square-top-down-linear text-2xl"></span>
                            </NuxtLink>
                            <NuxtLink
                                v-if="project.shop"
                                :href="project.url"
                                target="_blank"
                                class="hover:bg-gray-900 rounded-md flex items-center p-1"
                                :aria-label="`${project.name} - shop`"
                                title="Get it On Shop"
                            >
                                <span class="icon--solar icon--solar--shop-broken text-2xl"></span>
                            </NuxtLink>
                            <NuxtLink
                                v-if="project.github"
                                :href="project.github"
                                target="_blank"
                                class="hover:bg-gray-900 rounded-md flex items-center p-1"
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
                        background: linear-gradient(180deg, rgba(36, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
                    "
                ></div>
            </div>
        </div>
    </div>
</template>