<label class="tr-input-check tr-toggle">
  <input 
    type="checkbox" 
    class="checkbox" 
    bind:checked={$block_meta[key]}
   
  />
  <span class="tr-input-check__indicator"></span>
  <span class="tr-input-check__theme-line"></span>
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

<style scoped>
.tr-input-check {
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


	
.tr-input-check .tr-input-check__indicator {
  box-sizing: border-box;
  position: relative;
  width: 24px;
  height: 24px;
  display: inline-flex;
  border: 2px solid #cecece;
  margin-right: 10px;
}
		
.tr-input-check .tr-input-check__indicator:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%) scale(0);
  background: yellow;
  transition: all .2s ease-in-out;
}
	
.tr-input-check.tr-toggle .tr-input-check__indicator {
  width: 44px;
  border-radius: 50px;
  background-color: #d0dff1;
  border: 2px solid #fff;
}
.tr-input-check.tr-toggle .tr-input-check__indicator:before {
  --size: 20px;
  border-radius: 50%;
  background-color: #fff;
  width: var(--size);
  height: var(--size);
  left: 0;
  transform: translate(0%, -50%) scale(1);
  box-shadow: 1px 1px 5px 0 rgba(#000, .25);
}

.tr-input-check input:checked + .tr-input-check__indicator:before {
  transform: translate(100%, -50%) !important;
  background-color: teal;
}
	
	
.tr-input-check .txt {
  color: #fff;
  line-height: 1;
  user-select: none;
  font-weight: 600;
}

.tr-input-check input {
  margin-bottom: 0;
  position: absolute;
  width: 0;
  height: 0;
  border: 0;
  outline: none;
}
		
		
.tr-input-check input:focus + .tr-input-check__indicator {
  border-color: #fff;
}
		
.tr-input-check input:checked + .tr-input-check__indicator:before {
  transform: translate(-50%, -50%) scale(1);
}

</style>