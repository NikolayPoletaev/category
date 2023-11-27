import { useState, useEffect } from 'react'
import Cart from './Cart'
import Categories from './Categories.js'



function Carts() {
    const [ cart , setCarts ] = useState([])
    const [ error, setError ] = useState('')
    const [categoryId, setCategoryId] = useState('laptops')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://dummyjson.com/products/category/' + categoryId)
        .then((res)=> res.json())
        .then((carts) =>  setCarts(carts))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false))
},[categoryId])
console.log(cart.products)
if (error) {
    return <h1>Error: {error}</h1>
}
    return(
        <div>
            <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (   
            cart.products.map((cart) => <Cart key={cart.id} {...cart} />)
            )}
            </div>
    )
        }

export default Carts