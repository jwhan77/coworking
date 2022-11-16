import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { calculateSelectedItems, getSpaceItems } from './features/space/spaceSlice';

import List from './components/List/List';
import Map from './components/Map/Map';
import Info from './components/Info/Info';

import './App.css';

function App() {
  const { spaceType } = useAppSelector((store) => store.space);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpaceItems(1));
  }, [])

  useEffect(() => {
    dispatch(calculateSelectedItems());
  }, [spaceType])

  return (
    <div className="App">
      <main>
        <aside>
          <List />
        </aside>
        <section>
          <div className='container'>
            <Map />
          </div>
          <Info />
        </section>
      </main>
    </div>
  );
}

export default App;
