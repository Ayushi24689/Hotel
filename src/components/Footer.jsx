import React from "react";

const Footer = () => {

  return (
    <>  
    <div class="main-12">
<div class="img-text-15"></div>
        </div>
      <div className="footer-main">
    <div className="footer-top">
        <div className="container-13">
            <div className="footer-inner">
                <div className="footer-column">
                    <div className="column-title">products</div> <br/> <br/>
                    <ul className="column-list-1">
                        <div classNames="icon-1">
                            <i class= "fa-map-marker">
                            </i>
                        <li ><strong>address</strong> <br/> <span> Street,City,London </span></li>
                        </div>
                       <div classname="icon-2">
                        <i classname="phone-icon">
                        </i>
                        <li><strong>phone</strong> <br/> <span> (123) 456 7890 </span></li>
                        </div>
                        <div classname="icon-3">
                            <i classname="mail-icon">
                            </i>
                        <li><strong>mail us</strong> <br/> <span>mail@example.com</span></li>
                        </div>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="column-title">my account</div>
                    <ul className="column-list">
                        <li><a href="#"><span>My account</span></a></li>
                        <li><a href="#"><span>Login</span></a></li>
                        <li><a href="#"><span>Shopping Cart</span></a></li>
                        <li><a href="#"><span>My Wishlist</span></a></li>
                        <li><a href="#"><span>Track Order</span></a></li>
                        <li><a href="#"><span>Return Policy</span></a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="column-title">quick links</div>
                    <ul className="column-list">
                        <li><a href="#"><span>Privacy and Cookie Policy</span></a></li>
                        <li><a href="#"><span>Search Terms</span></a></li>
                        <li><a href="#"><span>Contact Us</span> </a></li>
                        <li><a href="#"><span>Orders and Returns</span></a></li>
                        <li><a href="#"><span>Advanced Search</span></a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="column-title">customer services</div>
                    <ul className="column-list">
                        <li><a href="#"><span>Phone: +123-456-7890</span></a></li>
                        <li><a href="#"><span>Live Chat</span></a></li>
                        <li><a href="#"><span>About Us</span></a></li>
                        <li><a href="#"><span>Terms & Condition</span></a></li>
                        <li><a href="#"><span>Customer  Relation</span></a></li>
                        <li><a href="#"><span>Privacy Policy</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-middle"> 
        <div className="container-14">
    <div className="footer-inner-1">
            <div className="child-10">
            <img src="../images/english-footer-logo.png" alt=""/>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Laudantium,<br/>
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta <br/>
                                                           sunt explicabo.
                </p>
                <div className="social">
                    <ul className="column-list-2">
                        <div className="icon-4">
                            <a href="#">
                            <i className= "facebook">
                            </i>
                            </a>
                        <li></li>
                        </div>
                       <div className="icon-5">
                        <a href="#">
                            <i className="twitter">
                            </i>
                        </a>
                            <li></li>
                        </div>
                        <div className="icon-6">
                            <a href="#">
                            <i className="printrest">
                            </i>
                            </a>
                            <li></li>
                        </div>
                        <div className="icon-7">
                            <a href="#">
                            <i className="youtube">
                            </i>
                            </a>
                            <li></li>
                        </div>
                        <div className="icon-8">
                            <a href="#">
                            <i className="vimeo-v">
                            </i>
                            </a>
                            <li></li>
                        </div>
                        <div className="icon-9">
                            <a href="#">
                            <i className="instagram">
                            </i>
                            </a>
                            <li></li>
                        </div>
                    </ul>
                </div>
            </div>
    </div>
        </div>
     </div>
    <div className="footer-bottom">
       <div className="page-main">
        <div className="content-main">
            <div className="left">
                <p className="copyright-text">copyright © Etrend 2020. All right reserved.</p>
            </div>
            <div className="right">
                <ul className="payment-icons">
                    <li>
                        <img src="../images/amex.png" alt=""/>
                    </li>
                    <li>
                        <img src="../images/mastercard.png" alt=""/>
                    </li>
                    <li>
                        <img src="../images/paypal.png" alt=""/>
                    </li>
                    <li>
                        <img src="../images/visa.png" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
       </div>
</div>
</div>
</>
  );
};

export default Footer;