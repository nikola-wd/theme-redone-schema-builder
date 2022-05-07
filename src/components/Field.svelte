<Dropdown 
  on:click={handleEditingFieldId}
  label="name: {field_name},  type: {field_data.field_meta.type}"
>
  <div class="field">
    <AttrsFieldInput 
      id="{id}"
      label="field-key" 
      key="field_name" 
    />
    <AttrsFieldInput 
      id="{id}" 
      label="label" 
      key="main_data"
      key1="field_meta"
      key2="label"
    />
    <TogglableControl 
      label="help"
      checked={$attributes[id].main_data.field_meta.help !== null}
      on:change={e => {
        if (!e.target.checked) {
          // TOOD: Find a way to do this better
          $attributes[id].main_data.field_meta.help = null
        } else {
          $attributes[id].main_data.field_meta.help = ''
        }
      }
    }
    >
      <AttrsFieldInput 
        id="{id}" 
        key="main_data"
        key1="field_meta"
        key2="help"
      />
    </TogglableControl>
  </div>

  <Button
    slot="top-btn"
    try_delete
    --bg="crimson"
    --size="26px"
    on:click={handleDeleteField}
  >
    <Trash />
  </Button>
</Dropdown>

{#if try_confirm_delete_field}
  <Modal>
    <h2>Are you sure you want to delete "{field_name}" field?</h2>

    <Button 
      --bg="teal" 
      --mb="10px"
      on:click={() => confirmed_delete_field = true}
    >
      Yes
    </Button>
    <Button 
      --bg="crimson"
      on:click={() => try_confirm_delete_field = false}
    >
      No
    </Button>
  </Modal>
{/if}


<script>
  import { attributes, editing_field_id } from '../stores'
  import Dropdown from './Dropdown.svelte'
  import Button from './Button.svelte'
  import Trash from './icons/Trash.svelte'
  import Modal from './Modal.svelte'


  import TogglableControl from './controls/TogglableControl.svelte'
  import AttrsFieldInput from './AttrsFieldInput.svelte'

  export let id
  export let field_name
  export let field_data

  let try_confirm_delete_field = false
  let confirmed_delete_field = false

  $: {
    if (confirmed_delete_field) {
      delete $attributes[id]
      $attributes = $attributes
      confirmed_delete_field = false
      try_confirm_delete_field = false
    }
  }

  const handleDeleteField = () => {
    try_confirm_delete_field = true
  }

  const handleEditingFieldId = () => {
    $editing_field_id = id
  }
</script>

<style scoped>
  .field {
    border: 1px solid #111;
    border-radius: 4px;
    padding: 8px;
    background: #222;
    color: #fff;
    margin-bottom: 6px;
  }
</style>