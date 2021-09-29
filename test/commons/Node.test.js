

import Node from "../../src/commons/Node.js";

describe('Test Node ',()=>{
    let node;

    beforeEach(()=>{
        node =new Node();
    })

    test('tests creation of Node Object',()=>{
        node.data=10;
        console.log(node._data);
        expect(node).toBeDefined();
    })
})