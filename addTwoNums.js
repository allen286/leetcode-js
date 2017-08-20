/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} p
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var head = new ListNode(0)
  var p = l1, q = l2, curr = head
  var carry = 0

  while (p || q) {
    var x = p ? p.val : 0
    var y = q ? q.val : 0
    var sum = x + y + carry
    carry = sum > 9 ? 1 : 0
    curr.next = new ListNode(sum % 10)
    curr = curr.next

    if (p) p = p.next
    if (q) q = q.next
  }

  if (carry > 0) {
    curr.next = new ListNode(carry)
  }

  return head.next
}

// test
function array2list(arr) {
  let head = new ListNode(0)
  let copy = head
  arr.forEach(ele => {
    copy.next = new ListNode(ele)
    copy = copy.next
  })

  return head.next
}

var param1 = array2list([2, 4, 6, 1])
var param2 = array2list([5, 6, 9])
var result = addTwoNumbers(param1, param2)
console.log(result)
