const Graph = require('./graphSet')

function getShortestPath(start, end, graph) {
    const distance = []
    const isVisited = []
    // init distance array
    for (var i = 0; i < graph.length; i++) {
        distance.push(Infinity)
        isVisited.push(false)
    }
    distance[start] = 0
    isVisited[start] = true
    // priority queue
    const PQ = []
    PQ.push([start, distance[start]])

    while (PQ.length > 0) {    
        const [minNode, _] = dequeueMinNode(PQ)
        isVisited[minNode] = true        

        for (var adjNodePair of Graph[minNode]) {
            const [adjNode, dist] = adjNodePair
            if (isVisited[adjNode]) {
                continue
            }
            const newDist = distance[minNode] + dist
            if (newDist < distance[adjNode]) {                
                distance[adjNode] = newDist
                PQ.push([adjNode, newDist])
            }
        }
    }

    return distance[end]
}

function dequeueMinNode(queue) {
    var [minNode, min] = queue[0]
    var minIndex = 0
    for (var index in queue) {
        const [node, dist] = queue[index]
        if (dist < min) {
            minNode = node
            min = dist
            minIndex = index
        }
    }
    queue.splice(minIndex, 1)
    return [minNode, min]
}

function main() {
    const sPath = getShortestPath(0, 7, Graph)
    console.log(`shortest path from A -> H is ${sPath}`)    
}

main()