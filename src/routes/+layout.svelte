<script lang="ts">
	import '../app.postcss';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	// Subscribe to auth state changes
	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});
		// Unsubscribe when component is destroyed
		return subscription.unsubscribe();
	});
</script>

<slot></slot>
