import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { useSelector } from "react-redux";

const MainAboutSertif = ({ img, judul, desc, category, link }) => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <div className="flex sm:flex-row flex-col gap-3 w-full sm:p-4 p-0 border border-slate-300 rounded-xl">
      <div className="sm:w-32 w-full sm:h-24 h-full relative group">
        <Link href={link}>
          <div className="absolute top-0 left-0 flex gap-2 justify-center items-center w-full h-full font-semibold text-white bg-black/70 sm:rounded-xl rounded-t-xl opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h1 className="sm:text-xs text-lg">View Certificate</h1>
            <div className="sm:hidden block">
              <Logo name={"arrowright"} size={24} />
            </div>
          </div>
        </Link>
        <Image
          src={`/${img}.png`}
          alt="image"
          width={500}
          height={500}
          className="rounded-t-xl w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 sm:p-0 p-4">
        <div className="flex flex-col">
          <Link
            href={link}
            className={`text-lg font-semibold ${
              theme ? "hover:text-blue-500" : "hover:text-orange-500"
            }`}>
            {judul}
          </Link>
          <i className="text-sm">{category}</i>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default MainAboutSertif;
