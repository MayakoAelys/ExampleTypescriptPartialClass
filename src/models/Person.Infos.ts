import type Person from "./Person"

export interface IPersonInfos
{
    changeName(newName: string): void;
    changeAge(newAge: number): void;
}

export const PersonInfos =
{
    changeName(this: Person, newName: string): void
    {
        console.log('--> changeName');
        
        this.name = newName;
    },

    changeAge(this: Person, newAge: number): void
    {
        console.log('--> changeAge');

        this.age = newAge;
    }
}