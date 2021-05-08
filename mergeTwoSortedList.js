// Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4,5], l2 = [1,3,4]
// Output: [1,1,2,3,4,4,5]

function ListNode(val=0, next=null){
    this.val = val
    this.next = next
}

function mergeTwoSortedList(l1, l2){
    let node = new ListNode(0)
    let head = node
    let p1 = l1, p2 = l2
    while(p1&&p2){
        if(p1.val < p2.val){ 
            node.next = new ListNode(p1.val)
            p1 = p1.next
        }else{ 
            node.next = new ListNode(p2.val)
            p2 = p2.next
        }
        node = node.next
    }
    if(p1){
        node.next = p1
    }else if(p2){
        node.next = p2
    }
    
    return head.next
}

// testing
const a1=[1,2,4,5], a2=[1,3,4]
let l1 = new ListNode(), l2 = new ListNode()
const h1 = l1, h2 = l2
a1.forEach(n => { l1.next = new ListNode(n); l1 = l1.next })
a2.forEach(n => { l2.next = new ListNode(n); l2 = l2.next })

let list = mergeTwoSortedList(h1.next, h2.next)
const array = []
while(list){
    array.push(list.val)
    list = list.next
}
console.log(array)