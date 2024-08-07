// 1
function addDelay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function logWithDelay(text: number) {
    await addDelay();
    console.log(text);
}

async function logArrayInfo(array: number[]) {
    await Promise.allSettled(array.map((item) => logWithDelay(item)))
    console.log('Done!');
}

logArrayInfo([1, 2, 3]); // 1  2  3  Done!

// 2
type TEchoCatIndexFunc = () => void;
function createCats() {
    let cats: TEchoCatIndexFunc[] = [];
    for (let i = 0; i < 10; i++) {
        let cat = function () {
            console.log(`My index is ${i}`);

        };
        cats.push(cat);
    }
    return cats;
}

let animals = createCats();
animals[0](); // 0
animals[5](); // 5 

// 3
type NestedList = {
    value: number;
    children: NestedList[]
}

const calculateTreeValues = (tree: NestedList): number => {
    const stack = [tree];
    let result = 0;

    while (stack.length > 0) {
        const node = stack.pop();

        if (node) {
            if (node.children.length > 0) {
                stack.push(...node.children);
            }

            if (node.value % 2 === 0) {
                result += node.value;
            }
        }
    }

    return result;
};

const tree: NestedList = {
    value: 3,
    children: [
        {
            value: 1,
            children: []

        },
        {
            value: 4,
            children: []

        },
        {
            value: 3,
            children: [
                {
                    value: 8,
                    children: [
                        {
                            value: 2,
                            children: []

                        },
                        {
                            value: 5,
                            children: []
                        }
                    ],
                },
                {
                    value: 0,
                    children: []
                }]
        },
    ],
};

console.log(calculateTreeValues(tree)); // 14