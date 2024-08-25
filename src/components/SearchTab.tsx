import {UserCard} from '../components/UserCard'
import {UserNotFound} from '../components/UserNotFound'
import {useUser} from '../hooks/useUser';
import {SkeletonElem} from '../components/SkeletonElem';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

function SearchTab() {
    const [inputValue, setInputValue] = useState<string>('');

    const {fetchUser, loading, user, error} = useUser();
    const userData = {avatar_url: user?.avatar_url, name: user?.name, location: user?.location};

    const handleSearch = async () => {
       await fetchUser(inputValue);
       setInputValue('');
    }

    const DataComponent = () => {
        if(loading) {
            return <SkeletonElem />
        }

        if(error instanceof Error) {
            return <UserNotFound />
        }

        return <UserCard {...userData}/>
    }

    return (
        <main>
            <Space.Compact style={{ width: '100%', marginBottom: '10px'}}>
             <Input  value={inputValue} onChange={(e) => setInputValue(e.target.value)}  placeholder="search by username..."/>
             <Button type="primary" 
                     loading={loading}
                     onClick={handleSearch}>Поиск</Button>
             </Space.Compact>
            <DataComponent />
        </main>
    )
}

export {SearchTab}