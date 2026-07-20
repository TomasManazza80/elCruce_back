import { EntitySchema } from "typeorm";

export const ProductSchema = new EntitySchema({
    name: "Product",
    tableName: "product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
            nullable: false,
        },
        pricePerKilo: {
            type: "float",
            nullable: true,
        },
        imageUrl: {
            type: "varchar",
            nullable: true,
        },
        description: {
            type: "text",
            nullable: true,
        },
        category: {
            type: "varchar",
            nullable: true,
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
        },
        updatedAt: {
            type: "timestamp",
            updateDate: true,
        },
    },
});
