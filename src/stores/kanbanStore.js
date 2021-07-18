import { writable } from "svelte/store";

const defaultColumns = [
    {
        id: 1,
        title: "Column 1",
        cards: [
            {
                id: 11,
                title: "Card 11",
                data: "",
                dateCreated: new Date(),
            },
            {
                id: 12,
                title: "Card 12",
                data: "no data at all...",
                dateCreated: new Date(),
            }
        ],
    },
    {
        id: 2,
        title: "Column 2",
        cards: [
            {
                id: 21,
                title: "Card 21",
                data: "",
                dateCreated: new Date(),
            },

        ],
    },
    {
        id: 3,
        title: "Column 3",
        cards: [],
    },
]

function newColumn() {
    return {
        id: 10, // use a uuid()?
        title: "Column 10",
        cards: [],
    }
}

export const kanbanBoard = writable(defaultColumns);