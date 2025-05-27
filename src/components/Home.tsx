import {
  ArrowDownIcon,
  PlayIcon,
  ArrowRightIcon,
  ShieldIcon,
  TrendingUpIcon,
} from "lucide-react";

export function Home() {
  const scrollToNext = () => {
    document.querySelector("#project-scope")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const features = [
    { icon: ShieldIcon, text: "95% Disease Detection Accuracy" },
    { icon: TrendingUpIcon, text: "30% Crop Loss Reduction" },
    { icon: PlayIcon, text: "Real-time Monitoring" },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Smart Tomato Farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-bounce"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-white">From Farm to</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>

                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Revolutionary IoT-based system combining AI, sensors, and
                  mobile technology to transform tomato cultivation through
                  intelligent disease detection.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                    >
                      <feature.icon className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-white text-sm font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToNext()}
                    className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Explore Technology
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>

                  <button
                    onClick={() =>
                      document
                        .querySelector("#downloads")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    View Documents
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - App Preview */}
            <div className="relative">
              <div className="relative mx-auto">
                <img
                  src="/mobile-app-mockup.png"
                  alt="TomatoGuard Mobile App"
                  className="w-[600px] h-auto object-contain drop-shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400/30 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-green-400 transition-colors duration-300"
      >
        <ArrowDownIcon className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
