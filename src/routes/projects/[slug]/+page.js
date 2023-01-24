import { client } from '$lib/graphql-client';
import { projectQuery } from '$lib/graphql-queries';


export const load = async ({ params }) => {
	const { slug } = params;
	const variables = { slug };
	const { project } = await client.request(projectQuery, variables);

	return {
		
			project
		
	};
};
