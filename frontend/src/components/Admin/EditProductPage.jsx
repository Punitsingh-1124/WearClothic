///-------In this code many errors----///

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { fetchProductDetails } from '../../redux/slices/productsSlice';
// import axios from 'axios';
// import { updateProduct } from '../../redux/slices/adminProductSlice';

// const EditProductPage = () => {


//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const { selectedProducts, loading, error } = useSelector((state) => state.products);


//     const [productData, setProductData] = useState({
//         name: "",
//         description: "",
//         price: 0,
//         countInStock: 0,
//         sku: "",
//         category: "",
//         brand: "",
//         sizes: [],
//         colors: [],
//         collections: "",
//         material: "",
//         geneder: "",
//         images: []
//     });

//     const [uploading, setUploading] = useState(false);  //Image uploading state

//     useEffect(() => {
//         if (id) {
//             dispatch(fetchProductDetails(id));
//         }
//     }, [dispatch, id]);

//     useEffect(() => {
//         if (selectedProducts) {
//             setProductData(selectedProducts);
//         }
//     }, [selectedProducts]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProductData((prevData) => ({ ...prevData, [name]: value }))
//     }

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         const formData = new FormData();
//         formData.append("image", file);

//         try {
//             setUploading(true);
//             const { data } = await axios.post(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
//                 formData,
//                 {
//                     headers: { "Content-Type": "multipart/form-data" }
//                 }
//             );
//             setProductData((prevData) => ({
//                 ...prevData,
//                 images: [...prevData.images, { url: data.ImageUrl, altText: "" }],
//             }));
//             setUploading(false);
//         } catch (error) {
//             console.error(error);
//             setUploading(false);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateProduct({ id, productData }));
//         navigate("/admin/products");
//     };

//     if (loading) return <p>Loading ...</p>
//     if (error) return <p>Error: {error}</p>

//     return (
//         <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
//             <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Name */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">Product Name</label>
//                     <input
//                         type="text"
//                         name='name'
//                         value={productData.name}
//                         onChange={handleChange}
//                         className='w-full border border-gray-300 rounded-md p-2'
//                         required
//                     />
//                 </div>

//                 {/* Description */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">Description</label>
//                     <textarea
//                         name='description'
//                         value={productData.description}
//                         onChange={handleChange}
//                         className='w-full border border-gray-300 rounded-md p-2'
//                         rows={4}
//                         required
//                     />
//                 </div>

//                 {/* Price */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">Price</label>
//                     <input
//                         type="number"
//                         name='price'
//                         value={productData.price}
//                         onChange={handleChange}
//                         className='w-full border border-gray-300 rounded-md p-2'
//                     />
//                 </div>

//                 {/* Count In Stock */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">Count In Stock</label>
//                     <input
//                         type="number"
//                         name='countInStock'
//                         value={productData.countInStock}
//                         onChange={handleChange}
//                         className='w-full border border-gray-300 rounded-md p-2'
//                     />
//                 </div>

//                 {/* SKU */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">SKU</label>
//                     <input
//                         type="text"
//                         name='sku'
//                         value={productData.sku}
//                         onChange={handleChange}
//                         className='w-full border border-gray-300 rounded-md p-2'
//                     />
//                 </div>

//                 {/* Sizes */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">Sizes (comma-separated)</label>
//                     <input
//                         type="text"
//                         name='sizes'
//                         value={productData.sizes.join(", ")}
//                         onChange={(e) => setProductData({
//                             ...productData, sizes: e.target.value.split(",").map((size) => size.trim()),
//                         })}
//                         className='w-full border border-gray-300 rounded-md p-2'
//                     />
//                 </div>

//                 {/* Colors */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">Colors (comma-separated)</label>
//                     <input
//                         type="text"
//                         name='colors'
//                         value={productData.colors.join(", ")}
//                         onChange={(e) => setProductData({
//                             ...productData,
//                             colors: e.target.value.split(",").map((color) => color.trim()),
//                         })}
//                         className='w-full border border-gray-300 rounded-md p-2'
//                     />
//                 </div>

//                 {/* Images Upload */}
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-2">Upload Image</label>
//                     <input
//                         type="file"
//                         onChange={handleImageUpload}
//                         className="block w-full text-sm text-gray-500
//                          file:mr-4 file:py-2 file:px-4
//                          file:rounded-full file:border-0
//                          file:text-sm file:font-semibold
//                        file:bg-blue-50 file:text-blue-700
//                          hover:file:bg-blue-100"
//                     />
//                     <div className="flex gap-4 mt-4">
//                         {productData.images.map((Image, index) => (
//                             <div key={index}>
//                                 <img
//                                     src={Image.url}
//                                     alt={Image.altText || "Product Image"}
//                                     className='w-20 h-20 object-cover rounded-md shadow-md'
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <button
//                     type='submit'
//                     className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors'
//                 >
//                     Update Product
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default EditProductPage



///// this is fix code 
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails, updateProducts } from "../../redux/slices/productsSlice";
import axios from "axios";
// import { updateProduct } from "../../redux/slices/adminProductSlice";

const EditProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const { selectedProduct, loading, error } = useSelector(
        (state) => state.products
    );

    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        geneder: "",
        images: [],          // ← always an array
    });

    const [uploading, setUploading] = useState(false);

    /* fetch original product once */
    useEffect(() => {
        if (id) dispatch(fetchProductDetails(id));
    }, [dispatch, id]);

    /* put payload into local state, coercing `images` into an array of objects */
    useEffect(() => {
        if (selectedProduct) {
            setProductData({
                ...selectedProduct,
                images: Array.isArray(selectedProduct.images)
                    ? selectedProduct.images.map((img) =>
                        typeof img === "string" ? { url: img } : img
                    )
                    : [],
            });
        }
    }, [selectedProduct]);

    /* --------------- handlers ------------------ */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            setUploading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            // Accept any common key that might carry the URL
            const imageUrl =
                data.ImageUrl || data.imageUrl || data.url || data.Location || "";

            if (imageUrl) {
                setProductData((prev) => ({
                    ...prev,
                    images: [...prev.images, { url: imageUrl, altText: "" }],
                }));
            }
        } catch (err) {
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProducts({ id, productData }));
        navigate("/admin/products");
    };

    /* --------------- UI ------------------------ */
    if (loading) return <p>Loading …</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
            <h2 className="text-3xl font-bold mb-6">Edit Product</h2>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows={4}
                        required
                    />
                </div>

                {/* Price */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Count In Stock */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Count In Stock</label>
                    <input
                        type="number"
                        name="countInStock"
                        value={productData.countInStock}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* SKU */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">SKU</label>
                    <input
                        type="text"
                        name="sku"
                        value={productData.sku}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Sizes */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Sizes (comma-separated)</label>
                    <input
                        type="text"
                        name="sizes"
                        value={productData.sizes.join(", ")}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                sizes: e.target.value.split(",").map((s) => s.trim()),
                            })
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Colors */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Colors (comma-separated)</label>
                    <input
                        type="text"
                        name="colors"
                        value={productData.colors.join(", ")}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                colors: e.target.value.split(",").map((c) => c.trim()),
                            })
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Image upload */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Upload Image</label>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
                    />
                    {uploading && <p className="text-sm mt-2">Uploading image…</p>}

                    <div className="flex flex-wrap gap-4 mt-4">
                        {(productData.images || []).map((img, idx) => {
                            const src = typeof img === "string" ? img : img.url;
                            return (
                                <img
                                    key={idx}
                                    src={src}
                                    alt="Product"
                                    className="w-20 h-20 object-cover rounded-md shadow-md"
                                />
                            );
                        })}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default EditProductPage;

