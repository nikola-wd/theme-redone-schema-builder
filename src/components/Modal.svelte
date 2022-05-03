<div class="backdrop" transition:fade="{{ duration: 200 }}" />
<div class="modal" transition:fade="{{ duration: 200 }}">
  <slot />
</div>


<script>
  import { fade } from 'svelte/transition';
</script>


<style scoped>
  .backdrop {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: teal;
    opacity: 0.5;
  }

  .modal {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: #111;
    border-radius: 4px;
    padding: 20px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 100px);
    height: calc(100% - 100px);
  }
</style>