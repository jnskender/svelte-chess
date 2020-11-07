<script>
  export let node;
</script>

<style>
  .tile {
    border: 1px solid black;
    width: 75px;
    height: 75px;

  }

  .tile:hover {
    background-color: lightblue;

  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="tile">
  <div class="content">{node.position}</div>
</div>
