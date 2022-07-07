import { Link } from 'react-router-dom';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';

const SideBar = () => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const projects = reorder(
      project, // project is state
      result.source.index,
      result.destination.index
    );
    //store reordered state.
    setProject(projects);
  }; // outside the component

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const Arr = [
    {
      name: 'Styles',
      key: '12353',
      img: '/assets/images/style.png',
    },
    {
      name: 'Blocks',
      key: '23463',
      img: '/assets/images/blocks.png',
      blocks: [{ basic: [{ name: '2 columns', icon: '' }] }, { basic: [{ name: '2 columns', icon: '' }] }],
    },
    {
      name: 'Pages',
      key: '54643',
      img: '/assets/images/pages.png',
    },
    {
      name: 'Lang',
      key: '4435',
      img: '/assets/images/lang.png',
    },
    {
      name: 'Modes',
      key: '4235',
      img: '/assets/images/style.png',
    },
    {
      name: 'Remove',
      key: '4245',
      img: '/assets/images/delete.png',
    },
  ];

  const [project, setProject] = useState(Arr);

  return (
    <div className="sidebar">
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {project &&
              project.map((item, index) => (
                // draggableId should be string, index is also require, key props should be unique to prevent from unnecassary re-rendering
                <Draggable draggableId={item.key} key={item.key} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Link to="/">
                        <div className="sidebar_item">
                          <img src={item.img} alt="" />
                          <h2>{item.name}</h2>
                        </div>
                      </Link>
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default SideBar;
