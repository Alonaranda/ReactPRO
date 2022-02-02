# alonaranda-product-card

- Este es un paquete de pruebas de despliegue en NPM

`Este paquete no sirve de nada, no lo instale, estoy aprendiendo sobre como manejar paquetes`

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
