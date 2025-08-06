import ThemeToggleBtn from "./ThemeToggleBtn"
function Header(){
    return(
        <>
        <header className="bg-[var(--elements-bg)] text-[var(--text-color)] flex justify-between py-10 px-7 shadow-md ">
            <h1 className="font-bold text-lg">
                Where is the world?
            </h1>
            <ThemeToggleBtn/>
        </header>
        </>
    )
}
export default Header