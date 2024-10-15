import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";

import CarlaDevit from "../../../public/carladevit.png";
import VolneiBraganca from "../../../public/volneibraganca.png";
import ValterCarlos from "../../../public/valtercarlos.png";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: (
        <Image
          src={CarlaDevit}
          className="rounded-full shadow-xl w-14 h-14"
          alt="Carla Devit"
        />
      ),
      name: "Carla Devit",
      title: "Administradora de empresa",
      quote:
        "Dr Márcio é um profissional referência na área de advocacia, um advogado ímpar e competente que me auxilia em todas as minhas dúvidas e decisões a tomar referente ao meu processo!",
    },
    {
      avatar: (
        <Image
          src={ValterCarlos}
          className="rounded-full shadow-xl w-14 h-14"
          alt="Valter Carlos"
        />
      ),
      name: "Valter Carlos",
      title: "Empresário",
      quote:
        "A sua luta é por justiça e para que a lei seja cumprida. Parabéns pelo seu profissionalismo. E obrigado por ser meu advogado!",
    },
    {
      avatar: (
        <Image
          src={VolneiBraganca}
          className="rounded-full shadow-xl w-14 h-14"
          alt="Volnei Bragança"
        />
      ),
      name: "Volnei Bragança",
      title: "Industriário",
      quote:
        "Doutor Márcio, obrigado por todos serviços prestados nesses longos anos para mim e minha família, sempre agindo com dedicação e profissionalismo. Espero sempre contar com o senhor. Obrigado e até logo 👊🏼.",
    },
  ];

  return (
    <SectionWrapper className="pb-0">
      <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Testemunhos de alguns clientes
          </h2>
          <p className="mt-3 text-gray-600">
            Leia um pouco do que meus clientes dizem do meu serviço
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-white border p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    {item.avatar}
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
