import React, { useEffect, useState } from "react";
import FooterComponent from "../component/footer";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ProductComponent from "../component/product";

const HomePage = () => {

    const [recentProduct, setRecentProduct] = useState([]);
    const [TopSelling, setTopSelling] = useState([]);
    useEffect(() => {
        loadRecentProduct();
        loadProductReview();
    }, [])
    const loadRecentProduct = () => {
        const url = "https://shop143.herokuapp.com/telebuy/api/products/latest";
        // const config={
        //     headers: {
        //           Authorization: 'Bearer ' + token  (=>This is create a key to store our API for secure. cannot to hack) 
        //           }
        // };
        // axios.get(url,config)
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setRecentProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const loadProductReview = () => {
        const url = "https://shop143.herokuapp.com/telebuy/api/product/preview";
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setTopSelling(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const latestProduct = recentProduct.map((value, index) => {
        return (
            <ProductComponent {...value}></ProductComponent>
        )
    })

    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/h4-slide.png")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="caption-group">
                                <h2 className="caption title">
                                    iPhone <span className="primary">6 <strong>Plus</strong></span>
                                </h2>
                                <h4 className="caption subtitle">Dual SIM</h4>
                                <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/h4-slide2.png")}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="caption-group">
                                <h2 className="caption title">
                                    by one, get one <span className="primary">50% <strong>off</strong></span>
                                </h2>
                                <h4 className="caption subtitle">school supplies & backpacks.*</h4>
                                <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/h4-slide3.png")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="caption-group">
                                <h2 className="caption title">
                                    Apple <span className="primary">Store <strong>Ipod</strong></span>
                                </h2>
                                <h4 className="caption subtitle">Select Item</h4>
                                <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/h4-slide4.png")}
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <div className="caption-group">
                                <h2 className="caption title">
                                    Apple <span className="primary">Store <strong>Ipod</strong></span>
                                </h2>
                                <h4 className="caption subtitle">& Phone</h4>
                                <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="maincontent-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="section-title">Latest Products</h2>
                                <div className="product-carousel">
                                    <ProductComponent></ProductComponent>
                                    {/* <div className="single-product">
                                        <div className="product-f-image">
                                            <img src={require("../images/product-1.jpg")} alt="" />
                                            <div className="product-hover">
                                                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                                    cart</a>
                                                <a href="single-product.html" className="view-details-link"><i
                                                    className="fa fa-link"></i> See details</a>
                                            </div>
                                        </div>

                                        <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>

                                        <div className="product-carousel-price">
                                            <ins>$700.00</ins> <del>$100.00</del>
                                        </div>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img src={require("../images/product-2.jpg")} alt="" />
                                            <div className="product-hover">
                                                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                                    cart</a>
                                                <a href="single-product.html" className="view-details-link"><i
                                                    className="fa fa-link"></i> See details</a>
                                            </div>
                                        </div>

                                        <h2>Nokia Lumia 1320</h2>
                                        <div className="product-carousel-price">
                                            <ins>$899.00</ins> <del>$999.00</del>
                                        </div>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img src={require("../images/product-3.jpg")} alt="" />
                                            <div className="product-hover">
                                                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                                    cart</a>
                                                <a href="single-product.html" className="view-details-link"><i
                                                    className="fa fa-link"></i> See details</a>
                                            </div>
                                        </div>

                                        <h2>LG Leon 2015</h2>

                                        <div className="product-carousel-price">
                                            <ins>$400.00</ins> <del>$425.00</del>
                                        </div>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img src={require("../images/product-4.jpg")} alt="" />
                                            <div className="product-hover">
                                                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                                    cart</a>
                                                <a href="single-product.html" className="view-details-link"><i
                                                    className="fa fa-link"></i> See details</a>
                                            </div>
                                        </div>

                                        <h2><a href="single-product.html">Sony microsoft</a></h2>

                                        <div className="product-carousel-price">
                                            <ins>$200.00</ins> <del>$225.00</del>
                                        </div>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img src={require("../images/product-5.jpg")} alt="" />
                                            <div className="product-hover">
                                                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                                                    cart</a>
                                                <a href="single-product.html" className="view-details-link"><i
                                                    className="fa fa-link"></i> See details</a>
                                            </div>
                                        </div>

                                        <h2>iPhone 6</h2>

                                        <div className="product-carousel-price">
                                            <ins>$1200.00</ins> <del>$1355.00</del>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={() =>loadRecentProduct()}>Call API</button>
            <button onClick={()=>loadProductReview()}>Call Recent API</button> */}

            <div className="promo-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo1">
                                <i className="fa fa-refresh"></i>
                                <p>30 Days return</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo2">
                                <i className="fa fa-truck"></i>
                                <p>Free shipping</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo3">
                                <i className="fa fa-lock"></i>
                                <p>Secure payments</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo4">
                                <i className="fa fa-gift"></i>
                                <p>New products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-widget-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">Top Sellers</h2>
                                <a href="" className="wid-view-more">View All</a>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-1.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-2.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Apple new mac book 2015</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-3.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">Recently Viewed</h2>
                                <a href="#" className="wid-view-more">View All</a>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-4.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-1.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Sony Smart Air Condtion</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-1.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">Top New</h2>
                                <a href="#" className="wid-view-more">View All</a>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-1.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-1.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src={require("../images/product-thumb-1.jpg")} alt=""
                                        className="product-thumb" /></a>
                                    <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>

    )
}
export default HomePage;