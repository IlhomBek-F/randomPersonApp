import { useState } from 'react';
import {SearchBar} from '../components/SearchBar';
import {UserCard} from '../components/UserCard'
import {UserNotFound} from '../components/UserNotFound'

const API = import.meta.env.VITE_GITHUB_API;

function SearchTab() {
    const [user, setUser] = useState<null | any>();
    
    const handleSearch = async (name: string) => {
       try {
        const res = await fetch(`${API}/${name}`);
        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data= await res.json();
        setUser(data)
       } catch (error) {
        setUser(null);
        console.log(error)
       } 
    }

    

    return (
        <main>
            <SearchBar handleSearch={handleSearch}/>
            {user && <UserCard user={user}/> || <UserNotFound />}
        </main>
    )
}

export {SearchTab}