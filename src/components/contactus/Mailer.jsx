import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Mailer() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  console.log(serviceID, publicKey, templateID)
  const sendEmail = e => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    emailjs
      .sendForm(
        serviceID,
        templateID,
        e.target, // form element
        publicKey
      )
      .then(() => {
        setStatus('Message sent successfully!')
        e.target.reset()
      })
      .catch(() => setStatus('Failed to send message. Try again.'))
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex items-center justify-center p-2 font-sans">
      <div className="bg-white w-full max-w-7xl p-4 md:p-8 rounded-[50px] shadow-[8px_8px_0px_#000000] border-[3px] border-black">
        <form onSubmit={sendEmail} className="flex flex-col gap-3">
          <input
            type="text"
            name="subject"
            placeholder="<Subject>"
            required
            className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-4 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300"
          />

          <textarea
            name="message"
            placeholder="<Write Your Message here!>"
            rows="4"
            required
            className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-4 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 resize-none"
          ></textarea>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="<Your_Name>"
              required
              className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-4 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="<Your_email>"
              required
              className="w-full bg-[#FF8C34] text-black placeholder:text-black font-bold text-lg border-[3px] border-black rounded-[37.5px] p-4 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-black text-white font-bold text-lg py-3 px-6 rounded-[37.5px] border-[3px] border-black hover:bg-gray-800 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="mt-2 text-center font-bold">{status}</p>}
        </form>
      </div>
    </div>
  )
}
