import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { calculateSelectedItems, calculateSelectedItem, getSpaceItems } from './features/space/spaceSlice';
import { setCenterPos } from './features/map/mapSlice';

import List from './components/List/List';
import Map from './components/Map/Map';
import Info from './components/Info/Info';

import './App.css';

function App() {
  const { spaceItems, spaceType, selectedId } = useAppSelector((store) => store.space);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSpaceItems(1));
  }, [])

  useEffect(() => {
    dispatch(calculateSelectedItems());
  }, [spaceType])

  useEffect(() => {
    if(selectedId === -1) return;
    dispatch(calculateSelectedItem())
    const pos = spaceItems.filter(space => space.id === selectedId)[0].loc;
    dispatch(setCenterPos(pos))
  }, [selectedId]);

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
