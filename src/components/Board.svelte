<script>
  import Column from "./Column.svelte";
  import { kanbanBoard } from "../stores/kanbanStore.js";
  import { dndzone } from "svelte-dnd-action";
  import Add32 from "carbon-icons-svelte/lib/Add32";
</script>

<div class="board">
  <ul use:dndzone={{ items: $kanbanBoard }} class="columns">
    {#each $kanbanBoard as col}
      <li><Column {...col} /></li>
    {/each}
    <li>
      <div id="addColumnButton">
        <Add32 />
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
  #addColumnButton {
      margin-top: 10px;
    border: solid 1px;
  }
</style>
