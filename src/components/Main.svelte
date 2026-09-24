<script>
  import Step from "./Step.svelte";
  import Icon from "./Icon.svelte";
  import QrCard from "./QrCard.svelte";
  import { links, mailto, projects, building } from "../lib/content.js";
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
        Software <span class="poppins text-violet-400">Engineer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        I build <span class="text-violet-400">systems</span> end to end — simulation
        engines,<br class="hidden sm:inline" /> APIs, automation, and the infrastructure
        they run on.
      </p>
      <p class="text-base sm:text-lg text-slate-400">
        Most of it lives on a <span class="text-violet-400">Raspberry Pi 5</span> I
        maintain myself.
      </p>
      <div
        class="flex flex-wrap items-center justify-center lg:justify-start gap-4"
      >
        <a
          class="blueShadow text-base sm:text-lg md:text-xl poppins
            relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950
            cursor-pointer"
          href="#projects"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 class="relative z-9">See my work &rarr;</h4>
        </a>
        <a
          class="text-base sm:text-lg md:text-xl poppins px-6 py-3 rounded-full
            border border-solid border-violet-700 hover:border-violet-400 duration-200"
          href="#connect"
        >
          Get in touch
        </a>
        <QrCard />
      </div>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <picture>
        <source srcset="images/profile-main.webp" type="image/webp" />
        <!-- No width/height attributes: they act as presentational size hints and,
             with object-cover, crop this portrait image inside a landscape box. -->
        <img
          src="images/profile-main.png"
          alt="Illustrated portrait of Philip Bein"
          fetchpriority="high"
          class="object-cover z-[2] max-h-[70vh]"
        />
      </picture>
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of the things I've built.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      {#each projects as project}
        <Step step={project}>
          <p>{@html project.body}</p>
        </Step>
      {/each}
    </div>
    <!-- Showcase figure: the one project card with something worth looking at.
         Framed in the same violet-border language as the cards above so it reads
         as part of the same set rather than a pasted-in screenshot. -->
    <figure class="flex flex-col gap-4 -mt-10">
      <div class="relative mx-auto w-full max-w-5xl">
        <div
          aria-hidden="true"
          class="absolute -inset-2 sm:-inset-4 rounded-xl bg-violet-600/20 blur-2xl"
        />
        <div
          class="relative rounded-lg border border-solid border-violet-700 bg-slate-950/60
            p-1 sm:p-2 overflow-hidden hover:border-violet-400 duration-200"
        >
          <picture>
            <source srcset="images/orbitsandbox.webp" type="image/webp" />
            <img
              src="images/orbitsandbox.jpg"
              alt="The OrbitSandbox workbench: a 3-D view of Earth with a planned orbit,
                   three maneuver nodes and two target gates, flanked by vehicle and
                   telemetry panels and a Monte Carlo results readout."
              width="1568"
              height="670"
              loading="lazy"
              decoding="async"
              class="block w-full rounded"
            />
          </picture>
        </div>
      </div>

      <figcaption class="text-center text-sm sm:text-base text-slate-400 max-w-3xl mx-auto">
        <span class="text-violet-400 poppins">OrbitSandbox</span>, live on the Pi — the bundled
        waypoint-chain scenario flown as planned, then dispersed 500 times. Every gate missed,
        and not one run reaches the target volume. Finding that out before anything flies is the
        entire point of the tool.
      </figcaption>
    </figure>

    <p class="text-center text-sm sm:text-base text-slate-400 max-w-2xl mx-auto -mt-12">
      The other two run on hardware in my house, so there's no link to click —
      happy to walk anyone through them.
    </p>
  </section>

  <section id="building" class="py-10 lg:py-16 flex flex-col gap-16">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">Less finished, still fun.</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Currently <span class="poppins text-violet-400">building</span>.
      </h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {#each building as item}
        <div
          class="flex flex-col gap-3 rounded-lg border border-solid border-violet-700/50
            p-6 hover:border-violet-400 duration-200"
        >
          <h4 class="poppins font-medium text-lg sm:text-xl text-violet-400">
            {item.name}
          </h4>
          <p class="text-slate-300 leading-relaxed">{item.blurb}</p>
          {#if item.href}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-fit items-center gap-2 text-sm text-slate-400
                hover:text-violet-400 duration-200"
            >
              <Icon name="github" size={15} />
              Source
            </a>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative
    before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
    after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <p
      class="text-center max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-slate-300"
    >
      ...an engineer who likes the whole stack, not just the part a user sees. Most of
      what I build spans a few layers: a physics or data core, an
      <span class="text-violet-400">API</span> over it, an interface that's honest about
      what the core actually computed, and a
      <span class="text-violet-400">Linux</span> machine somewhere that has to keep the
      whole thing running. Professionally I work on backend services and
      <span class="text-violet-400">systems integration</span> — REST APIs, relational
      data, and the tooling around them.
    </p>

    <p
      class="text-center max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 pt-6"
    >
      Outside of that I keep drifting toward physical and aerospace systems:
      <span class="text-violet-400">orbital mechanics</span>, spacecraft telemetry,
      <span class="text-violet-400">embedded electronics</span>, and a self-directed
      mechatronics program I started in August. I also make
      <span class="text-violet-400">music</span> — and I'd rather ship something small
      that runs than plan something large that doesn't.
    </p>
  </section>

  <section id="connect" class="py-16 lg:py-24 flex flex-col gap-12">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        If something here is worth continuing.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Let's <span class="poppins text-violet-400">talk</span>.
      </h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mx-auto">
      <a
        href={mailto}
        class="flex min-h-[60px] items-center justify-center gap-3 rounded-lg
          border border-solid border-violet-700 px-5 py-4 poppins
          hover:border-violet-400 hover:text-violet-400 duration-200"
      >
        <Icon name="mail" size={20} />
        Email
      </a>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="flex min-h-[60px] items-center justify-center gap-3 rounded-lg
          border border-solid border-violet-700 px-5 py-4 poppins
          hover:border-violet-400 hover:text-violet-400 duration-200"
      >
        <Icon name="linkedin" size={19} />
        LinkedIn
      </a>
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        class="flex min-h-[60px] items-center justify-center gap-3 rounded-lg
          border border-solid border-violet-700 px-5 py-4 poppins
          hover:border-violet-400 hover:text-violet-400 duration-200"
      >
        <Icon name="github" size={19} />
        GitHub
      </a>
    </div>

    <p class="text-center text-sm text-slate-400">
      The email button opens your mail app with the basics already filled in.
    </p>
  </section>
</main>
