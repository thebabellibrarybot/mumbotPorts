const usericon = (props) => {
    
    const data = props.props[0];

    console.log(data.title_head)

    if (data.title_head === 'CV') return (
        <div className="fullObj">
            <div className="mainObj">
                <p>{data.title_head}</p>
                <div className='imgbox'>
                    <img src = {data.base_link} alt = {data.base_link}/>
                </div>
            </div>
            <div className="bckgrd">
            </div>
        </div>
    )
    if (data.title_head === 'about // contact') return (
        <div className="fullCont">
            <div className="cont">
                <h1>{data.title_head} page</h1>
                <p>base cont</p>
            </div>
            <div className="image">
                <img src = "https://mumbotportbuk.s3.amazonaws.com/lines_me.jpg" alt = "alt"/>
                <p>-------------------------------------------------</p>
            </div>
        </div>
    )
    if (data.title_head === 'login') return (
        <div className="full-login">
            <div className="login-cont">
                <h1>{data.title_head} page ERR</h1>
                <p>{data.base_subtitle}</p>
            </div>
            <div className="login-git">
                <img src = 'https://mumbotportbuk.s3.amazonaws.com/dead_bird_1_1.gif' alt = 'flygif' className="fly"></img>
            </div>
        </div>
    )
} 
export default usericon;

