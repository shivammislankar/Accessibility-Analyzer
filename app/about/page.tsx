
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header - we'll need to make this reusable later */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            <a href="/">Accessibility Analyzer</a>
          </div>
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Home
            </a>
            <a href="/about" className="text-blue-600 dark:text-blue-400 font-semibold">
              About
            </a>
            <a href="/help" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Help
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* About Content */}
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            About Accessibility Analyzer
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Making the web accessible to everyone, one website at a time.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We believe that the internet should be accessible to everyone, regardless of their abilities. 
              Our accessibility analyzer helps developers and content creators identify and fix accessibility 
              issues to create more inclusive digital experiences.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              What We Check
            </h2>
            <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>• Missing alt text on images</li>
              <li>• Page title optimization</li>
              <li>• Language attribute presence</li>
              <li>• WCAG 2.1 compliance guidelines</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Built With
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This tool is built with Next.js, TypeScript, and modern web technologies 
              to provide fast, reliable accessibility analysis.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}