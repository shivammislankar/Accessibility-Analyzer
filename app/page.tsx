'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Add these type definitions
interface AccessibilityIssue {
  type: string
  code: string
  message: string
  element: string
}

interface AnalysisResult {
  success: boolean
  url?: string
  issues?: AccessibilityIssue[]
  issueCount?: number
  error?: string
}

export default function HomePage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<AnalysisResult | null>(null)  // Add type here

  const handleAnalyze = async () => {
    if (!url) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      
      const data: AnalysisResult = await response.json()  // Add type here
      setResults(data)
      console.log('Analysis results:', data)
      console.log('Results state after setting:', results)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
     {/* Header */}
<header className="border-b border-gray-100 dark:border-gray-800">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      Accessibility Analyzer
    </div>
    <div className="flex items-center gap-4">
      <nav className="flex items-center space-x-8">
        <a href="\about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          About
        </a>
        <a href="\help" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          Help
        </a>
        <a href="\contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          Contact
        </a>
      </nav>
      <ThemeToggle />
    </div>
  </div>
</header>

      {/* Hero Section */}
      {/* Hero Section */}
<section className="py-20 px-4">
  <div className="container mx-auto max-w-4xl text-center">
    <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
      Ensure Your Content is Accessible to Everyone
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
      Quickly analyze websites and digital content for accessibility compliance and get actionable recommendations.
    </p>

         {/* URL Input Section */}
<div className="max-w-2xl mx-auto mb-8">
  <div className="flex gap-4 mb-4">
    <Input 
      type="url" 
      placeholder="Enter URL (e.g., https://example.com)" 
      className="flex-1 h-12 text-base"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
    />
    <Button 
      className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
      onClick={handleAnalyze}
      disabled={loading}
    >
      {loading ? 'Analyzing...' : 'Analyze'}
    </Button>
  </div>
  <div className="flex items-center justify-center gap-2 text-gray-500">
    <span>OR</span>
    <Button variant="outline" className="gap-2 bg-transparent">
      Upload File
    </Button>
  </div>
</div>



{/* Results Section */}
{results && (
  <div className="max-w-4xl mx-auto mt-12">
    {results.success ? (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Analysis Results for: {results.url}
        </h3>
        
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {results.issueCount}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {results.issueCount === 1 ? 'Issue Found' : 'Issues Found'}
            </div>
          </div>
        </div>

        {results.issues && results.issues.length > 0 ? (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Issues Found:</h4>
            {results.issues?.map((issue, index) => (
              <div key={index} className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-red-600 dark:text-red-400 font-semibold">⚠️</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-red-800 dark:text-red-300">{issue.message}</h5>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">Code: {issue.code}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
                      {issue.element}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-green-600 dark:text-green-400 text-6xl mb-4">✅</div>
            <h4 className="text-xl font-semibold text-green-800 dark:text-green-300">Great job!</h4>
            <p className="text-green-600 dark:text-green-400">No accessibility issues found with our basic checks.</p>
          </div>
        )}
      </div>
    ) : (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">Analysis Failed</h3>
        <p className="text-red-600 dark:text-red-400 mt-2">{results.error}</p>
      </div>
    )}
  </div>
)}
        </div>
      </section>
      {/* Key Features Section */}
<section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  ✨
                </div>
                <CardTitle className="text-xl">Automated Scanning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Quickly scan entire websites or specific pages for common accessibility issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  📄
                </div>
                <CardTitle className="text-xl">Detailed Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Receive comprehensive reports highlighting violations and areas for improvement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  💡
                </div>
                <CardTitle className="text-xl">Actionable Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Get clear, step-by-step guidance on how to fix identified accessibility barriers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  ✅
                </div>
                <CardTitle className="text-xl">WCAG Compliance Checks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Verify adherence to WCAG 2.1 AA standards and other relevant guidelines.
                </CardDescription>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
          

      {/* How It Works Section */}
      {/* How It Works Section */}
<section className="py-20 px-4 dark:bg-gray-900">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-12">
      
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Enter URL or Upload File</h3>
        <p className="text-gray-600 dark:text-gray-300">Provide the web address or upload your document for analysis.</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
          2
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Automated Scan</h3>
        <p className="text-gray-600 dark:text-gray-300">Our powerful engine scans your content for accessibility issues.</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
          3
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Review Report & Fix</h3>
        <p className="text-gray-600 dark:text-gray-300">Access a detailed report with recommendations to improve accessibility.</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      {/* Footer */}
<footer className="border-t border-gray-100 dark:border-gray-800 py-12 px-4 bg-white dark:bg-gray-900">
  <div className="container mx-auto max-w-6xl">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-8">
        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          Terms of Service
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          Sitemap
        </a>
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        © 2023 Accessibility Analyzer. All rights reserved.
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

    