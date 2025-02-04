import { Family } from "./family";

export interface Profile {
    id: number;
    firstName: string;
    lastName: string;
    family?: Family;
}