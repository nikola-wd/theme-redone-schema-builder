<div class="backdrop"></div>
<div class="modal">
  <slot />
</div>


<style scoped>
  .backdrop {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
  }

  .modal {
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    color: #222;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 100px);
    height: calc(100% - 100px);
  }
</style>