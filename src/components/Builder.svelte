<div class="builder">
  <Dropdown label="block_meta">
    <Input label="BLOCK_REGISTER_NAME" key="BLOCK_REGISTER_NAME" />
    <Input label="BLOCK_TITLE" key="BLOCK_TITLE" />
    <Input label="keywords" key="keywords" />
    <Checkbox label="hasSidebar" key="hasSidebar" />
    <Checkbox label="hasExample" key="hasExample" />
    <Checkbox label="hasGlobalSettings" key="hasGlobalSettings" />
  </Dropdown>

  <Dropdown label="attributes (fields)">
    <Fields />
    <Button on:click="{handleOpenRootAddField}">Create Field</Button>
  </Dropdown>
  
  {#if $is_adding_field}
    <AddRootField />
  {/if}
</div>


<script>
  import { is_adding_field } from '../stores';
  
  import Dropdown from './Dropdown.svelte'
  import Input from './Input.svelte'
  import Checkbox from './Checkbox.svelte'
  import Button from './Button.svelte'
  import Fields from './Fields.svelte'
  import AddRootField from './AddRootField.svelte'

  const handleOpenRootAddField = () => {
    $is_adding_field = true
  }
</script>

<style scoped>
  .builder {
    position: relative;
    box-sizing: border-box;
    width: 40%;
    height: 100%;
    overflow-y: auto;
    padding: 20px;
    background: #222;
  }
</style>