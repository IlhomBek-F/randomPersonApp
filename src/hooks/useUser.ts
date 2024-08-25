import { useState } from "react";
import { UserModel } from "../components/UserCard";

const API = import.meta.env.VITE_GITHUB_API;

interface UserState {
  user: UserModel | null,
  loading: boolean,
  error: any
}

function useUser() {
    const [data, setUser] = useState<UserState>({user: null, loading: false, error: null});
    
    const fetchUser = async (name: string) => {
        setUser({...data, loading: true})
        try {
         const res = await fetch(`${API}/${name}`);

         if(!res.ok) {
             throw new Error(`HTTP error! status: ${res.status}`)
         }
 
         const data= await res.json();
         setUser({user: data, loading: false, error: null});

        } catch (error) {
         setUser({user: null, loading: false, error});
     }
    }
    
   return {fetchUser, loading: data.loading, user: data.user, error: data.error}
}

export {useUser}