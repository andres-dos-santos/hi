import Link from "next/link";

export default function Post() {
	return (
		<div className="font-sans mt-10">
			<h1 className="font-semibold mb-10 text-lg">Posts</h1>

			<ul>
				<li className="mt-2 flex items-baseline gap-2">
					<span className="text-xs font-medium">1.</span>
					<Link href="/como-usar-react-redux">
						<span className="text-sm">
							Como gerenciar um carrinho de compras com Redux?
						</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}
