

class Stack {
    constructor() {
        this.items=[];
    }

    //push

    push(val){
        this.items.push(val);
    }


    //pop
    pop(){
        if(this.items.length===0){
            throw new Error("Stack Underflow")
        }
       return this.items.pop();
    }


    //size
    size(){
        return this.items.length;
    }


    //peek
    peek(){
        return this.items[this.items.length-1];
    }


    //checks Underflow
    isEmpty(){
        // return true if stack is empty
        return this.items.length == 0;
    }
    printStack(){
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str.trim();
    }
}

export default Stack;