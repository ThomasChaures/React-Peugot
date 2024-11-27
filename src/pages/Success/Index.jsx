import React from "react";

const Index = () => {
  return (
    <section className="mt-40 flex items-center h-[500px] justify-center w-full">
      <div className="max-w-[300px]">
        <i className="fa-solid text-center text-[300px] relative text-blue-600 fa-certificate">
          <i className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[200px] text-white fa-solid fa-check"></i>
        </i>
        <h1 className="text-2xl mt-10 text-center text-blue-500 font-medium">
          Action completed successfully
        </h1>
      </div>
    </section>
  );
};

export default Index;
