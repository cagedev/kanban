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
        id: 9, // use a uuid()
        title: "Column 9",
        cards: [],
    }
}

export const kanbanBoard = writable(defaultColumns);

export function update(id) {
    console.log('doing update');
    kanbanBoard.update(cols => {
        return cols.map(col => {
            if (col.id === id) {
                return ({
                    ...col
                })
            } else return { ...col }
        })
    })
}