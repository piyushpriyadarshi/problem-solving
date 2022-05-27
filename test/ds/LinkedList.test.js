import {LinkedList} from "../../index.js";


describe('Test LinkedList',()=>{

    let linkedList;
    beforeEach(()=>{
        linkedList=new LinkedList();
    })
    test('creation of LinkedList',()=>{
        expect(linkedList).toBeDefined();
    });

    test('test with push operations',()=>{
        linkedList.add(10);
        linkedList.add(20);
        linkedList.add(30);
        console.log(JSON.stringify(linkedList))
        expect(linkedList).toBeDefined();
    })
    test('test with remove operations',()=>{
        linkedList.add(10);
        linkedList.add(20);
        linkedList.remove();
        console.log(JSON.stringify(linkedList))
        expect(linkedList).toBeDefined();
    })
})
