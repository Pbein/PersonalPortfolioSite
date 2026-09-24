<script>
  import Icon from "./Icon.svelte";
  import { site } from "../lib/content.js";

  let open = false;

  function show() {
    open = true;
  }
  function hide() {
    open = false;
  }
  function onKey(e) {
    if (e.key === "Escape") hide();
  }
</script>

<svelte:window on:keydown={onKey} />

<button
  type="button"
  on:click={show}
  aria-haspopup="dialog"
  aria-label="Show QR code for philipbein.com"
  title="Show QR code"
  class="grid place-items-center h-12 w-12 rounded-full border border-solid
    border-violet-700 text-violet-400 hover:border-violet-400 duration-200"
>
  <Icon name="qr" size={20} />
</button>

{#if open}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="fixed inset-0 z-[60] grid place-items-center bg-slate-950/90 p-6 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-label="QR code for philipbein.com"
    on:click={hide}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="relative flex w-full max-w-sm flex-col items-center gap-5 rounded-2xl bg-white p-6 shadow-2xl"
      on:click|stopPropagation
    >
      <button
        type="button"
        on:click={hide}
        aria-label="Close"
        class="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900 duration-200"
      >
        <Icon name="close" size={18} />
      </button>

      <img
        src="/qr/philipbein-qr.svg"
        alt="QR code linking to philipbein.com"
        width="260"
        height="260"
        class="h-auto w-full max-w-[260px]"
      />
      <div class="text-center">
        <p class="poppins text-lg font-semibold text-slate-900">{site.name}</p>
        <p class="text-sm text-slate-500">philipbein.com</p>
      </div>
    </div>
  </div>
{/if}
