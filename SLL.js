function SLL(){ //SLL is class
    this.head = null;
  }
  function Node(val){
    this.val = val;
    this.next = null;
  }
  var newNode = new Node("hello");
  var newNode2 =new Node("world");
    newNode.next= newNode2;
  
  console.log(newNode.val, newNode2.val)

function SLL(){ //SLL is class
    this.head = null;
    this.remove = function(){
    if (this.head.next!== null){
      this.head = this.head.next;
      return this.head;
    }
    else {
      this.head === null;
    }
    }
  }
function Node(val){ 
    this.val = val;
    this.next = null;
  }
  var Node1 = new Node("hello");
    this.head = Node1;
  var Node2 = new Node("world");
    this.head.next = Node2;
  
  console.log(this.head.val)  // not working

function SLL(){
    this.head=null;
    this.removeBack = function(){
      var temp = this.head;
      while (temp!==null){
        if (temp.next.next===null){
          temp.next=null;
         
        }
        temp=temp.next;
        }
      }
    }

function Node(val){ 
      this.val = val;
      this.next = null;
    }
    var mySLL= new SLL();
    var Node1 = new Node("1");
      mySLL.head = Node1;
    var Node2 = new Node("2");
      Node1.next = Node2;
    var Node3 = new Node("3");
      Node2.next = Node3;
      
    mySLL.removeBack();
    console.log(mySLL);
  
  
function SLL(){
        this.head=null;
        this.removeVal = function(val){
            var temp = this.head;
            while (temp){
                if (!this.head){
                    return undefined;
                }
                if (this.head.val == val){
                    this.head = this.head.next;
                    return this;
                }
                while (temp.next){
                    if (temp.next = val){
                        temp.next=temp.next.next;
                    }
                    temp=temp.next
                }
                return this;
            }

function Node(val){ 
        this.val = val;
        this.next = null;
        }
        var mySLL= new SLL();
        var Node1 = new Node("1");
        mySLL.head = Node1;
        var Node2 = new Node("2");
        Node1.next = Node2;
        var Node3 = new Node("3");
        Node2.next = Node3;
        
        mySLL.removeVal(3);
        console.log(mySLL);

function SLL(){
        this.head=null;
        this.prepend = function(val){
            var node = new Node(val);
            var point = this.head;
            if (!point) {
                this.head = node;
                return this;
            }
            if (point.value == before) {
                var temp = point;
                this.head = node;
                node.next = temp;
                return this;
            }
            while (point.next) {
                if (point.next.value == before) {
                    var temp = point.next;
                    point.next = node;
                    node.next = temp;
                    return this;
                }
                point = point.next;
            }
            point.next = node;
            return this;                   
        }
    }

function Node(val){ 
        this.val = val;
        this.next = null;
        }
        var mySLL= new SLL();
        var Node1 = new Node("1");
        mySLL.head = Node1;
        var Node2 = new Node("2");
        Node1.next = Node2;
        var Node3 = new Node("3");
        Node2.next = Node3;
        
        mySLL.removeVal(3);
        console.log(mySLL);
    

        // SLQ - Queues
this.size=function(){
    var pointer =this.head;
    var size = 0;
    while (pointer){
        size ++;
        pointer=pointer.next;
    }
}
               
this.contains=function(val){
    var pointer =this.head;
    var size = 0;
    while (pointer){
        size ++;
        pointer=pointer.next;
    }
}

this.front=function(){
    if (!this.head){
        return undefined;
    }
    var front= this.head.val
    }
}

this.isEmpty=function(){
        return (!this.head)
}

this.EnQ=function(){
    if (!this.head){
        this.head=new Node(val);
        this.tail=new Node(val);
    }
    var temp = this.tail;
    this.tail= new Node(val);
    temp.next=new Node(val);
}

this.DeQ=function(){
    var size= this.size()
    if (!this.head){
        return undefined;
        console.log("This list is empty")
    }
    if (size > 1){ 
        var temp = this.head;
        this.head= this.head.next;
        this.tail = this.head.next;
        return temp;
    }
    else {
        var temp= this.head;
        this.head =null;
        this.tail=null;
    }
}

function Stack(){
    this.arr=[];
    this.pop = function(){
      this.arr.pop();
      return this;
    }
    this.push = function(val){
      this.arr.push(val);
      return this;
    }
    this.top = function(){
      return this.arr[this.arr.length-1];
    }
    this.isEmpty = function(){
      if(this.arr.length!=0){
        return false;
      }
        return true;
    }
    this.contains = function(val){
      for(var i=0; i<this.arr.length; i++){
        if (this.arr[i] == val){
          return true;
        }
      }
      return false;
    }
  
      this.size = function(val){
        return this.arr.length;
      }
  }
  var MyStack= new Stack();
  MyStack.push(1).push(2).push(3).pop();
  MyStack.isEmpty();
  MyStack.top();
  MyStack.contains(1);
  MyStack.size();
  console.log(MyStack);


function SLL(){
    this.head=null;
    this.addBack=function(){
      if (!this.head){
          this.head=new Node();
          this.tail=new Node();
      }
      var temp = this.tail;
      this.tail= new Node();
      temp.next=new Node();
    }
    
}
    
function Node(val){ 
      this.val = val;
      this.next = null;
}


      
var list1 = new SLL();
var Node1 = new Node("1");
list1.head = Node1;
var Node2 = new Node("0");
Node1.next = Node2;
var Node3 = new Node("7");
Node2.next = Node3;

var list2= new SLL();
var Node1 = new Node("9");
list2.head = Node1;
var Node2 = new Node("0");
Node1.next = Node2;
var Node3 = new Node("5");
Node2.next = Node3;

function sumNumerals(list1,list2){
      var num1="";
      var num2="";
      // var num3="";
      var p = list1.head;
      
      while(p){
      num1=p.value + num1;
      p=p.next;
      }
      
      var p = list2.head;
      
      while(p){
      num2=p.value + num2;
      p=p.next;
      }
      
      var num3=parseFloat(num1)+parseFloat(num2);
      var string = "";
      string +=num3;
      
      var list3 = new SLL();
      
      for(var i=string.length; i>0;i--){
        var node = new Node(string[i]);
        list3.addBack(node);
      }
      return list3;
  }
}
console.log(sumNumerals(list1,list2));