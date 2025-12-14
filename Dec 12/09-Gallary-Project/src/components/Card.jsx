const Card = ({data, idx}) => {
    return (
        <div key={idx} className='h-40 w-44'>
            <img src={data.download_url} alt="User Img" />
        </div>
    )
}

export default Card