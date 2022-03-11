import { useEffect } from 'react'

const useOutsideClick = (ref:any, callback:any) => {
    const handleClick = (e:any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback(e.target)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', handleClick)
        }

        return () => {
            if (typeof window !== 'undefined') {
                document.removeEventListener('click', handleClick)
            }
        }
    })
}

export default useOutsideClick
