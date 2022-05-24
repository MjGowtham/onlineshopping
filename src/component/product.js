import React from "react";
import { NavLink } from "react-router-dom";
const ProductComponent = (props) => {
    return (
        <div class="product-carousel">
            <div className="single-product">
                <div className="product-f-image">
                    <img src={require("../images/product-1.jpg")} alt="" />
                    <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                            cart</a>
                        <NavLink to={"/singleproduct/"+ props.id} className="view-details-link">See details</NavLink><i
                            className="fa fa-link"></i>
                              </div>
                    
                </div>
                

                <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>

                <div className="product-carousel-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                </div>
                <div className="product-f-image">
                    <img src={require("../images/product-2.jpg")} alt="" />
                    <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                            cart</a>
                        <NavLink to={"/singleproduct/"+props.id} className="view-details-link">See details</NavLink><i
                            className="fa fa-link"></i>  </div>
                </div>

                <h2><a href="single-product.html">Nokia Lumia 1320</a></h2>

                <div className="product-carousel-price">
                    <ins>{props.discount_price}</ins> <del>{props.actual_price}</del>
                </div>
                <div className="product-f-image">
                    <img src={require("../images/product-3.jpg")} alt="" />
                    <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                            cart</a>
                        <NavLink to={"/singleproduct/"+props.id} className="view-details-link">See details</NavLink><i
                            className="fa fa-link"></i>    </div>
                </div>

                <h2><a href="single-product.html">LG Leon 2015</a></h2>

                <div className="product-carousel-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                </div>
                <div className="product-f-image">
                    <img src={require("../images/product-4.jpg")} alt="" />
                    <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                            cart</a>
                        <NavLink to={"/singleproduct/"+props.id} className="view-details-link">See details</NavLink><i
                            className="fa fa-link"></i>   </div>
                </div>

                <h2><a href="single-product.html">Sony microsoft</a></h2>

                <div className="product-carousel-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                </div>
                <div className="product-f-image">
                    <img src={require("../images/product-5.jpg")} alt="" />
                    <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                            cart</a>
                        <NavLink to={"/singleproduct/"+props.id} className="view-details-link">See details</NavLink><i
                            className="fa fa-link"></i>   </div>
                </div>

                <h2><a href="single-product.html">iPhone 6</a></h2>

                <div className="product-carousel-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                </div>
            </div>
        
            </div>
    )
}
export default ProductComponent;
