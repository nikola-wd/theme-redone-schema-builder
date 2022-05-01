<script>
  import Counter from './lib/Counter.svelte'
  import Builder from './components/Builder.svelte'
  import Schema from './components/Schema.svelte'
</script>

<div class="theme-redone-schema-builder-wrap">
  <Builder />
  <div class="result">
    <Schema />
  </div>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }


  .theme-redone-schema-builder-wrap {
    display: flex;
    box-shadow: 0 0 0 1px red;
    height: 100vh;
  }

  .result {
    background: orange;
    flex: 1;
  }
</style>
