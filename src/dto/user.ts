import { ShoppingPreferenceDTO } from "./shoppingPreference";

export interface UserEntityDTO {
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    dob: Date,
    active: boolean,
    activationCode: number,
    createdAt: Date,
    updatedAt: Date,
    preferences: ShoppingPreferenceDTO[]
}

export interface UserDTO {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    dob: Date,
    active: boolean
}