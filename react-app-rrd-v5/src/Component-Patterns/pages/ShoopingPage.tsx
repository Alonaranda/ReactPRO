import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoopingPage = () => {
    return (
        <div>
            <h1>Shoping Page</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                
                 {/* Compound Component Parents */}
                 <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

                {/* Compound Component Parents definiendo nombre*/}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'This Title'}/>
                    <ProductCard.Buttons />
                </ProductCard>

               

            </div>
        </div>
    )
}
