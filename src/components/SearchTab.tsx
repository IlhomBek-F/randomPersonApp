import {SearchBar} from '../components/SearchBar';
import {UserCard} from '../components/UserCard'
import {UserNotFound} from '../components/UserNotFound'
import {useUser} from '../hooks/useUser';
import {SkeletonElem} from '../components/SkeletonElem';

function SearchTab() {
    const {fetchUser, loading, user, error} = useUser();

    const handleSearch = async (name: string) => {
       await fetchUser(name)
    }

    const DataComponent = () => {
        if(loading) {
            return <SkeletonElem />
        }

        if(error instanceof Error) {
            return <UserNotFound />
        }

        return <UserCard user={user}/>
    }

    return (
        <main>
            <SearchBar handleSearch={handleSearch} loading={loading}/>
            <DataComponent />
        </main>
    )
}

export {SearchTab}