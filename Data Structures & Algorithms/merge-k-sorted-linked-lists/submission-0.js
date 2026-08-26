/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null;

        return merge(lists, 0, lists.length - 1);
    
        function merge(lists, left, right){
            if(left === right) return lists[left];
            if(left > right) return null;

            const mid = Math.floor((left + right)/2);
            const left1 = merge(lists, left, mid);
            const left2 = merge(lists, mid+1, right);

            return mergeTwoLists(left1, left2);
        }

        function mergeTwoLists(l1, l2){
            const temp = new ListNode(0);

            let current = temp;

            while(l1 && l2){
                if(l1.val < l2.val){
                    current.next = l1;
                    l1 = l1.next;
                }else{
                    current.next = l2;
                    l2 = l2.next;
                }
                current = current.next;
            }
            current.next = l1 || l2;
            return temp.next;
        }
    }

}
