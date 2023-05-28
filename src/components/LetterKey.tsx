import { useAppDispatch } from "../store/hooks";
import KeyboardKey from "./KeyboardKey";
import { addLetter } from "../store/gameSlice";

interface LetterKeyProps {
    letter: string
}

export default function LetterKey({ letter }: LetterKeyProps): JSX.Element {
    const dispatch: any = useAppDispatch()

    return <KeyboardKey text={letter} onPress={() => dispatch(addLetter(letter))}/>
}
