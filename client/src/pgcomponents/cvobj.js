const usericon = (props) => {
    
    const data = props.props[0];

    

    return (
        <div className="fullObj">
            <div className="mainObj">
                <p>{data.title_head}</p>

                <div className='imgbox'>
                    <img src = {data.base_link} alt = 'cvimg'/>
                </div>

            </div>
            <div className="backgroundIMG">
            </div>
        </div>
    )
}
export default usericon;