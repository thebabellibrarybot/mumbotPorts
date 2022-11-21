const usericon = (props) => {
    
    console.log(props.props[0], 'props')
    const data = props.props[0];

    

    return (
        <div className="usericon">
            <p>user icon</p>
            <p>{data.base_subtitle}</p>
        </div>
    )
}
export default usericon;