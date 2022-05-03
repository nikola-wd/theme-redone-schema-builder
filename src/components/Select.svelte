<div>
  <label>{label}</label>
  <select bind:value>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>

<script>
  export let label
  export let value
  export let options
</script>

<style scoped>
  select {
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
    margin-bottom: 6px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  div {
    margin-bottom: 10px;
  }
</style>