import React, { useState } from "react"
import axios from "redaxios"
import { useTheme } from "next-themes"

const Contact = () => {
  const { theme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(false)
  const [gegevens, setGegevens] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    telefoon: "",
    bericht: "",
    onderwerp: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    setToggle(true)
    setTimeout(() => {
      setToggle(false)
    }, 3000)
    axios.post("/api/sendmail/", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: gegevens
    })
  }

  return (
    <div className="contact lg:my-20 my-10 bg-black dark:bg-gray-800 mb-52 pt-32">
      <h1 className="md:text-5xl text-4xl bold text-center text-white lg:mb-20 uppercase md:bolder">Contact</h1>
      <div className="grid grid-cols-3 w-full container mx-auto px-10">
        <div className="md:col-span-1 col-span-2">
          <div className="mt-8  text-white flex items-center">
            <a className="flex" href="mailto:prodby@ohmylord.nl">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
              <h3 className="ml-3">Email</h3>
            </a>
          </div>
          <div className="mt-12  text-white flex items-center">
            <a className="flex" href="https://www.instagram.com/ohmylord">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <h3 className="ml-3">Instagram</h3>
            </a>
          </div>
          <div className="mt-12  text-white flex items-center">
            <a href="https://wa.me/31624203939">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <h3 className="ml-3">WhatsApp</h3>
          </div>
        </div>
        <div className="md:col-span-2  col-span-3 w-full">
          <form onSubmit={e => handleSubmit(e)} className="grid grid-cols-2 gap-4 mb-32 w-full">
            <div className="form__name w-full sm:col-span-1 col-span-2 mt-8">
              <label className="relative hidden active:block focus:top-0">Naam</label>
              <input className="border-b border-white container text-white bg-transparent w-full outline-none" type="text" value={gegevens.voornaam} onChange={e => setGegevens({ ...gegevens, voornaam: e.target.value })} placeholder="Naam" autoComplete="given-name" required />
            </div>
            <div className="form__name w-full sm:col-span-1 col-span-2 mt-8">
              <label className="relative hidden active:block focus:top-0">Achternaam</label>
              <input className="border-b border-white container text-white bg-transparent w-full outline-none" type="text" value={gegevens.achternaam} onChange={e => setGegevens({ ...gegevens, achternaam: e.target.value })} placeholder="Achternaam" autoComplete="family-name" required />
            </div>
            <div className="form__name w-full sm:col-span-1 col-span-2 mt-8">
              <label className="relative hidden active:block focus:top-0">Email</label>
              <input className="border-b border-white container text-white bg-transparent w-full outline-none" type="text" value={gegevens.email} onChange={e => setGegevens({ ...gegevens, email: e.target.value })} placeholder="Email" autoComplete="email" required />
            </div>
            <div className="form__name w-full sm:col-span-1 col-span-2 mt-8">
              <label className="relative hidden active:block focus:top-0">Telefoonnummer</label>
              <input className="border-b border-white container text-white bg-transparent w-full outline-none" type="text" value={gegevens.telefoon} onChange={e => setGegevens({ ...gegevens, telefoon: e.target.value })} placeholder="Telefoonnummer" autoComplete="phone" required />
            </div>
            <div className="form__name w-full sm:col-span-1 col-span-2 mt-8">
              <label className="relative hidden active:block focus:top-0">Onderwerp</label>
              <input className="border-b border-white container text-white bg-transparent w-full outline-none" type="text" value={gegevens.onderwerp} onChange={e => setGegevens({ ...gegevens, onderwerp: e.target.value })} placeholder="Onderwerp" required />
            </div>
            <div className="form__name w-full sm:col-span-2 col-span-2 mt-8">
              <label className="relative hidden active:block focus:top-0">Telefoonnummer</label>
              <textarea rows="5" className="bg-transparent border border-white text-white w-full" type="text" value={gegevens.bericht} onChange={e => setGegevens({ ...gegevens, bericht: e.target.value })} placeholder="Bericht" required />
            </div>
            <div className="w-full sm:w-2/6 col-span-2">
              <button className="uppercase bg-white  text-gray-700 py-3 px-5 text-center sm:mt-0 mt-5">Versturen</button>
            </div>
            {toggle === true ? <p className="col-span-2 text-white text-xs">Bericht is verstuurd. Ik neem zo spoedig mogelijk contact met je op.</p> : ""}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
