<script>
  // Inline SVG icons. Replaces the Font Awesome CDN stylesheet so the page
  // renders without waiting on a third-party request.
  export let name;
  export let size = 24;
  export let stroke = 1.6;

  const brands = ["github", "linkedin"];
  $: isBrand = brands.includes(name);
</script>

{#if isBrand}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    {#if name === "github"}
      <path
        d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8 0-.7 0-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
      />
    {:else if name === "linkedin"}
      <path
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0Z"
      />
    {/if}
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width={stroke}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {#if name === "board"}
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
      <path d="M13 13h4M13 17h4" />
    {:else if name === "orbit"}
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-28 12 12)" />
      <circle cx="20.2" cy="8.4" r="1.6" fill="currentColor" stroke="none" />
    {:else if name === "bowl"}
      <path d="M3 11h18a9 9 0 0 1-18 0Z" />
      <path d="M8 7c0-1.5 1-2.5 2-3M12 7c0-1.5 1-2.5 2-3M16 7c0-1.5 1-2.5 2-3" />
      <path d="M5 20h14" />
    {:else if name === "mail"}
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
    {:else if name === "qr"}
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM20 14v1M14 20h3M20 19v2" />
    {:else if name === "arrow-up"}
      <path d="M12 19V5M5 12l7-7 7 7" />
    {:else if name === "arrow-right"}
      <path d="M5 12h14M12 5l7 7-7 7" />
    {:else if name === "external"}
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M19 14v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V6.5A1.5 1.5 0 0 1 5 5h5" />
    {:else if name === "code"}
      <path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" />
    {:else if name === "close"}
      <path d="M6 6l12 12M18 6 6 18" />
    {/if}
  </svg>
{/if}
