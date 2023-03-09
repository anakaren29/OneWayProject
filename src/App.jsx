import { useState } from 'react'
import Panel from './components/Panel'
import './App.css'


function App() {
  const [selected, setSelected] = useState(null);


  return (
    <main>
      <h1>Frequently asked questions</h1>
    <Panel titulo={'What is Artlist?'} parrafo={'Artlist is an all-in-one platform for video creators, providing you with the highest quality digital assets made by leading artists worldwide.'}
       active={selected === 0}
      onShow = {() => {
           if(selected === 0){
             return setSelected(null)
           }
           setSelected(0)
      }} 
      />
    <Panel titulo={'Are Artlist digital assets royalty-free'} parrafo='Artlist’s digital assets are all royalty-free, meaning that you can use them in your videos without having to pay royalty fees.'
      active={selected === 1}
      onShow = {() => {
        if(selected === 1){
          return setSelected(null)
        }
        setSelected(1)
   }}  />
    <Panel titulo={'How do the plans work and what do they cover'} parrafo='Artlist offers a range of plans, depending on the assets and license you need. We offer Music & SFX plans, Footage & Templates plans and Artlist Max — an all-in-one subscription giving you unlimited access to Artlist. '
      active={selected === 2}
      onShow = {() => {
        if(selected === 2){
          return setSelected(null)
        }
        setSelected(2)
   }} />
    <Panel titulo={'Can I try Artlist for free'} parrafo='Yes. With a free account you can access watermarked songs and footage to test in your videos, and save your favorite assets into curated collections.'
      active={selected === 3}
      onShow = {() => {
        if(selected === 3){
          return setSelected(null)
        }
        setSelected(3)
   }}  />
    </main>
  )
}

export default App
