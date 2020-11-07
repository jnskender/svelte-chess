<script>
  import Tile from "./Tile.svelte";
  import createNode from "./node.js"
  const rows = [];
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];


  for(let i = 0; i < 8; i++) {
    let row = [];
    for(let j = 0; j < 8; j++) {
      row.push(createNode(columns[j] + (i+1).toString()))
     }
     rows.push(row)
  }
</script>

<style>
  .board {
    place-content: center;
  }
  .rows {
    display: flex;
  }
</style>

<div class="board">
  {#each rows as row, i}
    <div class="rows">
      {#each row as tile}
        <div class="tile">
          <Tile node={tile} />
        </div>
      {/each}
    </div>
  {/each}
</div>
