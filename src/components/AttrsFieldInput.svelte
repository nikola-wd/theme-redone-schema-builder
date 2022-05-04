<Input {label} {key} bind:value />

<script>
  import { attributes } from '../stores';
  import Input from './Input.svelte'

  export let id
  export let label = null;
  export let key;
  export let key1;
  export let key2;


  let value
  if (key2) {
    value = $attributes[id][key][key1][key2]
    console.log('Value: ', value)
  } else if (!key2 && key1) {
    value = $attributes[id][key][key1]
  } 
  else {
    value = $attributes[id][key]
  }


  $: {
    if (key2) {
      $attributes[id][key][key1][key2] = value
    } else if (!key2 && key1) {
      $attributes[id][key][key1] = value
    } else {
      $attributes[id][key] = value
    }
  }
</script>