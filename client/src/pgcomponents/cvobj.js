import image from '../cv.jpg';

const usericon = (props) => {
    
    const data = props.props[0];

    

    return (
        <div className="fullObj">
            <div className="mainObj">
                <p>{data.title_head} icons</p>
                <p>{data.base_subtitle}</p>
                <div className='imgbox'>
                    <p>imgbox</p>
                    <img src = {image} alt = 'cvimg'/>
                </div>

            </div>
            <div className="backgroundIMG">
            </div>
        </div>
    )
}
export default usericon;