import {useAppDispatch} from "../store/hooks";
import KeyboardKey from "./KeyboardKey";
import {submitWord} from "../store/gameSlice";

export default function EnterKey(): JSX.Element {
    const dispatch: any = useAppDispatch()

    return <KeyboardKey text='Enter' onPress={() => dispatch(submitWord())}/>
}
