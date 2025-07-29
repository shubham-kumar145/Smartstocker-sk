// const Product = require("../model/product")
// const cloudinary = require("cloudinary").v2 //3

//  cloudinary.config({ 
//         cloud_name: 'dkbowuecy', 
//         api_key: '895981514526233', 
//         api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret //4 
//     });

// const addProduct = async (req, res) => {
//     // const {name,brand,price,stock,location,sku} = req.body
//     try {

//         // const addingproduct = await Product.create({
//         //     ...req.body,
//         //     createdBy: req.result._id
//         // })
//         // res.status(201).send("Problem added successfully")
//     } catch (err) {
//         res.status(400).send("ERROR: " + err)
//     }
// }
// const deleteproduct = async (req, res) => {
//     const { id } = req.params
//     try {
//         if (!id) {
//             return res.status(400).send("Missing Id")
//         }
//         const deleteproduct = await Product.findByIdAndDelete(id)
//         if (!deleteproduct) {
//             return res.status(404).send("Product IS MISSING")
//         }
//         res.status(200).send("SUCCESSFULLY DELETED")
//     } catch (err) {
//         res.status(500).send("ERROR: ", +err)
//     }
// }

// const getAllProduct = async (req, res) => {
//     try {
//         const getproduct = await Product.find({}).select('_id name brand discount price description photo stock location sku')
//         if (getproduct.length == 0) {
//             return res.status(404).send("No product is able")
//         }
//         res.status(200).send(getproduct);
//     } catch (err) {
//         res.status(500).send("ERROR: ", +err)
//     }
// }  

// const updateProductDetails = async (req, res) => {

//     const { id } = req.params
//     console.log(id);
//     try {
//         if (!id) {
//             return res.status(400).send("MISSING ID")
//         }
//         const newProduct = await Product.findByIdAndUpdate(id, { ...req.body }, { runValidators: true, new: true })
//         res.status(200).send("product updated successfully\n" + newProduct)
//     } catch (err) {
//         res.status(500).send("ERROR:", +err)
//     }


// }

// const getProductByid = async (req, res) => {
//     const { id } = req.params
//     try {
//         if (!id) {
//             return res.status(400).send("MISSING ID")
//         }
//         const findproduct = await Product.findById(id).select('_id name brand discount price description photo stock location sku')
//         if (!findproduct) {
//             return res.status(400).send("MISSING Product")
//         }
//         res.status(200).send(findproduct)
//     } catch (err) {
//         res.status(500).send("ERROR: ", +err)
//     }
// }

// module.exports = { addProduct, deleteproduct, getAllProduct, updateProductDetails,getProductByid }
const Product = require("../model/product")
const cloudinary = require("cloudinary").v2 //3

cloudinary.config({
    cloud_name: 'dkbowuecy',
    api_key: '895981514526233',
    api_secret: 'N7lKnV0mWO-2cHjPQMwY1x2-wrc' // Click 'View API Keys' above to copy your API secret //4 
});


const addProduct1 = async (req, res) => {

    if (!req.files || !req.files.photo) {
        return res.status(400).send("Photo is required");
    }
    const file = req.files.photo;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "inventory_images", // Optional folder in your Cloudinary
    });

    console.log("photo");

    console.log(result.secure_url);
    res.status(201).json({
        message: "Product added successfully",
        // product: addingProduct
    });
};
// const addProduct = async (req, res) => {
//     const { name, brand, price, stock, location, sku, photo } = req.body
//     console.log("data");
//     console.log(req.body);


//     try {
//         if (!req.files || !req.files.photo) {
//             return res.status(400).send("Photo is required");
//         }
//         const file = req.files.photo;
//         const result = await cloudinary.uploader.upload(file.tempFilePath, {
//             folder: "inventory_images", // Optional folder in your Cloudinary
//         });
//         const addingproduct = await Product.create({
//             ...req.body,
//             photo:result,
//             createdBy: req.result._id
//         })
//         res.status(201).send("Problem added successfully")
//     } catch (err) {
//         res.status(400).send("ERROR: " + err)
//     }
// }
const addProduct12 = async (req, res) => {
    console.log(req.body);

    try {
        // Check file upload
        if (!req.files || !req.files.photo) {
            return res.status(400).send("Photo is required");
        }

        // Upload to Cloudinary
        const file = req.files.photo;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "inventory_images",
        });

        // Prepare data
        const { name, brand, price, stock, location, sku, category } = req.body;

        const productData = {
            ...req.body,
            photo: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            createdBy: req.result._id, // assuming req.result is set by middleware
        };

        // Save to DB
        const addingproduct = await Product.create(productData);

        res.status(201).send("Product added successfully");
    } catch (err) {
        console.error("Add Product Error:", err);
        res.status(500).send("ERROR: " + err.message);
    }
};

