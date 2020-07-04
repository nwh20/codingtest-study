// lt Easy 21 Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new sorted list. 

// my answer
const mergeTwoLists = (l1, l2) => {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    const head = l1.val < l2.val ? l1 : l2;

    if (l1.val < l2.val) {
        head.next = mergeTwoLists(l1.next, l2);
    } else {
        head.next = mergeTwoLists(l1, l2.next);
    }

    return head;
};


// solution 1
const mergeTwoLists = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
       return l1;
    }

    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};

// solution 2
const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2; 

    const linkThem = (smaller, greater) => {
        smaller.next = mergeTwoLists(smaller.next, greater);
        return smaller;
    };
    
    return l1.val < l2.val ? linkThem(l1,l2) : linkThem(l2,l1);
};