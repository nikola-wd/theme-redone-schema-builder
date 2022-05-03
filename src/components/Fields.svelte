{#each Object.keys(fields) as field_id, index (index + '_' + field_id)}
  <Field id="{field_id}" field_name="{fields[field_id].field_name}" field_data="{fields[field_id].main_data}" />
{:else}
  <div class="note">
    Start adding fields
  </div>
{/each}


<script>
  import { attributes } from '../stores';
  import Field from './Field.svelte'

  $: fields = $attributes
</script>

<style>
  .note {
    background: yellow;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
  }
</style>