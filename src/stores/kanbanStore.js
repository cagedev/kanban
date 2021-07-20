import { writable } from "svelte/store";

// Sequential IDs
let seqIdCol = -1;
let seqIdCard = -1;

// Default board data
const defaultColumns = [
    {
        id: ++seqIdCol,
        title: "Column " + seqIdCol,
        cards: [
            {
                id: ++seqIdCard,
                title: "Card " + seqIdCard,
                data: "",
                dateCreated: new Date(),
            },
            {
                id: ++seqIdCard,
                title: "Card " + seqIdCard,
                data: "no data at all...",
                dateCreated: new Date(),
            }
        ],
    },
    {
        id: ++seqIdCol,
        title: "Column " + seqIdCol,
        cards: [
            {
                id: ++seqIdCard,
                title: "Card " + seqIdCard,
                data: "",
                dateCreated: new Date(),
            },

        ],
    },
    {
        id: ++seqIdCol,
        title: "Column " + seqIdCol,
        cards: [],
    },
]

// 
function newColumn(title) {
    console.log(title);
    return {
        id: seqIdCol++,
        title: title || "Column " + seqIdCol,
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

export function addColumn(title) {
    kanbanBoard.update(
        (prev) => [...prev, newColumn(title)]
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

// All card ids are unique, loop over all to find the correct one
export function updateCard(id, cardTitle, cardData) {
    kanbanBoard.update(
        (prev) => {
            prev.forEach((el) => {
                // console.log(el)
                // TODO: set with a callback to set multiple
                let c = el.cards.find((card) => card.id == id)
                if (c) {
                    c.title = cardTitle || c.title;
                    c.data = cardData || c.data;
                }
            })
            return prev;
        });
}