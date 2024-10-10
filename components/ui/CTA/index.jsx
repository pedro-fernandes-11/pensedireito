import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import LawyerImage from "../../../public/marcio.png";
import Image from "next/image";

import WhatsappIcon from "../../../public/icons/zap2.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import MailIcon from "../../../public/icons/mail.svg";

const CTA = () => {
  const socialInfo = [
    {
      icon: <Image src={WhatsappIcon} className="w-8" />,
      href: "https://wa.me/5551986085828",
    },
    {
      icon: <Image src={MailIcon} className="w-8" />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=marciofernandesadvocacia@gmail.com&su=Contato pelo site&body=Ola, estou entrando em contato via seu site...",
    },
    {
      icon: <Image src={InstagramIcon} className="w-8" />,
      href: "https://www.instagram.com/marciofernandesadv/",
    },
  ];
  return (
    <SectionWrapper id="sobre" className="">
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="mt-6 md:mt-0">
            <div className="max-w-2xl sm:text-center md:mx-auto">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Sobre mim
              </h2>
              <p className="mt-3 text-gray-600">
                Sou Márcio Fernandes, advogado inscrito na OAB/RS desde 2000.
              </p>
            </div>
            <div className="grid md:grid-cols-custom">
              <div className="flex flex-col justify-start items-start">
                <p className="my-12 bg-white border p-4 rounded-xl text-gray-700">
                  Desde 2000, venho prestando serviços jurídicos de excelência,
                  com inscrição ativa na OAB/RS. Como Diretor Tesoureiro da
                  OAB/RS Subseção Cachoeirinha em diferentes períodos, lidero
                  com integridade e compromisso. <br /> <br /> Especializo-me em
                  advocacia preventiva e contenciosa, abrangendo processos
                  cíveis, contratos, trabalhistas, previdenciários e criminais.
                  Minha vasta experiência acadêmica e profissional me permite
                  atuar com precisão e eficiência, sendo frequentemente nomeado
                  pelo Estado do RS como defensor dativo em processos de
                  competência do Jecrim. <br />
                  <br /> Meu escritório, estrategicamente localizado na Rua
                  Deolindo Manoel Selão, 143, bairro Vale do Sol em
                  Cachoeirinha/RS, oferece um ambiente profissional bem
                  estruturado em um prédio próprio. Estamos próximos ao hospital
                  de Cachoeirinha, shopping center e parque municipal,
                  facilitando o acesso e oferecendo estacionamento conveniente
                  para nossos clientes. <br />
                  <br /> Estou pronto para defender seus direitos com dedicação
                  e expertise, proporcionando soluções jurídicas eficazes e
                  personalizadas.
                </p>
                <NavLink
                  href="https://www.instagram.com/marciofernandesadv/"
                  target="_blank"
                  className="bg-slate-800 text-slate-200 hover:bg-slate-400"
                  scroll={false}
                >
                  Saiba Mais
                </NavLink>
              </div>
              <div className="flex flex-col justify-start items-center md:justify-start md:items-end  py-12">
                <Image
                  src={LawyerImage}
                  className="rounded-lg shadow-xl"
                  alt="Marcio Fernandes Advogado"
                />
                <div className="flex gap-x-6 text-gray-400 mt-3">
                  {socialInfo.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      aria-label="social media"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
