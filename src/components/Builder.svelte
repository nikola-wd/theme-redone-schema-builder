<div class="builder">
  <div class="builder__part">
    <div class="builder__part__label">block_meta</div>
    <div class="builder__part__inner">
      <Input label="BLOCK_REGISTER_NAME" key="BLOCK_REGISTER_NAME" />
    </div>
  </div>
</div>


<script>
  import Input from './Input.svelte'
</script>

<style scoped>
  .builder {
    width: 40%;
    padding: 20px;
    background: #222;
  }

  .builder__part {
    border: 1px solid #111;
    border-radius: 4px;
  }

  .builder__part__label {
    color: #cecece;
    background: #111;
    padding: 8px;
    line-height: 1;
  }

  .builder__part__inner {
    padding: 10px;
  }
</style>