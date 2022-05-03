<div class="dd {closed ? 'closed' : ''}">
  <div 
    class="dd__top" 
    on:click={() => closed = !closed}
  >
    {label}
    <div class="svg-wrap">
      <Chevron />
    </div>
  </div>
  <div class="dd__btm">
    <div class="dd__btm__inner">
      <slot />
    </div>
  </div>
</div>

<script>
  import Chevron from './Chevron.svelte'

  export let label

  let closed = false
</script>


<style>
:global(.dd) {
  border: 1px solid #111;
  border-radius: 4px;
  margin-bottom: 10px;
}
:global(.dd__top) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #cecece;
  background: #111;
  padding: 8px;
  line-height: 1;
  cursor: pointer;
  user-select: none;
}
:global(.dd__top .svg-wrap) {
  border: 1px solid #111;
  padding: 2px;
  border-radius: 4px;
  width: 12px;
  height: 12px;
  transform-origin: center;
  transform: rotate(180deg);
  transition: transform .2s ease-in-out;
}
:global(.dd.closed .svg-wrap) {
  transform: rotate(0deg);  
}

:global(.dd__btm) {
  background: #181818;
}

/* TODO: add animation from svelte */
:global(.dd.closed .dd__btm) {
  display: none;
}

:global(.dd__btm__inner) {
  padding: 10px;
}
</style>