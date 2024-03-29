
import Node from '../commons/Node.js';

/**
 * @summary
 * Creates a LinkedList.
 * @author piyush
 */
class LinkedList extends Object{

    constructor() {
        super();
        this._head=null;
        this._tail=null;
    }
    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    get tail() {
        return this._tail;
    }

    set tail(value) {
        this._tail = value;
    }


    /**
     * @Summary
     * Insert a Node at the begining of LinkedList
     * @param {number | String | Object} data - data given to new Node.
     *
     */
    add(data){
        const tempNode=new Node(data);
        tempNode.next=this._head;
        if(!this.head){
            this.tail=tempNode;
        }
        this.head=tempNode;
    }

    /**
     * @Summary
     * Insert a Node after a given Node in the LinkedList.
     * @param {number | String | Object} data - data given to new Node.
     * @param {@link Node} node - Node after which new Node will be inserted.
     */
    // add(data,node){
    //     const tempNode=new Node(data);
    //     let currentNode=this.head;
    //     while (currentNode!=node || currentNode!=null){
    //         currentNode=currentNode.next;
    //     }
    //     if(!currentNode){
    //         throw new Error('Node with given Data Not Found..');
    //     }
    //     tempNode.next=currentNode.next;
    //     currentNode.next=tempNode;
    // }

    /**
     * @Summary
     * Insert a Node at the end of the LinkedList.
     * @param {number | String | Object} data - data given to new Node.
     */
    append(data){
        const previosNode=this.tail;
        const tempNode=new Node(data);
        previosNode.next=tempNode;
        this.tail=tempNode;
    }
    remove(){
        if(this.head){
            //If there is only one element in the list
            if(this.head===this.tail){
                this.tail=this.head.next;
            }
            this.head=this.head.next;

        }
        else{
            throw new Error("cant remove from Empty Linkedlist")
        }
    }


    /**
     * @Summary
     * Traverse and print the linkedlist
     */
    print(){
        let tempNode=this.head;
        while (tempNode!=null){
            console.log(tempNode.data);
            tempNode=tempNode.next;
        }
    }
}

export default LinkedList;
