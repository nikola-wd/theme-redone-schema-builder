<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.5.0/prism-atom-dark.min.css" rel="stylesheet" />
</svelte:head>

<div class="schema">
<div class="top">model.json</div>
<div class="schema__inner">

<pre>
  {@html Prism.highlight(code, Prism.languages['javascript'])}
</pre>

</div>
</div>


<script>
import Prism from 'prismjs';
import { block_meta } from '../stores';

const code = `
  {
  "block_meta": {
    "BLOCK_REGISTER_NAME": "${$block_meta.BLOCK_REGISTER_NAME}",
    "BLOCK_TITLE": "${$block_meta.BLOCK_TITLE}",
    "keywords": ${JSON.stringify($block_meta.keywords)},
    "hasSidebar": ${JSON.stringify($block_meta.hasSidebar)},
    "hasExample": ${JSON.stringify($block_meta.hasExample)},
    "hasGlobalSettings": ${JSON.stringify($block_meta.hasGlobalSettings)},
    ${$block_meta.grid ? '"grid":' + $block_meta.grid : ''}
  },

  "attributes": {}
}
`;
</script>

<style scoped>
  .schema {
    position: relative;
    height: 60%;
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