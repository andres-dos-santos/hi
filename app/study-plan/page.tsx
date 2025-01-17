// export const revalidate =
//   process.env.NODE_ENV === 'development' ? 30 : 60 * 60 * 1 // 1 hour

// interface Post {
//   title: string
//   id: string
//   createdAt: string
// }

// const queryWithoutSearches = `
//   query {
//     posts(orderBy: createdAt_DESC) {
//       title
//       id
//       createdAt
//     }
//   }
// `

// const queryWithSearches = `
//   query GetLearnPosts($searched: String) {
//     posts(where: { title_contains: $searched }, orderBy: createdAt_DESC) {
//       title
//       id
//       createdAt
//     }
//   }
// `

// async function getPosts(searched?: string): Promise<Post[]> {
//   const payload = searched
//     ? { query: queryWithSearches, variables: { searched } }
//     : { query: queryWithoutSearches }

//   const response = await fetch(
//     'https://api-sa-east-1.hygraph.com/v2/clcckqn423yp601uo3xcd1rh7/master',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     },
//   )

//   const json = await response.json()

//   return json.data ? json.data.posts : []
// }

export default async function _page() {
	return (
		<div className="flex flex-col h-screen">
			<div className="flex items-baseline gap-5">
				<h6 className="font-bold -tracking-wider">Plano de estudos</h6>
			</div>

			<hr />
		</div>
	);
}
