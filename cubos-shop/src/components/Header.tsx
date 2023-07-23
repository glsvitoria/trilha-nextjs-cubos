export function Header() {
  return (
    <header className="bg-[url('/banner.png')] bg-center bg-no-repeat h-[248px] w-full border border-black rounded-br-[32px] rounded-bl-[32px] bg-cover flex flex-col items-center justify-center relative text-center text-white">
      <div className="">
        <h1 className="uppercase text-5xl">Moda Masculina</h1>
        <h2 className="uppercase text-lg mb-16">
          Sapatos Sociais - Casuais - Esporte Fino
        </h2>
      </div>
      <img
        src="/logo.svg"
        alt="logo"
        className="w-24 absolute left-28 bottom-8"
      />
    </header>
  );
}
