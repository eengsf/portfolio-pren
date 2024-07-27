import Image from "next/image";

const MainExperienceDetail = ({ img, judul, category, desc }) => {
  return (
    <div className="flex flex-col gap-5 w-full p-4 border border-slate-300 rounded-xl">
      <div className="flex items-center gap-3 w-full">
        <div className="sm:w-12 sm:h-12 w-16 h-16 ">
          <Image
            src={`/${img}`}
            alt="image"
            width={500}
            height={500}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="sm:text-lg text-base font-semibold">{judul}</h1>
          <i className="sm:text-sm text-xs">{category}</i>
        </div>
      </div>
      <div>
        {desc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default MainExperienceDetail;
