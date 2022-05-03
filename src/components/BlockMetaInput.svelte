<div class="input-wrap">
  <Input {label} {key} bind:value="{value}" />
</div>

<script>
  import { block_meta } from '../stores';
  import Input from './Input.svelte'

  export let label;
  export let key;

  let value = $block_meta[key]

  $: $block_meta[key] = value

</script>