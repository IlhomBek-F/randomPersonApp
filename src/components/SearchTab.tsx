import {SearchBar} from '../components/SearchBar';
import {UserCard} from '../components/UserCard'
import {UserNotFound} from '../components/UserNotFound'
import { Skeleton } from 'antd';
import {useUser} from '../hooks/useUser';

function SearchTab() {
    const {fetchUser, loading, user} = useUser();

    const handleSearch = async (name: string) => {
       await fetchUser(name)
    }

    return (
        <main>
            <SearchBar handleSearch={handleSearch} loading={loading}/>
            {loading ? <Skeleton avatar paragraph={{ rows: 2 }} /> : 
                                         user && <UserCard user={user}/> || <UserNotFound />
            }
        </main>
    )
}

export {SearchTab}