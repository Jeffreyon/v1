import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="text-slate-800 overflow-x-hidden">
            <Navbar />
            <div className=" max-w-6xl mx-auto px-6 sm:px-3">
                <Header />
                <ProjectList />
                <Footer />
            </div>
        </div>
    );
}

export default App;
