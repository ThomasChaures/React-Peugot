import React from 'react'
import { Link } from 'react-router-dom'
import './CallToAction.css'
const CallToAction = () => {
  return (
    <>
    <section className='max-w-[1360px] mb-10 max-[1380px]:px-10 flex gap-10 mx-auto'>
        <div className='buy bg-slate-950/100 w-1/2 h-[340px] px-10 py-4 flex justify-center flex-col gap-4 rounded-xl'>
                <h2 className='w-[45%] text-white text-3xl font-bold'>Are You Looking For a Car?</h2>

                <p className='w-[70%] text-white/100'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, animi commodi. Reprehenderit excepturi.</p>

                <Link className='button h-[45px] flex hover:bg-white hover:border-2 text-white transition-all  hover:border-blue-700 items-center justify-center bg-blue-700 text-white rounded-xl w-[190px]'>Get Started<i className="fa-solid text-sm ml-2 fa-location-arrow"></i></Link>
        </div>

        <div className='sell bg-slate-200/60  w-1/2 h-[340px] px-10 py-4 flex justify-center flex-col gap-4 rounded-xl'>
                <h2 className='w-[45%]  text-slate-950 text-3xl font-bold'>Do You Want to Sell a Car?</h2>

                <p className='w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, animi commodi. Reprehenderit excepturi.</p>

                <Link className='button h-[45px] hover:bg-white hover:border-2 text-white transition-all  hover:text-slate-950 hover:border-slate-950 flex items-center justify-center bg-slate-950  rounded-xl w-[190px]'>Get Started<i className="fa-solid ml-2 text-sm fa-location-arrow"></i></Link>
        </div>
    </section>
    </>
  )
}

export default CallToAction