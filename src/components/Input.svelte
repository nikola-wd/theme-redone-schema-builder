<div>
  {#if label}
    <label>{label}</label>
  {/if}
  <input 
    type="text" 
    bind:value
  />
</div>

<script>
  export let label;
  export let value
</script>

<style>
  input {
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

  label {
    display: block;
    margin-bottom: 6px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  div {
    width: 100%;
    margin-bottom: 10px;
  }
</style>