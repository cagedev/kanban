<script>
  import Add32 from "carbon-icons-svelte/lib/Add32";
  import Card from "./Card.svelte";

  export let cards = [];
  export let title;
  export let id;
</script>

<div class="column">
  <h2>{title}</h2>
  <Add32 title="myTitle"/>
  [button]
  <ul>
    {#each cards as card}
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
