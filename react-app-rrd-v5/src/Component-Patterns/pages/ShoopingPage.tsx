import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

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
                 <ProductCard 
                    product={product} 
                    className="bg-dark text-white"
                >
                    <ProductImage  className="custom-image"/>
                    <ProductTitle  className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                {/* Compound Component Parents */}
                <ProductCard 
                    product={product} 
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage 
                        style={{
                            boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                    />
                    <ProductTitle
                        style={{
                            fontWeight: 'bold'
                        }}
                     />
                    <ProductButtons 
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>

                {/* Compound Component Parents definiendo nombres*/}
                <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'This Title'} className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

               

            </div>
        </div>
    )
}
