import { ArrowDownIcon, PlayIcon, ArrowRightIcon } from "lucide-react"

export function Home() {
  const scrollToNext = () => {
    document.querySelector("#project-scope")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          {/* Logo with enhanced animation */}
          <div className="relative mb-8 group">
            <img
              src="/tomatoLogo.png"
              alt="TomatoGuard Logo"
              className="w-[550px] mx-auto mb-6 transform transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
          </div>

          {/* Animated tagline */}
          <div className="overflow-hidden mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
                From Farm to Future
              </span>
              <br />
              <span className="text-gray-700">Smarter Tomato Cultivation Starts Here</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Revolutionary research project combining{" "}
            <span className="font-semibold text-green-600">IoT sensors</span>,{" "}
            <span className="font-semibold text-blue-600">machine learning</span>, and{" "}
            <span className="font-semibold text-purple-600">mobile technology</span>{" "}
            to transform tomato cultivation through intelligent disease detection and crop management.
          </p>

          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToNext()}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Technology
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button
              onClick={() => document.querySelector("#downloads")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-green-600 font-semibold rounded-2xl border-2 border-green-200 hover:border-green-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Documents
            </button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <button
          onClick={scrollToNext}
          className="group animate-bounce hover:animate-none text-green-600 hover:text-green-700 transition-colors duration-300"
        >
          <div className="relative">
            <ArrowDownIcon className="h-8 w-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover:opacity-30 scale-150 transition-all duration-300"></div>
          </div>
        </button>
      </div>
    </section>
  )
}
