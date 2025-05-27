import {
  BugIcon,
  LeafIcon,
  ShieldCheckIcon,
  FlaskConicalIcon,
  RadarIcon,
  UsersIcon,
} from "lucide-react"

export function MobileApp() {
  const mobileApp = [
    {
      title: "Disease Diagnosis",
      description:
        "Identifying Diseases using Images with Fertilizing Automation System and Disease Forecasting based on weather.",
      icon: ShieldCheckIcon,
      // category: "Technology",
    },
    {
      title: "Pest Identification",
      description: "University Research Symposium 2024",
      icon: BugIcon,
      // category: "Recognition",
    },
    {
      title: "Weed Detection",
      description: "Presented at International Conference on Smart Agriculture",
      icon: LeafIcon,
      // category: "Presentation",
    },
    {
      title: "Smart Harvesting",
      description: "User-friendly app with 95% accuracy in disease detection",
      icon: FlaskConicalIcon,
      // category: "Technology",
    },
    {
      title: "Smart Devices with IoT",
      description: "Fully functional sensor network with real-time monitoring",
      icon: RadarIcon,
      // category: "Technology",
    },
    {
      title: "Farmers Community",
      description: "30% reduction in crop loss through early detection",
      icon: UsersIcon,
      category: "Impact",
    },
  ]

  const categoryColors = {
    Publication: "bg-blue-100 text-blue-800",
    Recognition: "bg-yellow-100 text-yellow-800",
    Presentation: "bg-purple-100 text-purple-800",
    Technology: "bg-green-100 text-green-800",
    Impact: "bg-red-100 text-red-800",
  }

  return (
    <section id="mobileApp" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            TomatoGaurd Mobile Application
          </h2>
          <div className="flex justify-center mb-6">
            <img
              src="/tomatoguard-logo.png"
              alt="TomatoGaurd Logo"
              className="h-14"
            />
          </div>
          <p className="text-xl text-gray-600">
            Recognitions and milestones that showcase the impact of our research
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileApp.map((achievement, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <achievement.icon className="h-10 w-10 text-green-600" />
                {achievement.category && (
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryColors[
                        achievement.category as keyof typeof categoryColors
                      ]
                    }`}
                  >
                    {achievement.category}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Project Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-700">Disease Detection Accuracy</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
              <p className="text-gray-700">Reduction in Crop Loss</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-700">Farmers Benefited</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
