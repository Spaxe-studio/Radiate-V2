import Image from "next/image";
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
    <main className="lg:relative bg-transparent">
      {/* hero */}
      <div className="mx-auto w-full max-w-7xl pt-16 pb-10 sm:pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-black tracking-widest text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
            Radiate
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Our vision is to create a better DeFi by consistently providing new and unique utilities that further this space
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-full shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-full border border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:text-black hover:bg-white md:py-4 md:px-10 md:text-lg"
              >
                Discover More &nbsp; &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-10 sm:mb-0 h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-8 lg:right-0 lg:w-1/2">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={heroImage}
          alt="radiate profile image"
        />
      </div>

      {/* about section */}
      <div>
        <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tokenomics
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white">
            Buy/Sell tax - 3% Developement 2% Auto LP
          </p>
          <div className="mt-24">
            <Image
              className=" inset-0 h-full w-full object-cover"
              src={tokenImage}
              alt="radiate profile image"
            />
          </div>
        </div>
      </div>

      {/* roadmap */}
      <div>
        <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
            Roadmap
          </h1>

          <div className="mt-24">
            <div className="flow-root">
              <ul className="mb-10">
                {activity.map((activityItem, activityItemIdx) => (
                  <li key={activityItem.id}>
                    <div className="relative pb-8">
                      {activityItemIdx !== activity.length - 1 ? (
                        <span
                          className="absolute top-5 left-2.5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex items-start space-x-12">
                        <>
                          <div className="relative">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-white" />
                          </div>
                          <div className="min-w-0 min-h-24 flex-1">
                            <div className="text-sm">
                              <a
                                href="/"
                                className="sm:text-center lg:text-left subpixel-antialiase tracking-tight text-4xl lg:text-5xl sm:text-lg leading-wide font-medium text-[#fff]"
                              >
                                {activityItem?.title}
                              </a>
                            </div>

                            <div className="font-light mt-8 text-white md:text-4xl dark:text-gray-100">
                              <p>{activityItem?.comment}</p>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The Team */}
      <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
          The Team
        </h1>
        <div className="mt-24">
          <ul
            role="list"
            className="space-y-24 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name} className="">
                <div className="space-y-4 p-6 border border-white ">
                  <Image
                    sizes="full"
                    className="rounded-lg shadow-lg"
                    src={person.imageUrl}
                    alt="profile image"
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-white text-4xl">{person.name}</h3>
                  </div>
                  <div className="text-lg">
                    <p className="text-white">{person.bio}</p>
                  </div>

                  <ul role="list" className="flex space-x-5">
                    <li>
                      <div className="rounded-full shadow">
                        <a
                          href={person.twitterUrl}
                          className="flex w-full items-center justify-center rounded-full border border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:text-black hover:bg-white md:py-4 md:px-10 md:text-lg"
                        >
                          Twitter
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="rounded-full shadow">
                        <a
                          href={person.linkedinUrl}
                          className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
