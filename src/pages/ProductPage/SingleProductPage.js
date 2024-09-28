import { useEffect } from "react";
import "./SingleProductPage.css";
import { useProductContext } from "../../store/productcontext";
import  {useParams } from "react-router-dom"
import PageNavigation from "./PageNavigation";
import { Container } from "react-bootstrap";
import MyImage from "./MyImage";
import FormatPrice from "../../Helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
const API="https://api.pujakaitem.com/api/products";
const SingleProductPage=()=>{
    const {id}=useParams();

    const {getSingleProduct,isSingleLoading,singleProduct} =useProductContext();
    const {
        id:alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image

    }=singleProduct;
    useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`)



    },[]);

    if(isSingleLoading){
        return <div className="page_loading">Loading...</div>
    }


    return (
        <>
            <PageNavigation title={name}/>
            <Container className="container">
                <div className="whole">
                    <div className="product_images">
                    <MyImage img={image}/>
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
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="icon-warranty"/>
                            <p>Free Delivery</p>

                        </div>
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="icon-warranty"/>
                            <p>Free Delivery</p>

                        </div>
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="icon-warranty"/>
                            <p>Free Delivery</p>

                        </div>
                        <div className="product-warranty-data">
                            <TbTruckDelivery className="icon-warranty"/>
                            <p>Free Delivery</p>

                        </div>

                    </div>
                </div>

            </Container>
        </>
    )

}

export default SingleProductPage;