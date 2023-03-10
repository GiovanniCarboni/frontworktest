import React from 'react';
import { Chat } from './components/Chat';
import { Bestsellers } from './components/Bestsellers';
import userImage from './images/Image.png';
import shoeOne from './images/shoe1.png';
import shoeTwo from './images/shoe2.png';
import shoeThree from './images/shoe3.png';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: '2rem',
        gap: '1rem',
        backgroundColor: '#FAEFE3',
      }}
    >
      {/* <p style={{ maxWidth: '70%' }}>
        Please use <a href="https://storybook.js.org/">Storybook</a> to create your components. It
        has already been set up for you with an example in the `src/components` folder.
      </p> */}
      <Chat
        name="Emily Dougrer"
        position="Developer"
        label="Hi there. We use Boards to share initial goals and ideas"
        image={userImage}
        backgroundColor="#4643D3"
      />
      <Bestsellers
        title="Bestsellers"
        productOne={['Nike Air Max 270', 'Nike', '$195.80', shoeOne]}
        productTwo={['Nike Air Max 90', 'Nike', '$195.80', shoeTwo]}
        productThree={['Nike Air Max Plus', 'Nike', '$195.80', shoeThree]}
      />
    </div>
  );
}

export default App;
