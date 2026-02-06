export interface User {
    id: number;
    name: string;
    countryCode: string;
    phone: string;
    email?: string;
    password?: string;
    createdAt: Date;
}