import MTLogo from "../../assets/mt-logo.png";

const MainNavigation = () => {
    return (
        <div className="h-16 bg-nav-color px-20 py-4">
            <div className="flex flex-wrap gap-3 content-center">
                <img src={MTLogo} alt="MTLogo" className="h-8" />
                <p className="text-white font-semibold text-2xl">
                    MT To Do List
                </p>
            </div>
        </div>
    );
};

export default MainNavigation;
