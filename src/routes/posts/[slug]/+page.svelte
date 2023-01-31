<script>
    export let data 
    const { title, date, tags, content} = data.post
    import { marked } from 'marked'
  </script>
  
  <svelte:head>
    <title>Blog | {title}</title>
  </svelte:head>

  
  <div class="prose prose-xl">
    <h1>{title}</h1>
  </div>
  
  <p class="text-secondary text-xs tracking-widest font-semibold">
    {new Date(date).toDateString()}
  </p>
  
  <div class="mb-5 flex justify-between">
    <div>
      {#if tags}
        <div class="mt-5 space-x-2">
          {#each tags as tag}
            <span class="badge badge-primary">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  
  <article div class="prose prose-lg">
    {@html marked(content)}
  </article>