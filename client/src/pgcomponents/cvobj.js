const usericon = (props) => {
    
    const data = props.props[0];

    console.log(data.title_head)

    if (data.title_head === 'CV') return (
        <div className="fullObj">
            <div className="mainObj">
                <p>{data.title_head}</p>
                <div className='imgbox'>
                    <img src = {data.base_link}/>
                </div>
            </div>
            <div className="bckgrd">
            </div>
        </div>
    )
    if (data.title_head === 'about // contact') return (
        <p>TBD</p>
    )
}
export default usericon;