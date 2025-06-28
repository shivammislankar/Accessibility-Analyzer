import Link from 'next/link'

export default function HelpPage() {
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
  <Link href="/help" className="text-blue-600 dark:text-blue-400 font-semibold">
    Help
  </Link>
  <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
    Contact
  </Link>
</nav>
        </div>
      </header>

      {/* Help Content */}
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Help & Documentation
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                How to Use the Analyzer
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <ol className="text-gray-600 dark:text-gray-300 space-y-3">
                  <li><strong>1.</strong> Enter a website URL in the input field</li>
                  <li><strong>2.</strong> Click the "Analyze" button</li>
                  <li><strong>3.</strong> Wait for the analysis to complete</li>
                  <li><strong>4.</strong> Review the results and recommendations</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Understanding Results
              </h2>
              <div className="space-y-4">
                <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ Issues Found</h3>
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    Red boxes indicate accessibility problems that need attention.
                  </p>
                </div>
                <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ No Issues</h3>
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    Green indicates no accessibility issues were found with our basic checks.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Common Issues We Check
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Missing Alt Text</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Images without alt attributes make content inaccessible to screen readers.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Missing Page Title</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Page titles help users understand the content and purpose of each page.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Missing Language</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The lang attribute helps screen readers pronounce content correctly.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">WCAG Guidelines</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We check against Web Content Accessibility Guidelines standards.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Need More Help?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {'If you have questions or need support, please visit our'}{' '}
<Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
  contact page
</Link>{' '}
{'or refer to the'}{' '}
                <link href="https://www.w3.org/WAI/WCAG21/quickref/" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  WCAG Quick Reference Guide
                </link>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}