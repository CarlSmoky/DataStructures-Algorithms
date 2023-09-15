/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    if(!head) return null;
    if(head.next === null && head.val === val) return null;

    let ref = head;
    while(head.next !== null){
        if(ref && ref.val === val){
            ref = ref.next;
        }
        else if(head.next.val === val){
            head.next = head.next.next;
        }
        else{
            head = head.next;
        }
    }
    return ref;
};