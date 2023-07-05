import { HiDownload } from "react-icons/hi";

export function Hero() {
  return (
    <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black  to-blue-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold">
                Bruno
              </span>
              <span className="font-headline text-5xl font-light text-blue-400">
                Farias Aguiar
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-20 rounded-full bg-blue-800" />
              Desenvolvedor front-end júnior React Native.js. Além disso,
              especialista em banco de dados.
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-justify">
              Como programador front-end React Native júnior, estou me
              especializando em desenvolvimento de aplicativos móveis. Minha
              experiência também abrange a manipulação eficiente de bancos de
              dados. Com um conhecimento sólido em estruturas de armazenamento e
              consultas, sou capaz de criar soluções eficazes para armazenar e
              recuperar informações. Minha paixão pela programação me impulsiona
              a aprender constantemente, buscando aprimorar minhas habilidades e
              me manter atualizado com as melhores práticas da indústria. Com um
              enfoque em entregar experiências de usuário intuitivas e de alta
              qualidade, estou sempre pronto para enfrentar novos desafios e
              contribuir de forma significativa para projetos no
              desenvolvimento.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="#contact"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-400"
              >
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <a
                href="../../../doc/Curriculo.pdf"
                target="_blank"
                className="button flex items-center gap-2 text-gray-600 hover:text-blue-400"
              >
                <HiDownload />
                Baixe meu CV
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </>
  );
}
