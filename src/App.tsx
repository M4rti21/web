import Home from "./pages/Home";

function App() {
    return (
        <div className="min-h-screen bg-base-300 flex flex-col items-center">
            <main className="w-screen mil:w-mil">
                <div id="main" className="py-4 md:px-4 flex flex-col gap-4 bg-neutral shadow-lg">
                    <Home />
                </div>
            </main>
        </div>
    );
}

export default App;
