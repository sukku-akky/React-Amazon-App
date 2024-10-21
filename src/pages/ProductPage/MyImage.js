import { Fragment, useState } from "react";
import "./MyImage.css"
const MyImage=(props)=>{
    const[mainImage,setMainImage]=useState(props.images[0])
    
    return (
        <Fragment className="image-gallery">
            <div className="image-thumbnails-container">
            <div className="image-thumbnails">
                <ul>
            {props.images.map((curElm,index)=>{
                return (
                    <figure >
                        <img src={curElm.url}
                        alt={curElm.filename}
                        key={index}
                        onClick={()=>setMainImage(curElm)}/>
                        
                        
                    </figure>
                )
            })}
            </ul>
            </div>
            </div>
            <div className="main-image-container">
                <img src={mainImage.url} alt={props.images[0].filename}/>

            </div>
        </Fragment>
    )

}

export default MyImage;