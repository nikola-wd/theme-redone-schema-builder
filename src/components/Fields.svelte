{#each Object.keys(fields) as field_name, index}
  <Field field_name="{field_name}" field_data="{fields[field_name]}" />
{:else}
  Start adding fields
{/each}


<script>
import { attributes } from '../stores';
import Field from './Field.svelte'

$: fields = $attributes
  
</script>