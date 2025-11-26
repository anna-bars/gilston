import cartItem from '../../../assets/cart-item-img.png';

export const CartDropdown = () => {
    return (
        <div className="position-absolute bg-white shadow rounded end-0 mt-0" style={{ top: '100%', width: '300px', zIndex: 1000, cursor: 'default' }}>
            <div className="position-absolute" style={{ top: '-9px', right: '15px' }}>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light rounded-top">
                <h4 className="m-0" style={{ fontSize: '14px', color: '#002d58' }}>Cart (2 Items)</h4>
                <h4 className="m-0 fw-bold" style={{ fontSize: '14px', color: '#002d58' }}>$61.00</h4>
            </div>
            <div className="cart-items p-0">
                <ul className="list-unstyled m-0">
                    {[1, 2].map((item) => (
                        <li key={item} className="d-flex p-3 border-bottom">
                            <div className="me-2" style={{ width: '60px' }}><img src={cartItem} alt="Product" className="img-fluid border" /></div>
                            <div className="flex-grow-1">
                                <h3 className="m-0 mb-1" style={{ fontSize: '13px', lineHeight: '1.4', color: '#333' }}>3" Sieve, All Stainless, Full Height, 3/8"</h3>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div><h4 className="d-inline-block me-2 m-0 border px-2 bg-light">1</h4><h5 className="d-inline-block m-0 fw-bold" style={{ fontSize: '14px' }}>$35.50</h5></div>
                                    <div><i className="fa fa-pencil-square-o text-primary me-2" style={{cursor: 'pointer'}}></i><i className="fa fa-trash-o text-danger" style={{cursor: 'pointer'}}></i></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-3">
                <a href="https://www.globalgilson.com/order/checkout" className="btn btn-primary w-100 mb-2 text-white fw-bold" style={{ background: '#002d58', border: 'none' }}>Proceed to Checkout</a>
                <a href="https://www.globalgilson.com/cart" className="btn btn-outline-secondary w-100 fw-bold">View Cart</a>
            </div>
        </div>
    );
};
