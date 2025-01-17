import { AppStoreIcon } from "@/components/app-store-icon";
import { PlayStoreIcon } from "@/components/play-store-icon";
import { ArrowUpRight } from "lucide-react";

function ZaalResult() {
	return (
		<div className="snap-start min-h-screen bg-[#1c1c1c] p-40 grid grid-cols-10">
			<div className="flex flex-col justify-center col-span-4">
				<h2 className="font-demi-bold text-[2.75rem] leading-[4rem] -tracking-wider text-white">
					Acompanhe o seu crescimento e tenha controle total
				</h2>

				<span className="text-white/80 leading-8 text-[15px] block mt-14">
					Nosso aplicativo foi feito para empresários e gestores que precisam
					tomar decisões rápidas e inteligentes.
				</span>

				<span className="text-white/80 leading-8 text-[15px] block mt-5">
					Você tem resultados diários, semanais e mensais, visualizações fáceis
					e dinâmicas, acessível a qualquer momento e lugar.
				</span>

				<section className="mt-20 flex items-center gap-5">
					<div className="bg-white flex items-center gap-3 h-20 px-10 rounded-xl">
						<AppStoreIcon />

						<div className="flex flex-col -space-y-1 mt-2">
							<span className="text-xs -tracking-wide">Download on the</span>
							<span className="text-lg -tracking-wide">AppStore</span>
						</div>
					</div>

					<div className="bg-white flex items-center gap-3 h-20 px-10 rounded-xl">
						<PlayStoreIcon />

						<div className="flex flex-col -space-y-1 mt-2">
							<span className="text-xs -tracking-wide">Get in on</span>
							<span className="text-lg -tracking-wide">PlayStore</span>
						</div>
					</div>
				</section>

				<div className="flex items-center mt-20">
					<div className="flex items-center">
						<span className="font-demi-bold text-xl text-white">+50</span>

						<div className="bg-white/50 mx-10 w-px h-10" />

						<span className="text-white/80 text-sm">
							Usuários confiam <br />
							no nosso app.
						</span>
					</div>

					<div className="bg-white relative flex items-center gap-3 h-20 px-1 ml-auto min-w-64 rounded-full">
						<div className="absolute h-[72px] w-[72px] bg-[#1c1c1c] rounded-full border border-white" />
						<div className="absolute left-[40px] h-[72px] w-[72px] bg-[#1c1c1c] rounded-full border border-white" />
						<div className="absolute left-[80px] h-[72px] w-[72px] bg-[#1c1c1c] rounded-full border border-white" />

						<div className="flex items-center justify-center absolute right-1 h-[72px] w-[72px] bg-[#1c1c1c] rounded-full border border-white">
							<ArrowUpRight className="text-white size-4" />
						</div>
					</div>
				</div>
			</div>

			<div className="col-span-6 px-40">
				<div className="bg-zinc-800 rounded-3xl h-full" />
			</div>
		</div>
	);
}

function ZaalBenefitsClub() {
	return (
		<div className="snap-start min-h-screen bg-white flex items-center justify-center">
			<p>Zaal Clube de Vantagens</p>
		</div>
	);
}

export default function Projects() {
	return (
		<div className="scroll-mandatory flex flex-col min-h-screen w-screen overflow-x-hidden">
			<ZaalResult />

			<ZaalBenefitsClub />
		</div>
	);
}
