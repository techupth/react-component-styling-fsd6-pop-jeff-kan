import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color="primary" />
        <Button color="error" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert status="error" />
        <Alert status="warning" />
        <Alert status="info" />
        <Alert status="success" />
      </div>
    </div>
  );
}

export default App;
