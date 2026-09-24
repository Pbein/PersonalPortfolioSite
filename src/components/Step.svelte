<script>
  import Icon from "./Icon.svelte";
  export let step;
</script>

<svelte:element
  this={step.href ? "a" : "div"}
  href={step.href || undefined}
  target={step.href ? "_blank" : undefined}
  rel={step.href ? "noopener noreferrer" : undefined}
  class="p-4 sm:p-6 md:p-8 flex flex-col
gap-4 rounded-lg border border-solid border-violet-700 text-center group
duration-200 hover:border-violet-400 {step.href ? 'cursor-pointer' : ''}"
>
  <div
    class="bg-slate-950 grid place-items-center px-4 text-violet-400
    -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200
    [&>svg]:w-12 [&>svg]:h-12 md:[&>svg]:w-[3.75rem] md:[&>svg]:h-[3.75rem]"
  >
    <Icon name={step.icon} stroke={1.4} />
  </div>
  <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
  <slot />
  {#if step.note}
    <p class="text-sm text-slate-400 mt-auto pt-2">
      {step.note}{#if step.href}&nbsp;&rarr;{/if}
    </p>
  {/if}
</svelte:element>
