import { PageData } from '../.svelte-kit/types/src/routes/$types';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient;
			session: SupabaseSession;
		}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
