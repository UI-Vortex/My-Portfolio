
import { useRef } from "react"
import Footer from "./components/Footer/Footer"
import GetInTouch from "./components/Get-in-touch/Get-in-touch"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import MyProjects from "./components/My-Projects/MyProjects"


function App() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Main ref={aboutRef} />
      <MyProjects ref={projectsRef} />
      <GetInTouch ref={contactRef} />
      <Footer />
    </>
  )
}

export default App
