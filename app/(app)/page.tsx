import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";

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

function Marker(props: ComponentProps<"span">) {
	return <span className="bg-yellow-200">{props.children}</span>;
}

function Push(props: ComponentProps<"a">) {
	return (
		<span className="underline text-blue-500">
			<a href={props.href} target="_blank" rel="noreferrer">
				{props.children}
			</a>
		</span>
	);
}

const email = "andres.dosantosbritoamaral@gmail.com";
const subject = "Oi Andres.";
const body = "Vim pelo seu site e quero iniciar uma conversa com você.";

export default async function _page() {
	return (
		<div className="flex flex-col pb-10">
			<header className="flex items-baseline justify-between mb-8 mt-10 gap-5">
				<div className="flex flex-col items-start w-full">
					<h6 className="font-medium mb-5 text-[20px] -tracking-wider">
						Dos Santos, Andres{" "}
						<span className="text-zinc-700 text-[13px]">24</span>
					</h6>

					<nav className="flex items-center justify-between w-full">
						<span className="text-zinc-700 text-[13px] flex">
							Brasil, Rio de Janeiro - Três Rios <br />
							Brasileiro
						</span>

						<span className="text-zinc-700 text-[13px] flex">
							(24) 9 99315-4394
							<br />
							andres.dosantosbritoamaral@gmail.com
						</span>
					</nav>
				</div>
			</header>

			<span className="text-zinc-700 text-[13px] my-5">Experiência</span>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Meu nome é Andres, tenho <Marker>+ de 4 anos</Marker> de experiência com
				programação <Marker>frontend</Marker> e <Marker>mobile</Marker>. Sou
				aluno de <Marker>Sistemas de Informações</Marker> e me dedico todos os
				dias para entregar soluções práticas e eficientes.
			</span>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Fui desenvolvedor <Marker>júnior</Marker> na H4money e fiquei
				responsável por elaborar, junto com o time, um site e um aplicativo de{" "}
				<Marker>sistema de gestão financeira</Marker>.
			</span>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Sou desenvolvedor <Marker>pleno</Marker> na Zaal Tecnologia, aqui sou
				responsável tanto por aplicativo B2B, quanto por aplicativos B2C. São
				eles...
			</span>

			<span className="text-zinc-700 text-[13px] mb-5">
				Projetos da minha empresa atual
			</span>

			<ul className="text-sm flex flex-col mb-10 leading-7 gap-2.5 -tracking-wide">
				<Link
					href="https://play.google.com/store/apps/developer?id=Zaal+Tecnologia+da+Informa%C3%A7%C3%A3o+LTDA.&hl=pt_BR"
					className="flex items-center"
				>
					<span className="hover:bg-blue-500/20 pl-1.5 pr-2.5 flex items-center">
						<ArrowUpRight className="size-3" />3 projetos
					</span>
				</Link>
			</ul>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Além desses eu ainda tenho meus <Marker>projetos pessoais</Marker>, são
				esses.
			</span>

			<span className="text-zinc-700 text-[13px] mb-5">Projetos pessoais</span>

			<ul className="text-sm flex flex-col mb-10 leading-7 gap-2.5 -tracking-wide">
				<Link
					href="https://lkei.vercel.app"
					target="__blank"
					className="flex items-center"
				>
					<span className="hover:bg-blue-500/20 pl-1.5 pr-2.5 flex items-center">
						<ArrowUpRight className="size-3" />
						Linkei
					</span>
				</Link>

				{/* <Link href="#" className="flex items-center">
          <span className="hover:bg-blue-500/20 pl-1.5 pr-2.5 flex items-center">
            <ArrowUpRight className="size-3" />
            Gept (projeto com IA)
          </span>
        </Link> */}
			</ul>

			<span className="text-zinc-700 text-[13px] mb-5">Contatos</span>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Você pode me encontrar no{" "}
				<span className="underline text-blue-500">
					<a
						href="https://www.linkedin.com/in/andres-dosantos"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</span>
				,{" "}
				<span className="underline text-blue-500">
					<a
						href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
						target="_blank"
						rel="noreferrer"
					>
						Gmail
					</a>
				</span>
				,{" "}
				<span className="underline text-blue-500">
					<a
						href="https://www.github.com/andres-dos-santos"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
				</span>{" "}
				e{" "}
				<span className="underline text-blue-500">
					<a
						href="https://x.com/andresdo_santos"
						target="_blank"
						rel="noreferrer"
					>
						X (antigo Twitter)
					</a>
				</span>
				, tento sempre manter eles sempre atualizados.
			</span>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Caso tenha interesse em ver meu <Marker>currículo</Marker> pode baixar
				ele{" "}
				<Push href="/resume.pdf" download="resume.pdf">
					aqui
				</Push>
				. Se quiser saber o meu <Marker>plano de estudos para 2025</Marker> pode
				clicar{" "}
				<Link
					href="https://asba.notion.site/learning-1423ce0317be808a902ff2f6ad071b21"
					target="__blank"
				>
					aqui
				</Link>
				.
			</span>

			<span className="text-zinc-700 text-[13px] mb-5">Habilidades</span>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Todos esses sistemas me fizeram acumular conhecimentos em{" "}
				<Marker>estrutura de dados e algoritmos</Marker>,{" "}
				<Marker>programação web (React/Next)</Marker> e{" "}
				<Marker>mobile (React Native)</Marker>.
			</span>

			<span className="text-sm block mb-10 leading-7 -tracking-wide">
				Além disso tenho conhecimentos em <Marker>Firebase</Marker>,{" "}
				<Marker>Supabase</Marker>, IA, API de terceiros, um pouco sobre{" "}
				<Marker>AWS</Marker>, <Marker>GCP</Marker>, conhecimento avançado em{" "}
				<Marker>NodeJS</Marker>, desenvolvimento{" "}
				<Marker>Android (com Jetpack Compose)</Marker>, <Marker>Docker</Marker>,{" "}
				<Marker>Prisma</Marker>, etc.
			</span>

			<span className="text-sm block leading-7 -tracking-wide">
				Venha falar comigo!
			</span>
		</div>
	);
}
