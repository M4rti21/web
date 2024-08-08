import Home from "./pages/Home";

function App() {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center">
            <main className="w-screen mil:w-mil">
                <div id="main" className="p-4 md:p-8 bg-base-200 flex flex-col gap-4 shadow-lg">
                    <Home />
                </div>
            </main>
        </div>
    );
}

export default App;
