import React from "react";

const NodeInfo = ({ node }) => {

    return (
        node && <div className="ui list">
            <div className="item">
                <h2 className="header">Node id: {node.id}</h2>
            </div>
            <div className="item">
                <h2 className="header">Node index: {node.index}</h2>
            </div>
            <div className="item">
                <h2 className="header">Node x position: {node.x}</h2>
            </div>
            <div className="item">
                <h2 className="header">Node y position: {node.y}</h2>
            </div>
        </div>
    );
}

export default NodeInfo;