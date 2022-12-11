import React from 'react'
import './insertionsort.css'

const InsertionSort = () => {
  return (
    <div className="SortInfo">
      <hr />
      <h1>Insertion Sort</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          <div>
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Insertion_sort"
                target="_blank"
                rel="noopener noreferrer"
              >
                Insertion Sort
              </a>{' '}
              is a simple sorting algorithm that iterates through an array and
              at each iteration it removes one element from the array, finds the
              location it belongs to in the sorted list and inserts it there,
              repeating until no elements remain in the unsorted list. It is an
              in-place, stable sorting algorithm that is inefficient on large
              input arrays but works well for data sets that are almost sorted.
              It is more efficient in practice compared to other quadratic
              sorting algorithms like bubble sort and selection sort.
            </p>
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
                      O(n<sup>2</sup>)
                    </span>
                  </code>
                </td>
              </tr>

              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>
                    <span>
                      O(n<sup>2</sup>)
                    </span>
                  </code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <code>
                    <span>
                      O(n)
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

export default InsertionSort
