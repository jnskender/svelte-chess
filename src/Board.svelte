<script>
  import Tile from "./Tile.svelte";
  import createNode from "./node.js"
  const rows = [];
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];

  for(let i = 0; i < 8; i++) {
    let row = [];
    for(let j = 0; j < 8; j++) {
      const position = columns[j] + ((i + 1).toString());
      const style = ((i + j) % 2 == 0) ? "dark" : "light";
      row.push(createNode(position, style));
     }
     rows.push(row)
  }
  rows.reverse();
</script>

<style>
  .board {
    place-content: center;
    padding: 2rem;
  }
  .rows {
    display: flex;
    justify-content: center;
  }
</style>

<div class="board">
  {#each rows as row, i}
    <div class="rows">
      {#each row as tile}
          <Tile node={tile} />
      {/each}
    </div>
  {/each}
</div>
