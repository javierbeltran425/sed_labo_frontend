import axios from 'axios'

import { useEffect, useState } from 'react'

export function useAxiosPost(url, data) {
    const [ request, setRequest ] = useState({ status: 'loading', error: false, response: null })

    useEffect(() => {
        axios.post(url, data)
            .then(res => {
                setRequest({ status: 'done', error: false, response: res.data })
            })
            .catch(err => {
                console.log(err)
                setRequest({ status: 'done', error: true, response: null })
            })
    }, [url])

    return request

}