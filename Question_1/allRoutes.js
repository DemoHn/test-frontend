const Graph = require('./graphSet')

const routes = []
const tmpPathList = []
const visitedArray = new Array(Graph.length).fill(false)

// Visit all routes 
function visitRoutes(start, end) {
  visitedArray[start] = true
  tmpPathList.push(start)

  if (start === end) {
    // copy current pathList to routes
    // and push the current path to routes list
    routes.push(copyArray(tmpPathList))

    tmpPathList.pop()
    visitedArray[start] = false
    return
  }

  const adjArray = Graph[start]
  for (var adjNode of adjArray) {
    const [node, _] = adjNode

    if (!visitedArray[node]) {
      visitRoutes(node, end)
      
    }
  }

  // done
  visitedArray[start] = false
  tmpPathList.pop()
}

// utils
function printResultRoutes(start, end, routes) {
  const toNode = i => String.fromCharCode(i + 65)

  console.log(`All possible routes from ${toNode(start)} -> ${toNode(end)}`)
  routes.forEach((route, index) => {
    const pathStr = route.map(i => toNode(i)).join(' -> ')
    console.log(`${index + 1}. ${pathStr}`)
  })
}

function copyArray(array) {
  const newArray = []
  array.forEach(item => {
    newArray.push(item)
  })

  return newArray
}

function main() {
  visitRoutes(0, 7)
  printResultRoutes(0, 7, routes)
}

main()
