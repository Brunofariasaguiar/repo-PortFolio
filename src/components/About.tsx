import { FaWhatsapp } from "react-icons/fa";

export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Estou prestes a concluir minha graduação em Banco de Dados, com
          experiência em SQL e PSQL. Além disso, estou me dedicando ao estudo de
          programação front-end, com foco em JavaScript, React Native e
          TypeScript. Estou entusiasmado em aplicar meus conhecimentos em
          projetos desafiadores e contribuir para o sucesso no desenvolvimento.
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
      </div>

      <div className="mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-70 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <span className="mr-1">Meu nome é</span>
            <span className="font-headline font-bold uppercase text-blue-900">
              Bruno Farias
            </span>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>33</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      /*href="tel:+5567992475581"*/
                      href="https://wa.me/5567992475581?text=Olá,%20Tudo%20bem!"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      +55 (67) 9-9247-5581
                      <tr>
                        <FaWhatsapp
                          href="https://wa.me/5567992475581?text=Olá,%20Tudo%20bem!"
                          target="_blank"
                          className="h-0,5 w-0,5"
                        />
                      </tr>
                    </a>

                    <p />
                    <a
                      /*href="tel:+5567998897571"*/
                      className="underline hover:text-blue-800"
                    >
                      +55 (67) 9-9889-7571
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:brunofarias17@hotmail.com"
                      className="underline hover:text-blue-800"
                    >
                      brunofarias17@hotmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://goo.gl/maps/avPMiPJ2Uy6i8NtHA"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      Campo Grande - MS
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(images/eu2.jpg)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
        </div>
      </div>
    </section>
  );
}
