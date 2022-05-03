<div class="input-wrap">
  <div class="label">{label}</div>
  <input 
    type="text" 
    class="input" 
    bind:value
  />
</div>

<script>
  import { attributes } from '../stores';

  export let id
  export let label;
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


  // const handleUpdate = (e) => {
  //   const coppiedAttrs = $attributes
  //   console.log(e.target.value)
  //   coppiedAttrs[id][key] = e.target.value

  //   $attributes = coppiedAttrs
  // }
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