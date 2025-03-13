import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// TODO: remove this when the page is fully implemented
export const load: PageLoad = async () => {
	return error(404, { message: 'Not found' });
};
