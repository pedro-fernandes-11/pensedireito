import React from "react";

const GoogleMapsEmbed = () => {
  const src =
    "https://www.google.com/maps/place/MARCIO+FERNANDES+ADVOCACIA+TRABALHISTA/@-29.9398616,-51.0813038,17.75z/data=!4m6!3m5!1s0x951973f2f58a260f:0x9690eb856f56c261!8m2!3d-29.9391624!4d-51.0810466!16s%2Fg%2F11y4hchmhy?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D";
  return (
    <div className="mt-12">
      <iframe
        src="https://maps.google.com/maps?q=-29.939051,-51.081064&z=18&output=embed"
        style={{
          height: "350px",
        }}
        className="w-full"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
