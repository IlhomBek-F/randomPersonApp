import { UserModel } from "../core/interfaces/user-model"

export async function getFavorites() {
    try {
        const tasks = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getFavoritesFromStorage())
            }, 2000)
        })
        return tasks
    } catch (error) {
        console.log(error)
    }
}

export async function addFavorite(data: UserModel) {
    try {
        const res = await new Promise((resolve, reject) => {
            const favoritesStorage = getFavoritesFromStorage();
            const favorites = [...favoritesStorage, data]
            addTasksToStorage(favorites)
            resolve(favorites)
        })

        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteFavorite(id: number) {
    try {
        const data = await new Promise((resolve, reject) => {
            const tasks = getFavoritesFromStorage()
                ?.filter((favorite: UserModel) => favorite.id !== id);
            addTasksToStorage(tasks)

            setTimeout(() => {
                resolve(tasks)
            }, 500)
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

function addTasksToStorage(tasks: UserModel[]) {
    localStorage.setItem('favorites', JSON.stringify(tasks));
}

export function getFavoritesFromStorage(): UserModel[] {
    return JSON.parse(localStorage.getItem('favorites') ?? '[]')
}