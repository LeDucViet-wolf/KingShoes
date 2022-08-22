import { useEffect } from 'react'

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

/**
 * Hook reload script js after render react module
 * @param {string} url path js file
 */
export default useScript