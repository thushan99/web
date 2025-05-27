import {
  BugIcon,
  LeafIcon,
  ShieldCheckIcon,
  FlaskConicalIcon,
  RadarIcon,
  UsersIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  CheckCircleIcon,
} from "lucide-react"

export function MobileApp() {
  const mobileApp = [
    {
      title: "Disease Diagnosis",
      description: "AI-powered disease identification with 95% accuracy using advanced CNN models and real-time weather forecasting.",
      icon: ShieldCheckIcon,
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      category: "AI Technology",
    },
    {
      title: "Pest Identification",
      description: "Smart pest detection system using YOLO architecture for early intervention and crop protection.",
      icon: BugIcon,
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      category: "Detection",
    },
    {
      title: "Weed Detection",
      description: "Automated weed identification system helping farmers maintain healthy crop environments efficiently.",
      icon: LeafIcon,
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      category: "Automation",
    },
    {
      title: "Smart Harvesting",
      description: "Intelligent harvest timing prediction using LSTM models for optimal yield and quality management.",
      icon: FlaskConicalIcon,
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      category: "Prediction",
    },
    {
      title: "Smart Devices with IoT",
      description: "ESP32-based sensor network providing real-time environmental monitoring and automated responses.",
      icon: RadarIcon,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      category: "IoT Integration",
    },
    {
      title: "Farmers Community",
      description: "Connected platform enabling knowledge sharing and collaborative farming practices among users.",
      icon: UsersIcon,
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      category: "Community",
    },
  ]

  const categoryColors = {
    "AI Technology": "bg-green-100 text-green-800 border-green-200",
    "Detection": "bg-orange-100 text-orange-800 border-orange-200",
    "Automation": "bg-blue-100 text-blue-800 border-blue-200",
    "Prediction": "bg-purple-100 text-purple-800 border-purple-200",
    "IoT Integration": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "Community": "bg-pink-100 text-pink-800 border-pink-200",
  }

  const impactStats = [
    { value: "95%", label: "Disease Detection Accuracy", icon: CheckCircleIcon },
    { value: "30%", label: "Reduction in Crop Loss", icon: TrendingUpIcon },
    { value: "50+", label: "Farmers Benefited", icon: UsersIcon },
  ]

  return (
    <section id="mobile-app" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl mb-8 shadow-lg shadow-green-500/25">
            <SmartphoneIcon className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TomatoGuard Mobile Application
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <img
                src="/tomatoguard-logo.png"
                alt="TomatoGuard Logo"
                className="h-16 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mobile solution integrating cutting-edge AI, IoT sensors, and community features 
            for revolutionary tomato cultivation management.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mobileApp.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold border ${
                    categoryColors[feature.category as keyof typeof categoryColors]
                  } backdrop-blur-sm`}>
                    {feature.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Impact Section */}
        <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-8">
              <TrendingUpIcon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Measurable Project Impact
            </h3>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Real-world results demonstrating the effectiveness of our integrated smart farming solution
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                        <stat.icon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                      {stat.value}
                    </div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
