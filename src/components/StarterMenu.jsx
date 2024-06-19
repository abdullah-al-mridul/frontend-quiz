import { IoLogoJavascript } from "react-icons/io";
import { LuPaintbrush2 } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { TbCookieMan } from "react-icons/tb";
import { SubjectContext } from "../context/SubjectProvider";
import { useContext } from "react";
export default function StarterMenu() {
  return (
    <div className="flex justify-between max-[900px]:flex-col max-[900px]:gap-[60px] l w-full">
      <div className="text-[white]">
        <h1 className="font-[700] max-[900px]:text-[35px] text-[60px]">
          <span className="font-[200]">Welcome to the</span> <br /> Frontend
          Quiz!
        </h1>
        <p className="text-[#A8B8CD] mt-[20px]">
          Pic a subject to get started.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-[20px] max-[900px]:items-center">
          <SelectItems variant={"html"} text={"HTML"} />
          <SelectItems variant={"css"} text={"CSS"} />
          <SelectItems variant={"js"} text={"Javascript"} />
          <SelectItems variant={"acc"} text={"Accessibility"} />
        </div>
      </div>
    </div>
  );
}
const SelectItems = ({ variant, text }) => {
  const data = useContext(SubjectContext);
  const { setSubject } = data;
  let Icon;
  switch (variant) {
    case "html":
      Icon = <IoCodeSlash />;
      break;
    case "css":
      Icon = <LuPaintbrush2 />;
      break;
    case "js":
      Icon = <IoLogoJavascript />;
      break;
    case "acc":
      Icon = <TbCookieMan />;
    default:
      variant;
  }
  let color;
  switch (variant) {
    case "html":
      color = "#F9925A";
      break;
    case "css":
      color = "#4BC690";
      break;
    case "js":
      color = "#426EC9";
      break;
    case "acc":
      color = "#A927EB";
      break;
    default:
      variant;
  }
  return (
    <div
      onClick={() => {
        setSubject(variant);
      }}
      className="flex max-[700px]:p-[10px] max-[700px]:hover:scale-105 hover:scale-105 max-[700px]:hover:scale-110 cursor-pointer transition-all duration-300 p-[20px] rounded-lg w-[350px] max-[700px]:w-[100%] items-center bg-[#3C4D67]"
    >
      <div
        style={{
          color: color,
        }}
        className={`bg-[#FFEEE7] text-[24px] p-[12px] max-[700px]:p-[10px] mr-[20px] rounded-lg`}
      >
        {Icon}
      </div>
      <div
        className={`text-[white] font-[700] max-[700px]:text-[17px] text-[19px]`}
      >
        {text}
      </div>
    </div>
  );
};
