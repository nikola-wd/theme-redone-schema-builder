<div class="builder">
  <div class="inner">
    <Dropdown label="block_meta">
      <BlockMetaInput label="BLOCK_REGISTER_NAME" key="BLOCK_REGISTER_NAME" />
      <BlockMetaInput label="BLOCK_TITLE" key="BLOCK_TITLE" />
      <BlockMetaInput label="keywords" key="keywords" />
      <BlockMetaCheckbox label="hasSidebar" key="hasSidebar" />
      <BlockMetaCheckbox label="hasExample" key="hasExample" />
      <BlockMetaCheckbox label="hasGlobalSettings" key="hasGlobalSettings" />
    </Dropdown>

    <Dropdown label="attributes (fields)">
      <Fields />
    </Dropdown>
  </div>
  
  {#if $is_adding_field}
    <AddRootField />
  {/if}

  <div class="create-field">
    <Button 
      on:click="{handleOpenRootAddField}"
    >
      Create Field
    </Button>
  </div>
</div>


<script>
  import { is_adding_field } from '../stores';
  
  import Dropdown from './Dropdown.svelte'
  import BlockMetaInput from './BlockMetaInput.svelte'
  import BlockMetaCheckbox from './BlockMetaCheckbox.svelte'
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
    padding: 20px;
    background: #222;
    padding-bottom: 60px;
  }

  .inner {
    height: 100%;
    overflow-y: auto;
  }

  /* width */
  .inner::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .inner::-webkit-scrollbar-track {
    background: #444;
  }

  /* Handle */
  .inner::-webkit-scrollbar-thumb {
    background: yellow;
    border-radius: 8px;
  }

  /* Handle on hover */
  .inner::-webkit-scrollbar-thumb:hover {
    background: orange;
  }

  .create-field {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: calc(100% - 40px);
  }
</style>