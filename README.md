# binaryMapping
## Using binary mapping to create recursive like images

![nested circles](https://github.com/greggelong/binaryMapping/blob/master/Firefox_Screenshot_2020-06-25T20-53-27.956Z.png)

In computer science the topic of recursion is often collocated with phrases like 'leap of faith' or words like 'magic'. And it is easy to see why, as recursion can in a few lines of code in a well designed function solve problems like, towers of Hanoi or draw complicated images like the nested circles in red above. The problem is that these functions are a back box during the processing. Things are put on the stack and taken off and returned and you don't have access to them until the end. That means for creative visualization you can't show the animation.

Here I am using a binary mapping technique to draw the nested circles without recursion. The function is more complicated but you can animate it. The function takes in an integer, converts it to a binary string, then splits it to an array. I use that array to plot circles according to simple rules. the initial 1 is the center circle, if the next digit is zero plot a circle to the left or if that digit is one plot a circle to the right. Then repeat for the rest of the array. For example, 5 in binary is 101 so plot the center circle, then since the next digit is 0 plot a smaller circle to the left, finally the last digit is 1 so plot a smaller circle to the right. Continue this process 64 times and you create the nested circle image! #creativecoding #P5js #coding #computerscience #recursion

## [See it in action](https://editor.p5js.org/greggelong/present/yXtB7pCrh)
