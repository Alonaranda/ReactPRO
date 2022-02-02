# alonaranda-product-card

- Este es un paquete de pruebas de despliegue en NPM

## Ejemplo

`import {} from 'alonaranda-product-card`

```js
<ProductCard
  key={product.id}
  product={product}
  initialValues={{
    count: 0,
    //maxCount: 6,
  }}
>
  {({ reset, count, increaseBy, isMaxCountReaced, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
