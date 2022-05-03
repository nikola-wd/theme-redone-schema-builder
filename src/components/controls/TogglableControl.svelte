<div>
  <i>{label}<i>
  <div class="wrap">
    <Checkbox 
      bind:checked
      --display="inline-flex"
      on:change
    />
    {#if checked}
      <slot />
    {:else}
      <div class="null" />
    {/if}
  </div>
</div>

<script>
  import Checkbox from '../Checkbox.svelte'
  
  export let checked
  export let label
</script>


<style>
  div {
    margin-bottom: 10px;
  }

  i {
    display: block;
    margin-bottom: 6px;
  }

  .wrap {
    display: flex;
    width: 100%;
  }

  .null {
    width: 100%;
    height: 40px;
    background: #cecece;
    cursor: not-allowed;
    border-radius: 4px;
  }
</style>