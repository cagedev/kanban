<script>
  import Column from "./Column.svelte";
  import { kanbanBoard, addColumn, updateCard } from "../stores/kanbanStore.js";
  import Add24 from "carbon-icons-svelte/lib/Add32";
</script>

<!-- DEBUG: updateCard -->
<button
  on:click={() =>
    updateCard(
      1,
      "newTitle",
      "lots and lots of new datalots and lots of new datalots and lots of new datalots and lots of new datalots and lots of new datalots and lots of new data"
    )}
>
  updateCard
</button>

<!-- DEBUG: print store to console -->
<button on:click={() => console.table($kanbanBoard)}> store table </button>
<!-- DEBUG: print store col 0 to console -->
<button on:click={() => console.table($kanbanBoard[0].cards)}>
  store col[0].cards
</button>

<div class="board">
  <ul class="columns">
    {#each $kanbanBoard as col (col.id)}
      <!-- ISSUE Binding spread attributes #5137  -->
      <!-- <li><Column {...col} /></li> -->
      <li>
        <Column
          bind:title={col.title}
          bind:id={col.id}
          bind:cards={col.cards}
        />
      </li>
    {/each}
    <li>
      <div class="addColumnButton">
        <Add24 on:click={() => addColumn("New")} />
      </div>
    </li>
  </ul>
</div>

<style>
  .board {
    background-color: khaki;
  }
  .columns {
    list-style: none;
    padding-inline-start: 0px;
  }
  .columns > li {
    float: left;
    /* background-color: mediumslateblue; */
  }
  .addColumnButton {
    padding: 5px;
    border-radius: 5px;
    background-color: #5cb85c;
    margin-top: 10px;
    border: solid 1px;
  }
</style>
