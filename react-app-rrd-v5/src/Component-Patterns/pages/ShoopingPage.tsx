import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/product"
import '../styles/custom-styles.css'

const product = products[0];

export const ShoopingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 0,
                    maxCount: 6,
                }}
            >
                {
                    ({reset, count, increaseBy, isMaxCountReaced, maxCount}) => (
                        <>
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgb(0, 0, 0, 0.2' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}>Reset</button>

                            <button onClick={() => increaseBy(-2)} >-2</button>
                            {
                                (!isMaxCountReaced && <button onClick={() => increaseBy(2)}  >+2</button>)
                            }
                            
                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }
                
            </ProductCard>
        </div>
    )
}
