<div class="addRootField">
  <Modal>
    Yooo test
    Field Type<br />
    <Select 
      bind:value="{selectedFieldType}"
      label="Field Type"
      options="{['text', 'number']}"
    />

    <Input
      label="fieldName"
      bind:value="{fieldName}" 
    />
    <Input
      label="fieldLabel"
      bind:value="{fieldLabel}" 
    />
    {#if selectedFieldType === 'number'}
      <Input
        label="min" 
        bind:value="{data.number.field_meta.min}" 
      />
      <Input
        label="max" 
        bind:value="{data.number.field_meta.max}" 
      />
      <Input
        label="step" 
        bind:value="{data.number.field_meta.step}" 
      />
    {/if}


    <Button 
      on:click={handleAddField}
    >
      Add Field
    </Button>


    <Button 
      --bg="crimson"
      --mt="auto"
      on:click={handleAbort}
    >
      Abort
    </Button>
  </Modal>
</div>

<script>
  import { is_adding_field, attributes } from '../stores';
  import Button from './Button.svelte'
  import Modal from './Modal.svelte'
  import Input from './Input.svelte'
  import Select from './Select.svelte'



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

  

  const handleAbort = () => $is_adding_field = false

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
          help: null,
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

<style>
  .addRootField {
    position: fixed;
    top: 0;
    left: 0;
    width: 40vw;
    height: 100vh;
    box-shadow: 0 0 0 1px red;
  }
</style>