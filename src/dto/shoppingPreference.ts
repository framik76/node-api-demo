import { UserDTO } from "./user";

export interface ShoppingPreferenceDTO {
    id: number,
    name: string,
    users: UserDTO[]
}