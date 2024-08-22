import useLocalStorage from "./useLocalStorage";



export default function CopyPreDefault() {
    const [name, setName] = useLocalStorage('name', 'Guest');

    return (
        <div>
            <h1>Hello, {name}</h1>
            <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            />
        </div>
    )
}