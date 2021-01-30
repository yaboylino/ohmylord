import React, { useState } from "react"
import axios from "redaxios"

const Contact = () => {
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <h3 className="ml-3">Email</h3>
          </div>
          <div className="mt-12  text-white flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <h3 className="ml-3">Whats App</h3>
          </div>
          <div className="mt-12  text-white flex items-center">
            <a href="https://wa.me/31610062534?">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="white" width="12" height="12" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <h3 className="ml-3">Instagram</h3>
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
              <textarea className="bg-transparent border border-white text-white w-full" type="text" value={gegevens.bericht} onChange={e => setGegevens({ ...gegevens, bericht: e.target.value })} placeholder="Bericht" required />
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
