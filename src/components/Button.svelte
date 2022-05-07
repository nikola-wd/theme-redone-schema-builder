<button 
  type="button" 
  on:click|stopPropagation
>
  <slot />
</button>


<style>
  button {
    border-radius: 4px;
    background: var(--bg, teal);
    margin-top: var(--mt, 0);
    margin-bottom: var(--mb, 0);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size, 100%);;
    border: 0;
    height: var(--size, 30px);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600; 
    transition: opacity .2s ease-in-out;
  }

  button:hover {
    opacity: .9;
  }
</style>