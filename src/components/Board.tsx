import { View } from "react-native";
import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";

export default function Board(): JSX.Element {
    const board = useAppSelector((state) => state.game.board)

    return (
        <View>
            {
                board.map((row, rowIndex) => {
                    return (
                        <View style={{ flexDirection: "row", justifyContent: "center" }} key={rowIndex}>
                            {
                                row.map(({ letter, status }, columnIndex) => {
                                    return <Tile letter={letter} status={status} key={columnIndex} />
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}
