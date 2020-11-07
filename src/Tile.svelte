<script>
  export let node;
</script>

<style>
  div {
    border: 1px solid black;
    width: 75px;
    height: 75px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div>
  <div class="content">{node.position}</div>
</div>
