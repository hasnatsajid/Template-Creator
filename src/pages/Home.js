import SideBar from '../components/Sidebar';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Home = () => {
  const onDragEnd = (result) => {
    console.log(result);
    result.destination.innerHTML = 'mew';
  };

  return (
    <div className="homePage">
      <div className="home">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="home_sidebar">
            <SideBar />
          </div>
          <Droppable droppableId="template">
            {(provided) => (
              <div className="home_showcase" ref={provided.innerRef} {...provided.droppableProps}>
                hello
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
