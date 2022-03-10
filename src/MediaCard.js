import "./MediaCard.css";


function Mediacard({title,body,imageURL}){
    return <div>
        
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={imageURL} alt="does it matter?"/>
    </div>;
}

export default Mediacard;
