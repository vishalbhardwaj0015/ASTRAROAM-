import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center text-center px-8">
          <div>
            <div className="w-16 h-16 rounded-sm bg-red-500/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-red-500 text-2xl font-bold">!</span>
            </div>
            <h2 className="mb-3 font-heading text-2xl">Something went wrong</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-md mx-auto font-light">
              We encountered an unexpected error. Please try again or go back to the home page.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/" className="btn-primary">Back to Home</Link>
              <button onClick={() => window.location.reload()} className="btn-outline text-navy dark:text-white">
                Reload Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
