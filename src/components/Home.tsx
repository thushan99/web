import { ArrowDownIcon } from "lucide-react"
export function Home() {
  const scrollToNext = () => {
    document.querySelector("#project-scope")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="/tomatoLogo.png"
            alt="TomatoGuard Logo"
            className="w-80 mx-auto mb-6"
          />
          {/* <h1 className="text-5xl md:text-7xl font-bold text-green-600 mb-4">
            TomatoGuard
          </h1> */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            From Farm to Future – Smarter Tomato Cultivation Starts Here
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Revolutionary research project combining IoT sensors, machine
            learning, and mobile technology to transform tomato cultivation
            through intelligent disease detection and crop management.
          </p>
          <div className="space-x-4">
            <button
              onClick={() =>
                document.querySelector("#project-scope")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Learn More
            </button>
            <button
              onClick={() =>
                document.querySelector("#downloads")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              View Documents
            </button>
          </div>
        </div>
        <button
          onClick={scrollToNext}
          className="animate-bounce text-green-600 hover:text-green-700 transition-colors duration-200"
        >
          <ArrowDownIcon className="h-8 w-8 mx-auto" />
        </button>
      </div>
    </section>
  )
}
