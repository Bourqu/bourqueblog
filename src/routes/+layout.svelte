<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
</script>

<Header/>

<main>
    <slot/> 
<!-- sveltkit is a decorate filed format, recall + -->
<!-- +layout is another type-->
<!-- in svelte we have concept of slot or child. we use <slot/> to show the insertion of children
when we change pages on the slot content will be updated -->
</main>

<Footer/>

<!--as the parent directory routes, the header and footer will be in all. this work for subdirs too
by creating layout groups we can eventually add mroe control to this

-->







