class Queue {
  constructor(){
      this.items = []; 
  } 
  //enqueue element
  enqueue(element){
      this.items.push(element);
  }
  //pop element
  dequeue(){
      if(this.isEmpty()) {
          return "Underflow";
      }
      return this.items.shift();
  }
front(){
      if(this.isEmpty()) {
          return "No elements available";
      }
      return this.items[0];
  }
  isEmpty(){
      return this.items.length===0;
  }
  
  printQueue(){
      let str = "";
      for (let i = 0; i < this.items.length; i++){
          str += this.items[i] + " ";
      }
      return str;
  }
}

let queue = new Stack();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("queue elements: ", queue.printQueue());
console.log("dequeue elements: ", queue.dequeue());
console.log("Front elements: ", queue.front());
console.log("Is queue empty ", queue.isEmpty());