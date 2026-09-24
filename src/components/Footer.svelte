<script>
  import { site } from "../lib/content.js";

  const year = new Date().getFullYear();
</script>

<!-- Deliberately sparse: the Connect section above carries the real links, and the
     floating back-to-top button lives in this corner. -->
<footer class="mt-auto px-8 pb-10 pt-4">
  <p class="text-sm text-slate-500">
    © {year} {site.name}
  </p>
</footer>
