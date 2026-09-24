// Single source of truth for everything the public site says.
// Edit here, not in the components.

export const site = {
  url: "https://philipbein.com",
  name: "Philip Bein",
  role: "Software Engineer",
  description:
    "Philip Bein — software engineer. Simulation engines, APIs, automation, and the self-hosted Linux infrastructure underneath them.",
};

export const links = {
  email: "philipbein10697@gmail.com",
  linkedin: "https://www.linkedin.com/in/philip-bein-012819128/",
  github: "https://github.com/Pbein",
};

// --- Conference prefill -----------------------------------------------------
// One tap opens the visitor's mail app with this already filled in.
// After the summit, either blank these two strings or swap in something generic.
const mailSubject = "Hello from the New Mexico Tech Summit";
const mailBody = `Hi Philip,

We met at the New Mexico Tech Summit.

Who I am:
What we talked about:
What I'm working on:

`;

export const mailto =
  `mailto:${links.email}` +
  `?subject=${encodeURIComponent(mailSubject)}` +
  `&body=${encodeURIComponent(mailBody)}`;

// Card bodies are trusted, hand-authored markup (never user input), rendered
// with {@html} so technology names can carry the violet accent.
export const projects = [
  {
    name: "OrbitSandbox",
    icon: "orbit",
    href: "/orbitsandbox",
    body: `An interactive 3-D workbench for planning a spacecraft maneuver sequence — and then
      finding out how often that plan actually works. The authoritative physics lives in a
      <strong class="text-violet-400">Python</strong> core; the browser is only a viewer for
      what the core computed. <strong class="text-violet-400">Lambert</strong> and porkchop
      sweeps scan departures, <strong class="text-violet-400">SLSQP</strong> optimizes the
      burn sequence, an <strong class="text-violet-400">extended Kalman filter</strong>
      handles navigation, and <strong class="text-violet-400">Monte Carlo</strong> dispersion
      runs over all of it. That last layer is the point: fly the bundled scenario exactly as
      planned and 500 dispersed runs reach the target volume zero times. Optimizing threads all
      three gates for less propellant — and closing the gap after that means trading a frozen
      burn sequence for a guidance policy.`,
    note: "Read the write-up",
  },
  {
    name: "Mission Control",
    icon: "board",
    href: null,
    body: `A single screen that tells me what's actually moving across every project I have
      running. I built it because my status notes went stale within a week — so nothing on
      this board is hand-maintained. It's derived from a ledger of captured work sessions,
      served by a <strong class="text-violet-400">Next.js</strong> frontend over a
      <strong class="text-violet-400">FastAPI</strong> control plane with
      <strong class="text-violet-400">Postgres</strong> and
      <strong class="text-violet-400">Redis</strong>, all in
      <strong class="text-violet-400">Docker</strong> on a
      <strong class="text-violet-400">Raspberry Pi 5</strong>. Scheduled jobs log every exit
      code, so a cron job that quietly dies shows up on the board instead of being noticed
      weeks later.`,
    note: "Running daily on my own network",
  },
  {
    name: "ChompChew",
    icon: "bowl",
    href: "https://www.chompchew.com/",
    body: `Recipe discovery built around dietary restrictions and medical conditions rather than
      the ingredients you happen to have — a search problem where getting it wrong is worse
      than returning nothing. Built with <strong class="text-violet-400">Next.js 15</strong>
      and <strong class="text-violet-400">TypeScript</strong> on
      <strong class="text-violet-400">Supabase</strong> and
      <strong class="text-violet-400">PostgreSQL</strong>, with authentication, an
      <strong class="text-violet-400">OpenAI</strong>-backed discovery flow, and tests in
      <strong class="text-violet-400">Vitest</strong> and
      <strong class="text-violet-400">Playwright</strong>.`,
    note: "Live at chompchew.com",
  },
];

export const building = [
  {
    name: "Mission Systems",
    blurb:
      "A long-run, self-directed program in mechatronics — electronics, embedded firmware, controls, sensing, robotics. Software has been the easy half for a while; this is me working on the other half.",
    href: null,
  },
  {
    name: "Satellite ground-ops simulator",
    blurb:
      "A ground-operations sandbox that generates spacecraft telemetry across power, ADCS, thermal and C&DH, with command-and-control and an operational scripting environment over the top.",
    href: "https://github.com/Pbein/AerospaceHomeLab",
  },
  {
    name: "Signal Lab",
    blurb:
      "Can simple deterministic strategies beat buy-and-hold on the S&P 500, tested rigorously enough to believe the answer? Live capital is capped around $100 — the deliverable is a trustworthy answer, not a profit.",
    href: null,
  },
  {
    name: "Critical Minerals Atlas",
    blurb:
      "Tracking supply and demand fundamentals for critical minerals — the ones with fragile, byproduct-dependent supply and a fast-growing industrial pull. The engineering problem is provenance: scheduled ingestion from financial and government sources, every figure traceable back to a cited source, and history stored point-in-time so a thesis can be checked against what was actually knowable on the day.",
    href: "https://github.com/Pbein/RareEarthResearchAtlas",
  },
];
