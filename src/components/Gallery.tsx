import { useState, useEffect } from "react"
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

// Farm images

  {
      id: 12,
      src: "/TomatoGuard.jpg",
      alt: "Tomato Farm Overview",
      category: "farm",
      title: "Smart Farm Setup"
    },
    {
      id: 12,
      src: "/farm/IMG-20250527-WA0022.jpg",
      alt: "Tomato Farm Overview",
      category: "farm",
      title: "Smart Farm Setup"
    },
    {
      id: 13,
      src: "/farm/IMG-20250527-WA0023.jpg",
      alt: "IoT Sensors in Field",
      category: "farm",
      title: "Field Sensors"
    },
    {
      id: 14,
      src: "/farm/IMG-20250527-WA0024.jpg",
      alt: "Healthy Tomato Plants",
      category: "farm",
      title: "Healthy Crop Growth"
    },
    {
      id: 15,
      src: "/farm/IMG-20250527-WA0025.jpg",
      alt: "Disease Detection in Action",
      category: "farm",
      title: "Disease Monitoring"
    },
    {
      id: 16,
      src: "/farm/IMG-20250527-WA0026.jpg",
      alt: "Irrigation System",
      category: "farm",
      title: "Smart Irrigation"
    },
    {
      id: 17,
      src: "/farm/IMG-20250527-WA0027.jpg",
      alt: "Harvest Results",
      category: "farm",
      title: "Successful Harvest"
    },
    {
      id: 18,
      src: "/farm/IMG-20250527-WA0028.jpg",
      alt: "Farm Management System",
      category: "farm",
      title: "Farm Management"
    },
    {
      id: 19,
      src: "/farm/IMG-20250527-WA0029.jpg",
      alt: "Environmental Monitoring",
      category: "farm",
      title: "Environmental Data"
    },
    {
      id: 20,
      src: "/farm/IMG-20250527-WA0030.jpg",
      alt: "Crop Health Assessment",
      category: "farm",
      title: "Health Assessment"
    },
    {
      id: 21,
      src: "/farm/IMG-20250527-WA0031.jpg",
      alt: "Technology Integration",
      category: "farm",
      title: "Tech Integration"
    },
    {
      id: 22,
      src: "/farm/IMG-20250527-WA0032.jpg",
      alt: "Data Collection Process",
      category: "farm",
      title: "Data Collection"
    },
    {
      id: 23,
      src: "/farm/IMG-20250527-WA0033.jpg",
      alt: "Quality Control",
      category: "farm",
      title: "Quality Control"
    },
    {
      id: 24,
      src: "/farm/IMG-20250527-WA0034.jpg",
      alt: "Farm Automation",
      category: "farm",
      title: "Automated Systems"
    },
        {
      id: 26,
      src: "/app/IMG-20250527-WA0044.jpg",
      alt: "Disease Detection Screen",
      category: "app",
      title: "Disease Detection Feature"
    },
    {
      id: 1,
      src: "/app/IMG-20250527-WA0043.jpg",
      alt: "TomatoGuard Mobile App Interface",
      category: "app",
      title: "Main App Interface"
    },
    {
      id: 2,
      src: "/app/IMG-20250526-WA0004.jpg",
      alt: "Disease Detection Screen",
      category: "app",
      title: "Disease Detection Feature"
    },
    {
      id: 3,
      src: "/app/IMG-20250526-WA0005.jpg",
      alt: "Farm Monitoring Dashboard",
      category: "app",
      title: "Farm Monitoring"
    },
    {
      id: 4,
      src: "/app/IMG-20250526-WA0006.jpg",
      alt: "IoT Sensor Data View",
      category: "app",
      title: "Sensor Data Analytics"
    },
    {
      id: 5,
      src: "/app/IMG-20250526-WA0007.jpg",
      alt: "Settings and Configuration",
      category: "app",
      title: "App Settings"
    },
    {
      id: 6,
      src: "/app/IMG-20250526-WA0008.jpg",
      alt: "Notification Center",
      category: "app",
      title: "Alert Notifications"
    },
    {
      id: 7,
      src: "/app/IMG-20250526-WA0009.jpg",
      alt: "User Profile Screen",
      category: "app",
      title: "User Profile"
    },
    {
      id: 8,
      src: "/app/IMG-20250526-WA0010.jpg",
      alt: "Data Export Feature",
      category: "app",
      title: "Data Export"
    },
    {
      id: 9,
      src: "/app/WhatsApp Image 2025-05-27 at 15.48.27_569cef5b.jpg",
      alt: "Real-time Monitoring",
      category: "app",
      title: "Live Monitoring"
    },
    {
      id: 10,
      src: "/app/WhatsApp Image 2025-05-27 at 15.48.28_264569b.jpg",
      alt: "Advanced Analytics",
      category: "app",
      title: "Analytics Dashboard"
    },
    
    // Device screenshots
    {
      id: 11,
      src: "/device/WhatsApp Image 2025-05-25 at 21.46.49_43eeff8f.jpg",
      alt: "IoT Device Setup",
      category: "device",
      title: "Device Configuration"
    },
    
    
  ]

  const categories = [
    { id: "all", name: "All Photos", count: galleryImages.length },
    { id: "farm", name: "Farm Views", count: galleryImages.filter(img => img.category === "farm").length },
    { id: "device", name: "Device", count: galleryImages.filter(img => img.category === "device").length },
    { id: "app", name: "Mobile App", count: galleryImages.filter(img => img.category === "app").length },
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

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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

        {/* Image Grid - IMPROVED FOR MOBILE SCREENSHOTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 cursor-pointer ${
                image.category === 'app' ? 'aspect-[9/16]' : 'aspect-square'
              }`}
              onClick={() => openModal(index)}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    image.category === 'app' ? 'object-contain bg-gray-100' : ''
                  }`}
                  // onError={(e) => {
                  //   console.error(`Failed to load image: ${image.src}`);
                  //   // You can add a fallback image here
                  //   // e.currentTarget.src = '/placeholder-image.jpg';
                  // }}
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

      {/* Modal - FIXED VERSION */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - IMPROVED VISIBILITY */}
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 z-60 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
              aria-label="Close modal"
            >
              <XIcon className="w-8 h-8" />
            </button>

            {/* Navigation buttons - IMPROVED */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-50"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-50"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image - MOBILE RESPONSIVE */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              style={{ maxHeight: 'calc(100vh - 100px)' }}
            />

            {/* Image info - IMPROVED POSITIONING */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <h3 className="text-white text-lg font-semibold mb-1">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/80 text-sm capitalize">
                {filteredImages[selectedImage].category} • {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
