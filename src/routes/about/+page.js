import { client } from '$lib/graphql-client';
import { authorsQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { authors } = await client.request(authorsQuery);

	return {
		authors
	};
};
