//   Trees

/**
 * Binary Tree
 * 
 *                              A              (ROOT)
 *                             / \
 *                            /   \
 *                           B     C           (CHILD OF A)
 *                          / \     \
 *                         D   E     F         (LEAVES)
 * 
 * 
 * 
 * RULES:
 *  - Atmost 2 children per node 
 *  - Exactly 1 root
 *  - Exactly 1 path between root to any node
 */


/**
 * 
 * Binary tree or not ?
 * 
 *      A
       / \
      B   C

      IS THIS BINARY TREE ? 

 ---------------------------------------------------------------------------------------
        A
       /
      B

       IS THIS BINARY TREE ? 

---------------------------------------------------------------------------------------
         A

 IS THIS BINARY TREE ? 

---------------------------------------------------------------------------------------
           
         (EMPTY TREE)
         
 IS THIS BINARY TREE ?                                                                               An empty tree is a binary tree with no nodes at all. It simply represents the absence of any data and has:

---------------------------------------------------------------------------------------

        A
       /  \
      B -> C
IS THIS BINARY TREE ?                                                                               Cyclic tree is not binary tree

---------------------------------------------------------------------------------------

         A
       /   \
      B     C
     /|\     \
    D E C     F
IS THIS BINARY TREE ?                                                                               Cyclic tree is not binary tree

 */

//Node can be reperesented as objects
class Node{
    constructor(value){
        this.value = value; //Name of the node
        this.left = null; //By default we are setting left and right pointer of node as null
        this.right = null;
    }

}

//manually creating nodes
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');


// manually assigning children to our nodes

// A is our root
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right =f;

console.log(a);
