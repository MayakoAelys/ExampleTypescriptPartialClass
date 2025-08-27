import type Person from "./Person"

export interface IPersonActions
{
    wakeUp(): void;
    putToSleep(): void;
}

export const PersonActions =
{
    wakeUp(this: Person): void
    {
        console.log('--> wakeUp');

        this.awake = true;
    },

    putToSleep(this: Person): void
    {
        console.log('--> putToSleep');
        
        this.awake = false;
    }
}