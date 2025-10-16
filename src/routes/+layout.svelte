<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	const session = authClient.useSession();
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="flex items-center justify-between p-4">
	<div class="flex items-center gap-4">
		<a href="/" class="text-lg font-bold">Home</a>
		<a href="/protected" class="text-lg">Protected</a>
	</div>
	<div class="flex items-center gap-4">
		{#if $session.data}
			<div class="flex items-center gap-2">
				<span>{$session.data.user.name}</span>
				<button
					class="rounded bg-slate-200 px-3 py-1"
					onclick={async () => {
						await authClient.signOut();
					}}
				>
					Sign Out
				</button>
			</div>
		{:else}
			<div class="flex items-center gap-2">
				<span>Login with</span>
				<button
					class="rounded bg-slate-200 px-3 py-1"
					onclick={async () => {
						await authClient.signIn.social({
							provider: 'github'
						});
					}}
				>
					GitHub
				</button>
				<button
					class="rounded bg-slate-200 px-3 py-1"
					onclick={async () => {
						await authClient.signIn.social({
							provider: 'google'
						});
					}}
				>
					Google
				</button>
			</div>
		{/if}
	</div>
</header>

<main class="p-4">
	{@render children?.()}
</main>
