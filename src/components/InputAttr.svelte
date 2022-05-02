<div class="input-wrap">
  <div class="label">{label}</div>
  <input 
    type="text" 
    class="input" 
    bind:value="{$attributes[id][key]}"
    on:change="{handleUpdate}"
  />
  {id}
  {key}
  <!-- {JSON.stringify(value)} -->
</div>

<script>
  import { attributes } from '../stores';

  export let id
  export let label;
  export let key;
  export let onlyKey = false


  const handleUpdate = (e) => {
    const coppiedAttrs = $attributes
    coppiedAttrs[id][key] = e.target.value

    $attributes = coppiedAttrs
  }
</script>

<style scoped>
  .input {
    box-sizing: border-box;
    border: 0;
    border-radius: 4px;
    height: 40px;
    width: 100%;
    padding: 10px;
    background: #fff;
    color: #222;
    border: 1px solid #222;
  }

  .input-wrap .label {
    margin-bottom: 6px;
    color: #222;
    font-size: 14px;
    font-weight: 600;
  }

  .input-wrap {
    margin-bottom: 10px;
  }
</style>