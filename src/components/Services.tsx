import {
  HiCommandLine,
  HiComputerDesktop,
  HiDevicePhoneMobile,
} from "react-icons/hi2";
import { BsFiletypeSql } from "react-icons/bs";
export function Services() {
  const services = [
    {
      title: "SQL",
      description:
        "Tenho ampla experiência na criação de consultas SQL, desenvolvimento  de comandos UPDATE e INSERT, e habilidade em realizar consultas complexas no PSQL, incluindo condições aninhadas e muito mais. Minha expertise abrange diversas técnicas avançadas para manipulação de dados, garantindo resulta   dos precisos e eficientes.",
      icon: <BsFiletypeSql className="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description: "Desenvolvimento de sistemas e APIs REST com Node.js.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },

    {
      title: "Mobile",
      description: "Desenvolvimento de aplicativos Android e iOS.",
      icon: <HiDevicePhoneMobile className="h-12 w-12" />,
    },
  ];
  return (
    <section className="container mx-auto my-12 max-w-6xl p-5 md:text-justify">
      <div className="p-5 text-center">
        <p className="text-sm font-semibold uppercase text-blue-900">
          O que faço de melhor
        </p>
        <h2 className="md-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Menus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
      </div>
      <div className="mt-2 flex flex-col gap-1 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-auto rounded-lg bg-blue-700 p-3 text-white "
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold p-1">{service.title}</h3>
            <p className="text-sm ">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
