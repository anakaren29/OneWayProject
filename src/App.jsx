import { useState } from 'react'
import Panel from './components/Panel'
import './App.css'


function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      <h1>Frequently asked questions</h1>
    <Panel titulo={'What is Artlist?'} parrafo={'Artlist is an all-in-one platform for video creators, providing you with the highest quality digital assets made by leading artists worldwide.'}
       active={activeIndex === 0}
      onShow = {() => setActiveIndex(0)} 
      />
    <Panel titulo={'Are Artlist digital assets royalty-free'} parrafo='Artlist’s digital assets are all royalty-free, meaning that you can use them in your videos without having to pay royalty fees.'
      active={activeIndex === 1}
      onShow={() => setActiveIndex(1)} />
    <Panel titulo={'How do the plans work and what do they cover'} parrafo='Artlist offers a range of plans, depending on the assets and license you need. We offer Music & SFX plans, Footage & Templates plans and Artlist Max — an all-in-one subscription giving you unlimited access to Artlist. '
      active={activeIndex === 2}
      onShow={() => setActiveIndex(2)} />
    <Panel titulo={'Can I try Artlist for free'} parrafo='Yes. With a free account you can access watermarked songs and footage to test in your videos, and save your favorite assets into curated collections.'
      active={activeIndex === 3}
      onShow={() => setActiveIndex(3)} />
    </main>
  )
}

export default App
