///-------In this code many errors----///

// import { createSlice, createAsyncThunk } from "reduxjs/toolkit";
// import axios from "axios";

// //Async Thunk to Fetch Products by Collection and optional Filters
// export const fetchProductsByFilters = createAsyncThunk(
//     "products/fetchByFilters",
//     async ({
//         collection,
//         size,
//         color,
//         gender,
//         minPrice,
//         maxPrice,
//         sortBy,
//         search,
//         category,
//         material,
//         brand,
//         limit,
//     }) => {
//         const query = new URLSearchParams();
//         if (collection) query.append("collection", collection);
//         if (size) query.append("size", size);
//         if (color) query.append("color", color);
//         if (gender) query.append("gender", gender);
//         if (minPrice) query.append("minPrice", minPrice);
//         if (maxPrice) query.append("maxPrice", maxPrice);
//         if (sortBy) query.append("sortBy", sortBy);
//         if (search) query.append("search", search);
//         if (material) query.append("material", material);
//         if (category) query.append("category", category);
//         if (brand) query.append("brand", brand);
//         if (limit) query.append("limit", limit);

//         const responese = await axios.get(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
//         );
//         return responese.data;
//     }
// );

// //Async Thunk to fetch a single product by ID
// export const fetchProductDetails = createAsyncThunk(
//     "products/fetchProductDetails",
//     async (id) => {
//         const responese = await axios.get(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
//         );
//         return responese.data;
//     }
// );

// //Async thunk to  fetch similar products
// export const updateProducts = createAsyncThunk(
//     "products/updateProduct",
//     async ({ id, productData }) => {
//         const responese = await axios.put(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
//             productData,
//             {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                 },
//             }
//         );
//         return responese.data;
//     }
// );

// //Async thunk to fetch similar products
// export const fetchSimilarProducts = createAsyncThunk(
//     "products/fetchSimilarProducts",
//     async ({ id }) => {
//         const responese = await axios.get(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
//         );
//         return responese.data;
//     }
// );

// const productsSlice = createSlice({
//     name: "products",
//     initialState: {
//         products: [],
//         selectedProduct: null, //Store the details of the single products
//         similarProducts: [],
//         loading: false,
//         error: null,
//         filters: {
//             category: "",
//             size: "",
//             color: "",
//             gender: "",
//             brand: "",
//             minPrice: "",
//             maxPrice: "",
//             sortBy: "",
//             search: "",
//             material: "",
//             collection: "",
//         },
//     },
//     reducers: {
//         setFilters: (state, action) => {
//             state.filters = { ...state.filters, ...action.payload };
//         },
//         clearFilters: { state } => {
//     state.filters = {
//         category: "",
//         size: "",
//         color: "",
//         gender: "",
//         brand: "",
//         minPrice: "",
//         maxPrice: "",
//         sortBy: "",
//         search: "",
//         material: "",
//         collection: "",
//     };
// },
//     },
// extraReducers: (builder) => {
//     builder
//         //handle fetching products with filter
//         .addCase(fetchProductsByFilters.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
//             state.loading = false;
//             state.products = Array.isArray(action, payload) ? action.payload : [];
//         })
//         .addCase(fetchProductsByFilters.rejected, (state, action) => {
//             state.loading = false;
//             state.error - action.error.message;
//         })
//         //handle fetching single product details
//         .addCase(fetchProductDetails.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(fetchProductDetails.fulfilled, (state, action) => {
//             state.loading = false;
//             state.selectedProduct = action.payload;
//         })
//         .addCase(fetchProductDetails.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })
//         //handle updating products
//         .addCase(updateProducts.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(updateProducts.fulfilled, (state, action) => {
//             state.loading = false;
//             const updateProducts = action.payload;
//             const index = state.products.findIndex((product) => product._id === updateProduct._id
//             );
//             if (index !== -1) {
//                 state.products[index] = updatedProduct;
//             }
//         })
//         .addCase(updateProducts.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         });
//         //handle updating products new add products
//         .addCase(fetchSimilarProducts.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
//             state.loading = false;
//             state.products = action.error.message;

//         })
//         .addCase(fetchSimilarProducts.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         });


// },
// });


// export const { setFilters, clearFilters } = productsSlice.actions;
// export default productsSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async Thunk to Fetch Products by Collection and optional Filters
// export const fetchProductsByFilters = createAsyncThunk(
//     "products/fetchByFilters",
//     async ({
//         collection,
//         size,
//         color,
//         gender,
//         minPrice,
//         maxPrice,
//         sortBy,
//         search,
//         category,
//         material,
//         brand,
//         limit,
//     }) => {
//         const query = new URLSearchParams();
//         if (collection) query.append("collection", collection);
//         if (size) query.append("size", size);
//         if (color) query.append("color", color);
//         if (gender) query.append("gender", gender);
//         if (minPrice) query.append("minPrice", minPrice);
//         if (maxPrice) query.append("maxPrice", maxPrice);
//         if (sortBy) query.append("sortBy", sortBy);
//         if (search) query.append("search", search);
//         if (material) query.append("material", material);
//         if (category) query.append("category", category);
//         if (brand) query.append("brand", brand);
//         if (limit) query.append("limit", limit);

//         const responese = await axios.get(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
//         );
//         return responese.data;
//     }
// );

// // Async Thunk to fetch a single product by ID
// export const fetchProductDetails = createAsyncThunk(
//     "products/fetchProductDetails",
//     async (id) => {
//         const responese = await axios.get(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
//         );
//         return responese.data;
//     }
// );

// // Async thunk to update products
// export const updateProducts = createAsyncThunk(
//     "products/updateProduct",
//     async ({ id, productData }) => {
//         const responese = await axios.put(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
//             productData,
//             {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                 },
//             }
//         );
//         return responese.data;
//     }
// );

