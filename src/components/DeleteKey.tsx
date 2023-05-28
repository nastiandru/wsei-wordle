import { useAppDispatch } from "../store/hooks";
import KeyboardKey from "./KeyboardKey";
import { deleteLetter } from "../store/gameSlice";

export default function DeleteKey(): JSX.Element {
    const dispatch: any = useAppDispatch()

    return <KeyboardKey text='⌫' onPress={() => dispatch(deleteLetter())}/>
}
