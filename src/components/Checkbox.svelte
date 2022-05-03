<label>
  <input 
    type="checkbox" 
    class="checkbox" 
    bind:checked={$block_meta[key]}
   
  />
  <span class="indicator"></span>
  <span class="txt">{label}</span>
</label>

<script>
  import { block_meta } from '../stores';

  export let label;
  export let key;

  const handleUpdate = e => {
    const newObj = {...block_meta}
    newObj[key] = !newObj[key]
    $block_meta = newObj
  }
</script>

<style>
  label {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #111;
    border-radius: 4px;
    padding: 8px;
    background: #151515;
    cursor: pointer;
  }

  .indicator {
    box-sizing: border-box;
    position: relative;
    height: 24px;
    display: inline-flex;
    margin-right: 10px;
    width: 44px;
    border-radius: 50px;
    background-color: #d0dff1;
    border: 2px solid #fff;
  }
      
  .indicator:before {
    --size: 20px;
    content: '';
    position: absolute;
    top: 50%;
    transition: all .2s ease-in-out;
    border-radius: 50%;
    background-color: #fff;
    width: var(--size);
    height: var(--size);
    left: 0;
    transform: translate(0%, -50%) scale(1);
    box-shadow: 1px 1px 5px 0 rgba(#000, .25);
  }
    
  input:checked + .indicator:before {
    transform: translate(100%, -50%) !important;
    background-color: teal;
  }
	
  .txt {
    color: #fff;
    line-height: 1;
    user-select: none;
    font-weight: 600;
  }

  input {
    margin-bottom: 0;
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    outline: none;
  }
      
  input:focus + .indicator {
    border-color: lightblue;
  }
      
  input:checked + .indicator:before {
    transform: translate(-50%, -50%) scale(1);
  }
</style>