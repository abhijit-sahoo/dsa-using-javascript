class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.length;
    }

    get(index){
        return this.data[index];
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    shift(){
        const firstItem = this.data[0];
        //reindexing
        for(let i=0;i<this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return firstItem;
    }
    deleteByIndex(index){
        const deletedItem = this.data[index];
        for(let i=index; i<this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return deletedItem;

    }

}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("banana");
myNewArray.push("guava");
myNewArray.push("pomogranade");
myNewArray.push("mango")
console.log(myNewArray);


myNewArray.pop();

console.log(myNewArray)
console.log(myNewArray.shift())
console.log(myNewArray)
console.log(myNewArray.deleteByIndex(1))
console.log(myNewArray)