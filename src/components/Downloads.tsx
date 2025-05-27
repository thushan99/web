import { FileTextIcon, MonitorIcon } from "lucide-react"

export function Downloads() {
  const documents = [
    {
      title: "Project Proposal",
      description:
        "Initial research proposal outlining project objectives and methodology",
      Presentation:
        "https://drive.google.com/drive/folders/1ZNa4p4dbm7V8pGYjZya_NXMRbBfN2IfV?usp=sharing",
      Documents:
        "https://drive.google.com/drive/folders/1ZNa4p4dbm7V8pGYjZya_NXMRbBfN2IfV?usp=sharing",
    },
    {
      title: "Progress Presentation 1",
      description:
        "First progress report covering literature review and system design",
      Presentation:
        "https://drive.google.com/drive/folders/1dknurxuzPZ8xK_C63QKcOo0pynaSwss_?usp=sharing",
      Documents:
        "https://drive.google.com/drive/folders/1dknurxuzPZ8xK_C63QKcOo0pynaSwss_?usp=sharing",
    },
    {
      title: "Progress Presentation 2",
      description:
        "Second progress report detailing development and testing phases",
      Presentation:
        "https://drive.google.com/drive/folders/11MAxhJeHsZzkhzA3kQf8FH_TgcNi-L1B?usp=sharing",
      Documents:
        "https://drive.google.com/drive/folders/11MAxhJeHsZzkhzA3kQf8FH_TgcNi-L1B?usp=sharing",
    },
    {
      title: "Final Report",
      description: "Complete project documentation and evaluation results",
      Presentation:
        "https://drive.google.com/drive/folders/1ZNa4p4dbm7V8pGYjZya_NXMRbBfN2IfV?usp=sharing",
      Documents:
        "https://drive.google.com/drive/folders/1ZNa4p4dbm7V8pGYjZya_NXMRbBfN2IfV?usp=sharing",
    },
    {
      title: "Research Paper",
      description:
        "Academic paper submitted for publication in peer-reviewed journal",
      Presentation:
        "https://drive.google.com/drive/folders/1aqQTf-U9WiscsrL9LWBfATu8L41fhnsp?usp=sharing",
      Documents:
        "https://drive.google.com/drive/folders/1aqQTf-U9WiscsrL9LWBfATu8L41fhnsp?usp=sharing",
    },
  ]

  return (
    <section id="downloads" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Downloads</h2>
          <p className="text-xl text-gray-600">
            Access all project documents and research materials
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <FileTextIcon className="h-8 w-8 text-green-600 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{doc.description}</p>
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
                <a
                  href={doc.Presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  <MonitorIcon className="h-4 w-4" />
                  <span>Presentation</span>
                </a>
                <a
                  href={doc.Documents}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                >
                  <FileTextIcon className="h-4 w-4" />
                  <span>Documents</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
