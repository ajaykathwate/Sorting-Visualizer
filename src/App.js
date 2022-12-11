import React, { useState } from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BubbleSort from './components/BubbleSort/BubbleSort';
import MergeSort from './components/MergeSort/MergeSort';
import HeapSort from './components/HeapSort/HeapSort';
import SelectionSort from './components/SelectionSort/SelectionSort';
import InsertionSort from './components/InsertionSort/InsertionSort';
import QuickSort from './components/QuickSort/QuickSort';
import Home from './Home/Home';
import Problems from './components/CodingQuestions/Problems.jsx';


function App() {

  const [open, setOpen] = useState(false);
  return (
    <>
      {
        open ?
          <Problems setOpen={setOpen} />
          :
          <BrowserRouter>
            <div className="app">
              <SortingVisualizer setOpen={setOpen} />
            </div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/bubble" element={<BubbleSort />} />
              <Route path="/merge" element={<MergeSort />} />
              <Route path="/heap" element={<HeapSort />} />
              <Route path="/selection" element={<SelectionSort />} />
              <Route path="/insertion" element={<InsertionSort />} />
              <Route path="/quick" element={<QuickSort />} />
            </Routes>
          </BrowserRouter>
      }
    </>
  );
}

export default App;
