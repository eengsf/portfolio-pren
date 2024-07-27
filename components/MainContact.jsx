import Link from "next/link";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import MainContactForm from "./MainContactForm";
import { motion } from "framer-motion";

const MainContact = () => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full pb-12 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col gap-2 pb-5 border-b border-b-slate-300">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p>Lets get in touch.</p>
      </div>
      <div className="flex flex-col gap-2 py-5">
        <h1>Find me on</h1>
        <div className="flex flex-col gap-4 p-2 2lg:flex-row">
          <Link
            href={"/"}
            className={`py-2 px-5 rounded-lg 2md:hover:scale-105 hover:scale-[102%] ${
              theme ? "bg-blue-300" : "bg-orange-500"
            }`}>
            <div className="flex justify-center gap-1 font-semibold">
              {theme ? (
                <Logo name={"github"} size={24} color={"yes"} />
              ) : (
                <Logo name={"github"} size={24} color={"no"} />
              )}
              <p>Github</p>
            </div>
          </Link>
          <Link
            href={"/"}
            className={`py-2 px-5 rounded-lg 2md:hover:scale-105 hover:scale-[102%] ${
              theme ? "bg-blue-300" : "bg-orange-500"
            }`}>
            <div className="flex justify-center gap-1 font-semibold">
              <Logo name={"linkedin"} size={24} color={"yes"} />
              <p>LinkedIn</p>
            </div>
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UC0vqQM71BwT-blOJ2deI4bw"}
            className={`py-2 px-5 rounded-lg 2md:hover:scale-105 hover:scale-[102%] ${
              theme ? "bg-blue-300" : "bg-orange-500"
            }`}>
            <div className="flex justify-center gap-1 font-semibold">
              <Logo name={"youtube"} size={24} color={"yes"} />
              <p>YouTube</p>
            </div>
          </Link>
          <Link
            href={"https://www.tiktok.com/@eengsf_?_t=8ia5kTpOlQf&_r=1"}
            className={`py-2 px-5 rounded-lg 2md:hover:scale-105 hover:scale-[102%] ${
              theme ? "bg-blue-300" : "bg-orange-500"
            }`}>
            <div className="flex justify-center gap-1 font-semibold">
              {theme ? (
                <Logo name={"tiktok"} size={24} color={"yes"} />
              ) : (
                <Logo name={"tiktok"} size={24} color={"no"} />
              )}
              <p>TikTok</p>
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/eengsf_/"}
            className={`py-2 px-5 rounded-lg 2md:hover:scale-105 hover:scale-[102%] ${
              theme ? "bg-blue-300" : "bg-orange-500"
            }`}>
            <div className="flex justify-center gap-1 font-semibold">
              <Logo name={"instagram"} size={24} color={"yes"} />
              <p>Instagram</p>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h1>Send me a message</h1>
        <MainContactForm />
      </div>
    </motion.main>
  );
};

export default MainContact;
