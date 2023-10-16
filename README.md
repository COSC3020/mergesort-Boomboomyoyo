[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12217341&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Steps of my Function:
1. Determine how large my function is in terms of powers of two. Constant Time operation
2. Increment $x$ by powers of two $log_2(n)$ times, running step 3 for each power of x
3. Step through the array by x to select segemnts to run step 4 on. $log_x(n)$
4. Step through each element of the array in order of least to greatest, running step 5 up to $n$ times.
5. Store the found smallest element in a temporary variable, shuffle all larger elements to the right, then place smallest element at the end of the sorted section of the array. Up to $n$ elements must be sorted this way.

In total, this gives a runtime complexity of $T\left(n\right) = n^2log(n)^2$ in the worst case. This is much worse than the theoretical $nlog(n)$ of mergesort that is easy to implement recursively. I might be able to condense the outermost 2 loops into one, which would be some order of $log(n)$, but I'm not sure how the two inner loops could be combined.


## References
Looked this up, because it seemed JavaScript didn't have queues. Apparently, JavaScript arrays have built in stack and queue functionality. Originally, I had considered using a fixed size queue as extra memory and just counting on the number of low values in the back-half of the section not be larger than the more. Obviously, this wouldn't work for an arbitrarily sized array, but it would probably pass the check. 
https://code.tutsplus.com/data-structures-with-javascript-stack-and-queue--cms-23348a

After a while of thinking about how to do this in-place, the only thing I could think of was to shift the entire left half of the array over 1 whenever the right side had the lower number. I didn't want to do this if it wasn't the only solution, so I checked this to see if there was an obvious better solution that I missed. There is a better way, but it isn't something I fully understand, so I'm doing it the way I thought of. 
https://www.geeksforgeeks.org/in-place-merge-sort/