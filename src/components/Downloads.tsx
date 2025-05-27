import { FileTextIcon, MonitorIcon, DownloadIcon, CalendarIcon, CheckCircleIcon } from "lucide-react"

export function Downloads() {
  const documents = [
    {
      title: "Project Proposal",
      description: "Initial research proposal outlining project objectives and methodology",
      Presentation: "https://drive.google.com/file/d/1-exufMeCc8t2CQ762-FxaUFMxE4wriN_/view?usp=drive_link",
      Documents: "https://drive.google.com/drive/folders/1qrNAX7aNdv3K9_JwEtj90b7Mj91vd2lN?usp=drive_link",
      date: "April 2024",
      status: "completed",
    },
    {
      title: "Progress Presentation 1",
      description: "First progress report covering literature review and system design",
      Presentation: "https://drive.google.com/file/d/1HaqWgdYsBtXuVoXyXA74owx7Fwd0ojff/view?usp=drive_link",
      date: "August 2024",
      status: "completed",
    },
    {
      title: "Progress Presentation 2",
      description: "Second progress report detailing development and testing phases",
      Presentation: "https://drive.google.com/file/d/1sAC0AatbBLZf5T6r6HWtXvg5ejBfSXlF/view?usp=drive_link",
      date: "December 2024",
      status: "completed",
    },
    {
      title: "Final Report",
      description: "Complete project documentation and evaluation results",
      Presentation: "https://drive.google.com/file/d/1EPXz7oOKbS3CAXUn5dpuKO-Usv2MzrkG/view?usp=drive_link",
      Documents: "https://drive.google.com/drive/folders/1QpMEUEnZdEWu4cAPeejpKTK_CkOtWFLu?usp=drive_link",
      date: "May 2025",
      status: "completed",
    },
    {
      title: "Research Paper",
      description: "Academic paper submitted for publication in peer-reviewed journal",
      Documents: "https://drive.google.com/file/d/1vgG69ThorVYTm6fDNYSKNz8aoSRyKbPw/view?usp=drive_link",
      date: "June 2025",
      status: "in-progress",
    },
  ]

  return (
    <section id="downloads" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6">
            <DownloadIcon className="w-8 h-8 text-gray-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Downloads</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all project documents and research materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                  <FileTextIcon className="h-8 w-8 text-gray-600" />
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    doc.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : doc.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {doc.status === 'completed' && <CheckCircleIcon className="w-3 h-3 mr-1" />}
                    {doc.status === 'in-progress' && <CalendarIcon className="w-3 h-3 mr-1" />}
                    {doc.status === 'upcoming' && <CalendarIcon className="w-3 h-3 mr-1" />}
                    {doc.status.replace('-', ' ')}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{doc.date}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {doc.title}
              </h3>
              
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                {doc.description}
              </p>
              
              <div className="space-y-3">
                {/* Conditionally render Presentation button */}
                {doc.Presentation && (
                  <a
                    href={doc.Presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"

                  >
                    <MonitorIcon className="h-4 w-4" />
                    <span>View Presentation</span>
                  </a>
                )}
                
                {/* Conditionally render Documents button */}
                {doc.Documents && (
                  <a
                    href={doc.Documents}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    <FileTextIcon className="h-4 w-4" />
                    <span>Download Files</span>
                  </a>
                )}

                {/* Show message if neither presentation nor documents are available */}
                {!doc.Presentation && !doc.Documents && (
                  <div className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-500 px-6 py-3 rounded-xl font-medium">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Additional Resources?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For specific documentation or collaboration inquiries, contact our research team.
          </p>
          <button
            onClick={() => document.querySelector('#contact-us')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
