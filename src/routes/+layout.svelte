<script>
	import '../app.postcss';
	import Header from '$lib/components//Header.svelte';
    import Navbar from '../lib/components/navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import '../app.postcss'
	import { onMount } from 'svelte';
    import {themeChange} from 'theme-change'


    onMount(async () => {themeChange(false)})
</script>

<Navbar/>

<main class="container max-w-3xl mx-auto px-4 mb-20">
	<slot />
	<!-- sveltkit is a decorate filed format, recall + -->
	<!-- +layout is another type-->
	<!-- in svelte we have concept of slot or child. we use <slot/> to show the insertion of children
when we change pages on the slot content will be updated -->
</main>

<Footer />

<!--as the parent directory routes, the header and footer will be in all. this work for subdirs too
by creating layout groups we can eventually add mroe control to this

-->