// // Async thunk to fetch similar products
// export const fetchSimilarProducts = createAsyncThunk(
//     "products/fetchSimilarProducts",
//     async ({ id }) => {
//         const responese = await axios.get(
//             `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
//         );
//         return responese.data;
//     }
// );

// const productsSlice = createSlice({
//     name: "products",
//     initialState: {
//         products: [],
//         selectedProduct: null,
//         similarProducts: [],
//         loading: false,
//         error: null,
//         filters: {
//             category: "",
//             size: "",
//             color: "",
//             gender: "",
//             brand: "",
//             minPrice: "",
//             maxPrice: "",
//             sortBy: "",
//             search: "",
//             material: "",
//             collection: "",
//         },
//     },
//     reducers: {
//         setFilters: (state, action) => {
//             state.filters = { ...state.filters, ...action.payload };
//         },
//         // ❌ Your syntax was wrong: `clearFilters: { state } => { ... }`
//         // ✅ Fix:
//         clearFilters: (state) => {
//             state.filters = {
//                 category: "",
//                 size: "",
//                 color: "",
//                 gender: "",
//                 brand: "",
//                 minPrice: "",
//                 maxPrice: "",
//                 sortBy: "",
//                 search: "",
//                 material: "",
//                 collection: "",
//             };
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             // Fetch products by filter
//             .addCase(fetchProductsByFilters.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
//                 state.loading = false;
//                 // ❌ Invalid: `Array.isArray(action, payload)`
//                 // ✅ Fix:
//                 state.products = Array.isArray(action.payload) ? action.payload : [];
//             })
//             .addCase(fetchProductsByFilters.rejected, (state, action) => {
//                 state.loading = false;
//                 // ❌ You wrote `state.error - action.error.message`
//                 // ✅ Fix:
//                 state.error = action.error.message;
//             })

//             // Fetch single product
//             .addCase(fetchProductDetails.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchProductDetails.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.selectedProduct = action.payload;
//             })
//             .addCase(fetchProductDetails.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })

//             // Update product
//             .addCase(updateProducts.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(updateProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 const updatedProduct = action.payload;
//                 const index = state.products.findIndex(
//                     (product) => product._id === updatedProduct._id
//                 );
//                 if (index !== -1) {
//                     state.products[index] = updatedProduct;
//                 }
//             })
//             .addCase(updateProducts.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })

//             // Fetch similar products
//             .addCase(fetchSimilarProducts.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 // ❌ You had `state.products = action.error.message;`
//                 // ✅ Fix: Set similarProducts, not products, and use `action.payload`
//                 state.similarProducts = action.payload;
//             })
//             .addCase(fetchSimilarProducts.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             });
//     },
// });

// export const { setFilters, clearFilters } = productsSlice.actions;
// export default productsSlice.reducer;



////This is fix code


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to Fetch Products by Collection and optional Filters
export const fetchProductsByFilters = createAsyncThunk(
    "products/fetchByFilters",
    async ({
        collection,
        size,
        color,
        gender,
        minPrice,
        maxPrice,
        sortBy,
        search,
        category,
        material,
        brand,
        limit,
    }) => {
        const query = new URLSearchParams();
        if (collection) query.append("collection", collection);
        if (size) query.append("size", size);
        if (color) query.append("color", color);
        if (gender) query.append("gender", gender);
        if (minPrice) query.append("minPrice", minPrice);
        if (maxPrice) query.append("maxPrice", maxPrice);
        if (sortBy) query.append("sortBy", sortBy);
        if (search) query.append("search", search);
        if (material) query.append("material", material);
        if (category) query.append("category", category);
        if (brand) query.append("brand", brand);
        if (limit) query.append("limit", limit);

        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
        );
        return response.data;
    }
);

// Async Thunk to fetch a single product by ID
export const fetchProductDetails = createAsyncThunk(
    "products/fetchProductDetails",
    async (id) => {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
        );
        return response.data;
    }
);

// Async thunk to update products
export const updateProducts = createAsyncThunk(
    "products/updateProduct",
    async ({ id, productData }) => {
        const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
            productData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            }
        );
        return response.data;
    }
);

// Async thunk to fetch similar products
export const fetchSimilarProducts = createAsyncThunk(
    "products/fetchSimilarProducts",
    async ({ id }) => {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
        );
        return response.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        selectedProduct: null,
        similarProducts: [],
        loading: false,
        error: null,
        filters: {
            category: "",
            size: "",
            color: "",
            gender: "",
            brand: "",
            minPrice: "",
            maxPrice: "",
            sortBy: "",
            search: "",
            material: "",
            collection: "",
        },
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {
                category: "",
                size: "",
                color: "",
                gender: "",
                brand: "",
                minPrice: "",
                maxPrice: "",
                sortBy: "",
                search: "",
                material: "",
                collection: "",
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch products by filter
            .addCase(fetchProductsByFilters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
                state.loading = false;
                state.products = Array.isArray(action.payload) ? action.payload : [];
            })
            .addCase(fetchProductsByFilters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Fetch single product
            .addCase(fetchProductDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Update product
            .addCase(updateProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                state.loading = false;
                const updatedProduct = action.payload;
                const index = state.products.findIndex(
                    (product) => product._id === updatedProduct._id
                );
                if (index !== -1) {
                    state.products[index] = updatedProduct;
                }
            })
            .addCase(updateProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Fetch similar products
            .addCase(fetchSimilarProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.similarProducts = Array.isArray(action.payload)
                    ? action.payload
                    : [];
            })
            .addCase(fetchSimilarProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;
