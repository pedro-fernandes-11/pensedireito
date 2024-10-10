import NavLink from "../NavLink";
import Navbar from "../Navbar";

const Hero = () => (
  <section className="bg-custom-library">
    <Navbar />
    <div className="custom-screen py-20 text-slate-200 md:py-36">
      <div className="hidden">
        <img src="" alt="" />
      </div>
      <div className="space-y-5 mx-auto text-start">
        <p className="text-4xl font-normal text-slate-200 sm:text-5xl">
          MARCIO FERNANDES SOC IND ADV
        </p>
        <p>
          CNPJ: 54.866.790/0001-11
          <br />
          OAB/RS: 49.841
        </p>
        <p className="max-w-2xl font-thin sm:text-4xl border-l-2 px-3 md:px-6">
          A defesa que você procura, com a experiência que você precisa
        </p>
        <div className="flex gap-x-3 font-medium text-sm">
          <NavLink
            href="https://wa.me/5551986085828"
            className="block font-medium text-sm text-gray-600 bg-slate-200 hover:bg-slate-400 active:bg-gray-900 md:inline"
          >
            Entre em contato
          </NavLink>
          <NavLink
            href="#sobre"
            className="text-slate-200-700 border hover:bg-slate-400"
            scroll={false}
          >
            Sobre mim
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
