import React from 'react';
import { Provider } from 'react-redux';

import store from "./store";

import CourseList from "./components/CourseList";

export default function App() {
  return (
    <Provider store={store}> 
        <CourseList />
    </Provider>
  );
}
