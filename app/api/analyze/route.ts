import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()
    
    console.log('Received request for URL:', url)
    
    // Validate URL
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Add URL validation
    try {
      new URL(url)
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 })
    }

    console.log('Fetching and analyzing:', url)
    
    // Fetch the HTML content
    const response = await fetch(url)
    const html = await response.text()
    
    // Basic accessibility checks
    const issues = []
    
    // Check for missing alt text
    const imgMatches = html.match(/<img[^>]*>/gi) || []
    imgMatches.forEach((img) => {
      if (!img.includes('alt=')) {
        issues.push({
          type: 'error',
          code: 'missing-alt-text',
          message: 'Image missing alt text',
          element: img.substring(0, 100) + '...'
        })
      }
    })
    
    // Check for missing page title
    if (!html.includes('<title>') || html.match(/<title>\s*<\/title>/)) {
      issues.push({
        type: 'error',
        code: 'missing-title',
        message: 'Page missing title or title is empty',
        element: '<title>'
      })
    }
    
    // Check for missing lang attribute
    if (!html.includes('lang=')) {
      issues.push({
        type: 'error',
        code: 'missing-lang',
        message: 'HTML element missing lang attribute',
        element: '<html>'
      })
    }
    
    console.log('Analysis completed, found', issues.length, 'issues')
    
    return NextResponse.json({
      success: true,
      url: url,
      issues: issues,
      issueCount: issues.length
    })
    
  } catch (error) {
    console.error('Analysis error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: 'Failed to analyze website: ' + errorMessage }, 
      { status: 500 }
    )
  }
}