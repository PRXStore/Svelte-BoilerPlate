<script>
  import { useNuiEvent } from '../utils/useNuiEvent';
  import { fetchNui } from '../utils/fetchNui';
  import { onMount } from 'svelte';
  import { visibility } from '../store/stores';

  let isVisible;

  visibility.subscribe((visible) => {
    isVisible = visible;
  });

  useNuiEvent('setVisible', (visible) => {
    visibility.set(visible);
  });

  onMount(() => {
    const keyHandler = (e) => {
      if (isVisible && ['Escape'].includes(e.code)) {
        fetchNui('hideUI');
        visibility.set(false);
      }
    };

    window.addEventListener('keydown', keyHandler);

    return () => window.removeEventListener('keydown', keyHandler);
  });
</script>

<main>
  {#if isVisible}
    <slot />
  {/if}
</main>
