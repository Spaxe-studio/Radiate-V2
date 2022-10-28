import Image from "next/image";
import Exclude from "../assets/img/Exclude.svg";
import vectorTax from "../assets/img/vectorTax.svg";
import heroImage from "../assets/img/hero-img.svg";
import tokenImage from "../assets/img/tokenomic-img.svg";
import pic1 from "../assets/img/photo1.svg";
import pic2 from "../assets/img/photo2.svg";
import pic3 from "../assets/img/photo3.svg";
import pic4 from "../assets/img/photo4.svg";

const activity = [
  {
    id: 1,
    title: "1/",
    comment: `Stealth fair launch contract onto the ethereum blockchain.  Immediately deploy staking contract.`,
  },
  {
    id: 2,
    title: "2/",
    comment: ` Extensive marketing begins across all fronts.
    First core utility announced and launched onto the blockchain.`,
  },
  {
    id: 3,
    title: "3/",
    comment: `Second core utility begins.  Mainstream marketing campaign commences.`,
  },
];

const people = [
  {
    name: "Mark K.",
    imageUrl: pic1,
    bio: "Doxxing will commence after all utilites are released.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Phil R.",
    imageUrl: pic2,
    bio: "Doxxing will commence after all utilites are released.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Myles W.",
    imageUrl: pic3,
    bio: "Doxxing will commence after all utilites are released.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Declan J.",
    imageUrl: pic4,
    bio: "Doxxing will commence after all utilites are released.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];
export default function Home() {
  return (
    <main className="lg:relative bg-black">
      {/* hero */}
      <div className=" overflow-hidden ">
        <div className="items-center text-center justify-center">
          <span className="relative text-[#18191bc8] font-bold top-5 text-center uppercase text-[5rem] lg:text-[12rem] md:text-[8rem] tracking-widest  ">
            Forge
          </span>
          <h1 className="text-center absolute lg:ml-[28rem] md:ml-[15rem] sm:ml-[15rem] ml-[7rem] font-bold uppercase mt-[-4rem] md:mt-[-6rem] lg:mt-[-10rem] text-5xl sm:text-5xl md:text-7xl lg:text-8xl">
            Forge{" "}
          </h1>
          <h2 className=" text-center text-2xl sm:text-3xl md:text-4xl  lg:mt-[-2rem] mt-0 lg:text-5xl">
            Forging a <span className="border-t">better</span> DeFi for all
          </h2>
          <a href="#">
            <button className="mt-10 bg-[#DD2424] hover:text-black hover:bg-white py-2 pb-3 px-10 ">
              Discover More &nbsp; &gt;
            </button>
          </a>
        </div>

        <div className="lg:flex md:flex lg:mt-[10rem] mt-[7rem] md:mt-[6rem] mt-6rem lg:ml-[5rem] md:ml-[3rem] ml-[1rem]">
          <Image src={Exclude} alt="#" className="mt-[5rem] top-5 " />
          <div className=" lg:ml-auto md:ml-[4rem] text-start lg:w-[50%] md:w-[70%] sm:w-[90%] w-full mt-[5rem] lg:mt-[7rem]">
            <h2 className=" w-[40%] lg:text-8xl text-4xl ">DeFi Forge</h2>
            <a className="text-sm lg:w-[60%] mt-5 tracking-wide">
              Foge Protocol’s vision is to create utilities that not only create
              a safer, more user friendly atmosphere for DeFi but als
              <button className="mt-[4rem] rounded-full border hover:text-black hover:bg-white py-2 pb-3 px-10 ">
                Explore More &nbsp; &gt;
              </button>
            </a>
          </div>
        </div>

        <div>
          <h1 className=" text-center w-[95%] md:w-[90%] lg:w-[80%] ml-auto mr-auto mt-[5rem] lg:mt-[8rem] text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            DeFi is the <span className="font-bold">future </span> and it is all
            of our responsibilities to build a better future for those that{" "}
            <span className="font-bold">follow behind </span>us
          </h1>
        </div>

        <div className="mt-[8rem] lg:flex md:flex py-[5rem] bg-[#0E0E0E]">
          <div className=" lg:ml-[5rem] ml-[2rem] lg:w-[50%] w-full">
            <h1 className="text-5xl">Tokenomics</h1>
            <button className=" mt-[3rem] rounded-full border hover:text-black hover:bg-white pb-1 px-6">
              Taxes
            </button>
            <div>
              <div className="mt-7 flex lg:w-[70%] w-full">
                <Image src={vectorTax} alt="tax" />
                <span className=" ml-auto text-sm lg:w-[85%] w-full">
                  2% Automatically added to the Liquidity Pool
                </span>
              </div>
              <div className="mt-5 flex lg:w-[70%] w-full ">
                <Image src={vectorTax} alt="tax" />
                <span className="ml-auto  text-sm lg:w-[85%] w-full ">
                  3% Development tax to further the project and provide
                  revolutionary utilities
                </span>
              </div>
              <div className="mt-7 flex lg:w-[70%] w-full">
                <Image src={vectorTax} alt="tax" />
                <span className=" ml-auto text-sm lg:w-[85%] w-full ">
                  88% of Total Supply to LP
                </span>
              </div>
              <div className="mt-7 flex lg:w-[70%] w-full ">
                <Image src={vectorTax} alt="tax" />
                <span className=" ml-auto  text-sm lg:w-[85%] w-full ">
                  12% of Total Supply reserved for staking
                </span>
              </div>
            </div>
          </div>
          <div className="w-[30%] py-[12rem] bg-[red]"></div>
        </div>

        <div className="lg:mt-[10rem] mt-[5rem] ">
          <h1 className="ml-[3rem]">Team</h1>
          <div className=" lg:flex  mt-[5rem] ">
            <div className="border p-2 mr-10 ml-10 ">
              <div className="px-5 py-[8rem] bg-white"> </div>
              <div className="px-6 py-3">
                <h3 className="font-bold text-[20px]">Forge Master</h3>
                <p className="text-sm w-[80%] mt-3">
                  Doxxing will commence after all utilites are released
                </p>
                <div className="flex mt-5">
                  <button className="border px-7 lg:px-10 py-1 rounded-full mr-5 hover:bg-white hover:text-black ">
                    Twitter
                  </button>
                  <button className="border px-7 lg:px-10 py-1 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white">
                    Linkedin
                  </button>
                </div>
              </div>
            </div>

            <div className="border p-2 mr-10 ml-10 mt-10 lg:mt-0 lg:ml-0 ">
              <div className="px-5 py-[8rem] bg-white"> </div>
              <div className="px-6 py-3">
                <h3 className="font-bold text-[20px]">The Black Smith</h3>
                <p className="text-sm w-[80%] mt-3">
                  Doxxing will commence after all utilites are released
                </p>
                <div className="flex mt-5">
                  <button className="border px-7 lg:px-10 py-1 rounded-full mr-5 hover:bg-white hover:text-black">
                    Twitter
                  </button>
                  <button className="border px-7 lg:px-10 py-1 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white">
                    Linkedin
                  </button>
                </div>
              </div>
            </div>

            <div className=" border p-2  mr-10 ml-10 mt-10 lg:mt-0 lg:ml-0">
              <div className="px-5 py-[8rem] bg-white"> </div>
              <div className="px-6 py-3">
                <h3 className="font-bold text-[20px]">The Anvil Master</h3>
                <p className="text-sm w-[80%] mt-3">
                  Doxxing will commence after all utilites are released
                </p>
                <div className="flex mt-5">
                  <button className="border px-7 lg:px-10 py-1 rounded-full mr-5 hover:bg-white hover:text-black">
                    Twitter
                  </button>
                  <button className="border px-7 lg:px-10 py-1 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white">
                    Linkedin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
