<script lang="ts">
  import FireFont from '../FireFont/FireFont.svelte';

  let { name, bg, fg } = $props();
</script>

<span class="inline-highlight" style:--bg={bg} style:--fg={fg}>
  <FireFont>{name}</FireFont>
</span>

<style lang="scss">
  .inline-highlight {
    display: inline-flex;
    padding: 0rem 0.375rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0.25rem;
    background: var(--bg, #f1f1f1);
    color: var(--fg, black);
    font-family: ABCSans, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    overflow: hidden;
    position: relative;
    border: none;

    // Fallback if no bg color found
    &:not([style*='--bg']) {
      background: #f1f1f1;
      color: black;
      border: 1px solid black;
    }
  }
</style>
