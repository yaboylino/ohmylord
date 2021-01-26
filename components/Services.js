import React from "react"

const Services = () => {
  return (
    <div className="py-20 dark:bg-gray-800 h-screen">
      <h1 className="text-4xl text-center mb-20 uppercase bolder">Diensten</h1>
      <div className="services grid grid-cols-3 gap-8 md:px-20 px-8">
        <div className="md:col-span-1 col-span-3">
          <div className="flex justify-center flex-col items-center">
            <img className="mb-5" src="/record-button.svg" width="50px" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-10">Recording</h3>
          </div>
          <p>We offer vocal recording in our acoustically optimized rooms, taking pride in our ability to capture the performance of each artist. Recordings are provided in our Rotterdam studio and can also be recorded remotely. This provides you with access to professional recording services no matter where you’re located in the world. Whether you want to sing, rap, speak, do a podcast or create a voice-over, we guarantee the perfect sound for your performance.</p>
        </div>
        <div className="md:col-span-1 col-span-3">
          <div className="flex justify-center flex-col items-center">
            <img className="mb-5" src="/levels.svg" width="50px" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-10">Mixing and Mastering</h3>
          </div>
          <p>We offer vocal recording in our acoustically optimized rooms, taking pride in our ability to capture the performance of each artist. Recordings are provided in our Rotterdam studio and can also be recorded remotely. This provides you with access to professional recording services no matter where you’re located in the world. Whether you want to sing, rap, speak, do a podcast or create a voice-over, we guarantee the perfect sound for your performance.</p>
        </div>
        <div className="md:col-span-1 col-span-3">
          <div className="flex justify-center flex-col items-center">
            <img className="mb-5" src="/audio-editing.svg" width="50px" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-10">Audio Ediiting</h3>
          </div>
          <p>We offer vocal recording in our acoustically optimized rooms, taking pride in our ability to capture the performance of each artist. Recordings are provided in our Rotterdam studio and can also be recorded remotely. This provides you with access to professional recording services no matter where you’re located in the world. Whether you want to sing, rap, speak, do a podcast or create a voice-over, we guarantee the perfect sound for your performance.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
