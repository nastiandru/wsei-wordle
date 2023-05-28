import { store } from "./src/store";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigators/RootNavigator";

export default function App(): JSX.Element {
  return (
      <Provider store={store}>
          <RootNavigator/>
      </Provider>
  )
}