const addProduct = async (req, res) => {
    console.log(req.body);

    try {
        // Check file upload
        if (!req.files || !req.files.photo) {
            return res.status(400).send("Photo is required");
        }

        // Upload to Cloudinary
        const file = req.files.photo;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "inventory_images",
        });

        // Parse description if it's a JSON string
        if (typeof req.body.description === 'string') {
            try {
                req.body.description = JSON.parse(req.body.description);
            } catch (err) {
                return res.status(400).send("Invalid JSON in description field");
            }
        }

        const { name, brand, price, stock, location, sku, category } = req.body;

        const productData = {
            ...req.body,
            photo: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            createdBy: req.result._id, // assuming req.result is set by middleware
        };

        // Save to DB
        const addingproduct = await Product.create(productData);

        res.status(201).send("Product added successfully");
    } catch (err) {
        console.error("Add Product Error:", err);
        res.status(500).send("ERROR: " + err.message);
    }
};



const deleteproduct = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.status(400).send("Missing Id")
        }
        const deleteproduct = await Product.findByIdAndDelete(id)
        if (!deleteproduct) {
            return res.status(404).send("Product IS MISSING")
        }
        res.status(200).send("SUCCESSFULLY DELETED")
    } catch (err) {
        res.status(500).send("ERROR: ", +err)
    }
}

const getAllProduct = async (req, res) => {
    console.log(req.body);
    console.log("hiii");

    try {
        const getproduct = await Product.find({}).select('_id name brand discount category price description photo stock location sku createdBy createdAt')
        // if (getproduct.length == 0) {
        //     return res.status(404).send("No product is able")
        // }
        res.status(200).send(getproduct);
    } catch (err) {
        res.status(500).send("ERROR: ", +err)
    }
}

const updateProductDetails1 = async (req, res) => {

    const { id } = req.params
    console.log(id);
    try {
        if (!id) {
            return res.status(400).send("MISSING ID")
        }
        const newProduct = await Product.findByIdAndUpdate(id, { ...req.body }, { runValidators: true, new: true })
        res.status(200).send("product updated successfully\n" + newProduct)
    } catch (err) {
        res.status(500).send("ERROR:", +err)
    }
}
const updateProductDetails = async (req, res) => {
    console.log(req.body);

    try {
        // Check file upload
        if (!req.files || !req.files.photo) {
            return res.status(400).send("Photo is required");
        }

        // Upload to Cloudinary
        const file = req.files.photo;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "inventory_images",
        });

        // Parse description if it's a JSON string
        if (typeof req.body.description === 'string') {
            try {
                req.body.description = JSON.parse(req.body.description);
            } catch (err) {
                return res.status(400).send("Invalid JSON in description field");
            }
        }

        const { name, brand, price, stock, location, sku, category } = req.body;

        const productData = {
            ...req.body,
            photo: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            createdBy: req.result._id, // assuming req.result is set by middleware
        };
        console.log(productData);
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, productData, {
            runValidators: true,
            new: true,
        });
        res.status(200).send("product updated successfully\n" + updatedProduct)

    } catch (err) {
        console.error("Add Product Error:", err);
        res.status(500).send("ERROR: " + err.message);
    }
};



const getProductByid = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) {
            return res.status(400).send("MISSING ID")
        }
        const findproduct = await Product.findById(id).select('_id name brand discount price description photo stock location sku')
        if (!findproduct) {
            return res.status(400).send("MISSING Product")
        }
        res.status(200).send(findproduct)
    } catch (err) {
        res.status(500).send("ERROR: ", +err)
    }
}

module.exports = { addProduct, deleteproduct, getAllProduct, updateProductDetails, getProductByid }