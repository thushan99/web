import { useState } from "react"
import { 
  ImageIcon, 
  ZoomInIcon, 
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CameraIcon 
} from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentCategory, setCurrentCategory] = useState("all")

  const galleryImages = [
    {
      id: 1,
      src: "/gallery/tomato-field-1.jpg",
      alt: "Smart Tomato Farm with IoT Sensors",
      category: "farm",
      title: "IoT-Enabled Tomato Farm"
    },
    {
      id: 2,
      src: "/gallery/disease-detection-1.jpg",
      alt: "Disease Detection in Progress",
      category: "technology",
      title: "AI Disease Detection"
    },
    {
      id: 3,
      src: "/gallery/mobile-app-1.jpg",
      alt: "TomatoGuard Mobile Application",
      category: "app",
      title: "Mobile App Interface"
    },
    {
      id: 4,
      src: "/gallery/farmer-using-app.jpg",
      alt: "Farmer Using TomatoGuard App",
      category: "usage",
      title: "Real-World Usage"
    },
    {
      id: 5,
      src: "/gallery/sensor-installation.jpg",
      alt: "IoT Sensor Installation",
      category: "technology",
      title: "Sensor Installation"
    },
    {
      id: 6,
      src: "/gallery/healthy-tomatoes.jpg",
      alt: "Healthy Tomato Harvest",
      category: "results",
      title: "Successful Harvest"
    },
    {
      id: 7,
      src: "/gallery/team-research.jpg",
      alt: "Research Team in Action",
      category: "team",
      title: "Research Team"
    },
    {
      id: 8,
      src: "/gallery/dashboard-view.jpg",
      alt: "Real-time Dashboard",
      category: "app",
      title: "Dashboard Analytics"
    }
  ]

  const categories = [
    { id: "all", name: "All Photos", count: galleryImages.length },
    { id: "farm", name: "Farm Views", count: galleryImages.filter(img => img.category === "farm").length },
    { id: "technology", name: "Technology", count: galleryImages.filter(img => img.category === "technology").length },
    { id: "app", name: "Mobile App", count: galleryImages.filter(img => img.category === "app").length },
    { id: "usage", name: "In Action", count: galleryImages.filter(img => img.category === "usage").length },
    { id: "results", name: "Results", count: galleryImages.filter(img => img.category === "results").length },
    { id: "team", name: "Our Team", count: galleryImages.filter(img => img.category === "team").length }
  ]

  const filteredImages = currentCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
            <CameraIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our journey through images showcasing TomatoGuard's impact on modern agriculture
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200 hover:border-green-300'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  currentCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-700'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-xs capitalize">{image.category}</span>
                    <ZoomInIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <XIcon className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/80 capitalize">
                {filteredImages[selectedImage].category} • {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
