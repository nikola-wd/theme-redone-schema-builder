<Checkbox {label} bind:checked />

<script>
  import { block_meta } from '../stores';
  import Checkbox from './Checkbox.svelte'

  export let label;
  export let key;

  let checked = $block_meta[key]
  $: $block_meta[key] = checked
</script>