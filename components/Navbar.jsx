
import Golf from "../public/golf.jpg";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <div>
      <nav className="relative w-full h-25 bg-gray-200">
        <div className="flex items-center h-full w-full px-4 2xl:px-16">
          <Link href="/">
          <Image
            src={Golf}
            alt="Golf"
            width="150"
            height="10"
            className="cursor-pointer"
            priority
          />
          </Link>

          <div className="relative left-10">
            <p class="peer px-5 py-2 hover:bg-gray-300 text-slate-950 text-xl">
              Golf Holidays |
            </p>

            <div
              class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg absolute z-10"
            >
              <Link className="px-5 py-3 hover:bg-gray-200"  href="/thailand">
                Thailand
              </Link>
              <a class="px-5 py-3 hover:bg-gray-200" href="#">
                Cambodia
              </a>
              <a class="px-5 py-3 hover:bg-gray-200" href="#">
                Vietnam
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-6 bg-slate-900"></div>
    </div>
  );
};

export default Navbar;