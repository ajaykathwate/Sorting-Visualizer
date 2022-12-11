import React from 'react'
import './home.css'

const Home = () => {
  return (
      <div className="SortInfo">
          <hr />
          <h1>Select Algorithm</h1>

          <div className="SortInfo__Body">
              <article className="SortInfo__Article">
                  <div>
                      <p>
                          You must select an algorithm before you can visualize it's
                          execution on an array of numbers.
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
                                  </code>
                              </td>
                          </tr>

                          <tr>
                              <td>Average time complexity</td>
                              <td>
                                  <code>
                                  </code>
                              </td>
                          </tr>

                          <tr>
                              <td>Best-case time complexity</td>
                              <td>
                                  <code>
                                  </code>
                              </td>
                          </tr>

                          <tr>
                              <td>Worst-case space complexity</td>
                              <td>
                                  <code>
                                  </code>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </aside>
          </div>
      </div>
  )
}

export default Home
