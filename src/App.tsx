import FlexContainer from '@/components/FlexLayout/FlexContainer'
import FlexItem from '@/components/FlexLayout/FlexItem'
import { BookmarksWidget } from './components/widgets/bookmarks'
import { TodolistWidget } from './components/widgets/todolist/TodolistWidget'

function App() {

  return (
    <div>
      <div className='bg-black h-8'>
        <p>Title</p>
      </div>
      <FlexContainer>
        <FlexItem>
          <div>
            <BookmarksWidget />
          </div>
        </FlexItem>
        <FlexItem>
          <div>
            <TodolistWidget />
          </div>
        </FlexItem>
        <FlexItem>
          <div className="border rounded border-violet-500">Content 3</div>
        </FlexItem>
      </FlexContainer>
    </div>
  )
}

export default App
