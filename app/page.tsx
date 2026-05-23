"use client";


import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() { 

  const { scrollY } = useScroll();

  // PARALLAX REAL (movimento do fundo)
  const y = useTransform(scrollY, [0, 1200], [0, -300]);

  // BLUR DINÂMICO (efeito premium)
  const blur = useTransform(scrollY, [0, 1200], ["0px", "3px"]);

  //HEADER TRANSPARENTE
  const  [scrolled, setScrolled] = useState(false);

  //DETECTA SCROLL
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

  }, []);

  return (
    <main className="bg-[#E7C5BA] text-[#3A2F2A] scroll-smooth">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                   ? `
                     bg-white/10
                     backdrop-blur-2xl
                     border-b border-white/20
                     shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                   `
                   : `
                      bg-transparent
                    `
              }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-4">
            
            <div className="relative w-14 h-14">
              <Image
                src="/vl-logo.png"
                alt="Vanna Li"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div>
              <h1 className={`font-serif text-4xl font-light tracking-[0.25em] uppercase leading-none transition-colors duration-500 ${
                    scrolled
                    ? "text-[#C7A542]"
                    : "text-white"
                  }`}
              >
                Vanna Li
              </h1>
              
              <p className={`text-xs tracking-[0.45em] uppercase mt-1 pl-3 transition-colors duration-500 ${
                   scrolled
                     ? "text-[#8a6f2d]"
                     : "text-white/80"
                  }`}
              >
                Estilo que Inspira
              </p>
            </div>
          </a>

          {/* MENU */}
          <nav className={`hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
                 scrolled
                 ? "text-[#3A2F2A]"
                 : "text-white"
               }`}>
            <a href="#inicio" className="hover:text-[#C7A542] transition duration-300">Início</a>
            <a href="#sobre" className="hover:text-[#C7A542] transition duration-300">Sobre</a>
            <a href="#loja" className="hover:text-[#C7A542] transition duration-300">Loja</a>
            <a href="#contato" className="hover:text-[#C7A542] transition duration-300">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2070&auto=format&fit=crop"
          alt="Moda feminina"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

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

          <button className="mt-10 px-10 py-4 bg-[#f7cec0] text-white uppercase tracking-[0.2em] text-sm hover:opacity-90 transition">
            Comprar Agora
          </button>

        </div>
      </section>

      {/* SOBRE - PARALLAX PREMIUM */}
      <section
        id="sobre"
        className="relative py-100 px-6 md:px-10 overflow-hidden"
      >

        {/* FUNDO PARALLAX REAL */}
        <motion.div
          style={{ y, filter: blur }}
          className="absolute inset-0 scale-110"
        >
          <div className="absolute inset-0 scale-110">

           <div className="w-full h-[120%] bg-[url('/espelho2.jpeg')] bg-cover bg-[center_35%]" />

          </div>

        </motion.div>

        {/* OVERLAY LEVE */}
        <div className="absolute inset-0 bg-black/15 z-10" />

        {/* CONTEÚDO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative z-20 max-w-5xl mx-auto text-center text-white"
        >

          <p className="uppercase tracking-[0.45em] text-sm mb-4 opacity-80">
            Sobre
          </p>

          <h3 className="font-serif text-6xl md:text-5xl font-light mb-10 leading-tight">
            Moda feminina com identidade elegante
          </h3>

          <p className="text-lg leading-10 text-white/90 max-w-4xl mx-auto leading-tight">
            A Vanna Li nasceu com o propósito de trazer sofisticação,
            minimalismo e autenticidade para mulheres modernas.
            Cada coleção é pensada para unir conforto, elegância
            e estilo atemporal.
          </p>

        </motion.div>

      </section>

      {/* LOJA */}
      <section id="loja" className="py-24 px-6 md:px-10 bg-[#E7C5BA]">
        
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-[#8a6f2d] mb-4">
              Coleção
            </p>

            <h3 className="font-serif text-4xl md:text-5xl font-light">
              Destaques da Temporada
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (

              <motion.div
                key={item}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden"
              >

                {/* CARD */}
                <div className="relative h-[500px] rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-sm">

                  {/* IMAGEM */}
                  <Image
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1974&auto=format&fit=crop"
                    alt="Produto"
                    fill
                    className="object-cover scale-100 group-hover:scale-110 transition duration-700 ease-out"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />

                  {/* GLOW PREMIUM */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-white/10" />

                </div>

                {/* TEXTO */}
                <div className="pt-6">

                  <h4 className="text-2xl font-serif text-[#3A2F2A]">
                    Produto Premium
                  </h4>

                  <p className="text-[#8a6f2d] mt-2 text-lg">
                    R$ 249,90
                  </p>

                </div>

              </motion.div>

            ))}

            </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-[#dcb7ab] py-20 px-6 md:px-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

          <div>
            <h4 className="font-serif text-4xl font-light tracking-[0.2em] uppercase text-[#C7A542] mb-5">
              Vanna Li
            </h4>

            <p className="text-[#5c463d] leading-8">
              Elegância feminina moderna para mulheres que desejam
              autenticidade, estilo e sofisticação.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm mb-5 text-[#8a6f2d]">
              Navegação
            </h4>

            <div className="flex flex-col gap-4 text-[#5c463d]">
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#loja">Loja</a>
              <a href="#contato">Contato</a>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm mb-5 text-[#8a6f2d]">
              Contato
            </h4>

            <p>contato@vannili.com</p>
            <p>(41) 99999-9999</p>
            <p>Curitiba - PR</p>
          </div>

        </div>

      </footer>

    </main>
  );
}