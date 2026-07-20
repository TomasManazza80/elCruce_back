import { EntitySchema } from 'typeorm';

export const CategorySchema = new EntitySchema({
    name: 'Category',
    tableName: 'category',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'varchar',
            unique: true,
            nullable: false,
        },
        createdAt: {
            name: 'created_at',
            type: 'timestamptz',
            createDate: true,
        },
        updatedAt: {
            name: 'updated_at',
            type: 'timestamptz',
            updateDate: true,
        },
    }
});
