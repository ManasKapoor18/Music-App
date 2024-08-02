import Image from "next/image";

const Home = () => {
  return (
    <div className="space-y-3 mx-auto mb-32">
      <div className="bg-pink-500 px-6 py-3 rounded-lg md:inline-flex md:flex-row space-x-6 mx-auto w-full">
        <div className="md:mr-36">
          <p className="mb-2">New Album</p>
          <h1 className="text-2xl font-bold mb-2">THE SECOND STEP:</h1>
          <h1 className="text-2xl font-bold mb-2">CHAPTER ONE</h1>
          <h1 className="text-2xl text-black font-bold mb-4">TREASURE</h1>
          <button className="md:mt-4 bg-[#000fff] text-white px-4 py-2 rounded-lg">
            LISTEN NOW
          </button>
        </div>
        <div className="md:my-auto my-0">
          <Image src={"/images/bts.png"} alt="bts" height={230} width={320} />
        </div>
      </div>
      <div className="text-xl font-bold">Hello, Manas</div>
      <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-auto ml-8">
        <div className="">
          <Image
            src={"/images/hothits.png"}
            alt="bts"
            height={300}
            width={280}
            className="rounded-md mb-2"
          />
          <div className="text-md font-bold">Today&apos;s Hot Hits</div>
          <div className="text-xs text-gray-400">
            The most played tracks right now
          </div>
        </div>
        <div className="">
          <Image
            src={"/images/risingsun.png"}
            alt="bts"
            height={300}
            width={280}
            className="rounded-md mb-2"
          />
          <div className="text-md font-bold">Land of rising sun</div>
          <div className="text-xs text-gray-400">By Woilon</div>
        </div>
        <div className="">
          <Image
            src={"/images/guitar.png"}
            alt="bts"
            height={300}
            width={280}
            className="rounded-md mb-2"
          />
          <div className="text-md font-bold">Tickets to My Downfall</div>
          <div className="text-xs text-gray-400">Machine Gun Kelly</div>
        </div>
      </div>
      <div className="text-xl font-bold">New releases for you</div>
      <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-auto ml-8">
        <div className="">
          <Image
            src={"/images/song1.png"}
            alt="bts"
            height={300}
            width={280}
            className="rounded-md mb-2"
          />
          <div className="text-md font-bold">Stick Season</div>
          <div className="text-xs text-gray-400">Noah Kahan</div>
        </div>
        <div className="">
          <Image
            src={"/images/wave.png"}
            alt="bts"
            height={300}
            width={280}
            className="rounded-md mb-2"
          />
          <div className="text-md font-bold">I wanna be yours</div>
          <div className="text-xs text-gray-400">By Arctic Monkeys</div>
        </div>
        <div className="">
          <Image
            src={"/images/song2.png"}
            alt="bts"
            height={300}
            width={280}
            className="rounded-md mb-2"
          />
          <div className="text-md font-bold">As It Was</div>
          <div className="text-xs text-gray-400">Harry Styles</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
