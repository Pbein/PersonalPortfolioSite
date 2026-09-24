<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Icon from "../components/Icon.svelte";
  import { site, links } from "../lib/content.js";

  let y = 0;

  const title = `${site.name} — ${site.role}`;
  const ogImage = `${site.url}/og.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    image: ogImage,
    sameAs: [links.linkedin, links.github],
  };

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={site.description} />
  <link rel="canonical" href={site.url} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:url" content={site.url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={site.description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={`${site.name} — ${site.role}`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={site.description} />
  <meta name="twitter:image" content={ogImage} />

  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

<div
  class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm
  sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-0 left-0 w-full duration-200 flex p-10 z-[10]" +
      (y > 0
        ? " opacity-full pointer-events-auto "
        : " pointer-events-none opacity-0 ")}
  >
    <button
      on:click={goTop}
      aria-label="Back to top"
      tabindex={y > 0 ? 0 : -1}
      class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 py-3
        hover:bg-slate-800 cursor-pointer duration-200"
    >
      <Icon name="arrow-up" size={18} />
    </button>
  </div>
  <Header {y} />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} />
