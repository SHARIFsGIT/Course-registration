import './App.css'
import Bookmark from './components/Bookmark/Bookmark'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4 pb-6">
      <Courses></Courses>
      <Bookmark></Bookmark>
    </div>
    </>
  )
}

export default App
