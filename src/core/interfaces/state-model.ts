import { UserModel } from "./user-model";

export interface StateModel {
    favorites: UserModel[],
    loading: boolean
}