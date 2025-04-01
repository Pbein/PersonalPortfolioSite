<script>
  import Step from "./Step.svelte";

  let steps = [
    { name: "Philip Bein's Web Portfolio", icon: "fa-solid fa-briefcase" },
    { name: "Recipe Finder App", icon: "fa-solid fa-utensils" },
    { name: "Next Project...", icon: "fa-solid fa-diagram-project" },
  ];
</script>

<main class="flex flex-col flex-1 p-8">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi, I'm <span class="poppins text-violet-400">Philip</span> Bein
        <br />
        Front-End
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <!-- <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favorite tech</span> includes JavaScript
        (React or SvelteKit), TailwindCSS, Node.js + Express.js & MongoDB!
      </p> -->
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favorite tech</span> includes
        React, Express,<br /> Vercel, Node.js + Notion & MongoDB!
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins
            relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950
            cursor-pointer"
        href="https://www.linkedin.com/in/philip-bein-012819128/"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <!-- <img src={"images/profile4.png"} alt="Profile Picture" class="object-cover z-[2] max-h-[70vh]"/> -->
      <img
        src={"images/AnimatedProfilePic.png"}
        alt="Profile Picture"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curios to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <!-- <a
      href="#"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play"></i>
      <p>Watch the video</p>
    </a> -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          This very website you're browsing is a <strong class="text-violet-400">SvelteKit + TailwindCSS</strong> portfolio project designed and built by me. It showcases my journey into web development, highlights my current skills, and serves as a launching pad for future creations.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Chomp Chew is a Full Stack <strong class="text-violet-400"
            >React</strong
          >,
          <strong class="text-violet-400">Node.js + Express.js</strong>
          & <strong class="text-violet-400">MongoDB</strong> CRUD application that allows users to swiftly discover a range of recipes and filter based on dietary restrictions.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          I'm currently planning my next project — possibly a small app or utility that solves a personal problem. I’m using this as a chance to dive deeper into <strong class="text-violet-400">frontend development, API integration</strong>, and <strong class="text-violet-400">user-first design</strong>. Stay tuned!
        </p>
      </Step>
    </div>
  </section>
  <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <div class="flex flex-col gap-2 text-center relative 
    before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
    after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
    <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
    <p class="text-center max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-slate-300">
      ...a self-taught front-end developer with a passion for building intuitive and beautiful web experiences. My journey into development started with curiosity and grew into a dedication to mastering tools like <span class="text-violet-400">React</span>, <span class="text-violet-400">SvelteKit</span>, and <span class="text-violet-400">TailwindCSS</span>. I love translating ideas into functional designs that make users smile. Whether it’s crafting responsive interfaces, integrating APIs, or launching full-stack apps, I’m always looking for new challenges and opportunities to grow.
    </p>
    
    <p class="text-center max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 pt-6">
      Outside of coding, I enjoy making music, learning new creative skills, and finding ways to combine tech with real-world impact. I'm currently focused on refining my portfolio and building projects that showcase my ability to create meaningful digital experiences.
    </p>
    
  </section>
</main>
