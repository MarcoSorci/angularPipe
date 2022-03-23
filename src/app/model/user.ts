export interface User{
    name: string;
    ranking: number;
    [key: string]: string | number;
}