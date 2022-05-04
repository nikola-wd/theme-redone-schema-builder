<div class="latte">
<div class="top">view.latte</div>
<div class="inner">
<pre>
{#each Object.keys($attributes) as entry_id, index (entry_id)}
  {@const field_obj = $attributes[entry_id]}
  {@const field_type = field_obj.main_data.field_meta.type}
  {@const f_v = Object.keys(field_obj.main_data.default)[0]}
  <div class="field-block">
    {#if field_type !== 'repeater' && field_type !== 'cta'}
    {'{'}${field_obj.field_name}['{f_v}']{'}'}
    {/if}
  </div>
{/each}
</pre>
</div>
</div>

<script>
  import { attributes } from '../stores';

</script>

<style>
  .latte {
    position: relative;
    height: 50%;
    overflow: hidden;
    background: #111;
    border-top: 1px solid #fff;
    font-family: monospace;
    font-size: 16px;
  }

  .inner {
    overflow-y: auto;
    padding: 15px;
    height: 100%;
    padding-top: 40px;  
    color: #fff;
    line-height: 1.5;
  }

    /* width */
  .inner::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .inner::-webkit-scrollbar-track {
    background: #444;
  }

  /* Handle */
  .inner::-webkit-scrollbar-thumb {
    background: yellow;
    border-radius: 8px;
  }

  /* Handle on hover */
  .inner::-webkit-scrollbar-thumb:hover {
    background: orange;
  }

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    color: #fff;
    background: rgba(0,0,0, .9);
  }

  pre {
    display: flex;
    flex-direction: column;
  }

  .field-block {
    line-height: 1;
    /* margin-bottom: 10px; */
  }
</style>