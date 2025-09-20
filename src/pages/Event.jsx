import BgcardStack from '../components/events/Bgcard-stack'
import ForegroundCard from '../components/events/Foreground-card'
import Navbar from '../components/landingpage/navbar'
import useRouteAnimation from '../utils/animatie'
export default function Event() {
  // const [isLoaded, setIsLoaded] = useState(false)

  //   useEffect(() => {
  //     setIsLoaded(true)
  //   }, [])

  const isLoaded = useRouteAnimation()

  return (
    <div className="page-wrapper">
      <div className="min-h-screen bg-[#ffeabb] w-full relative overflow-x-hidden">
        <div className="w-full flex mt-2 justify-center">
          <Navbar />{' '}
        </div>
        <div>
          <BgcardStack
            isLoaded={isLoaded}
            prop={{ isright: false, color: '#4271FF' }}
            ComponentToRender={ForegroundCard}
            componentProps={{
              eventName: 'Sample Event',
              eventDescription: 'This is a sample event description.',
              applyLink: 'https://example.com/apply',
              imagePosition: 'left',
            }}
          />
          <BgcardStack
            isLoaded={isLoaded}
            prop={{ isright: true, color: '#FFEABB' }}
            ComponentToRender={ForegroundCard}
            componentProps={{
              eventName: 'Sample Event',
              eventDescription: 'This is a sample event description.',
              applyLink: 'https://example.com/apply',
              imagePosition: 'right',
            }}
          />
        </div>
      </div>
    </div>
  )
}
