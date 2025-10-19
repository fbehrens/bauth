import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import { dev } from '$app/environment';
import { DATABASE_URL } from '$env/static/private';

export const tables = schema;

export const createDb = (platform: App.Platform) => {
	const db = dev ? drizzle(DATABASE_URL, { schema }) : drizzle(platform.env.DB, { schema });

	return db;
};
