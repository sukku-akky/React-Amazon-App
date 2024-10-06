import { useEffect } from "react";
import "./SingleProductPage.css";
import { useProductContext } from "../../store/productcontext";
import  {useParams } from "react-router-dom"
import PageNavigation from "./PageNavigation";
import { Container } from "react-bootstrap";
import MyImage from "./MyImage";
import { MdSecurity } from "react-icons/md";
import FormatPrice from "../../Helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
const API="https://api.pujakaitem.com/api/products";
const SingleProductPage=()=>{
    const {id}=useParams();

    const {getSingleProduct,isSingleLoading,singleProduct} =useProductContext();
    
    
     
    useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`)



    },[]);
    const {
        id:alias,
        name,
        company,
        image=[{url:""}],
        price,
        description,
        category,
        stock,
        stars,
        reviews,
    

    }=singleProduct;

    if(isSingleLoading){
        return <div className="page_loading">Loading...</div>
    }
    console.log(name)


    return (
        <>
            <PageNavigation title={name}/>
            <Container className="container">
                <div className="whole">
                    <div className="product_images">
                    <MyImage images={image}></MyImage>
                    </div>
                    <div className="product_data">ad
                        <h2>{name}</h2>
                        <p>{stars}</p>
                        <p>{reviews} Reviews</p>
                        <p className="product-data-price">
                            MRP:<del>
                                <FormatPrice price={price+50000}/>
                            </del>

                        </p>
                        <p className="product-data-price product-data-real-price">
                            Deal of the Day:<FormatPrice price={price}/>

                        </p>
                        <p>{description}</p>    
                        <div className="product-data-warranty">             
                        <div className="product-warranty-data">

                            <TbTruckDelivery className="icon-warranty"/>
                            <p>Free Delivery</p>

                        </div>
                        <div className="product-warranty-data">
                            <TbReplace className="icon-warranty"/>
                            <p>Free Replacement</p>

                        </div>
                        
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="icon-warranty"/>
                            <p>thapa Delivered</p>

                        </div>
                        <div className="product-warranty-data">
                            <MdSecurity className="icon-warranty"/>
                            <p>2 years warranty</p>

                        </div>
                        
                    </div>
                    <div>
                        <p>
                        <span>Available:{stock>0?"In Stock":"Not Available"}</span>
                        </p>
                        <p>
                            ID:<span>{id}</span>
                        </p>
                        <p>
                            Brand:<span>{company}</span>
                        </p>
                    </div>
                    </div>
                </div>

            </Container>
        </>
    )

}

export default SingleProductPage;