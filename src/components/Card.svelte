<script>
  import { kanbanBoard } from "../stores/kanbanStore.js";
  import Edit16 from "carbon-icons-svelte/lib/Edit16";
  import InlineInput from "svelte-inline-input";

  export let id;
  export let title;
  export let data;
  export let dateCreated;
</script>

<div class="card">
  <h3>
    <!-- [{id}] -->
    <!-- BUG: classes are component scoped; passing classnames only applies to :global() css -->
    <InlineInput bind:value={title} placeholder="..." inputClasses="global-green" />
    <!-- <Edit16 style="float: right;" /> -->
  </h3>
  <p class="data">
    <InlineInput bind:value={data} placeholder="..." />
    <!-- <Edit16 /> -->
  </p>
  <span>
    {dateCreated}
  </span>
</div>

<style>
  .card {
    background-color: lightblue;
    color: black;
    border: 2px solid black;
    border-radius: 10px;
    padding: 3px;
  }
  /* .data {
    min-height: 10em;
    min-width: 10em;
  } */
  /* .cardtitle { */
  :global(.global-green) {
    color: darkgreen;
    background-color: inherit;
    width: inherit;
    font-size: inherit;
    margin: inherit;
    padding: inherit;
    border: 0;
  }
  h3 {
    margin-top: 5px;
  }
</style>
