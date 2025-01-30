import Sidebar from "./components/sidebar";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div>
            {/* Sidebar */}
            <Sidebar />
            
            {/* Content */}
            <HomePage />
        </div>
    );
}

export default App;