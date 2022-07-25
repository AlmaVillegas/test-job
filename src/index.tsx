import { createRoot } from "react-dom/client"
import "./assets/css/index.css"
import { StyledEngineProvider } from "@mui/styled-engine"
import App from "./App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import reportWebVitals from "./reportWebVitals"
import store from "./redux/store"
import { Provider } from "react-redux"
import { SnackProvider } from "./common/components/elements"

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")
const root = createRoot(rootElement)
root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <SnackProvider>
        <App />
      </SnackProvider>
    </StyledEngineProvider>
  </Provider>
)

serviceWorkerRegistration.unregister()

reportWebVitals()
