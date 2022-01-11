import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'

const product1 = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2];


export interface ProductInCart extends Product{
    count: number;
}

export const ShoopingPage = () => {
     
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}:{count:number, product:Product}) => {
        setShoppingCart(oldShoppingCart => {
            if( count === 0 ) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }
        });
    }

    return (
        <div>
            <h1>Shoping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            value={shoppingCart[product.id]?.count || 0}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgb(0, 0, 0, 0.2' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            {/* <input
                    value={counter}
                    onChange={(e) => setCounter(e.target.value)}
                /> */}

            <div className="shopping-cart">

                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{
                                width: '100px',
                            }}
                            onChange={onProductCountChange}
                            value={product.count}
    
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgb(0, 0, 0, 0.2' }} />
                            <ProductButtons 
                                className="custom-buttons" 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
