import { openDB } from 'idb';

export const dbPromise = openDB('cartDB', 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains('cart')) {
            db.createObjectStore('cart', { keyPath: 'id', autoIncrement: true });
        }
    },
});

export const addItemToCart = async(item) => {
    const db = await dbPromise;
    await db.put('cart', item);
};

export const getCartItems = async(templateId) => {
    const db = await dbPromise;
    const allItems = await db.getAll('cart');
    return allItems.filter((item) => item.templateId === templateId);
};

export const updateItemQuantity = async(id, quantity) => {
    const db = await dbPromise;
    const item = await db.get('cart', id);
    if (item) {
        item.quantity = quantity;
        await db.put('cart', item);
    }
};

export const removeItemFromCart = async(id) => {
    const db = await dbPromise;
    await db.delete('cart', id);
};