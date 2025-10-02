import Navbar from '../components/landingpage/navbar.jsx'
import Mailer from '../components/contactus/Mailer.jsx'
import ContactHeader from '../components/contactus/ContactHeader.jsx'
import useRouteAnimation from '../utils/animatie.jsx'
import Footer from '../components/landingpage/footer.jsx'

const ContactUs = () => {
  const isLoaded = useRouteAnimation()

  return (
    <div className="min-h-screen bg-[#ffeabb] relative overflow-x-hidden flex flex-col">
      <div className="max-w-screen-2xl mx-auto w-full flex-grow flex flex-col">
        <div className="w-full flex justify-center pt-2 z-50">
          <Navbar isLoaded={isLoaded} />
        </div>
        <div className="flex-grow flex flex-col">
          <div
            className={`z-2 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <ContactHeader />
          </div>
          <div
            className={`flex-grow transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <Mailer />
          </div>
        </div>
        <div className="absolute md:relative bottom-0 w-full">
          <Footer isLoaded={isLoaded} />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
