import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { StateModel } from "../core/interfaces/state-model";
import { AsyncThunkMap } from "../store/favorite.slice";
import { AsyncThunkType } from "../core/enums/async-thunk-type";
import { SkeletonElem } from "./SkeletonElem";
import { UserCard } from "./UserCard";
import { UsergroupDeleteOutlined } from "@ant-design/icons";
import { ErrorBoundary } from "./ErrorBoundary";

function FavoritesTab() {
    const dispatch = useDispatch<any>();
    const favorites = useSelector((state: StateModel) => state.favorites);
    const loading = useSelector((state: StateModel) => state.loading);

    useEffect(() => {
        dispatch(AsyncThunkMap.get(AsyncThunkType.FETCH_FAVORITES)());
    }, [])

    const removeFromFavorite = (id: string) => {
        dispatch(AsyncThunkMap.get(AsyncThunkType.DELETE_FAVORITE)(id))
    }

    const ComponentState = () => {
        if (loading) {
            return [1, 2, 3].map((key) => <SkeletonElem key={key} />)
        }

        if (!favorites.length) {
            return <ErrorBoundary title="You have not added any users to favorites." />
        }

        return favorites.map((userData) => (
            <UserCard key={userData.id}
                userData={userData}
                Icon={<UsergroupDeleteOutlined className="like" onClick={() => removeFromFavorite(userData.id)} />}
            />
        ))
    }

    return <ComponentState />
}

export { FavoritesTab }