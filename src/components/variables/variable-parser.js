/* 
need to write a function that takes in:
    variable data
    a raw string
and outputs
    => a raw string
*/

/*
variable data can be stored as objects with dynamic keys.

need to be aware of reserved words in js

need to somehow exclude ${} escapes
*/

//allow variable operator to be dynamically set and followed by parantheses

const declarator = "#";

//need to search string for "#", then look for closing parantheses

const declaratorRegex = /#(.*)/


