import { AppDataSource } from "../database.js";

const productRepository = AppDataSource.getRepository("Product");

export const createProduct = async (req, res) => {
    try {
        const { name, pricePerKilo, imageUrl, description, category } = req.body;
        
        if (!name) {
            return res.status(400).json({ error: "El nombre del producto es requerido" });
        }

        const newProduct = productRepository.create({
            name,
            pricePerKilo,
            imageUrl,
            description,
            category
        });

        await productRepository.save(newProduct);
        return res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({ error: "Error al crear producto" });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await productRepository.find({
            order: {
                createdAt: "DESC"
            }
        });
        return res.json(products);
    } catch (error) {
        console.error("Error getting products:", error);
        return res.status(500).json({ error: "Error al obtener productos" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, pricePerKilo, imageUrl, description, category } = req.body;

        const product = await productRepository.findOneBy({ id: parseInt(id) });
        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        if (name) product.name = name;
        if (pricePerKilo !== undefined) product.pricePerKilo = pricePerKilo;
        if (imageUrl !== undefined) product.imageUrl = imageUrl;
        if (description !== undefined) product.description = description;
        if (category !== undefined) product.category = category;

        await productRepository.save(product);
        return res.json(product);
    } catch (error) {
        console.error("Error updating product:", error);
        return res.status(500).json({ error: "Error al actualizar producto" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productRepository.findOneBy({ id: parseInt(id) });
        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        await productRepository.remove(product);
        return res.status(204).send();
    } catch (error) {
        console.error("Error deleting product:", error);
        return res.status(500).json({ error: "Error al eliminar producto" });
    }
};
