export function Footer() {
	return (
		<footer className="w-full h-96 flex items-center justify-center bg-[#c4c4c4] mt-28">
			<div className="flex flex-col justify-center w-1/2 pl-28">
				<div className="flex flex-col text-[#474545] text-xl">
					<strong className="mb-3">Endereço:</strong>
					<span>Rua Cubos, 10</span>
					<span>Jardim Academy</span>
					<span>Salvador - Bahia - Cep 41820-021</span>
				</div>
				<div className="flex items-center gap-3 mt-4">
					<img src="/facebook-logo.svg" alt="Facebook" className="max-w-[35px] max-h-[35px]" />
					<img src="/instagram-logo.svg" alt="Instagram" className="max-w-[35px] max-h-[35px]" />
				</div>
			</div>

			<div className="bg-[#6d6b6b] h-4/5 w-[1px]" />

			<div className="flex items-center justify-center w-1/2">
				<img src="/logo.svg" alt="Logo" className="w-60" />
			</div>
		</footer>
	)
}
