import { useEffect, useRef, useState, type JSX } from "react";
import Person from "../models/Person";


export default function TestButton()
{
    const personRef = useRef<Person>(new Person('Henry', 35));
    const [personInfos, setPersonInfos] = useState<string>(personRef.current.getFormattedValues());

    function changeToBernard()
    {
        console.log('--> changeToBernard');

        personRef.current.changeAge(42);
        personRef.current.changeName("Bernard");

        setPersonInfos(personRef.current.getFormattedValues());
    }

    function changeToRoger()
    {
        console.log('--> changeToRoger');

        personRef.current.changeName("Roger");
        personRef.current.changeAge(40);

        setPersonInfos(personRef.current.getFormattedValues());
    }

    function switchAwakeState()
    {
        console.log('--> switchAwakeState');

        if (personRef.current.awake)
            personRef.current.putToSleep();
        else
            personRef.current.wakeUp();

        setPersonInfos(personRef.current.getFormattedValues());
    }

    return <>
        <pre>{ personInfos }</pre>

        <button onClick={changeToBernard}>Switch to Bernard</button>
        <button onClick={changeToRoger}>Switch to Roger</button>
        <button onClick={switchAwakeState}>Switch awake state</button>
    </>
}