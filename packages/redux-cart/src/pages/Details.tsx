import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const Details = () => {
    const { slug } = useParams();
    const [productDetails, setProductDetails] = useState();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const product = products.filter(p => p.slug === slug)[0];
        if(product) {
            setProductDetails(product)
        } else {
            window.location.href = "/";
        }
    }, [slug]);

    const handleMinusQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleActionAddToCart = () => {
        dispatch(addToCart({
            product: productDetails.id,
            quantity
        }))
    }

    return productDetails && <div className="details">
        <h2 className="text-3xl text-center">PRODUCT DETAILS</h2>
        <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
                <img src={productDetails.image} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl">{productDetails.name}</h1>
                <p className="font-bold text-3xl">
                    ${productDetails.price}
                </p>

                <div className="flex gap-5">
                    <div className="flex gap-2 justify-center">
                        <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleMinusQuantity}>-</button>
                        <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                        <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handlePlusQuantity}>+</button>
                    </div>
                    <button className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl">Add To Cart</button>
                </div>

                <p>
                    {productDetails.description}
                </p>
            </div>
        </div>
    </div>;
}

export default Details;