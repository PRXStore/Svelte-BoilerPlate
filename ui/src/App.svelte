<script>
  import VisibilityProvider from './providers/VisibilityProvider.svelte';
  import { debugData } from './utils/debugData';

  debugData([
    {
      action: 'setVisible',
      data: true,
    },
  ]);
</script>

<main>
  <VisibilityProvider>

  </VisibilityProvider>
</main>

