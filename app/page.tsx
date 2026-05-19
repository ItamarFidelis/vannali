import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#E7C5BA] text-[#3A2F2A] scroll-smooth">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#f7cec0] z-50 border-b border-[#d8b3a7]">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-4">

            <div className="relative w-14 h-14">

              <Image
                src="/vl-logo.png"
                alt="Vanni Li"
                fill
                priority
                className="object-contain"
              />

            </div>

            <div>

              <h1 className="font-serif text-4xl font-light tracking-[0.25em] text-[#C7A542] uppercase leading-none">
                Vanna Li
              </h1>

              <p className="text-xs tracking-[0.45em] text-[#8a6f2d] uppercase mt-1 pl-3">
                Estilo que Inspira
              </p>

            </div>

          </a>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] font-medium text-[#5c463d]">

            <a
              href="#inicio"
              className="hover:text-[#C7A542] transition duration-300"
            >
              Início
            </a>

            <a
              href="#sobre"
              className="hover:text-[#C7A542] transition duration-300"
            >
              Sobre
            </a>

            <a
              href="#loja"
              className="hover:text-[#C7A542] transition duration-300"
            >
              Loja
            </a>

            <a
              href="#contato"
              className="hover:text-[#C7A542] transition duration-300"
            >
              Contato
            </a>

          </nav>

        </div>

      </header>

      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative h-screen w-full overflow-hidden"
      >

        {/* IMAGEM */}
        <Image
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2070&auto=format&fit=crop"
          alt="Moda feminina"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* TEXTO */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

          <p className="text-white uppercase tracking-[0.4em] text-sm mb-5">
            Nova Coleção 2026
          </p>

          <h2 className="font-serif text-white text-5xl md:text-7xl font-light leading-tight max-w-4xl">
            Elegância que transforma seu estilo
          </h2>

          <p className="text-white/80 text-lg mt-6 max-w-xl leading-8">
            Descubra peças femininas modernas, sofisticadas e minimalistas.
          </p>

          <button className="mt-10 px-10 py-4 bg-[#f7cec0] text-white uppercase tracking-[0.2em] text-sm hover:opacity-90 transition duration-300">

            Comprar Agora

          </button>

        </div>

      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="py-28 px-6 md:px-10 bg-[#F5ECE7]"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8a6f2d] mb-4">
            Sobre
          </p>

          <h3 className="font-serif text-4xl md:text-5xl font-light mb-8 text-[#3A2F2A]">
            Moda feminina com identidade elegante
          </h3>

          <p className="text-lg text-[#5c463d] leading-9">
            A Vanna Li nasceu com o propósito de trazer sofisticação,
            minimalismo e autenticidade para mulheres modernas.
            Cada coleção é pensada para unir conforto, elegância
            e estilo atemporal.
          </p>

        </div>

      </section>

      {/* LOJA */}
      <section
        id="loja"
        className="py-24 px-6 md:px-10 bg-[#E7C5BA]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8a6f2d] mb-4">
              Coleção
            </p>

            <h3 className="font-serif text-4xl md:text-5xl font-light">
              Destaques da Temporada
            </h3>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group overflow-hidden">

              <div className="relative h-[500px] rounded-sm overflow-hidden">

                <Image
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1974&auto=format&fit=crop"
                  alt="Vestido Minimalista"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="pt-5">

                <h4 className="text-2xl font-serif">
                  Vestido Minimalista
                </h4>

                <p className="text-[#8a6f2d] mt-2">
                  R$ 249,90
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="group overflow-hidden">

              <div className="relative h-[500px] rounded-sm overflow-hidden">

                <Image
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop"
                  alt="Conjunto Premium"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="pt-5">

                <h4 className="text-2xl font-serif">
                  Conjunto Premium
                </h4>

                <p className="text-[#8a6f2d] mt-2">
                  R$ 329,90
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="group overflow-hidden">

              <div className="relative h-[500px] rounded-sm overflow-hidden">

                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1974&auto=format&fit=crop"
                  alt="Moda Casual Chic"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="pt-5">

                <h4 className="text-2xl font-serif">
                  Moda Casual Chic
                </h4>

                <p className="text-[#8a6f2d] mt-2">
                  R$ 199,90
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTATO */}
      <footer
        id="contato"
        className="bg-[#dcb7ab] py-20 px-6 md:px-10"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* MARCA */}
          <div>

            <h4 className="font-serif text-4xl font-light tracking-[0.2em] uppercase text-[#C7A542] mb-5">
              Vanna Li
            </h4>

            <p className="text-[#5c463d] leading-8">
              Elegância feminina moderna para mulheres que desejam
              autenticidade, estilo e sofisticação.
            </p>

          </div>

          {/* MENU */}
          <div>

            <h4 className="uppercase tracking-[0.2em] text-sm mb-5 text-[#8a6f2d]">
              Navegação
            </h4>

            <div className="flex flex-col gap-4 text-[#5c463d]">

              <a href="#inicio" className="hover:text-[#C7A542] transition">
                Início
              </a>

              <a href="#sobre" className="hover:text-[#C7A542] transition">
                Sobre
              </a>

              <a href="#loja" className="hover:text-[#C7A542] transition">
                Loja
              </a>

              <a href="#contato" className="hover:text-[#C7A542] transition">
                Contato
              </a>

            </div>

          </div>

          {/* CONTATO */}
          <div>

            <h4 className="uppercase tracking-[0.2em] text-sm mb-5 text-[#8a6f2d]">
              Contato
            </h4>

            <div className="flex flex-col gap-4 text-[#5c463d]">

              <p>contato@vannili.com</p>

              <p>(41) 99999-9999</p>

              <p>Curitiba - PR</p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}