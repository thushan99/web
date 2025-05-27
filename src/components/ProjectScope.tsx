import React from "react"
import { TargetIcon, EyeIcon, CheckCircleIcon, BookOpenIcon } from "lucide-react"

export function ProjectScope() {
  return (
    <section id="project-scope" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
            <BookOpenIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Literature Survey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In our literature survey, we examined various academic and technical sources related to smart agriculture and tomato cultivation. Key studies have explored image processing techniques for identifying plant diseases and pests, demonstrating the effectiveness of convolutional neural networks (CNNs) like VGG16 and YOLO architectures in classifying crop health issues.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Research Gap Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TargetIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                Research Gap
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Although many individual technologies—such as disease detection models or IoT sensors—have been successfully implemented in agricultural research, these solutions often operate in isolation. There is a significant gap in creating an integrated, user-friendly platform that simultaneously addresses disease identification, pest monitoring, weed management, and harvest prediction.
              </p>
            </div>
          </div>

          {/* Objectives Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <EyeIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Objectives
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Accurate Disease & Pest Detection using CNN models</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Environmental Monitoring with IoT sensors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Harvest Prediction using LSTM models</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Automated Recommendations system</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>User-Centric Mobile Application</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Research Problem & Solution
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Research Problem</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Tomato farmers frequently struggle with timely identification of diseases and pests, leading to overuse or misuse of fertilizers and pesticides.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proposed Solution</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our project offers a comprehensive solution that leverages image processing models and IoT sensors for smart, data-driven farming decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
