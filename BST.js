//     this.add = function (value) {
//        var node = new BTNode(value);
//        if (this.root == null){
//            this.root = node;
//        }
//        var l = this.left;
//        var r = this.right;
//        if (value <= this.root.value) {
//            if (l.left == null){
//                l.left = node;
//            }
//            else {
//                while(l) {
//                 if (value <= l.value){
//                     if (l.left == null){
//                         l.left = node;
//                         return this;
//                     }
//                     l=l.left;
//                 }
//                 else {
//                     if (l.right == null){
//                         l.right = node;
//                         return this;
//                     }
//                     l=l.right;
//                 }
//                }
//            }
//        }
//        if (value >this.root.value) {
//             if (r.right == null){
//                 r.right = node;
//             }
//             else {
//                 while(r) {
//                 if (value > r.value){
//                     if (r.right == null){
//                         r.right = node;
//                         return this;
//                     }
//                     r=r.right;
//                 }
//                 else {
//                     if (r.left == null){
//                         r.left = node;
//                         return this;
//                     }
//                     r=r.left;
//                 }
//                 }
//             }
//        }
//     }
// }
function BTNode(val) {
    this.value = val;
    this.right = null;
    this.left = null;
}

function BST() {
    this.root = null;
    this.add = function(val) {
        var node = new BTNode(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        var p = this.root;
        while (p != null) {
            if (node.value <= p.value) {
                if (!p.left) {
                    p.left = node;
                    return this;
                }
                p = p.left;
            }
            else if (node.value > p.value) {
                if (!p.right) {
                    p.right = node;
                    return this;
                }
                p = p.right;
            }
        }
    }
 
    this.min = function(val) {
        if (!this.root) {
            return null;
        }
        var p = this.root;
        var min = this.root.value;
        while (!p) {
            if (p.value <= p.value){
                min = p.value;
            }
        p=p.left;
        }
        return min;
    }

    this.max = function(val) {
        if (!this.root) {
            return null;
        }
        var p = this.root;
        var max = this.root.value;
        while (p != null) {
            if (p.value >= p.value){
                max = p.value;
            }
        p=p.right;
        }
        return max;
    }

    this.contains = function(val) {
        if (!this.root) {
            return false;
        }
        var p = this.root;
        while (p != null){
            if (p.value == val) {
                return true;
            } 
            else {
                if (val < p.value) {
                    p=p.left;
                }
                else {
                    p=p.right;
                }
            } 
            
        }
        return false;  
    }

    this.empty = function(val) {
        if (!this.root) {
            return true;
        }
        return false;
    }


this.size = function(node=this.root) {
    if (node == null) {
        return 0;
    }
    return 1 + this.size(node.left) + this.size(node.right);
}

this.height = function(node=this.root) {
    if (!node) {
        return 0;
    }
    var l = this.height(node.left);
    var r = this.height(node.right);
    if(l > r){
        return 1 + l ;
    } else {
    return 1 + r ;
    }
}

this.isBalanced = function(node=this.root) {
        if (!node) {
            return true;
        } else {
                var l = this.height(node.left);
                var r = this.height(node.right);
                if(Math.abs(l-r)>1){
                    return false;
                } 
                return (this.isBalanced(node.left) && this.isBalanced(node.right)); 
        }
    }

function BST() {
        this.root = null;
}
function arrToBST(arr,tree=new BST()) {
            if (arr.length <=0) {
                return null;
            }
            var arrA=[];
            var arrB=[];
            for(var i=Math.floor(arr.length/2);i<0;i++){
                arrA.push(arr[i]);
            }
            tree.add(arr[0]);
            for(var i=Math.floor(arr.length/2+1);i<arr.length;i++){
                arrB.push(arr[i]);
            }
            tree.add(arr[Math.floor(arrB.length/2)]);
            arrToBST(arrA,tree);
            arrToBST(arrB,tree);
        }
        console.log(tree);
    }
}

var tree = new BST();
tree.add(5).add(3).add(6).add(2).add(4).add(5.5).add(7).add(1).add(3.5).add(0)
// tree.add(7).add(8).add(5).add(4).add(2).add(1);
console.log(tree.min());
console.log(tree.max());
console.log(tree.empty());
console.log(tree.contains(1));
console.log(tree.size());
console.log(tree.height());
console.log(tree.isBalanced());

tree.arrToBST([1,2,3,4,5,6,7,8,9]);
console.log(tree.arrToBST());
