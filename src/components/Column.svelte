<script>
  import Card from "./Card.svelte";
  import { kanbanBoard } from "../stores/kanbanStore.js";

  import { dndzone } from "svelte-dnd-action";

  //   let items = $kanbanBoard;
  const flipDurationMs = 300;

  function handleDndConsider(e) {
    $kanbanBoard = e.detail.items;
  }
  function handleDndFinalize(e) {
    $kanbanBoard = e.detail.items;
    console.log($kanbanBoard);
  }

  export let cards = [];
  export let title;
  export let id;
</script>

<div
  class="column"
  use:dndzone={{ items: $kanbanBoard, flipDurationMs }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
>
  <h2>{title}</h2>
  <ul>
    {#each cards as card (card.id)}
      <li>
        <Card {...card} />
      </li>
    {/each}
  </ul>
</div>

<style>
  h2 {
    text-align: center;
    margin-top: 0;
  }
  ul {
    list-style: none;
    padding-inline-start: 0;
    padding: 0px;
  }
  li {
    padding-bottom: 10px;
  }
  .column {
    /* background-color: lightcoral; */
    width: 300px;
    margin: 10px;
    /* padding: 10px; */
  }
</style>
