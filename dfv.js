/**
 * DEPTH FIRST TRAVERSAL
 * Traverse from root to leaf and travel across to leaf
 * 
 * Visual reperesentation of our Binary tree
 * 
 *                              A              (ROOT)
 *                             / \
 *                            /   \
 *                           B     C           (CHILD OF A)
 *                          / \     \
 *                         D   E     F         (LEAVES)
 * 
 * Root = [A, B, C, D, E, C, NULL, F]
 * Traversal output =  A B D E C F
 * 
 * -----------------------------------------------------------------------------
 * step: 1
 *               A    <- Root   
 *              ___   <- stack
 *  > check if stack is empty
 *  > Remove top element from stack
 *      > Assign it to current value which needed to be explored
 *      > set current value to visited[] array
 * 
 *   => current : A, visited = [A]
 * 
 *                ____
 *               stack
 * 
 * -----------------------------------------------------------------------------
 *  > check the current node's children 
 *     > push 'right' node and 'left' node if exited for 'current node'
 * 
 *               
 *                |  B   |   <- CURRENT
 *                |  C   |
 *                 ______
 *                 stack
 * 
 * repeat untill no elements in stack
 * -----------------------------------------------------------------------------
 */
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



const depthFirstValues=(root)=>{
    console.log('root: ', root.value);
    const stack = [root];
    const visited = []; //A

    while(stack.length > 0){

        const current = stack.pop();
        visited.push(current.value);

        if(current.right) stack.push(current.right);

        if(current.left) stack.push(current.left);
    }
    return visited;
    
}

console.log(JSON.stringify(depthFirstValues(a)));