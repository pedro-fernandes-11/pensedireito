import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Ricardo Gomes",
      title: "36 - Arquiteto",
      quote:
        "O advogado lutou pelos meus direitos de forma incansável. Estou muito satisfeito com o resultado e recomendo a todos!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Carlos Eduardo",
      title: "45 - Empresário",
      quote:
        "Fiquei muito satisfeito com a assessoria recebida. O trabalho do Dr. Marcio Fernandes foi impecável e os resultados superaram minhas expectativas.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Ana Clara Martins",
      title: "32 - Analista Financeira",
      quote:
        "O advogado foi extremamente atencioso e me ajudou a entender todos os detalhes do meu caso. Agradeço pela dedicação e profissionalismo!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Fernanda Lopes",
      title: "29 - Professora",
      quote:
        "Recebi orientações claras e objetivas sobre meu caso. A equipe foi sempre disponível e me apoiou em todas as etapas.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      name: "Mariana Alves",
      title: "41 - Médica",
      quote:
        "Estou impressionada com a ética e a seriedade do Dr. Marcio Fernandes. Ele me representou de forma exemplar e sempre esteve ao meu lado.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Juliano Pereira",
      title: "38 - Engenheiro",
      quote:
        "Graças ao trabalho desse advogado, consegui resolver um conflito complexo com muita tranquilidade. Senti-me seguro em cada decisão.",
    },
  ];

  return (
    <SectionWrapper className="pb-0">
      <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Testemunho dos clientes
          </h2>
          <p className="mt-3 text-gray-600">
            Leia alguns dos feedbacks que recebo dos meus clientes
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-white border p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="w-14 h-14 object-cover rounded-full"
                      alt={item.name}
                    />
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
