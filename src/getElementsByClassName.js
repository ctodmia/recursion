// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//getElementByClassName returns an array like object of all child elements which have all 
//of the given class name. when called on the doc obj the whole doc is searched 
//including node 
var getElementsByClassName = function(className
){
  // your code here

      var elements = document.body; 
    var matches = []; 

    var searchDOM = function(node) {

        if (node === document.body && node.classList.contains(className))
            matches.push(node);

        for (var i = 0; i < node.children.length; i++) {

            if (node.children[i].children.length === 0) {
                if (node.children[i].hasAttribute('class') && node.children[i].classList.contains(className))
                    matches.push(node.children[i]);
            } else
                searchDOM(node.children[i]);
           
        }
    };
    searchDOM(elements);
    return matches;
};
