import React from "react"
import './Cart.css'
function Categories({ value, onClickCategory }) {
    const categories = [
        {
            ruName: 'Смартфоны',
            name: 'smartphones'
        },
        {
            ruName: 'Ноутбуки',
            name: 'laptops'
        },
        {
            ruName: 'Духи',
            name: 'fragrances'
        },
        {
            ruName: 'Уход за кожей',
            name: 'skincare'
        },
        {
            ruName: 'Продукты',
            name: 'groceries'
        }
    
]
    
    return(
        <div className="categories">
            <ul>
                {categories.map((category, i) => (
                    <li
                    key={i} 
                    onClick={() => onClickCategory(category.name)} 
                    className={value === i ? 'active' : ''}>
                    {category.ruName}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Categories