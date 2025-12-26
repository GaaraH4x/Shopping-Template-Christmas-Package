import React from 'react';
import { Gift, Award, Calendar, Mail } from 'lucide-react';

export default function App() {
  const handleContactClick = () => {
    const subject = encodeURIComponent("Good day Sir\nI'm here to enroll for the FedEx Christmas/New Year Grant Rewards\n\nMy name is ");
    window.location.href = `mailto:thomasreeffedex@gmail.com?subject=${subject}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-800 to-purple-600 py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-white font-bold text-4xl">
              Fed<span className="text-orange-500">Ex</span>
            </div>
          </div>
          <div className="text-white text-sm">
            <Calendar className="inline mr-2" size={18} />
            Holiday Season 2025-2026
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-orange-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Gift size={80} className="animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Christmas & New Year
            <br />
            <span className="text-orange-300">Grant Rewards Program</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Celebrating the Holiday Season with Our Valued Community
          </p>
        </div>
      </section>

      {/* Grant Details Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Award size={60} className="mx-auto mb-4 text-purple-700" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Grant Program Details
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-700 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-purple-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Exclusive Rewards
              </h3>
              <p className="text-gray-600 text-center">
                Special grant packages designed to support and reward our community members during the festive season.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Limited Time Offer
              </h3>
              <p className="text-gray-600 text-center">
                Available exclusively for the Christmas and New Year holiday season. Don't miss this opportunity!
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-700 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Easy Enrollment
              </h3>
              <p className="text-gray-600 text-center">
                Simple registration process. Contact our program coordinator to secure your grant reward package.
              </p>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="bg-white rounded-lg shadow-xl p-10 mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Program Highlights
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Comprehensive grant packages tailored for the holiday season
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Professional support and guidance throughout the enrollment process
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Quick and efficient processing of grant applications
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-lg text-gray-700">
                  Dedicated program coordinator available for all inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-700 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <Mail size={60} className="mx-auto mb-6 text-orange-400" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Enroll?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            For more information and to register for the FedEx Christmas/New Year Grant Rewards Program, please contact our program coordinator:
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
            <p className="text-2xl font-bold text-white mb-2">Mr. Thomas</p>
            <p className="text-lg text-purple-100 mb-1">Program Coordinator</p>
            <a 
              href="mailto:thomasreeffedex@gmail.com" 
              className="text-orange-300 hover:text-orange-200 text-lg font-semibold"
            >
              thomasreeffedex@gmail.com
            </a>
          </div>

          <button
            onClick={handleContactClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-3 mx-auto"
          >
            <Mail size={24} />
            <span>Contact Mr. Thomas</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="text-white">Fed</span>
            <span className="text-orange-500">Ex</span>
          </div>
          <p className="text-sm">
            Christmas & New Year Grant Rewards Program | Holiday Season 2025-2026
          </p>
          <p className="text-xs mt-4 text-gray-500">
            © {new Date().getFullYear()} FedEx Grant Program. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
                }
