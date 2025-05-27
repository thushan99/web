import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { ProjectScope } from "./components/ProjectScope"
import { Milestones } from "./components/Milestones"
import { Downloads } from "./components/Downloads"
import { AboutUs } from "./components/AboutUs"
import { MobileApp } from "./components/MobileApp"
import { ContactUs } from "./components/ContactUs"
import { Footer } from "./components/Footer"
export function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
        <ProjectScope />
        <Milestones />
        <Downloads />
        <AboutUs />
        <MobileApp />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
