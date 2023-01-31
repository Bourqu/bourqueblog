

import { client } from '$lib/graphql-client';
import { postsQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { posts } = await client.request(postsQuery);

	return {
		posts
	};
};
