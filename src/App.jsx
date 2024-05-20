import TreeView from './components/treeView';
import menus from './components/treeView/data';

function App() {

  return (
    <>
      {/* Tree view component / Menu UI component / Recursive navigation menu  */}
      <TreeView menus={menus} />
    </>
  )
}

export default App
