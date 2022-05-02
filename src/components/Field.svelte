<Dropdown 
  label="name: {field_name},  type: {field_data.field_meta.type}"
>
  <div class="field">
    {JSON.stringify(field_data)}
    <p>key: <strong>{field_name}</strong></p>
    <p>type: <strong>{field_data.type}</strong></p>
    <p>label: <strong>{field_data.field_meta.label}</strong></p>
  </div>
</Dropdown>


<script>
  import Dropdown from './Dropdown.svelte'

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