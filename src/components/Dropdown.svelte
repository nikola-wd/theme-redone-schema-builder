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
.dd {
  border: 1px solid #111;
  border-radius: 4px;
  margin-bottom: 10px;
}
.dd__top {
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
.dd__top .svg-wrap {
  border: 1px solid #111;
  padding: 2px;
  border-radius: 4px;
  width: 12px;
  height: 12px;
  transform-origin: center;
  transition: transform .2s ease-in-out;
}
.dd:not(.closed) .svg-wrap {
  transform: rotate(180deg);  
}

.dd__btm {
  background: #181818;
}

/* TODO: add animation from svelte */
.dd.closed .dd__btm {
  display: none;
}

.dd__btm__inner {
  padding: 10px;
}
</style>