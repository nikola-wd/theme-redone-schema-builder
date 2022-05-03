<Dropdown 
  label="name: {field_name},  type: {field_data.field_meta.type}"
>
  <div class="field">
    <InputAttr 
      id="{id}"
      label="field-key" 
      key="field_name" 
    />
    <InputAttr 
      id="{id}" 
      label="label" 
      key="main_data"
      key1="field_meta"
      key2="label"
    />
    <InputAttr 
      id="{id}" 
      label="help" 
      key="main_data"
      key1="field_meta"
      key2="help"
    />
  </div>
</Dropdown>


<script>
  import Dropdown from './Dropdown.svelte'
  import InputAttr from './InputAttr.svelte'

  export let id
  export let field_name
  export let field_data
</script>

<style scoped>
  .field {
    border: 1px solid #111;
    border-radius: 4px;
    padding: 8px;
    background: #fff;
    color: #222;
    margin-bottom: 6px;
  }
</style>