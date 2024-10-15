import React, { useEffect, useState } from "react";
import Image from "next/image";

import SectionWrapper from "../../SectionWrapper";

import AdvocaciaPreventivaIcon from "../../../public/icons/predictive.svg";
import DireitoPenalIcon from "../../../public/icons/penal.svg";
import AcoesTrabalhistasIcon from "../../../public/icons/work.svg";
import DireitoCivilICon from "../../../public/icons/civil.svg";
import INSSIcon from "../../../public/icons/inss.svg";
import DireitoConsumidorIcon from "../../../public/icons/customer.svg";

const Features = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      icon: (
        <Image
          src={AdvocaciaPreventivaIcon}
          className="w-14"
          alt="Advocacia Preventiva"
        />
      ),
      title: "Advocacia Preventiva",
      desc: "Previne conflitos com orientações jurídicas e medidas antecipadas.",
    },
    {
      icon: (
        <Image src={DireitoPenalIcon} className="w-14" alt="Direito penal" />
      ),
      title: "Direito Penal",
      desc: "Define crimes e punições, protegendo a sociedade e assegurando a defesa.",
    },
    {
      icon: (
        <Image
          src={AcoesTrabalhistasIcon}
          className="w-14"
          alt="Acoes trabalhistas"
        />
      ),
      title: "Acoes trabalhistas",
      desc: "Garante os direitos dos trabalhadores em conflitos com empregadores.",
    },
    {
      icon: (
        <Image src={DireitoCivilICon} className="w-14" alt="Direito Civil" />
      ),
      title: "Direito Civil",
      desc: "Regula relações jurídicas envolvendo contratos, família e propriedade.",
    },
    {
      icon: <Image src={INSSIcon} className="w-14" alt="INSS" />,
      title: "INSS",
      desc: "Administra benefícios previdenciários como aposentadoria, auxílio-doença e pensão.",
    },
    {
      icon: (
        <Image
          src={DireitoConsumidorIcon}
          className="w-14"
          alt="Direito do consumidor"
        />
      ),
      title: "Direito do Consumidor",
      desc: "Protege os consumidores, garantindo transparência e reparação nas relações de consumo.",
    },
  ];

  return (
    <div
      className="bg-custom-library-2 max-w-screen mx-auto px-4 md:px-8 bg-cover bg-center"
      style={{
        backgroundPositionY: `${offsetY * 0.5}px`,
      }}
    >
      <SectionWrapper
        id="atuacao"
        className="max-w-screen-xl mx-auto px-4 md:px-8 text-gray-600"
      >
        <div>
          <div className="max-w-2xl sm:text-center md:mx-auto">
            <h2 className="text-slate-200 text-3xl font-semibold sm:text-4xl">
              Atuação
            </h2>
            <p className="mt-3 text-slate-300 text-lg">
              Atualmente, meu trabalho contempla, principalmente, as seguintes
              areas:
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-gradient-to-t from-[#7E7E7E]/[0.6] to-[#555555]/[0.6] p-4 rounded-xl"
                >
                  <figure>
                    <div className="flex items-center gap-x-4">
                      {item.icon}
                      <div>
                        <span className="block text-slate-200 text-xl font-semibold">
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      <p className="mt-6 text-slate-200 font-thin">
                        {item.desc}
                      </p>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Features;
