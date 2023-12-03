export default function MainUi() {
  return (
    <div className="relative h-[40vh] bg-[url('https://i.postimg.cc/vZBcsv6R/pattern-bg-mobile.png')] bg-cover bg-center md:h-[30vh]">
      <div>
        <h1 className="pt-8 text-center text-2xl font-bold text-white">
          IP Address Tracker
        </h1>
      </div>

      <form
        action=""
        className="mx-auto mt-6 flex w-10/12 justify-between rounded-xl bg-white md:w-2/4 lg:w-4/12"
      >
        <input
          className="w-full flex-1 border-none bg-transparent p-4 outline-none"
          type="text"
          placeholder="Search for IP Address"
        />
        <button className="rounded-r-xl border-none bg-black px-6 py-4 outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </form>
      <div className="absolute left-10 right-10 mx-auto mt-8 flex w-10/12 flex-col rounded-xl bg-white p-4 md:flex-row md:justify-between md:p-8 lg:w-8/12 lg:p-12">
        <div className="mb-4 flex flex-col text-center font-bold md:px-4">
          <p className="text-sm text-gray-500">IP ADDRESS</p>
          <p className="mt-1 text-xl text-[#2b2b2b]">192.188.10.1</p>
        </div>
        <div className="mb-4 flex flex-col text-center font-bold md:border-l-2 md:px-4">
          <p className="text-center text-sm text-gray-500">LOCATION</p>
          <p className="mt-1 text-xl text-[#2b2b2b]">Waterloo, ON N2L3 K4</p>
        </div>
        <div className="mb-4 flex flex-col text-center font-bold md:border-l-2 md:px-4">
          <p className="text-sm text-gray-500">TIMEZONE</p>
          <p className="mt-1 text-xl text-[#2b2b2b]">UTC-05:00</p>
        </div>
        <div className="mb-2 flex flex-col text-center font-bold md:border-l-2 md:px-4">
          <p className="text-sm text-gray-500">ISP</p>
          <p className="mt-1 text-xl text-[#2b2b2b]">Starlink</p>
        </div>
      </div>
    </div>
  );
}
