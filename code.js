function mergesort(array) {
    temp = 0
    arrayOrder = Math.ceil(Math.log2(array.length))
    for(outerLoops = 2; outerLoops <= 2**arrayOrder; outerLoops*=2)
    {
    // Selects a section to sort, based on the number of passes the outer loop has made
        //console.log("Outermost Loop: " + Math.log2(outerLoops))
        for(x=0; x < array.length; x+=outerLoops)
        {
            if(outerLoops >= array.length)
            {
                front = 0
                back = array.length - 1
                mid = (outerLoops/2)-1
            } else
            {
                front = x
                back = x + outerLoops - 1
                if(back > (array.length - 1))
                {
                    back = array.length - 1
                }
                mid = Math.floor((front+back)/2)
            }
            //console.log(array)
            //console.log("Indices: " + front + ", " + mid + ", " + (mid+1) + ", " + back)
        // Sorts a section, when given its front, mid, and end indexes
            for(i = front, j = mid+1; (i <= mid || j <= back); i++)
            {
                //console.log("Innish")
                // When the value at index i is greater than the value at index j, the value at index
                // j should be moved to index i's location, while the values in the left section
                // should move over one index.
                if(array[i] >= array[j])
                {
                    temp = array[j]
                    // This should shift everything in the left section over one, then move over the
                    // pointer front of the right section over one as well
                    for(k = j; k >= i; k--)
                    {
                        array[k] = array[k-1]
                        //console.log(array + ", " + i + ", " + j + ", " + k)
                    }
                    array[i] = temp
                    //console.log(array + ", " + i + ", " + j + ", ")
                    //mid++
                    j++
                }
            }
        }
    }
    //console.log(array)
    //console.log("End")
    return array
}

mergesort([8,7,6,4,3,9])