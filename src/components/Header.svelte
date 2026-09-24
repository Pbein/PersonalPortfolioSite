<script>
  import Icon from "./Icon.svelte";
  import { links } from "../lib/content.js";

  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-8 flex items-center justify-between border border-solid " +
    (y > 0
      ? "py-4 bg-slate-950 border-violet-950"
      : "py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <b class="font-bold poppins">Philip</b> Bein
  </h1>
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab}
      <a href={tab.link} class="duration-200 hover:text-violet-400">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <a
    href={links.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
    class="mr-4 text-slate-400 hover:text-violet-400 duration-200"
  >
    <Icon name="github" size={20} />
  </a>
  <a
    href="#connect"
    class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
  >
    <div
      class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
    />
    <h4 class="relative z-9">Get in touch</h4>
  </a>
</header>
