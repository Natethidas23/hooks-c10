import { useEffect,useState } from "react"

export default function Login(){
    const[message,setMessage] = useState('Intial Message')
    useEffect(()=> {
        setMessage('Component did Mount')
    }, [])
    return <h2>{message}</h2>
}
