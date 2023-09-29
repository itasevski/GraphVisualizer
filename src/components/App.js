import React, { useEffect, useRef, useState } from "react";
import { Graph } from 'react-d3-graph';

import data from "../util/my_data.json";
import { config } from "../config/graph_config";
// import NodeInfo from "./NodeInfo";

// TODO implement body click handler
// ...
// TODO show link labels?
// TODO make graph undirected?
// TODO bidirectional relations? (check my_data.json)
// TODO multiple relations between two nodes? (last relation of data gets used, others are deleted automatically)S

const App = () => {
    // const [currentNodeInfo, setCurrentNodeInfo] = useState(null);
    const [graphData, setGraphData] = useState(data);
    const [clickedNode, setClickedNode] = useState(null);
    const graphRef = useRef();

    let visitedNodes = [];
    var treeData = {
        nodes: [],
        links: []
    };

    function onClickNode(nodeId, node) {
        if (clickedNode === node.id) {
            setGraphData(data);
            setClickedNode(null);
            return;
        }

        setClickedNode(node.id);
        findNeighbors(node.id);
        setGraphData(treeData);
        // setCurrentNodeInfo(node);
    }

    const onClickGraph = (event) => {
        if (!clickedNode) return;
        else {
            setGraphData(data);
            setClickedNode(null);
        }
    }

    function findNeighbors(node) {
        if (visitedNodes.includes(node)) return; // check if node has been visited, if yes terminate stack item

        treeData.nodes.push({ id: node, color: graphData.nodes.find(n => n.id === node).color }); // add node to nodes list
        visitedNodes.push(node); // mark node as visited

        let links = graphData.links.filter(link => link.source === node); // find all links where clicked node is source

        if (!links.length) return; // if no links are found, leaf node is detected and stack item is terminated

        links.forEach(link => {
            treeData.links.push(link); // add link to links list
            findNeighbors(link.target); // recursively call function for every neighbor node
        });
    }


    useEffect(() => {
        const onBodyClick = (event) => {
            if (graphRef.current.contains(event.target) || clickedNode === null) return; // if child of reference has been clicked or if there isn't an active clicked node, terminate
            else {
                setGraphData(data);
                setClickedNode(null); // else initialize graph data and clicked node to default, meaning that there is an active clicked node and element outside of reference has been clicked
            }
        };

        document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture: true });
        } // cleanup, gets executed after every "clickedNode" update to preserve state consistency
    }, [clickedNode]);

    return (
        <div className="ui grid">
            <div ref={graphRef} className="sixteen wide column">
                <Graph
                    id='actors_movies'
                    data={graphData}
                    config={config}
                    onClickNode={onClickNode}
                    onClickGraph={onClickGraph}
                />
            </div>
            {/* <div className="six wide column">
                <NodeInfo node={currentNodeInfo} />
            </div> */}
        </div>
    );
}

export default App;