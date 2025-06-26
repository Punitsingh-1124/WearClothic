const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");
const products = require("../data/products");
const mongoose = require("mongoose");


const router = express.Router();

//@route POST /api/products
//@desc Create a new Product
//@access Private/Admin

router.post("/", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
            user: req.user._id,   //Reference to the admin user who created it
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

//@route PUT /api/products/:id
//@desc update an existing product ID
//@access Private/admin

router.put("/:id", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        //Find product by ID
        const product = await Product.findById(req.params.id);
        if (product) {
            //Update product fields
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.discountPrice = discountPrice || product.discountPrice;
            product.countInStock = countInStock || product.countInStock;
            product.category = category || product.category;
            product.brand = brand || product.brand;
            product.sizes = sizes || product.sizes;
            product.colors = colors || product.colors;
            product.collections = collections || product.collections;
            product.material = material || product.material;
            product.gender = gender || product.gender;
            product.images = images || product.images;
            product.isFeatured =
                isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished =
                isPublished !== undefined ? isPublished : product.isPublished;
            product.tags = tags || product.tags;
            product.dimensions = dimensions || product.dimensions;
            product.weight = weight || product.weight;
            product.sku = sku || product.sku;

            //Save the updated product
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");

    }
});

//@route DELETE/ api/products/:id
//@desc DELETE a product by ID
//@access Private/Admin

router.delete("/:id", protect, admin, async (req, res) => {
    try {
        //Find the product bt ID
        const product = await Product.findById(req.params.id);

        if (product) {
            //Remove the product from DB
            await product.deleteOne();
            res.json({ message: "Product removed" });
        } else {
            res.status(404).json({ message: "Product not found" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

//@route GET /api/products
//@desc Get all products with optinal query filters
//@access Public

router.get("/", async (req, res) => {
    try {
        const {
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
        } = req.query;

        let query = {};

        //Filter logic
        if (collection && collection.toLocaleLowerCase() !== "all") {
            query.collections = collection;
        }
        if (category && category.toLocaleLowerCase() !== "all") {
            query.category = category;
        }
        if (material) {
            query.material = { $in: material.split(",") };
        }
        if (brand) {
            query.brand = { $in: brand.split(",") };
        }
        if (size) {
            query.sizes = { $in: size.split(",") };
        }
        if (color) {
            query.color = { $in: [color] };
        }
        if (gender) {
            query.gender = gender;
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);  // ✅
            if (maxPrice) query.price.$lte = Number(maxPrice);  // ✅
        }
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },       // ✅
                { description: { $regex: search, $options: "i" } } // ✅
            ];
        }

        //Sort Logic
        let sort = {};
        if (sortBy) {
            switch (sortBy) {
                case "priceAsc":
                    sort = { price: 1 };
                    break;
                case "priceDesc":
                    sort = { price: -1 };
                    break;
                case "popularity":
                    sort = { rating: -1 };
                    break;
                default:
                    break;
            }
        }

        //fetch products and apply sorting and limit
        let product = await Product.find(query)
            .sort(sort)
            .limit(Number(limit) || 0);
        res.json(product); // ✅ return the actual filtered MongoDB data


    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


//@route GET/ api/products/best-seller
//@desc Retrieve the products with highest rating
//@access Public
router.get("/best-seller", async (req, res) => {
    try {
        const bestSeller = await Product.findOne().sort({ rating: -1 });
        if (bestSeller) {
            res.json(bestSeller);
        } else {
            res.status(404).json({ message: "No best seller found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


//@route GET/api/new-arrivals
//@desc Retrieve latest 8 products - Creation date
//@access Public
router.get("/new-arrivals", async (req, res) => {
    try {
        //Fetch latest 8 products
        const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
        res.json(newArrivals);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

//@route GET/ api/products/:id
//@desc Get a single product by ID
//@access Public
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product Not Found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error")
    }
});
///my code 


//dont use mitake code dont un comment this
// router.get("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!id || id.length !== 24) {
//             return res.status(400).json({ message: "Invalid Product ID" });
//         }

//         const product = await Product.findById(id);
//         if (product) {
//             res.json(product);
//         } else {
//             res.status(404).json({ message: "Product Not Found" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server Error")
//     }
// });

//@route GET/ api/products/similar/:id
//@desc Retrieve similar products based on the current product's gender and category
//@access Public

//original but mitakes and error dont un comments
// router.get("/similar/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const product = await Product.findById(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product Not Found" });
//         }

//         const similarProducts = await Product.find({
//             _id: { $ne: id },   //Exclude the current product ID
//             gender: product.gender,
//             category: product.category,
//         }).limit(4);

//         res.json(similarProducts);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server Error");
//     }
// });

///dont use its mistake code 
// router.get("/similar/:id", async (req, res) => {
//   const productId = req.params.id;

//   if (!mongoose.Types.ObjectId.isValid(productId)) {
//   return res.status(400).json({ message: "Invalid product ID" });
// }

//   try {
//     const product = await Product.findById(productId);
//     // rest of the logic...
//   } catch (err) {
//     console.error("Backend error:", err.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.get("/similar/:id", async (req, res) => {
  const productId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const similarProducts = await Product.find({
      _id: { $ne: productId },
      category: product.category,
      gender: product.gender,
    }).limit(4);

    res.status(200).json(similarProducts);
  } catch (error) {
    console.error("Backend error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});




///Dont use its mistake code ok 
// router.get("/similar/:id", async (req, res) => {
//     const { id } = req.params;

//     if (!id || id.length !== 24) {
//         return res.status(400).json({ message: "Invalid Product ID" });
//     }

//     try {
//         const product = await Product.findById(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product Not Found" });
//         }

//         const similarProducts = await Product.find({
//             _id: { $ne: id },
//             gender: product.gender,
//             category: product.category,
//         }).limit(4);

//         res.json(similarProducts);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server Error");
//     }
// });



module.exports = router;


//////also start npm run seed if its not working than