import './App.css'
import MyComponents from './components/MyComponents'

function App() {
  const handleSubmit = (message: string) => {
    console.log(message);
  }
  return (
    <>
      <MyComponents name='John' age={18} isMarried={true} onSubmit={handleSubmit} />
    </>
  )
}

export default App
