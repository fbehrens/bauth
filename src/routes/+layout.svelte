<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="flex items-center justify-between p-4">
    <a href="/" class="text-lg font-bold">Home</a>
    <nav>
        <a href="/protected" class="text-lg">Protected</a>
    </nav>
</header>

<main class="p-4">
    {@render children?.()}
</main>
