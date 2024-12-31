import FlexContainer from '@/components/FlexLayout/FlexContainer'
import FlexItem from '@/components/FlexLayout/FlexItem'
import { BookmarksContainer } from './components/widgets/BookmarksContainer'

function App() {

  return (
    <div>
      <div className='bg-black h-8'>
        <p>Title</p>
      </div>
      <FlexContainer>
        <FlexItem>
          <div>
            <BookmarksContainer />
          </div>
        </FlexItem>
        <FlexItem>
          <div className="border rounded border-blue-500">Content 2</div>
        </FlexItem>
        <FlexItem>
          <div className="border rounded border-violet-500">Content 3</div>
        </FlexItem>
      </FlexContainer>
    </div>
  )
}

export default App
