import react from 'react';
const Card = ({name,id,email}) => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='' src={`https://robohash.org/${id}200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
;
export default Card;