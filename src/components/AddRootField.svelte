<div class="addRootField">
  <Modal>
    Yooo test
    Field Type<br />
    <FieldTypeSelector bind:value="{selectedFieldType}" /><br /><br />

    <input type="text" bind:value="{fieldName}" /><br /><br />
    <input type="text" bind:value="{fieldLabel}" /><br /><br />
    {#if selectedFieldType === 'number'}
      min<br />
      <input 
        type="number" 
        bind:value="{data.number.field_meta.min}" 
      /><br /><br />
      max<br />
      <input 
        type="number" 
        bind:value="{data.number.field_meta.max}" 
      /><br /><br />
      step<br />
      <input 
        type="number" 
        bind:value="{data.number.field_meta.step}" 
      /><br /><br />
    {/if}


    <Button 
      on:click={handleAddField}
    >
      Add Field
    </Button>
  </Modal>
</div>

<script>
  import { is_adding_field, attributes } from '../stores';
  import Button from './Button.svelte'
  import Modal from './Modal.svelte'
  import FieldTypeSelector from './FieldTypeSelector.svelte'


  let selectedFieldType = 'text'
  let fieldName = 'field-name-here'
  let fieldLabel = 'Field Label Here'

    // TODO: temp; refactor
    const data = {
      text: {
        field_meta: {
          type: 'text',
          text_type: 'long',
          max_chars: 30
        },
        default: {
          text: ''
        }
      },
      number: {
        field_meta: {
          type: 'number',
          min: 0,
          max: 10,
          step: 1
        },
        default: {
          value: 0
        }
      }
    }

  
  const handleAddField = () => {


    // TODO: Make this dynamic
    const newField = {
      field_name: fieldName,
      main_data: {
        type: 'object',
        id: 2,
        field_meta: {
          ...data[selectedFieldType].field_meta,
          label: fieldLabel,
          col: '2',
        },
        default: {
          ...data[selectedFieldType].default
        },
      },
    }


    $attributes['test_id_3'] = {
      ...newField
    }

    $is_adding_field = false
  }
</script>

<style scoped>
  .addRootField {
    position: fixed;
    top: 0;
    left: 0;
    width: 40vw;
    height: 100vh;
    box-shadow: 0 0 0 1px red;
  }
</style>