import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroNotebook from '../assets/elementos_graficos/hero-notebook.png';
import { fadeUp } from '../lib/animations';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('sobre-nos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative bg-[#EAF3F3] dark:bg-[#0d1117] pt-[94px] pb-10 md:pt-8 md:pb-14 transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-8 w-fit rounded-2xl border border-black/70 dark:border-[#30363d] px-4 py-1 md:mb-5 md:px-7 md:py-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1
            style={{ fontFamily: 'DM Sans' }}
            className="text-[31px] leading-none text-black dark:text-[#e2e5e9] md:text-[48px]"
          >
            Sistemas &amp; Automações
          </h1>
        </motion.div>

        <motion.p
          style={{ fontFamily: 'DM Sans' }}
          className="mb-6 text-center text-[24px] leading-none text-black dark:text-[#e2e5e9] md:mb-6 md:text-[28px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
        >
          de <span className="font-bold italic">Qualidade</span>
        </motion.p>

        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-[minmax(520px,560px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <motion.div
            className="relative hidden h-[560px] overflow-visible lg:block lg:-ml-14 lg:-mt-24 xl:-ml-20 xl:-mt-32"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
          >
            <div className="h-[560px] w-[720px] max-w-none" aria-hidden="true">
              <img
                src={heroNotebook}
                alt="Notebook"
                className="h-full w-full scale-[1.08] object-contain object-left"
              />
            </div>
          </motion.div>

          <motion.div
            className="justify-self-start lg:mt-6 xl:mt-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.12 }}
          >
            <div className="flex w-full max-w-[920px] items-center rounded-2xl border border-white/35 bg-gradient-to-r from-[#ffde59]/85 to-[#ff914d]/80 px-6 py-7 shadow-[0_18px_42px_rgba(13,17,23,0.16),0_6px_18px_rgba(255,145,77,0.12)] ring-1 ring-black/5 md:h-[300px] md:px-12 md:py-9 lg:h-[310px] dark:border-white/10 dark:shadow-[0_20px_48px_rgba(1,4,9,0.34),0_6px_18px_rgba(255,145,77,0.10)] dark:ring-white/10">
              <p
                style={{ fontFamily: 'DM Sans' }}
                className="mx-auto w-full max-w-[650px] text-left text-[20px] leading-[1.45] text-black md:text-[21px] md:leading-[1.5] [text-wrap:pretty]"
              >
                Na <b>Lansutech</b>, nós transformamos a tecnologia em uma ferramenta simples para o seu dia a dia.<br/>  Sabe aqueles <b>processos manuais</b> que tomam <b>muito tempo</b> ou planilhas que já não dão mais conta do recado? <br/>Nós criamos sistemas inteligentes e automações sob medida para resolver esses problemas de forma definitiva.
              </p>
            </div>

            <div className="mt-3 flex justify-center md:mt-4">
              <motion.button
                type="button"
                onClick={scrollToAbout}
                aria-label="Ir para a seção Sobre nós"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full text-[#e2c025] transition-colors duration-200 hover:text-[#c9aa15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2c025]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EAF3F3] md:h-20 md:w-20 dark:focus-visible:ring-offset-[#0d1117]"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ y: 4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <ChevronDown className="h-10 w-10 md:h-20 md:w-20" strokeWidth={2} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
