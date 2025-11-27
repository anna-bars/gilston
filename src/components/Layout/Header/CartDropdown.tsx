import cartItem from '../../../assets/cart-item-img.png';
import editIcon from '../../../assets/cart-down/edit.png';
import deleteIcon from '../../../assets/cart-down/delete.png';

export const CartDropdown = () => {
    return (
        <div className="position-absolute bg-white border rounded end-0 mt-1" 
             style={{ 
                 minWidth: '310px', 
                 width: '100%',
                 top: '55px', 
                 zIndex: 99, 
                 cursor: 'default',
                 boxShadow: '0 0 27px rgba(0, 43, 88, 0.17)',
                 borderColor: '#a3a3a3 !important'
             }}>
            
            {/* Top arrow */}
            <div className="position-absolute end-0 me-3" style={{ top: '-9px' }}>
                <img src="images/top-angle.png" alt="" style={{ width: '18px', height: '9px' }} />
            </div>

            {/* Cart Header */}
            <div className="d-flex justify-content-between align-items-centerborder-bottom" 
                 style={{ borderBottomColor: '#a3a3a3 !important',  padding: '15px 10px' }}>
                <h4 className="m-0 fw-bold" style={{ fontSize: '12px', color: '#002d58' }}>
                    Cart (2 Items)
                </h4>
                <h4 className="m-0 fw-bold" style={{ fontSize: '14px', color: '#002d58' }}>
                    $61.00
                </h4>
            </div>

            {/* Cart Items */}
            <div className="cart-items">
                <ul className="list-unstyled m-0">
                    {[1, 2].map((item) => (
                        <li key={item} className="border-bottom" style={{ borderBottomColor: '#a3a3a3 !important' }}>
                            <div className="d-flex p-2 align-items-start">
                                {/* Product Image */}
                                <div className="border me-2 d-flex align-items-center justify-content-center" 
                                     style={{ 
                                         width: '65px', 
                                         height: '50px', 
                                         borderColor: '#a3a3a3 !important',
                                         padding: '10px',
                                         borderRadius: '5px'
                                     }}>
                                    <img 
                                        src={cartItem} 
                                        alt="Product" 
                                        className="img-fluid"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                                
                                {/* Product Details */}
                                <div className="flex-grow-1">
                                    <h3 className="m-0 mb-1" 
                                        style={{ 
                                            fontSize: '14px', 
                                            lineHeight: '1.4', 
                                            color: '#002d58' 
                                        }}>
                                        3" Sieve, All Stainless, Full Height, 3/8"
                                    </h3>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* Quantity and Price */}
                                        <div className="d-flex align-items-center">
                                            <h4 className="m-0 border me-2 bg-light" 
                                                style={{ 
                                                    fontSize: '12px',
                                                    color: '#002d58',
                                                    background: '#ececec !important',
                                                    padding: '5px 8px',
                                                    borderRadius: '5px'
                                                }}>
                                                1
                                            </h4>
                                            <h5 className="m-0 fw-bold" 
                                                style={{ 
                                                    fontSize: '14px', 
                                                    color: '#88c633' 
                                                }}>
                                                $35.50
                                            </h5>
                                        </div>
                                        
                                        {/* Action Icons */}
                                        <div className="d-flex">
                                            <i className="fa fa-pencil-square-o me-2" 
                                               style={{ 
                                                   color: '#002c58', 
                                                   fontSize: '18px',
                                                   cursor: 'pointer'
                                               }} 
                                               aria-hidden="true">
                                                <img loading="lazy" src={editIcon} alt="Live Chat" />
                                               </i>
                                            <i className="fa fa-trash-o" 
                                               style={{ 
                                                   color: '#002c58', 
                                                   fontSize: '18px',
                                                   cursor: 'pointer'
                                               }} 
                                               aria-hidden="true">
                                                <img loading="lazy" src={deleteIcon} alt="Live Chat" />
                                               </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buttons */}
            <div className="p-2">
                <a href="https://www.globalgilson.com/order/checkout" 
                   className="btn w-100 mb-1 fw-bold d-block text-center" 
                   style={{ 
                       fontSize: '14px',
                       background: '#f59a1f', 
                       color: '#fff',
                       border: 'none',
                       borderRadius: '5px',
                       padding: '6px 20px'
                   }}>
                    Proceed to Checkout
                </a>
                <a href="https://www.globalgilson.com/cart" 
                   className="btn w-100 fw-bold d-block text-center" 
                   style={{ 
                       fontSize: '14px',
                       background: 'transparent', 
                       color: '#002d58',
                       border: '1px solid #002d58',
                       borderRadius: '5px',
                       padding: '5px 15px'
                   }}>
                    View Cart
                </a>
            </div>
        </div>
    );
};