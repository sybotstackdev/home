import React from 'react'
import Container from '../container/Container'

const Features = () => {
  return (
    <div className="py-20 bg-[#051023]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover what makes us the preferred choice for businesses seeking reliable IT solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0C182A] p-8 rounded-xl hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-300">
                <span className="text-3xl">⚡</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">24/7 Support</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Round-the-clock technical support ensures your business never faces downtime. Our expert team is always ready to help.
            </p>
          </div>
          
          <div className="bg-[#0C182A] p-8 rounded-xl hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-xl flex items-center justify-center group-hover:from-green-500 group-hover:to-green-300 transition-all duration-300">
                <span className="text-3xl">🛡️</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">Advanced Security</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              State-of-the-art security measures protect your data and systems from evolving cyber threats and vulnerabilities.
            </p>
          </div>
          
          <div className="bg-[#0C182A] p-8 rounded-xl hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl flex items-center justify-center group-hover:from-purple-500 group-hover:to-purple-300 transition-all duration-300">
                <span className="text-3xl">📈</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Scalable Solutions</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Our solutions grow with your business. From startups to enterprises, we provide scalable IT infrastructure.
            </p>
          </div>
          
          <div className="bg-[#0C182A] p-8 rounded-xl hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-300 transition-all duration-300">
                <span className="text-3xl">🎯</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">Custom Solutions</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Every business is unique. We create tailored IT solutions that perfectly align with your specific needs and goals.
            </p>
          </div>
          
          <div className="bg-[#0C182A] p-8 rounded-xl hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-400 rounded-xl flex items-center justify-center group-hover:from-red-500 group-hover:to-red-300 transition-all duration-300">
                <span className="text-3xl">💡</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">Expert Team</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Certified professionals with years of experience in the latest technologies and industry best practices.
            </p>
          </div>
          
          <div className="bg-[#0C182A] p-8 rounded-xl hover:bg-[#051023] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform cursor-pointer group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-400 rounded-xl flex items-center justify-center group-hover:from-teal-500 group-hover:to-teal-300 transition-all duration-300">
                <span className="text-3xl">💰</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">Cost Effective</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Maximize your IT budget with our cost-effective solutions that deliver exceptional value and ROI.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Features 