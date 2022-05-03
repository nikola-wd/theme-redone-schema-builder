<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.5.0/prism-atom-dark.min.css" rel="stylesheet" />
</svelte:head>

<div class="schema">
<div class="top">model.json</div>
<div class="schema__inner">

<pre>
  {@html Prism.highlight(codeText, Prism.languages['javascript'])}
</pre>


<pre bind:this={codeWrap}>
{'{'}
  "block_meta": {'{'}
    "BLOCK_REGISTER_NAME": "{$block_meta.BLOCK_REGISTER_NAME}",
    "BLOCK_TITLE": "{$block_meta.BLOCK_TITLE}",
    "keywords": {JSON.stringify($block_meta.keywords.split(', '))},
    "hasSidebar": {JSON.stringify($block_meta.hasSidebar)},
    "hasExample": {JSON.stringify($block_meta.hasExample)},
    "hasGlobalSettings": {JSON.stringify($block_meta.hasGlobalSettings)}{#if $block_meta.grid},{/if}
    {#if $block_meta.grid}"grid": "{$block_meta.grid}"{/if}
  {'}'},

  "attributes": {'{'}
  {#each Object.keys(fields) as entry_id, index (entry_id)}
    {@const field_obj = fields[entry_id]}
    "{field_obj.field_name}": {'{'}
      "field_meta": {'{'}
      {#each Object.entries(field_obj.main_data.field_meta) as [f_k, f_v], f_i (index + '_' + f_i + '_' + f_k)}
        {@const f_t = typeof f_v}
        "{f_k}": {#if f_t === 'string'}"{/if}{f_v}{#if f_t === 'string'}"{/if},
      {/each}
      {'}'}
    {'}'}{#if index < Object.keys(fields).length - 1},
      {''}
    {/if}
  {/each}
  {'}'}

{'}'}

</pre>

</div>
</div>


<script>
import Prism from 'prismjs';
import { block_meta, attributes } from '../stores';

let codeWrap
let codeText = ''
$: fields = $attributes

$: {
  if (codeWrap && $block_meta) {
    codeText = codeWrap.innerHTML
    console.log(codeText)
  }
}


</script>

<style scoped>
  .schema {
    position: relative;
    height: 100%;
    overflow: hidden;
    background: #111;
    font-family: monospace;
    font-size: 16px;
  }

  .schema__inner {
    overflow-y: auto;
    padding: 15px;
    height: 100%;
    padding-top: 40px;  
    color: #fff;
    line-height: 1.5;
  }

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    color: #fff;
    background: rgba(0,0,0, .5);
  }

  pre .token.operator {
    background: transparent !important;
  }
</style>