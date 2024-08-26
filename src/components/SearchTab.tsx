import { UserCard } from '../components/UserCard'
import { useUser } from '../hooks/useUser';
import { SkeletonElem } from '../components/SkeletonElem';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { useDispatch } from 'react-redux';
import { AsyncThunkType } from '../core/enums/async-thunk-type';
import { AsyncThunkMap } from '../store/favorite.slice';
import { UserAddOutlined } from '@ant-design/icons';

function SearchTab() {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();

    const { fetchUser, loading, user, error } = useUser();
    const userData = { avatar_url: user?.avatar_url, name: user?.name, location: user?.location, id: user?.id };

    const handleSearch = async () => {
        await fetchUser(inputValue);
        setInputValue('');
    }

    const handleAddToFavorite = () => {
        dispatch(AsyncThunkMap.get(AsyncThunkType.ADD_FAVORITE)(userData))
    }

    const DataComponent = () => {
        if (loading) {
            return <SkeletonElem />
        }

        if (error instanceof Error) {
            return <ErrorBoundary title='User does not exist.' />
        }

        if (!user) {
            return <ErrorBoundary title='Please search for a user' />
        }

        return <UserCard userData={userData}
            Icon={<UserAddOutlined onClick={handleAddToFavorite} className='like' />} />
    }

    return (
        <>
            <Space.Compact style={{ width: '100%', marginBottom: '10px' }}>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="search by username..." />
                <Button type="primary"
                    loading={loading}
                    onClick={handleSearch}>Поиск</Button>
            </Space.Compact>
            <DataComponent />
        </>

    )
}

export { SearchTab }