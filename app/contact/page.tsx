import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            <Link href="/">Accessibility Analyzer</Link>
          </div>
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              About
            </Link>
            <Link href="/help" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Help
            </Link>
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-semibold">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Contact Content */}
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Other Ways to Reach Us
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    📧 Email Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    support@accessibilityanalyzer.com
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    🐛 Bug Reports
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {'Found a bug? Help us improve by reporting it.'}
                  </p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    Report an issue →
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    💡 Feature Requests
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {'Have an idea for a new feature? We\'d love to hear it!'}
                  </p>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    Suggest a feature →
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    📚 Documentation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Need help getting started? Check out our documentation.
                  </p>
                  <Link href="/help" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    View help docs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}