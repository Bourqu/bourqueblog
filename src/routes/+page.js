import { client } from '$lib/graphql-client';

import { authorsQuery, projectsQuery } from '$lib/graphql-queries';

export const load = async () => {
	const [projectsReq, authorsReq] = await Promise.all([
		client.request(projectsQuery),
		client.request(authorsQuery)
	]);

	const { authors } = authorsReq;
	const { projects } = projectsReq;

	return {
		projects,
		authors
	};
};
