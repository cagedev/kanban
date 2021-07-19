import { writable } from "svelte/store";

// Sequential IDs
let seqIdCol = 1;
let seqIdCard = 1;

// Default board data
const defaultColumns = [
    {
        id: seqIdCol++,
        title: "Column " + seqIdCol,
        cards: [
            {
                id: seqIdCard++,
                title: "Card " + seqIdCard,
                data: "",
                dateCreated: new Date(),
            },
            {
                id: seqIdCard++,
                title: "Card " + seqIdCard,
                data: "no data at all...",
                dateCreated: new Date(),
            }
        ],
    },
    {
        id: seqIdCol++,
        title: "Column 2",
        cards: [
            {
                id: seqIdCard++,
                title: "Card " + seqIdCard,
                data: "",
                dateCreated: new Date(),
            },

        ],
    },
    {
        id: seqIdCol++,
        title: "Column " + seqIdCol,
        cards: [],
    },
]

// 
function newColumn() {
    return {
        id: seqIdCol++,
        title: "Column " + seqIdCol,
        cards: [],
    }
}

function newCard() {
    return {
        id: seqIdCard++,
        title: "Card " + seqIdCard,
        data: "",
        dateCreated: new Date(),
    }
}

export const kanbanBoard = writable(defaultColumns);

export function addColumn() {
    kanbanBoard.update(
        (prev) => [...prev, newColumn()]
    )
}

export function deleteColumn(cid) {
    kanbanBoard.update(
        (prev) => prev.filter(col => col.id != cid)
    )
}

export function addCard(cid) {
    kanbanBoard.update(
        (prev) => {
            prev.find((col) => col.id == cid)
                .cards.push(newCard())
            return prev
        }
    )
}