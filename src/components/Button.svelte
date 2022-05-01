<button type="button">
  <slot />
</button>

<style scoped>
  button {
    border-radius: 4px;
    background: teal;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 0;
    height: 30px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600; 
    transition: opacity .2s ease-in-out;
  }

  button:hover {
    opacity: .9;
  }
</style>