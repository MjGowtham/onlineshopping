import React from "react";
import FooterComponent from "../component/footer";
import ProductComponent from "../component/product";
const ShopPage = () => {
    return (
        <div>
            <div clasName="product-big-title-area">
                <div clasName="container">
                    <div clasName="row">
                        <div clasName="col-md-12">
                            <div clasName="product-bit-title text-center">
                                <h2>Smartphones</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div clasName="single-product-area">

                <div clasName="zigzag-bottom"></div>
                <div clasName="container"></div>
                <div clasName="row"></div>
                <div clasName="col-md-3 col-sm-6"></div>
                <ProductComponent></ProductComponent>
                <ProductComponent></ProductComponent>
                <ProductComponent></ProductComponent>  
                <ProductComponent></ProductComponent>
                    

            </div>

        </div>

    )
}
export default ShopPage;