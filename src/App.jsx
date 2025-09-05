import './App.css'
import BgcardStack from './components/events/BgcardStack'
import Foregroundcard from './components/events/Foregroundcard'

function App() {
  const prop = { color: '#FF8C34', isright: false }
  const childComponentProps = { content: 'the given content will be shown here' }
  return (
    <main style={{ padding: '1rem' }}>
      {/* for rendering the props need to pass like this as shown below three fields are required prop = color and isright , ComponentToRender = child/inner component that contains inner content and componentProps = inside content. */}
      <BgcardStack
        prop={prop}
        ComponentToRender={Foregroundcard}
        componentProps={childComponentProps}
      />
    </main>
  )
}

export default App
