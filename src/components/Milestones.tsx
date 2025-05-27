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
      status: "in-progress",
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
    <section id="milestones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Milestones
          </h2>
          <p className="text-xl text-gray-600">
            Track our research journey from conception to completion
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-200"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${
                      milestone.status === "completed"
                        ? "border-green-500"
                        : milestone.status === "in-progress"
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <milestone.icon
                        className={`h-6 w-6 ${
                          milestone.status === "completed"
                            ? "text-green-600"
                            : milestone.status === "in-progress"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                      <h3 className="text-lg font-bold text-gray-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-2 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {milestone.date}
                    </p>
                    <p className="text-gray-700">{milestone.description}</p>
                    <div
                      className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        milestone.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : milestone.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {milestone.status === "completed"
                        ? "Completed"
                        : milestone.status === "in-progress"
                        ? "In Progress"
                        : "Upcoming"}
                    </div>
                  </div>
                </div>
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                    milestone.status === "completed"
                      ? "bg-green-500 border-green-200"
                      : milestone.status === "in-progress"
                      ? "bg-blue-500 border-blue-200"
                      : "bg-gray-300 border-gray-100"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
