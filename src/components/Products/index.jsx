import React from "react";
import "./styles.scss";

import formatCurrency from "common/formatCurrency";

import { ReactComponent as FillStar } from "assets/ico/fillstar.svg";
import { ReactComponent as EmptyStar } from "assets/ico/emptystar.svg";

export default function Products({ product }) {
  const ProductsRatio = [
    { star: 1 },
    { star: 2 },
    { star: 3 },
    { star: 4 },
    { star: 5 },
  ];
  return (
    <div className="product-wrapper">
      <div className="product-img">
        {product.listPrice && (
          <>
            <div className="product-off-background" />
            <span className="product-off-text">Off</span>
          </>
        )}
        <img src={product.imageUrl} alt="Imagem do produto X" />
      </div>
      <div className="product-info">
        <div className="product-title">
          <span>{product.productName}</span>
          <div className="product-rank">
            {ProductsRatio.map((ProductRatio) => (
              <span key={ProductRatio.star}>
                {ProductRatio.star <= product.stars ? (
                  <FillStar />
                ) : (
                  <EmptyStar />
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="product-price">
          <span className="product-old-price">
            {product.listPrice && (
              <>de R$ {formatCurrency(product.listPrice)}</>
            )}
          </span>
          <span className="product-fullprice">
            por R$ {formatCurrency(product.price)}
          </span>
          <span className="product-installments">
            {product.installments && product.installments.length > 0 && (
              <>
                ou em {product.installments[0].quantity}x de{" "}
                {formatCurrency(product.installments[0].value)}
              </>
            )}
          </span>
        </div>
      </div>
      <div className="product-button">
        <button className="primary-button">COMPRAR</button>
      </div>
    </div>
  );
}
