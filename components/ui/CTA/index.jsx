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
    <>
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
                <p className="my-12 bg-white border p-4 rounded-xl text-gray-700 text-justify">
                  Márcio da Silva Fernandes, casado, atualmente com 55 anos de
                  idade. Advogado inscrito na OAB/RS em 14/06/2000, com registro
                  profissional no conselho de classe, sob n. 49.841. <br />
                  <br /> Graduado pela ULBRA, em Canoas/RS. Especializando
                  <i> latu sensu</i> em Direito Penal e Política Criminal pela
                  UFRGS e em Direito do Trabalho pela PUC/RS, Direito
                  Previdenciário pela FMP-OAB/RS; Especialização em Advocacia
                  Cível pela FMP-OAB/RS.
                  <br /> <br />{" "}
                  <a
                    href="https://subsecoes.oabrs.org.br/cachoeirinha/diretoria"
                    className="underline"
                  >
                    Atualmente Sec. Adjunto da OAB/RS Subseção Cachoeirinha
                  </a>
                  , já tendo participado como Secretário Geral e Tesoureiro na
                  mesma Subseção. Ex-membro da JARI Municipal, representando a
                  OAB/RS Subseção de Cachoeirinha. Representante da OAB/RS
                  Subseção de Cachoeirinha no Conselho Municipal de Habitação.
                  Nomeações como Advogado dativo no JECrim de Cachoeirinha/RS.{" "}
                  <br /> <br />
                  Advogado com experiência em causas de complexidades variadas,
                  representação em processos de competência do JECrim, Vara
                  Criminal e Tribunal do Juri. <br /> <br /> Sucessões e
                  contratos – Advocacia extrajudicial. Ações Cíveis, trabalhista
                  e previdenciárias. <br /> <br /> Advocacia <i>
                    pro bono
                  </i>{" "}
                  eventual de serviços jurídicos, conforme regramento interno,
                  em favor de pessoas de baixa renda, que não dispuserem de
                  recursos par a contração de profissional. <br /> <br />
                  Proprietário responsável por MARCIO FERNANDES SOC IND ADV,
                  empresa de advocacia de direito privado, com inscrição no CNPJ
                  54.866.790/0001-11 e na OAB/RS PJ sob n. 14.901.
                  <br /> <br />{" "}
                  <a href="#localizacao" className="underline">
                    Escritório em prédio próprio, estrategicamente localizado na
                    Rua Deolindo Manoel Selão, 143, bairro Vale do Sol em
                    Cachoeirinha/RS.{" "}
                  </a>{" "}
                  <br /> <br />
                  Oferece um ambiente profissional bem estruturado, próximo ao
                  hospital de Cachoeirinha, Shopping center e parque municipal,
                  facilitando o acesso e oferecendo estacionamento conveniente
                  para clientes. <br />
                  <br />
                  Pronto para defender seus direitos com dedicação e expertise,
                  proporcionando soluções jurídicas eficazes e personalizadas.
                  <br />
                  <br />
                  <a href="https://wa.me/5551986085828" className="underline">
                    Agende sua visita
                  </a>
                  , teremos prazer em recebê-lo e prestar serviços jurídicos de
                  excelência.
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
    </>
  );
};

export default CTA;
