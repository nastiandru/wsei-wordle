import { store } from "./src/store";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigators/RootNavigator";
import { ThemeProvider } from "./src/ThemeContext";


export default function App(): JSX.Element {
  return (
    <Provider store={store}>
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  </Provider>
   
  )
}
