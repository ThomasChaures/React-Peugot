import React from "react";
const IndexAdmin = () => {
  return (
    <>
      <section className=" mx-auto px-20 mt-[45px]">
        <h1 className="text-3xl font-medium text-white">Dashboard</h1>

        <div className="mt-10  flex gap-x-10">
          <div className="bg-slate-800 max-w-[700px] w-full  flex flex-col gap-y-7 px-4 py-3 rounded drop-shadow-lg">
            <p className="text-white text-xl">Vehicles</p>

          <div className="flex gap-14">
          <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
              <span>49</span>
              <div className="relative">
                <p className="text-xl text-green-400 flex items-center gap-x-2 ">
                  <span className="text-4xl">•</span>For Sale
                </p>
              </div>
            </div>
            <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
              <span>40</span>
              <div className="relative">
                <p className="text-xl text-green-300 flex items-center gap-x-2 ">
                  <span className="text-4xl">•</span>Sold
                </p>
              </div>
            </div>
            <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
              <span>29</span>
              <div className="relative">
                <p className="text-xl text-yellow-400 flex items-center gap-x-2 ">
                  <span className="text-4xl">•</span>Pending
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>


        <div className="mt-10 flex gap-x-10">
          <div className="bg-slate-800   flex flex-col gap-y-7 px-4 py-3 rounded drop-shadow-lg">
            <p className="text-white text-xl">Brands</p>

          <div className="flex gap-14">
          <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
              <span>10</span>
              <div className="relative">
                <p className="text-xl text-green-400 flex items-center gap-x-2 ">
                  <span className="text-4xl">•</span>Registred
                </p>
              </div>
            </div>

            
        
          </div>
          </div>

          <div className="bg-slate-800   flex flex-col gap-y-7 px-4 py-3 rounded drop-shadow-lg">
            <p className="text-white text-xl">Types</p>

          <div className="flex gap-14">
          <div className="text-white flex items-center gap-x-5 text-5xl font-medium">
              <span>15</span>
              <div className="relative">
                <p className="text-xl text-green-400 flex items-center gap-x-2 ">
                  <span className="text-4xl">•</span>Registred
                </p>
              </div>
            </div>

            
        
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-20 mt-[45px]">
            <h2 className="text-white font-medium text-xl">Last activity</h2>

            <ul className='mt-4 max-w-[700px] w-full'>
              <li className="bg-slate-800 h-20 w-full  flex flex-col gap-y-7 px-4 py-3 rounded drop-shadow-lg"></li>
            </ul>
      </section>
    </>
  );
};

export default IndexAdmin;
