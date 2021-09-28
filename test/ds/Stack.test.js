import Stack from "../../src/ds/Stack";

describe('Tests the Stack',()=>{
    test('Create a Stack',()=>{
        let stack=new Stack();
        stack.push(10);
        stack.push(10);
        stack.printStack();
    })
})