const FormatPrice=(props)=>{
    return Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:2,

    }).format(props.price/100);

}

export default FormatPrice;