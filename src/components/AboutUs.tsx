import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export function AboutUs() {
  const teamMembers = [
    {
      name: "Ms Wishalya Tissera",
      role: "Supervisor",
      email: "wishalya.t@sliit.lk",
      bio: "Professor of Agricultural Technology with 15+ years of experience in IoT applications for farming.",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      image: "/super.jfif",
    },
    {
      name: "Ms P. Panduwawala",
      role: "Co-Supervisor",
      email: "poorna.p@sliit.lk",
      bio: "Expert in AI and mobile application development for sustainable agriculture.",
      github: "https://github.com/poornap",
      linkedin: "https://linkedin.com/in/poornapanduwawala",
      image: "/co.jpg",
    },
    {
      name: "Dr. S. Jayasekara",
      role: "External Supervisor",
      email: "s.jayasekara@agri-institute.lk",
      bio: "Senior Researcher in smart agriculture and environmental sensing technologies.",
      github: "https://github.com/sjayasekara",
      linkedin: "https://linkedin.com/in/sjayasekara",
      image: "/external.jpg",
    },
    {
      name: "Nimesha Madurangi",
      role: "Researcher",
      email: "it21178986@my.sliit.lk",
      bio: "Focused on disease detection using image processing and intelligent alert systems.",
      github: "https://github.com/nimesha",
      linkedin: "https://linkedin.com/in/nimeshamadurangi",
      image: "/nimesha.jpg",
    },
    {
      name: "Gameen Udara",
      role: "Researcher",
      email: "it21381140@my.sliit.lk",
      bio: "Responsible for IoT integration and ESP32-based automated systems.",
      github: "https://github.com/gameenudara",
      linkedin: "https://linkedin.com/in/gameenudara",
      image: "/udara.png",
    },
    {
      name: "Thushan Miuranga",
      role: "Researcher",
      email: "it21177064@my.sliit.lk",
      bio: "Specialist in backend architecture and real-time data flow pipelines.",
      github: "https://github.com/thushanmiuranga",
      linkedin: "https://linkedin.com/in/thushanmiuranga",
      image: "/thushan.jpg",
    },
    {
      name: "Nimesh Chanuka",
      role: "Researcher",
      email: "it21181238@my.sliit.lk",
      bio: "Focuses on fertilizer recommendation systems and app integration.",
      github: "https://github.com/nimeshchanuka",
      linkedin: "https://linkedin.com/in/nimeshchanuka",
      image: "/chanuka.jpg",
    },
  ]

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team behind <strong>TomatoGuard</strong> –
            combining expertise in agriculture, technology, and data science to
            revolutionize crop management.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-green-400 shadow"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-green-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                  title="Email"
                >
                  <MailIcon className="h-5 w-5" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                  title="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
