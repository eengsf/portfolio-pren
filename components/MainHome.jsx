import Link from "next/link";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "next/image";

const MainHome = () => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="pb-12">
      <div className="flex flex-col gap-5 pb-5 border-b border-b-slate-300">
        <div className="flex flex-col gap-2">
          <h1 className="flex text-2xl font-semibold 2md:text-3xl">
            Hi, Iam Shofiyul Fuad
            <span className="shake">👋</span>
          </h1>
          <div className="flex gap-6">
            <li>front end developer</li>
            <li>robotic</li>
          </div>
        </div>
        <p className="text-justify">
          I am a graduate of Electrical Engineering from Trunojoyo University. I
          have a strong interest in web programming, and I am currently focusing
          on improving my skills in front-end development.
        </p>
      </div>
      <div className="flex flex-col gap-2 py-5">
        <div className="flex items-center gap-2 mb-5 text-xl">
          <Logo name="code" size={20} />
          <h1 className="font-semibold">Skills</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm">Skills Web</h1>
          </div>
          <div>
            <ul className="grid justify-between grid-cols-4 2lg:flex">
              <li className="flex flex-col items-center gap-2 pb-2 group/html">
                <Logo name="HTML5" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/html:opacity-100 group-hover/html:translate-y-0">
                  HTML5
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/css">
                <Logo name="CSS" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/css:opacity-100 group-hover/css:translate-y-0">
                  CSS
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/js">
                <Logo name="JavaScript" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/js:opacity-100 group-hover/js:translate-y-0">
                  Javascript
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/php">
                <Logo name="PHP" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/php:opacity-100 group-hover/php:translate-y-0">
                  PHP
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/react">
                <Logo name="React.js" size={35} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/react:opacity-100 group-hover/react:translate-y-0">
                  React.js
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/next">
                <Logo name="Next.js" size={35} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/next:opacity-100 group-hover/next:translate-y-0">
                  Next.js
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/laravel">
                <Logo name="Laravel" size={35} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/laravel:opacity-100 group-hover/laravel:translate-y-0">
                  Laravel
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/tail">
                <Logo name="Tailwindcss" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/tail:opacity-100 group-hover/tail:translate-y-0">
                  Tailwind
                </h1>
              </li>
              {/* <li className="flex flex-col items-center gap-2 pb-2 group/mongo">
                <Logo name="Mongodb" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/mongo:opacity-100 group-hover/mongo:translate-y-0">
                  Mongodb
                </h1>
              </li> */}
              <li className="flex flex-col items-center gap-2 pb-2 group/mysql">
                <Logo name="MySQL" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/mysql:opacity-100 group-hover/mysql:translate-y-0">
                  MySQL
                </h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm">Skills Robotic </h1>
          </div>
          <div>
            <ul className="grid justify-between grid-cols-4 2md:flex 2md:max-w-lg">
              <li className="flex flex-col items-center gap-2 pb-2 group/c">
                <Logo name="C Lang" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/c:opacity-100 group-hover/c:translate-y-0">
                  C Lang
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2   group/c++">
                <Logo name="C++" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/c++:opacity-100 group-hover/c++:translate-y-0">
                  C++
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/arduino">
                <Logo name="Arduino" size={40} />
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/arduino:opacity-100 group-hover/arduino:translate-y-0">
                  Arduino
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/eagle">
                <div>
                  <Image src="/eagle.png" width={40} height={40} alt="eagle" />
                </div>
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/eagle:opacity-100 group-hover/eagle:translate-y-0">
                  Eagle
                </h1>
              </li>
              <li className="flex flex-col items-center gap-2 pb-2 group/inventor">
                <div>
                  <Image
                    src="/inventor.png"
                    width={40}
                    height={40}
                    alt="inventor"
                  />
                </div>
                <h1 className="text-xs transition-all duration-300 -translate-y-full opacity-0 group-hover/inventor:opacity-100 group-hover/inventor:translate-y-0">
                  Inventor
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 border 2md:p-8 border-slate-300 rounded-xl">
        <div className="flex items-center gap-2 text-xl 2md:text-2xl ">
          <Logo name={"rocket"} size={25} />
          <h1 className="font-semibold">Let{"'"}s explore</h1>
        </div>
        <div>
          <p className="text-justify">
            Discover more about what I offer by exploring this portfolio or
            check out my resume
          </p>
          <Link
            href={
              "https://drive.google.com/file/d/1anFrb3cxsGdulQFfnaEXpAbjW1jULciI/view?usp=sharing"
            }
            className={`inline-flex gap-2 items-center mt-4 ${
              theme ? "bg-blue-300" : "bg-orange-500"
            } py-2 px-5 rounded-lg hover:scale-105`}>
            <Logo name={"arrowright"} size={20} />
            My Resume
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MainHome;
