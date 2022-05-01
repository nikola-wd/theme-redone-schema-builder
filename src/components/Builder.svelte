<div class="builder">
  <Dropdown label="block_meta">
    <Input label="BLOCK_REGISTER_NAME" key="BLOCK_REGISTER_NAME" />
    <Input label="BLOCK_TITLE" key="BLOCK_TITLE" />
    <Input label="keywords" key="keywords" />
    <Checkbox label="hasSidebar" key="hasSidebar" />
    <Checkbox label="hasExample" key="hasExample" />
    <Checkbox label="hasGlobalSettings" key="hasGlobalSettings" />
  </Dropdown>

  <Dropdown label="attributes">
    TODO
  </Dropdown>
</div>


<script>
  import Dropdown from './Dropdown.svelte'
  import Input from './Input.svelte'
  import Checkbox from './Checkbox.svelte'
</script>

<style scoped>
  .builder {
    width: 40%;
    padding: 20px;
    background: #222;
  }
</style>