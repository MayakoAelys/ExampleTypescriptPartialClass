import { PersonActions, type IPersonActions } from "./Person.Actions";
import { PersonInfos, type IPersonInfos } from "./Person.Infos";

export default class Person implements IPersonActions, IPersonInfos
{
    name: string;
    age: number;
    awake: boolean;

    // Declare methods from "partial classes"
    wakeUp!:() => void;
    putToSleep!:() => void;
    changeName!:(newName: string) => void;
    changeAge!:(newAge: number) => void;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
        this.awake = true;

        // Actually add the methods from "partial classes"
        Object.assign(this, PersonActions);
        Object.assign(this, PersonInfos);
    }

    getAwakeState(): string
    {
        console.log('--> getAwakeState');

        return this.awake ? 'Awake.' : 'Sleepy.';
    }

    getFormattedValues(): string
    {
        return JSON.stringify(this, null, 4);
    }
}