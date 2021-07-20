<script>
  import Card from "./Card.svelte";
  import { kanbanBoard, deleteColumn, addCard } from "../stores/kanbanStore.js";

  import InlineInput from "svelte-inline-input";
  import Delete24 from "carbon-icons-svelte/lib/Delete32";
  import Add24 from "carbon-icons-svelte/lib/Add24";

  import { dndzone } from "svelte-dnd-action";

  // const flipDurationMs = 300;

  // function handleDndConsider(e) {
  //   $kanbanBoard = e.detail.items;
  // }
  // function handleDndFinalize(e) {
  //   $kanbanBoard = e.detail.items;
  //   console.log($kanbanBoard);
  // }

  export let cards = [];
  export let title;
  export let id;
</script>

<!-- TODO: Fix drag-n-drop -->
<!-- <div
  class="column"
  use:dndzone={{ items: $kanbanBoard, flipDurationMs }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
> -->
<div class="column">
  <h2>
    <!-- TODO: Update store when title value is changed -->
    <InlineInput bind:value={title} />
    <div class="deleteColumnButton">
      <Delete24
        on:click={() => deleteColumn(id)}
        style="float: right; fill: white;"
      />
    </div>
  </h2>
  <ul>
    {#each cards as card (card.id)}
      <!-- ISSUE Binding spread attributes #5137  -->
      <!-- <li><Card {...card} /></li> -->
      <li>
        <Card
          bind:title={card.title}
          bind:id={card.id}
          bind:data={card.data}
          bind:dateCreated={card.dateCreated}
        />
      </li>
    {/each}
    <li>
      <div class="addCardButton">
        <Add24 on:click={() => addCard(id)} style="fill: black" />
      </div>
    </li>
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
  .addCardButton {
    margin-top: 10px;
    padding: 5px;
    border-radius: 5px;
    border: solid 1px;
    /* border-color: darkgreen; */
    background-color: #5cb85c;
    float: right;
  }
  .deleteColumnButton {
    margin-top: 0px;
    padding: 5px;
    border-radius: 5px;
    border: solid 1px;
    /* border-color: darkgreen; */
    background-color: #d9534f;
    float: right;
  }
</style>
