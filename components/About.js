import React from "react"
import Image from "next/image"

const About = () => {
  return (
    <>
      <div className="bg-black text-white py-16">
        <h2 className="text-center text-4xl">I MAKE BEATZ THAT MAKE YOU GO OH LORD</h2>
      </div>
      <h1 className="md:text-5xl text-4xl bold text-center lg:mb-20  uppercase md:bolder pt-16 pb-10 ">About</h1>
      <section className="about grid grid-cols-2 gap-8 container mx-auto">
        <div className="col-span-2 md:col-span-1 md:px-5">
          <Image src="/guillaumelord.jpg" width="924" height="1224" />
        </div>
        <div className="col-span-2 md:col-span-1 px-5">
          <p>Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p> <p>Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p> <p>Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.</p>{" "}
        </div>
      </section>
    </>
  )
}
export default About
