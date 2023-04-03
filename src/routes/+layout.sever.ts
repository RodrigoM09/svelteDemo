import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import type { LayoutServerLoad } from "./$types";

// This function is called at build time, and is used to generate the layout
export const load: LayoutServerLoad = async (event) => {
    return {
        session: await getServerSession(event),
};
