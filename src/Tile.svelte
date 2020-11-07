<script>
  export let node;
</script>

<style>
  .tile {
    border: 1px solid black;
    position:relative;
    width: 12.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tile:after {
    content: "";
    display: block;
    padding-bottom:100%;
  }

  .tile:hover {
    background-color: lightblue;
  }

  .content {
    position:absolute;
    width: 100%;
    height: 100%;
  }

  .dark {
    background-color: lightslategray;
    color: white;
  }

  .light {
    background-color: white;
    color: grey;
  }
</style>

<div class="tile {node.style}">
  <div class="content">{node.position}</div>
</div>
