<script lang="ts">
	import { authClient } from '$lib/auth-client';
	const session = authClient.useSession();
	let { data } = $props();
	let { userCount } = data;
</script>

<div>userCount={userCount}</div>
<div>
	{#if $session.data}
		<div>
			<p>
				{$session.data.user.name}
			</p>
			<button
				onclick={async () => {
					await authClient.signOut();
				}}
			>
				Sign Out
			</button>
		</div>
	{:else}
		Login with
		<button
			onclick={async () => {
				await authClient.signIn.social({
					provider: 'github'
				});
			}}
		>
			GitHub
		</button>
		<button
			onclick={async () => {
				await authClient.signIn.social({
					provider: 'google'
				});
			}}
		>
			Google
		</button>
	{/if}
</div>
