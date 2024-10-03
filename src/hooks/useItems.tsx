import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import { ReqResUserListResponse, Item } from '../interfaces';

const loadItems = async(page: number = 1): Promise<Item[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://dragonball-api.com/api/characters?limit=10', {
            params: {
                page: page
            }
        });
        return data.items;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const useItems = () => {
    const [items, setItems] = useState<Item[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadItems(currentPageRef.current).then(setItems);
    });

    const nextPage = async () => {
        currentPageRef.current++;
        const newItems = await loadItems(currentPageRef.current);
        if (newItems.length > 0) {
            setItems(newItems);
        } else {
            currentPageRef.current--;
        }
    };

    const prevPage = async () => {
        if (currentPageRef.current > 1) {
            currentPageRef.current--;
            const newItems = await loadItems(currentPageRef.current);
            setItems(newItems);
        }
    };

    return {
        // properties
        items,

        // methods
        nextPage,
        prevPage,
    };
};

export default useItems;
