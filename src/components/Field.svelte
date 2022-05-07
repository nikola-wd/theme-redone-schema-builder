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
    --bg="crimson"
    --size="26px"
    on:click={handleDeleteField}
  >
    <Trash />
  </Button>
</Dropdown>


<script>
  import { attributes, editing_field_id } from '../stores'
  import Dropdown from './Dropdown.svelte'
  import Button from './Button.svelte'
  import Trash from './icons/Trash.svelte'

  import TogglableControl from './controls/TogglableControl.svelte'
  import AttrsFieldInput from './AttrsFieldInput.svelte'

  export let id
  export let field_name
  export let field_data


  const handleDeleteField = () => {
    delete $attributes[id]
    $attributes = $attributes
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