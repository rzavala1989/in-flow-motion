import { GiFairyWand } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import { days_one } from "@/app/font";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center width-full h-14 px-6 py-3 border-b border-solid border-inherit">
        <div className="flex justify-center items-center gap-2">
          <p
            className={`font-semibold text-xxl orange_gradient ${days_one.className}`}
          >
            InFlowMotion
          </p>
        </div>
        <UserButton afterSignOutUrl="/" />
        {/* <a href="https://github.com/YuluDuan" target="_blank">
          <FaGithub className="w-7 h-7" />
        </a> */}
      </nav>
    </>
  );
};

export default Header;
