<script>
  import Icon from "../../components/Icon.svelte";
  import { site } from "../../lib/content.js";

  const title = "OrbitSandbox — Philip Bein";
  const description =
    "A 3-D orbital mission-planning, guidance and Monte Carlo workbench. A Python physics core, a browser that only ever draws what the core computed, and a Raspberry Pi to run it on.";

  const facts = [
    { k: "Core", v: "Python · NumPy · SciPy" },
    { k: "API", v: "FastAPI" },
    { k: "Viewer", v: "React · three.js · TypeScript" },
    { k: "Editor", v: "Monaco" },
    { k: "Runs on", v: "Docker, Raspberry Pi 5" },
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={`${site.url}/orbitsandbox`} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`${site.url}/orbitsandbox`} />
  <meta property="og:image" content={`${site.url}/images/os-workbench.jpg`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={`${site.url}/images/os-workbench.jpg`} />
</svelte:head>

<main class="flex flex-col flex-1 p-8">
  <!-- ─────────────────────────── HEADER ─────────────────────────── -->
  <header class="max-w-4xl mx-auto w-full pt-6 sm:pt-10 flex flex-col gap-6">
    <a
      href="/#projects"
      class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 duration-200 w-fit"
    >
      <span class="rotate-180 inline-flex"><Icon name="arrow-right" size={15} /></span>
      Back to projects
    </a>

    <div class="flex flex-col gap-3">
      <p class="poppins text-sm sm:text-base text-violet-400 tracking-wide uppercase">
        Project write-up
      </p>
      <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Orbit<span class="poppins text-violet-400">Sandbox</span>
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed">
        An interactive 3-D workbench for planning a spacecraft maneuver sequence — and then
        finding out how often that plan actually works.
      </p>
    </div>

    <dl class="flex flex-wrap gap-x-8 gap-y-3 border-y border-solid border-violet-700/40 py-4">
      {#each facts as f}
        <div class="flex flex-col gap-0.5">
          <dt class="text-xs uppercase tracking-wider text-slate-500">{f.k}</dt>
          <dd class="text-sm text-slate-300">{f.v}</dd>
        </div>
      {/each}
    </dl>
  </header>

  <!-- ─────────────────────────── HERO FIGURE ─────────────────────────── -->
  <figure class="max-w-6xl mx-auto w-full flex flex-col gap-4 pt-10 sm:pt-14">
    <div class="relative">
      <div
        aria-hidden="true"
        class="absolute -inset-2 sm:-inset-4 rounded-xl bg-violet-600/20 blur-2xl"
      />
      <div
        class="relative rounded-lg border border-solid border-violet-700 bg-slate-950/60 p-1 sm:p-2 overflow-hidden"
      >
        <picture>
          <source srcset="/images/os-workbench.webp" type="image/webp" />
          <img
            src="/images/os-workbench.jpg"
            alt="The OrbitSandbox workbench: vehicle mass budget and three maneuver nodes on the
                 left, a 3-D Earth with the planned orbit, two gates and a success volume in the
                 centre, and a live telemetry column on the right."
            class="block w-full rounded"
          />
        </picture>
      </div>
    </div>
    <figcaption class="text-sm text-slate-400 text-center max-w-3xl mx-auto">
      The waypoint-chain scenario as it ships. Three gates, a 40&nbsp;km success volume, and a
      plan that misses all three — deliberately.
    </figcaption>
  </figure>

  <!-- ─────────────────────────── ARTICLE ─────────────────────────── -->
  <article class="max-w-3xl mx-auto w-full flex flex-col gap-16 sm:gap-20 py-16 sm:py-24">

    <!-- 1 ─ The one rule -->
    <section class="flex flex-col gap-5">
      <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        The <span class="poppins text-violet-400">one rule</span>
      </h2>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        The renderer never integrates anything. Every spacecraft position on screen came out of
        <code class="text-violet-400">propagator.py</code>; the browser interpolates between
        precomputed samples and draws them. That constraint is the whole architecture — the
        moment a viewer starts doing its own physics, you have two sources of truth and no way
        to tell which one is lying.
      </p>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        There is exactly one deliberate exception, and it barely counts: the viewer evaluates
        celestial-body positions itself from the closed-form circular ephemeris parameters the
        engine sends. Nothing is integrated — it is the same analytic expression the engine
        evaluates. Doing it client-side stops a 500-run Monte&nbsp;Carlo payload from carrying
        half a million redundant body positions.
      </p>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        The split falls out of the workload. SLSQP over a dozen variables where each objective
        evaluation is a full mission integration, thousands of dispersed trials, 6×6 covariance
        propagation — that is NumPy and SciPy work. three.js is a rendering library, and it is
        used as one. The FastAPI layer is deliberately thin: parse, call the engine, serialise.
        No simulation logic lives in it.
      </p>
    </section>

    <!-- 2 ─ A mission is a text file -->
    <section class="flex flex-col gap-5">
      <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        A mission is a <span class="poppins text-violet-400">text file</span>
      </h2>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        Scenarios are written in a small DSL that parses to exactly the same object the JSON API
        accepts, so the language adds no capability — it just removes punctuation and adds units.
        Errors carry a line number and surface in the editor as you type.
      </p>
      <pre class="rounded-lg border border-solid border-violet-700/50 bg-slate-950/60 p-4 sm:p-5 overflow-x-auto text-sm leading-relaxed text-slate-300"><code>{`mission "Translunar Flyby"
  system    earth-moon
  duration  7 d

vehicle
  dry_mass  2200 kg
  thrust    45 kN
  isp       320 s

maneuver TLI
  at     3688.5 s
  frame  vnb
  dv     [3171.03, -55.87, 77.51] m/s

target MoonFlyby
  centre  body Moon
  sphere  5000 km
  after   TLI`}</code></pre>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        Units are mandatory. <code class="text-violet-400">dv 3171</code> is an error, not a
        guess — silent unit assumptions are how you lose a spacecraft.
      </p>
    </section>

    <figure class="flex flex-col gap-3 -mx-2 sm:-mx-8 lg:-mx-20">
      <div class="rounded-lg border border-solid border-violet-700/60 bg-slate-950/60 p-1 sm:p-2 overflow-hidden">
        <picture>
          <source srcset="/images/os-script.webp" type="image/webp" />
          <img
            src="/images/os-script.jpg"
            alt="The script editor open beside the 3-D view, showing the waypoint-chain mission
                 file with syntax highlighting, line numbers and a valid badge."
            loading="lazy"
            class="block w-full rounded"
          />
        </picture>
      </div>
      <figcaption class="text-sm text-slate-400 text-center">
        The editor sits beside the trajectory it describes. Edit, validate, fly.
      </figcaption>
    </figure>

    <!-- 3 ─ The physics -->
    <section class="flex flex-col gap-5">
      <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        Seven numbers, and the <span class="poppins text-violet-400">terms people drop</span>
      </h2>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        The state is position, velocity and mass — seven numbers. Mass lives <em>in</em> the
        state rather than as bookkeeping on the side, because thrust acceleration is F/m and m
        changes by tens of percent during a large burn. Treating mass as constant over a burn is
        the most common way to get Δv accounting subtly wrong.
      </p>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        Third bodies contribute <strong class="text-violet-400">two</strong> terms, not one. The
        frame is centred on the primary rather than the barycentre, so the Moon accelerates the
        Earth too, and that acceleration has to be subtracted back off. Dropping the indirect
        term is a classic bug worth hundreds of kilometres over a translunar coast — there is a
        test named after it specifically to catch it.
      </p>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        Oblateness is J₂ only, and the check that it is right is not that the orbit "looks
        precessing." The nodal regression rate has a closed form, and the test compares the
        propagated precession against that formula to within 2%. Wherever a closed-form answer
        exists, it is the test.
      </p>
    </section>

    <!-- 4 ─ Planning the burns -->
    <section class="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
      <div class="flex flex-col gap-5">
        <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
          Finding the <span class="poppins text-violet-400">burns</span>
        </h2>
        <p class="text-base sm:text-lg leading-relaxed text-slate-300">
          A universal-variable Lambert solver and a porkchop sweep over departure date and
          flight time give you a starting guess. SLSQP then moves nine Δv components and three
          timing offsets until every gate is threaded.
        </p>
        <p class="text-base sm:text-lg leading-relaxed text-slate-300">
          In the shipped scenario it threads all three <em>and</em> spends less propellant than
          the plan it started from — 648&nbsp;m/s against 676 — ending 18.8&nbsp;km from the
          centre of a 40&nbsp;km sphere. Comfortably inside. Solved.
        </p>
        <p class="text-base sm:text-lg leading-relaxed text-slate-300">
          The translunar case shows why the layers exist. The impulsive two-body answer proposes
          a 3,105&nbsp;m/s injection; fly it as a real 284-second finite burn under n-body
          gravity and you miss the Moon by 247,000&nbsp;km and fall back into the Earth. A good
          starting point and a bad answer, which is exactly what it is for.
        </p>
      </div>
      <figure class="flex flex-col gap-3 mx-auto md:mx-0">
        <div class="rounded-lg border border-solid border-violet-700/60 bg-slate-950/60 p-1 overflow-hidden">
          <picture>
            <source srcset="/images/os-plan.webp" type="image/webp" />
            <img
              src="/images/os-plan.jpg"
              alt="The plan panel: vehicle mass budget, three maneuver nodes with delta-v
                   sliders, and three targets each marked MISS with the distance short."
              loading="lazy"
              class="block w-[208px] rounded"
            />
          </picture>
        </div>
        <figcaption class="text-xs text-slate-500 text-center max-w-[208px]">
          The plan panel, before optimization.
        </figcaption>
      </figure>
    </section>

    <!-- 5 ─ Monte Carlo -->
    <section class="flex flex-col gap-5">
      <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        Solved is not the same as <span class="poppins text-violet-400">safe</span>
      </h2>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        This is the layer the whole tool exists for. Take that solved plan, disperse the burns
        the way real burns disperse, and fly it 500 times. About 81% of runs succeed. The
        95th-percentile miss is 56&nbsp;km against a 40&nbsp;km radius.
      </p>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        A plan that is exactly right on paper is one bad burn from the edge of the box, and no
        amount of staring at the nominal trajectory would have told you that.
      </p>
    </section>

    <figure class="flex flex-col gap-3 -mx-2 sm:-mx-8 lg:-mx-20">
      <div class="rounded-lg border border-solid border-violet-700/60 bg-slate-950/60 p-1 sm:p-2 overflow-hidden">
        <picture>
          <source srcset="/images/os-montecarlo.webp" type="image/webp" />
          <img
            src="/images/os-montecarlo.jpg"
            alt="A Monte Carlo run in progress: the dispersion arrivals drawn as a band around
                 the orbit, with a results panel reporting probability of success, miss-distance
                 percentiles, delta-v consumed and per-gate hit rates."
            loading="lazy"
            class="block w-full rounded"
          />
        </picture>
      </div>
      <figcaption class="text-sm text-slate-400 text-center max-w-3xl mx-auto">
        Dispersing the <em>shipped</em> plan — the one that already misses on paper — over 500
        runs. Zero reach the target volume, median miss 269&nbsp;km. The panel reports
        percentiles rather than an average on purpose.
      </figcaption>
    </figure>

    <!-- 6 ─ Guidance -->
    <section class="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
      <figure class="flex flex-col gap-3 mx-auto md:mx-0 md:order-none order-last">
        <div class="rounded-lg border border-solid border-violet-700/60 bg-slate-950/60 p-1 overflow-hidden">
          <picture>
            <source srcset="/images/os-results.webp" type="image/webp" />
            <img
              src="/images/os-results.jpg"
              alt="The results panel: probability of success, a Wilson confidence interval,
                   miss-distance percentiles, delta-v consumed and per-gate hit rates."
              loading="lazy"
              class="block w-[184px] rounded"
            />
          </picture>
        </div>
        <figcaption class="text-xs text-slate-500 text-center max-w-[184px]">
          Percentiles, a Wilson interval, and how it failed.
        </figcaption>
      </figure>
      <div class="flex flex-col gap-5">
        <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
          A <span class="poppins text-violet-400">policy</span>, not a sequence
        </h2>
        <p class="text-base sm:text-lg leading-relaxed text-slate-300">
          Switch guidance from open loop to trim and the vehicle measures where it actually is
          twenty minutes after each burn, then flies a correction. Success goes to 100% — a
          99.2–100% interval — and the 95th-percentile miss drops from 56&nbsp;km to 20. It
          costs about 58&nbsp;m/s.
        </p>
        <p class="text-base sm:text-lg leading-relaxed text-slate-300">
          That is the point of the whole exercise. One number measures the reliability of a
          frozen sequence of burns; the other measures the reliability of a
          <em>policy</em>. They are different questions, they have different answers, and the
          difference is worth about 60&nbsp;m/s.
        </p>
        <p class="text-base sm:text-lg leading-relaxed text-slate-300">
          Behind it: ground stations, a state-transition matrix, process noise and an extended
          Kalman filter — because a correction is only as good as your estimate of where you
          are.
        </p>
      </div>
    </section>

    <!-- 7 ─ What it does not model -->
    <section class="flex flex-col gap-5">
      <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        What it <span class="poppins text-violet-400">doesn't</span> model
      </h2>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        Saying this plainly matters more than listing what it does. There is no solar radiation
        pressure, which matters for high area-to-mass vehicles. The gravity field is J₂ and
        nothing else — no J₃, no tesserals, no lunar mascons. There are no attitude dynamics:
        the vehicle points where it is told, instantly, for free, which is not how attitude
        control works or what it costs.
      </p>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        The atmosphere is an exponential toy over a co-rotating gas. It is right to within a
        factor of a few at 200&nbsp;km and wrong by orders of magnitude during a solar storm.
        It should not be used to predict a re-entry date, and the docs say so in those words.
      </p>
    </section>

    <!-- 8 ─ Running it -->
    <section class="flex flex-col gap-5">
      <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
        Where it <span class="poppins text-violet-400">runs</span>
      </h2>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        A one-container Docker stack on a Raspberry&nbsp;Pi&nbsp;5, brought up and down on
        demand from my desktop over SSH. It sits on the same machine as the rest of my
        self-hosted work, which is why there is no public link on this page — the screenshots
        above are the tour. The Monte Carlo run shown took 27.5 seconds of Pi compute for 500
        dispersed trials.
      </p>
      <p class="text-base sm:text-lg leading-relaxed text-slate-300">
        If any of this is interesting to you, I would happily walk you through it live.
      </p>
      <div class="flex flex-wrap gap-4 pt-2">
        <a
          class="blueShadow text-base sm:text-lg poppins relative overflow-hidden px-6 py-3 group
            rounded-full bg-white text-slate-950 cursor-pointer"
          href="/#connect"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 class="relative z-9">Get in touch &rarr;</h4>
        </a>
        <a
          class="text-base sm:text-lg poppins px-6 py-3 rounded-full border border-solid
            border-violet-700 hover:border-violet-400 duration-200"
          href="/#projects"
        >
          Back to projects
        </a>
      </div>
    </section>
  </article>
</main>
