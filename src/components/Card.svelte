<script>
  import Edit16 from "carbon-icons-svelte/lib/Edit16";

  export let id;
  export let title;
  export let data;
  export let dateCreated;
</script>

<div class="card">
  <h3>[{id}] {title} <Edit16 style="float: right;"/></h3>
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
      /* margin */
  }
</style>
