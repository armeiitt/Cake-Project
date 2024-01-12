import React from "react";

const products = [
  {
    id: 1,
    name: "Strawberry Shortcake Truffle Dozen Box",
    imageUrl:
      "https://skins.minimog.co/cdn/shop/products/8_46124baa-b484-4afe-b916-7dfbb2e56007.jpg",
    price: "$32.00",
  },
  {
    id: 2,
    name: "B'day Truffle Dozen Box",
    imageUrl:
      "https://skins.minimog.co/cdn/shop/products/7_93e9fa05-6552-4f57-b264-e94430da2c77.jpg",
    price: "$32.00",
  },
  {
    id: 3,
    name: "Chocolate B'day Truffle Dozen Box",
    imageUrl:
      "https://skins.minimog.co/cdn/shop/products/6_aca54fc4-6e3b-4a2d-81c8-6266fbb1a2a2.jpg",
    price: "$32.00",
  },
  {
    id: 4,
    name: "Milk Bar® Pie",
    imageUrl:
      "https://skins.minimog.co/cdn/shop/products/4_17de000d-8fa7-4349-846f-e754bf4fa7bd.jpg",
    price: "$32.00",
  },
  {
    id: 5,
    name: "Summer Splash",
    imageUrl:
      "https://skins.minimog.co/cdn/shop/products/12_140052e8-2f69-41fe-8cde-c3074e9ea6ca.jpg",
    price: "$32.00",
  },
  {
    id: 6,
    name: "Birthday Cake Ice Cream",
    imageUrl:
      "https://skins.minimog.co/cdn/shop/products/11_90c3e4f2-aa8e-430c-bb48-3d536186f19a.jpg",
    price: "$32.00",
  },
];

function ProductCard({ product }) {
  return (
    <div className="d-flex flex-column gap-2">
      <div className="product-card__media w-100">
        <img
          src={product.imageUrl}
          style={{ width: "100%" }}
          alt={product.name}
        />
      </div>
      <div className="text-color-heading d-flex flex-column">
        <div className="font-signiko-negative text-product-heading">
          {product.name}
        </div>
        <div className="text-product-heading" style={{ fontSize: "18px" }}>
          {product.price}
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div id="products-show" className="d-flex flex-wrap gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function MainSection() {
  return (
    <main id="main" className="container">
      <div>
        <div className="heading-container">
          <h4 className="heading-title">More cake, cookies, pie</h4>
        </div>
      </div>
      <ProductList />
      <div className="py-3">
        <div className="banner-container d-flex flex-row">
          <div className="banner-media" style={{ width: "55%" }}>
            <img
              src="https://skins.minimog.co/cdn/shop/files/cake_image_card.jpg?v=1659954235&amp;width=940"
              alt=""
              srcSet=""
              style={{ width: "100%" }}
            />
          </div>
          <div
            className="banner-content d-flex flex-column justify-content-center align-items-center p-5 gap-4"
            style={{ width: "45%" }}
          >
            <div className="heading-title">Don’t let summer float away</div>
            <div>
              <p>
                Snag some cool treats now! And we’ll deliver them straight to
                you in temperature controlled packaging, so they’re cold and
                ready to eat. You don’t have to get out of the pool ;
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn-default">SHOW NOW</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
