import { db } from '$lib/server/db';
import { count } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { user } from '$lib/server/db/schema';

export const load = (async () => {
	const [{ userCount }] = await db.select({ userCount: count() }).from(user);
	return { userCount };
}) satisfies PageServerLoad;
