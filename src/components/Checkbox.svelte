<div class="input-wrap">
  <div class="label">{label}</div>
  <input 
    type="checkbox" 
    class="checkbox" 
    bind:checked={$block_meta[key]}
   
  />
  {$block_meta[key]}
</div>

<script>
  import { block_meta } from '../stores';

  export let label;
  export let key;

  const handleUpdate = e => {
    const newObj = {...block_meta}
    newObj[key] = !newObj[key]
    $block_meta = newObj
  }
</script>

<style scoped>

</style>