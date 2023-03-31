const Card = ({ source, cardTitle, cardP }) => {
  return (
    <>
      <div className="relative left-16 top-16 flex rounded-2xl text-gray-100 flex-col w-[25rem] h-[28rem] bg-gray-500 hover:shadow-xl hover:shadow-black hover:text-gray-800 hover:translate-y-[-4px] hover:bg-slate-100 ease-in duration-200 ">
        <div className="p-3">
          <img
            src={source}
            width={400}
            height={500}
            alt="no-foto"
            className="rounded-lg"
          ></img>
        </div>
        <div className="flex rounded-bl-2xl rounded-br-2xl flex-col gap-3 text  h-full ">
          <h1 className="text-3xl mt-[-5px] text-center ml-2 ">{cardTitle}</h1>
          <p className="text-md ml-2">{cardP}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
