<script>
    export let data; /*initializes the props*/
  </script>
  
  <!--<pre>{JSON.stringify(data, null, 2)}</pre>-->
  <p> {data.projects[0].name} </p>

  <h1>Recent Projects by Me</h1>

<div>
  {#each data.projects as { name, slug, description, image }}
    <div>
      <img src={image[0].url} alt={name} />
      <a href={`/projects/${slug}`}>
        <div>
          <h2>{name}</h2>
          <p>
            {description.slice(0, 80)}...
          </p>
        </div>
      </a>
    </div>
  {/each}
</div>