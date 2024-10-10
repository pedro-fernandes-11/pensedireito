import React from "react";
import Image from "next/image";

import WhatsappIcon from "../../../public/icons/zap.svg";

const FixedContact = () => {
  return (
    <div className="fixed bottom-4 right-4 p-4 bg-[#25d366] text-white rounded shadow-lg z-50">
      <h3 className="text-lg font-bold">Precisa de um advogado?</h3>
      <a
        href="https://wa.me/5551986085828"
        className="flex gap-2 mt-2 inline-block bg-white text-[#25d366] px-4 py-2 rounded"
      >
        Contato profissional
        <Image src={WhatsappIcon} className="w-6" />
      </a>
    </div>
  );
};

export default FixedContact;
