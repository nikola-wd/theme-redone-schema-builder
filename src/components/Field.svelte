<Dropdown 
  label="name: {field_name},  type: {field_data.field_meta.type}"
>
  <div class="field">
    {JSON.stringify(field_data)}
    <p>field name: <strong>{field_name}</strong></p>
    <p>type: <strong>{field_data.type}</strong></p>
    <p>label: <strong>{field_data.field_meta.label}</strong></p>
    <InputAttr id="{id}" label="field-key" key="field_name" onlyKey />
    <InputAttr id="{id}" label="label" key="main_data.field_meta.type" onlyKey />
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