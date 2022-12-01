import useTheme from "../hooks/useTheme";

const BackgroundSVG = (prop) => {

    const { isDarkMode } = useTheme();
    const img_url = prop.prop
    const light = img_url[0]
    const dark = img_url[1] 

    return (
        <div className="bgsvg">
            <img src = {isDarkMode? light : dark}></img>
        </div>
    )
}
export default BackgroundSVG;