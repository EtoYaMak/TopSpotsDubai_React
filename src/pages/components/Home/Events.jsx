import MainComp from "../Events/MainComp";
function Events() {
  return (
    <div className="relative w-[90%] rounded-t-xl flex flex-col font-Montserrat mx-auto bg-white top-[4vw] ">
      <h1 className="text-[#f16565] text-[1.3em] md:text-[1.7em] lg:text-[2em] font-extrabold mx-4 w-fit h-fit ">
        Events in Dubai
      </h1>
      <MainComp />
    </div>
  );
}

export default Events;
