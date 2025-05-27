import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export function AboutUs() {
  const teamMembers = [
    {
      name: "Ms Wishalya Tissera",
      role: "Supervisor",
      email: "wishalya.t@sliit.lk",
      bio: "Professor of Agricultural Technology with 15+ years of experience in IoT applications for farming.",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://www.linkedin.com/in/wishalya-tissera",
      image: "/madam.jpg",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Ms P. Panduwawala",
      role: "Co-Supervisor",
      email: "poorna.p@sliit.lk",
      bio: "Expert in AI and mobile application development for sustainable agriculture.",
      github: "https://github.com/poornap",
      linkedin: "https://www.linkedin.com/in/poorna-panduwawala-386a73189",
      image: "/co.jpg",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Dr. S. Jayasekara",
      role: "External Supervisor",
      email: "s.jayasekara@agri-institute.lk",
      bio: "Senior Researcher in smart agriculture and environmental sensing technologies.",
      github: "https://github.com/sjayasekara",
      linkedin: "https://linkedin.com/in/sjayasekara",
      image: "/external.jpg",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Nimesha Madurangi",
      role: "Researcher",
      email: "it21178986@my.sliit.lk",
      bio: "Focused on disease detection using image processing and intelligent alert systems.",
      github: "https://github.com/NimeshaMadurangi",
      linkedin: "https://www.linkedin.com/in/nimesha-madurangi-812972217",
      image: "/nimesha.jpg",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Gameen Udara",
      role: "Researcher",
      email: "it21381140@my.sliit.lk",
      bio: "Responsible for IoT integration and ESP32-based automated systems.",
      github: "https://github.com/gameenudara",
      linkedin: "https://www.linkedin.com/in/g-r-udara-bb6607218/",
      image: "/udara.jpg",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Thushan Miuranga",
      role: "Researcher",
      email: "it21177064@my.sliit.lk",
      bio: "Specialist in backend architecture and real-time data flow pipelines.",
      github: "https://github.com/thushan99",
      linkedin: "www.linkedin.com/in/mtmiuranga",
      image: "/thushan.jpg",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Nimesh Chanuka",
      role: "Researcher",
      email: "it21181238@my.sliit.lk",
      bio: "Focuses on fertilizer recommendation systems and app integration.",
      github: "https://github.com/NimeshChanuka2000",
      linkedin: "https://www.linkedin.com/in/nimesh-chanuka-470608218/",
      image: "/chanuka.jpg",
      color: "from-teal-400 to-teal-600"
    },
  ]

  return (
    <section id="about-us" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team behind <strong className="text-green-600">TomatoGuard</strong> –
            combining expertise in agriculture, technology, and data science to
            revolutionize crop management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${member.color} rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {member.name}
                </h3>
                <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold mb-4`}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="group/icon p-3 bg-gray-100 hover:bg-green-100 rounded-xl transition-all duration-300 hover:scale-110"
                    title="Email"
                  >
                    <MailIcon className="h-5 w-5 text-gray-600 group-hover/icon:text-green-600 transition-colors" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon p-3 bg-gray-100 hover:bg-gray-800 rounded-xl transition-all duration-300 hover:scale-110"
                    title="GitHub"
                  >
                    <GithubIcon className="h-5 w-5 text-gray-600 group-hover/icon:text-white transition-colors" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon p-3 bg-gray-100 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5 text-gray-600 group-hover/icon:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
