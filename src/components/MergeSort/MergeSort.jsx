import React from 'react'
import './mergesort.css'


const MergeSort = () => {
  return (
    <div className="SortInfo">
      <hr />
      <h1>Merge Sort</h1>

      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          <div>
            <p>
              <a
                href="https://www.geeksforgeeks.org/merge-sort/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merge Sort
              </a>{' '}
              is an efficient, stable sorting algorith that makes use of the
              divide and conquer strategy. Conceptually the algorithm works as
              follows:
            </p>
            <ol>
              <li>
                Divide the unsorted list into <em>n</em> sublists, each
                containing one element(a list of one element is considered
                sorted)
              </li>
              <li>
                Repeatedly merge sublists to produce new sorted sublists until
                there is only one sublist remaining. This will be the sorted
                list.
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
                    O(<em>n</em>)
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

export default MergeSort
