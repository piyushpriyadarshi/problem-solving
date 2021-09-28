import {Stack,LinkedList} from "../../index.js";

describe('Tests the Stack',()=>{
    let stack;
    beforeEach(()=>{
        stack=new Stack();
        let list=new LinkedList();
    })
    test('Create a Stack',()=>{
        stack.push(10);
        stack.push(10);
        stack.printStack();
    });

    test('Test the push method',()=>{
        stack.push(10);
        stack.push(20);
        const expected="10 20";
        const output=stack.printStack();
        expect(output).toBe("10 20")
    });
    test('Test the push and  pop method',()=>{
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.pop();
        const expected="10 20";
        const output=stack.printStack();
        expect(output).toBe("10 20")
    })
    test('Test the push pop method with underflow',()=>{
        try {
            stack.pop();
        }
        catch (e) {
            expect(e).toStrictEqual(new Error('Stack Underflow'));
        }
    });
    test('test size of stack',()=>{
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        expect(stack.size()).toBe(4);
    })
    test('test peek of stack',()=>{
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        const actual=stack.peek();
        const expected=40;
        expect(actual).toBe(expected);
    });
    test('test isEmpty of stack',()=>{
        const actual=stack.isEmpty();
        const expected=true;
        expect(actual).toBe(expected);
    })
    test('test isEmpty of stack negative testcase',()=>{
        stack.push(10);
        const actual=stack.isEmpty();
        const expected=false;
        expect(actual).toBe(expected);
    })
})