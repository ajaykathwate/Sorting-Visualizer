import React from 'react'
import './heapsort.css'

const HeapSort = () => {
  return (
    <div className="SortInfo">
      <hr />
      <h1>Heap Sort</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          <div>
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Heapsort"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heap Sort
              </a>{' '}
              can be thought of as an improved selection sort that uses the
              heap data structure rather than a linear-time search to find the
              maximum or minimum element. It is an in-place sorting algorithm
              that is not stable and has a somewhat slower running time than
              Quicksort in practice.
            </p>
            <p>
              The heapsort algorithm can be divided into two parts. In the
              first step, a heap is built out of the data. The heap is often
              placed in an array with the layout of a complete binary tree. In
              the second step, a sorted array is created by repeatedly
              removing the largest element from the heap (the root of the
              heap), and inserting it into the array. The heap is updated
              after each removal to maintain the heap property. Once all
              objects have been removed from the heap, the result is a sorted
              array.
            </p>
            <ol>
              <li>
                Call the buildMaxHeap() function on the list. Also referred to
                as heapify(), this builds a heap from a list in O(n)
                operations.
              </li>
              <li>
                Swap the first element of the list with the final element.
                Decrease the considered range of the list by one.
              </li>
              <li>
                Call the <em>siftDown()</em>, also called{' '}
                <em>maxHeapify()</em> function on the list to sift the new
                first element to its appropriate index in the heap.
              </li>
              <li>
                Go to step (2) unless the considered range of the list is one
                element.
              </li>
            </ol>
          </div>
        </article>

        <aside className="SortInfo__Aside">
          <h3>Performance</h3>
          <table>
            <tbody>
              <tr>
                <td>Worst-case time complexity</td>
                <td>
                  <code>
                    <span>
                      O(<em>n</em> log <em>n</em>)
                    </span>
                  </code>
                </td>
              </tr>

              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>
                    <span>
                      O(<em>n</em> log <em>n</em>)
                    </span>
                  </code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <code>
                    <span>
                      O(<em>n</em> log <em>n</em>)
                    </span>
                  </code>
                </td>
              </tr>

              <tr>
                <td>Worst-case space complexity</td>
                <td>
                  <code><span>
                    O(1)
                  </span></code>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  )
}

export default HeapSort
