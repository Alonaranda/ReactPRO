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
                initialValues={{
                    count: 0,
                    //maxCount: 6,
                }}
            >
                {
                    ({reset, count, increaseBy, isMaxCountReaced, maxCount}) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
                
            </ProductCard>
        </div>
    )
}
