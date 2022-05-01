<svelte:head>
  {@html github}
</svelte:head>

<div class="schema">
<div class="top">model.json</div>
<div class="schema__inner">
<pre>{'{'}
  "block_meta": {'{'}
    "BLOCK_REGISTER_NAME": "block-name-here",
    "BLOCK_TITLE": "Main Cta",
    "keywords": ["cta", "link"],
    "hasSidebar": false,
    "hasExample": true,
    "hasGlobalSettings": false,
    "grid": "2"
  {'}'},

  "attributes": {'{'}

  {'}'}
{'}'}
</pre>

  <Highlight language={typescript} {code} />
</div>
</div>


<script>
import Highlight from "svelte-highlight";
import github from "svelte-highlight/styles/github";

const code = "const add = (a: number, b: number) => a + b;";
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
</style>