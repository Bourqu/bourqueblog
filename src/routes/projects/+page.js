
import { client } from '$lib/graphql-client';
import { projectsQuery } from '$lib/graphql-queries';

export const load = async () => {
	const { projects } = await client.request(projectsQuery);

	return {
		projects
	};
};
