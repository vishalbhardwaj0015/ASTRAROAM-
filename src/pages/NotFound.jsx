import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-off-white dark:bg-gray-900 px-8">
      <div className="text-center" data-aos="fade-up">
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
          <FaMountain className="text-accent text-2xl" />
        </div>
        <span className="font-heading text-[6rem] font-bold text-accent/20 leading-none block">404</span>
        <h1 className="text-3xl font-heading font-bold mt-2 mb-4">Page Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto font-light mb-10">
          Looks like you've wandered off the trail. The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <FiHome /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline inline-flex items-center gap-2">
            <FiArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
