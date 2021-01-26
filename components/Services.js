import React from "react"

const Services = () => {
  return (
    <div className="lg:my-20 my-10 dark:bg-gray-800">
      <h1 className="md:text-5xl text-4xl bold text-center lg:mb-20  uppercase md:bolder">Diensten</h1>
      <div className="services grid grid-cols-3 gap-8 ">
       <div className="lg:col-span-1 col-span-3 pt-5">
          <div className="flex justify-center flex-col items-center px-20">
            <img className="mb-5 w-16" src="/record-button.svg" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-8">Recording</h3>
          </div>
          <p className="px-10">We offer vocal recording in our acoustically optimized rooms, taking pride in our ability to capture the performance of each artist. Recordings are provided in our Rotterdam studio and can also be recorded remotely. This provides you with access to professional recording services no matter where you’re located in the world. Whether you want to sing, rap, speak, do a podcast or create a voice-over, we guarantee the perfect sound for your performance.</p>
        </div>
        <div className="lg:col-span-1 col-span-3 lg:bg-transparent lg:dark:text-white lg:pt-5 py-16 bg-gray-100 dark:text-black">
          <div className="flex justify-center flex-col items-center px-20">
            <img className="mb-5 w-16" src="/levels.svg" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-8">Mixing and Mastering</h3>
          </div>
          <p className="px-10">We offer vocal recording in our acoustically optimized rooms, taking pride in our ability to capture the performance of each artist. Recordings are provided in our Rotterdam studio and can also be recorded remotely. This provides you with access to professional recording services no matter where you’re located in the world. Whether you want to sing, rap, speak, do a podcast or create a voice-over, we guarantee the perfect sound for your performance.</p>
        </div>
        <div className="lg:col-span-1 col-span-3 pt-5">
          <div className="flex justify-center flex-col items-center px-20">
            <img className="mb-5 w-16" src="/audio-editing.svg" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-8">Audio Editing</h3>
          </div>
          <p className="px-10">We offer vocal recording in our acoustically optimized rooms, taking pride in our ability to capture the performance of each artist. Recordings are provided in our Rotterdam studio and can also be recorded remotely. This provides you with access to professional recording services no matter where you’re located in the world. Whether you want to sing, rap, speak, do a podcast or create a voice-over, we guarantee the perfect sound for your performance.</p>
        </div>
      </div>
    </div>
  )
  }
export default Services
