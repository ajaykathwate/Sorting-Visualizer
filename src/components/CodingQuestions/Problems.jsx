import React from 'react'
import Questions from './Questions.json'
import './questions.css'

const Problems = (props) => {
  return (
    <div className="questions-container">
      <button id="questions-btn" onClick={e => { props.setOpen(false) }}>
        Jump to Sorting Algos!
      </button>
      <div className="navbar-question">
        <p>Coding Questions</p>
      </div>
      <div className="questions">
        {
          Questions.map((code, index) => {
            console.log(code);
            return (
              <a target="_blank"
              href={code.URL}
                className="question-div"
                key={index}>{index + 1}. &nbsp;
                {code.Problem}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}



// const Questions= [
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Find first and last positions of an element in a sorted array",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Find a Fixed Point (Value equal to index) in a given array",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Search in a rotated sorted array",
//     "Done": "<->",
//     "URL": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "square root of an integer",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/count-squares3649/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Maximum and minimum of an array using minimum number of comparisons",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Optimum location of point to minimize total distance",
//     "Done": "<->",
//     "URL": "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Find the repeating and the missing",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "find majority element",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/majority-element/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Searching in an array where adjacent differ by at most k",
//     "Done": "<->",
//     "URL": "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "find a pair with a given difference",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "find four elements that sum to a given value",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "maximum sum such that no 2 elements are adjacent",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/stickler-theif/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Count triplet with sum smaller than a given value",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "merge 2 sorted arrays",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "print all subarrays with 0 sum",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Product array Puzzle",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Sort array according to count of set bits",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "minimum no. of swaps required to sort the array",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/minimum-swaps/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Bishu and Soldiers",
//     "Done": "<->",
//     "URL": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Rasta and Kheshtak",
//     "Done": "<->",
//     "URL": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Kth smallest number again",
//     "Done": "<->",
//     "URL": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Find pivot element in a sorted array",
//     "Done": "<->",
//     "URL": "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "K-th Element of Two Sorted Arrays",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Aggressive cows",
//     "Done": "<->",
//     "URL": "https://www.spoj.com/problems/AGGRCOW/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Book Allocation Problem",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "EKOSPOJ:",
//     "Done": "<->",
//     "URL": "https://www.spoj.com/problems/EKO/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Job Scheduling Algo",
//     "Done": "<->",
//     "URL": "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Missing Number in AP",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/arithmetic-number/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Smallest number with atleastn trailing zeroes infactorial",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Painters Partition Problem:",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "ROTI-Prata SPOJ",
//     "Done": "<->",
//     "URL": "https://www.spoj.com/problems/PRATA/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "DoubleHelix SPOJ",
//     "Done": "<->",
//     "URL": "https://www.spoj.com/problems/ANARC05B/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Subset Sums",
//     "Done": "<->",
//     "URL": "https://www.spoj.com/problems/SUBSUMS/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Findthe inversion count",
//     "Done": "<->",
//     "URL": "https://practice.geeksforgeeks.org/problems/inversion-of-array/0"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Implement Merge-sort in-place",
//     "Done": "<->",
//     "URL": "https://www.geeksforgeeks.org/in-place-merge-sort/"
//   },
//   {
//     "Topic:": "Searching & Sorting",
//     "Problem: ": "Partitioning and Sorting Arrays with Many Repeated Entries",
//     "Done": "<->",
//     "URL": "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries"
//   }
// ]

export default Problems
