import { user } from '$lib/server/db/schema';
import { count } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { createDb } from '$lib/server/db';

export const load = (async ({ platform }) => {
	const db = createDb(platform!);
	if (!db) throw new Error('Database not available');
	const result = await db.select({ userCount: count() }).from(user);
	const userCount = result[0]?.userCount ?? 0;
	return { userCount };
}) satisfies PageServerLoad;
