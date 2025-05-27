import { 
  DollarSignIcon, 
  TrendingUpIcon, 
  MapPinIcon,
  PhoneIcon,
  CalendarIcon,
  CheckCircleIcon,
  UsersIcon,
  StarIcon,
} from "lucide-react"

export function Commercialization() {
  const pricingPlans = [
    {
      name: "Starter Kit",
      price: "LKR 1,500",
      period: "/month",
      description: "Perfect for small-scale farmers",
      features: [
        "Mobile app access",
        "Basic disease detection",
        "Weather alerts",
        "Community forum access"
      ],
      popular: false
    },
    {
      name: "Smart Farming Kit",
      price: "LKR 20,000",
      period: "one-time",
      description: "Complete IoT solution",
      features: [
        "Full mobile app suite",
        "IoT sensor package",
        "Real-time monitoring",
        "AI-powered recommendations",
        "24/7 support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large agricultural operations",
      features: [
        "Unlimited sensors",
        "Custom integrations",
        "Dedicated support",
        "Training programs",
        "Analytics dashboard"
      ],
      popular: false
    }
  ]

  const locations = [
    { name: "Badulla", farmers: 25, status: "Active" },
    { name: "Nuwara Eliya", farmers: 18, status: "Active" },
    { name: "Matale", farmers: 12, status: "Pilot" }
  ]

  const benefits = [
    { icon: TrendingUpIcon, title: "30% Crop Loss Reduction", description: "Early disease detection prevents significant losses" },
    { icon: DollarSignIcon, title: "20% Cost Savings", description: "Optimized fertilizer and pesticide usage" },
    { icon: CheckCircleIcon, title: "15% Yield Increase", description: "Data-driven farming decisions boost productivity" }
  ]

  return (
    <section id="commercialization" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
            <StarIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Commercialization & Market Ready
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TomatoGuard is already transforming farms across Sri Lanka with proven results and affordable solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Most Popular</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                    <div className="mb-4">
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg shadow-green-500/25' 
                      : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-green-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Locations */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-4">
              <UsersIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Already Trusted by Farmers</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mr-3">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{location.name}</h4>
                    <p className="text-sm text-gray-600">{location.farmers} farmers</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  location.status === 'Active' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}>
                  {location.status}
                </span>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Transform Your Farm?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0769854XXX" 
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Call 076 985 4XXX
              </a>
              <button 
                onClick={() => document.querySelector('#contact-us')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 border-2 border-green-500 text-green-600 hover:border-blue-500 hover:text-blue-600 rounded-xl font-semibold transition-all duration-300"
              >
                <CalendarIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
