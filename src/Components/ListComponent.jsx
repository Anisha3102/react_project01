import React from 'react'

const ListComponent = (props) => {
  return (
    <>
      {props.products.map((product) => (
        <div className="w-64 h-96 bg-gradient-to-r from-fuchsia-500 to-fuchsia-800 rounded-2xl p-8 m-16 relative top-16 mr-4 left-12">
          <h1 className="text-center text-2xl text-white mb-2">
            Product Listing
          </h1>

          <img className="rounded-xl h-36" src={product.image} alt="" />
          <p className="text-white text-center mt-4">
            {product.productdesc}
          </p>

          <div className="flex mt-6 gap-1 text-center">
            <button className="rounded-2xl w-24 bg-black text-green-500 p-2 ">
              Add{" "}
            </button>
            <button className="rounded-2xl w-24 bg-black text-red-300 p-2 ">
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListComponent
