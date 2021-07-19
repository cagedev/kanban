<script>
  import Column from "./Column.svelte";
  import { kanbanBoard, addColumn } from "../stores/kanbanStore.js";
  import Add24 from "carbon-icons-svelte/lib/Add32";
</script>

<div class="board">
  <ul class="columns">
    {#each $kanbanBoard as col (col.id)}
      <li><Column {...col} /></li>
    {/each}
    <li>
      <div class="addColumnButton">
        <Add24 on:click={addColumn} />
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
