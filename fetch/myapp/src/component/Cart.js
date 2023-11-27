import './Cart.css'
function Cart(props) {
    const { price, title, images } = props 
    return (
        <div className='main'>
        <div className='cart'>
            <img className='img' src={images[0]}/>
            <h3 className='h3'>{title}</h3>
            <h3 className='h3_1'>Price:{price}</h3>
        </div>
        </div>
    )
}
export default Cart