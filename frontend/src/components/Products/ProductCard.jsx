import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <img
        src={product?.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <div className="mt-2 text-lg font-bold">${product.discountPrice || product.price}</div>
    </div>
  );
};

export default ProductCard;


