{#each Object.keys(fields) as field_id, index}
  <Field id="{field_id}" field_name="{fields[field_id].field_name}" field_data="{fields[field_id].main_data}" />
{:else}
  Start adding fields
{/each}


<script>
import { attributes } from '../stores';
import Field from './Field.svelte'


$: fields = $attributes
  
</script>