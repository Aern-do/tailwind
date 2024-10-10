import Block, { BlockColor } from "./components/Block"

function App() {
  return <div className="flex justify-center items-center w-screen h-screen p-24 px-56">
    <div className="flex justify-between gap-4 w-full h-full">
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex flex-1 gap-4">
          <Block color={BlockColor.Red} title="Foo1" category="Bar1" score={4.2} mark={80} />
          <Block color={BlockColor.Green} title="Foo2" category="Bar2" score={4.2} mark={80} />
        </div>

        <Block color={BlockColor.Pink} title="Foo3" category="Bar3" score={3.8} mark={80} />
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <Block color={BlockColor.Orange} title="Foo4" category="Bar4" score={4.4} mark={100} />

        <div className="flex flex-1 gap-4">
          <Block color={BlockColor.Blue} title="Foo5" category="Bar5" score={3.2} mark={100} />
          <Block color={BlockColor.Purple} title="Foo6" category="Bar6" score={2.2} mark={80} />
        </div>
      </div>
    </div>
  </div>
}

export default App
