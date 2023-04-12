// the ListGroup Component:
//  a heading
//  a list of items (cities)
//  a button that reveals a message
//  displays city name to console upon click

import ListGroup from './components/ListGroup/ListGroup';
import Alert from './components/Alert/Alert';
import Button from './components/Button/Button';
import { useState } from 'react';

function App() {
  let items = ['new york', 'paris', 'london', 'tokyo', 'san fran'];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Button onClick={() => setAlertVisibility(true)}>
        Click for Message
      </Button>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          No message for you today
        </Alert>
      )}
    </div>
  );
}

export default App;
