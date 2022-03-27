import React from "react";
import ProductComponent from "../component/product";
const ShopPage = () => {
    return (
        <div>
            <div class="product-big-title-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="product-bit-title text-center">
                                <h2>Smartphones</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-product-area">
                <div class="zigzag-bottom"></div>
                <div class="container"></div>
                <div class="row"></div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ProductComponent></ProductComponent>
                </div>
            </div>
        </div>
    )
}
export default ShopPage;