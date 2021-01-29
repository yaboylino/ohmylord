import React from "react"

const Services = () => {
  return (
    <div className="lg:my-20 my-10 dark:bg-gray-800">
      <h1 className="md:text-5xl text-4xl bold text-center lg:mb-20  uppercase md:bolder">Diensten</h1>
      <div className="services grid grid-cols-3 gap-4 ">
        <div className="lg:col-span-1 col-span-3 pt-5">
          <div className="flex justify-center flex-col items-center px-20">
            <img className="mb-5 w-16" src="/record-button.svg" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-8">Recording</h3>
          </div>
          <p className="px-10 pb-3">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p>
        </div>
        <div className="lg:col-span-1 col-span-3 lg:bg-transparent lg:dark:text-white sm:pt-5 py-14 bg-gray-100 dark:text-black">
          <div className="flex justify-center flex-col items-center px-20">
            <img className="mb-5 w-16" src="/levels.svg" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-8">Mix and Mastering</h3>
          </div>
          <p className="px-10 pb-3">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p>
        </div>
        <div className="lg:col-span-1 col-span-3 pt-5">
          <div className="flex justify-center flex-col items-center px-20">
            <img className="mb-5 w-16" src="/audio-editing.svg" alt="" />
            <h3 className="recording text-xl font-bolder text-center mb-8">Audio Editing</h3>
          </div>
          <p className="px-10 pb-3">Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p>
        </div>
      </div>
    </div>
  )
}
export default Services
