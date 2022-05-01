<div class="input-wrap">
  <div class="label">{label}</div>
  <input 
    type="text" 
    class="input" 
    bind:value={$block_meta[key]}

  />
  {$block_meta[key]}
</div>

<script>
  import { block_meta } from '../stores';

  export let label;
  export let key;

  const handleUpdate = e => {
    const newObj = {...block_meta}
    newObj[key] = e.target.value
    $block_meta = newObj
  }
</script>

<style scoped>
  .input {
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 10px;
    background: #fff;
    color: #222;
  }

  .input-wrap .label {
    margin-bottom: 6px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  .input-wrap {
    margin-bottom: 20px;
  }
</style>