<script>
  import { kanbanBoard } from "../stores/kanbanStore.js";
  import Edit16 from "carbon-icons-svelte/lib/Edit16";

  export let id;
  export let title;
  export let data;
  export let dateCreated;

  function updateTitle(e) {
    const newTitle = e.target.value;
    $kanbanBoard[colIdx].cards[cardIdx].title = newTitle;
  }
</script>

<div class="card">
  <h3>[{id}] {title} <Edit16 style="float: right;" /></h3>
  <p>{data} <Edit16 /></p>
  <span>{dateCreated}</span>
</div>

<style>
  .card {
    background-color: lightblue;
    color: hotpink;
    border: 2px solid black;
    border-radius: 10px;
    padding: 3px;
  }
  h3 {
    margin-top: 5px;
  }
</style>
