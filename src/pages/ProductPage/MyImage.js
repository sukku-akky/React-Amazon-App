import { Fragment } from "react"
import "./MyImage.css"
const MyImage=(props)=>{
    
    return (
        <Fragment className="image-gallery">
            <div className="image-thumbnails-container">
            <div className="image-thumbnails">
                <ul>
            {props.images.map((curElm,index)=>{
                return (
                    <figure key={index}>
                        <img src={curElm.url}
                        alt={curElm.filename}/>
                    </figure>
                )
            })}
            </ul>
            </div>
            </div>
            <div className="main-image-container">
                <img src={props.images[0].url} alt={props.images[0].filename}/>

            </div>
        </Fragment>
    )

}

export default MyImage;