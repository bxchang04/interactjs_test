import interact from 'interactjs';

const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

interact(target).draggable({
  cursorChecker: (action, interactable, element, interacting) => {
    switch (action.axis) {
      case 'x': return 'ew-resize'
      case 'y': return 'ns-resize'
      default: return interacting ? 'grabbing' : 'grab'
    }
  }
})
