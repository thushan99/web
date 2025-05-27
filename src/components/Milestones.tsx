import {
  CalendarIcon,
  FileTextIcon,
  PresentationIcon,
  AwardIcon,
  BookOpenIcon,
} from "lucide-react"

export function Milestones() {
  const milestones = [
    {
      title: "Proposal Submission",
      date: "April 2024",
      description: "Initial research proposal and project planning",
      icon: FileTextIcon,
      status: "completed",
    },
    {
      title: "Progress Review 1",
      date: "August 2024",
      description: "Literature review and system design phase",
      icon: PresentationIcon,
      status: "completed",
    },
    {
      title: "Progress Review 2",
      date: "December 2024",
      description: "Development and initial testing phase",
      icon: PresentationIcon,
      status: "completed",
    },
    {
      title: "Final Evaluation",
      date: "May 2025",
      description: "System validation and performance evaluation",
      icon: AwardIcon,
      status: "completed",
    },
    {
      title: "Paper Publication",
      date: "June 2025",
      description: "Research findings publication and dissemination",
      icon: BookOpenIcon,
      status: "upcoming",
    },
  ]

  return (
    <section id="milestones" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Milestones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track our research journey from conception to completion
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-green-200 via-blue-200 to-purple-200 rounded-full"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                >
                  <div className={`group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl border-l-4 transition-all duration-500 hover:-translate-y-2 ${
                    milestone.status === "completed"
                      ? "border-green-500 hover:border-green-400"
                      : milestone.status === "in-progress"
                      ? "border-blue-500 hover:border-blue-400"
                      : "border-gray-300 hover:border-gray-400"
                  }`}>
                    <div className={`flex items-center space-x-4 mb-6 ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}>
                      <div className={`order-${index % 2 === 0 ? "2" : "1"}`}>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                      </div>
                      <div className={`order-${index % 2 === 0 ? "1" : "2"} p-4 rounded-2xl ${
                        milestone.status === "completed"
                          ? "bg-green-100 group-hover:bg-green-200"
                          : milestone.status === "in-progress"
                          ? "bg-blue-100 group-hover:bg-blue-200"
                          : "bg-gray-100 group-hover:bg-gray-200"
                      } transition-colors duration-300`}>
                        <milestone.icon className={`h-8 w-8 ${
                          milestone.status === "completed"
                            ? "text-green-600"
                            : milestone.status === "in-progress"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`} />
                      </div>
                    </div>
                    
                    <div className={`flex items-center text-sm text-gray-500 mb-4 ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}>
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span className="text-base font-medium">{milestone.date}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{milestone.description}</p>
                    
                    <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <div className={`inline-block px-6 py-3 rounded-full text-sm font-semibold ${
                        milestone.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : milestone.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {milestone.status === "completed"
                          ? "✓ Completed"
                          : milestone.status === "in-progress"
                          ? "⏳ In Progress"
                          : "📅 Upcoming"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 z-10 ${
                  milestone.status === "completed"
                    ? "bg-green-500 border-green-200 shadow-lg shadow-green-500/50"
                    : milestone.status === "in-progress"
                    ? "bg-blue-500 border-blue-200 shadow-lg shadow-blue-500/50 animate-pulse"
                    : "bg-gray-300 border-gray-100"
                }`}>
                  {milestone.status === "completed" && (
                    <div className="absolute inset-1.5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden relative">
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-green-200 via-blue-200 to-purple-200 rounded-full"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                <div className="w-full pl-20 pr-4">
                  <div className={`group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl border-l-4 transition-all duration-300 hover:-translate-y-1 ${
                    milestone.status === "completed"
                      ? "border-green-500"
                      : milestone.status === "in-progress"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        milestone.status === "completed"
                          ? "bg-green-100"
                          : milestone.status === "in-progress"
                          ? "bg-blue-100"
                          : "bg-gray-100"
                      }`}>
                        <milestone.icon className={`h-6 w-6 ${
                          milestone.status === "completed"
                            ? "text-green-600"
                            : milestone.status === "in-progress"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {milestone.date}
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{milestone.description}</p>
                    
                    <div className={`inline-block px-4 py-2 rounded-full text-xs font-semibold ${
                      milestone.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : milestone.status === "in-progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {milestone.status === "completed"
                        ? "✓ Completed"
                        : milestone.status === "in-progress"
                        ? "⏳ In Progress"
                        : "📅 Upcoming"}
                    </div>
                  </div>
                </div>

                <div className={`absolute left-8 transform -translate-x-1/2 w-6 h-6 rounded-full border-3 z-10 ${
                  milestone.status === "completed"
                    ? "bg-green-500 border-green-200 shadow-md"
                    : milestone.status === "in-progress"
                    ? "bg-blue-500 border-blue-200 shadow-md animate-pulse"
                    : "bg-gray-300 border-gray-100"
                }`}>
                  {milestone.status === "completed" && (
                    <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-green-200 via-blue-200 to-purple-200 rounded-full"></div>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                <div className="w-full pl-16 pr-4">
                  <div className={`bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border-l-4 transition-all duration-300 ${
                    milestone.status === "completed"
                      ? "border-green-500"
                      : milestone.status === "in-progress"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}>
                    <div className="flex flex-col space-y-3 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          milestone.status === "completed"
                            ? "bg-green-100"
                            : milestone.status === "in-progress"
                            ? "bg-blue-100"
                            : "bg-gray-100"
                        }`}>
                          <milestone.icon className={`h-5 w-5 ${
                            milestone.status === "completed"
                              ? "text-green-600"
                              : milestone.status === "in-progress"
                              ? "text-blue-600"
                              : "text-gray-400"
                          }`} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {milestone.date}
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">{milestone.description}</p>
                    
                    <div className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${
                      milestone.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : milestone.status === "in-progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {milestone.status === "completed"
                        ? "✓ Completed"
                        : milestone.status === "in-progress"
                        ? "⏳ In Progress"
                        : "📅 Upcoming"}
                    </div>
                  </div>
                </div>

                <div className={`absolute left-6 transform -translate-x-1/2 w-5 h-5 rounded-full border-3 z-10 ${
                  milestone.status === "completed"
                    ? "bg-green-500 border-green-200 shadow-sm"
                    : milestone.status === "in-progress"
                    ? "bg-blue-500 border-blue-200 shadow-sm animate-pulse"
                    : "bg-gray-300 border-gray-100"
                }`}>
                  {milestone.status === "completed" && (
                    <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
