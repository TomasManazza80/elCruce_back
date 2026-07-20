import { AppDataSource } from '../database.js';

export async function getCategories(req, res) {
    try {
        const categoryRepo = AppDataSource.getRepository('Category');
        const categories = await categoryRepo.find({ order: { name: 'ASC' } });
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Failed to fetch categories" });
    }
}

export async function createCategory(req, res) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Category name is required" });
        }

        const categoryRepo = AppDataSource.getRepository('Category');
        const existingCategory = await categoryRepo.findOne({ where: { name } });

        if (existingCategory) {
            return res.status(409).json({ message: "Category already exists" });
        }

        const category = categoryRepo.create({ name });
        const savedCategory = await categoryRepo.save(category);
        
        res.status(201).json(savedCategory);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ message: "Failed to create category" });
    }
}
