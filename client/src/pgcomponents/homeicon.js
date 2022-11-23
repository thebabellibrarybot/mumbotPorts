import { useNavigate } from "react-router-dom";


const Homeicon = (props) => {


    // add a generalizing function that takes prop 'clicked obj'
    // function takes nav => nav to prop
    const iconTitle = 'props';

    const navigate = useNavigate();

    console.log('iconTitle', iconTitle, 'from iconTitle')

    return (
        <div className = 'aboutcontact'>
            <p>{iconTitle}</p> 
            <div className='out' id = 'o1'><p onClick={() => navigate(`/`)}> hi </p></div>
           
            <p>homeicon</p>
            
        </div>    )
}
export default Homeicon;