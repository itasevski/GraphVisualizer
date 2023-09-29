export const config = {
    "automaticRearrangeAfterDropNode": true,
    // "collapsible": true, // hiding leaf nodes on click
    "focusAnimationDuration": 0.25,
    "highlightBehavior": true,
    "highlightDegree": 2,
    "highlightOpacity": 0,
    "linkHighlightBehavior": true, // highlight links on hover
    "nodeHighlightBehavior": true, // highlight nodes on hover
    "directed": true, // if set to true, only nodes to which the node that is currently hovered on points to are shown
    "maxZoom": 12,
    "minZoom": 0.05,
    "initialZoom": 0.8,
    "panAndZoom": false,
    "staticGraph": false,
    "staticGraphWithDragAndDrop": false,
    "width": 2100,
    "height": 1100,
    "d3": {
        "alphaTarget": 0.05,
        "gravity": -300,
        "linkLength": 120,
        "linkStrength": 2,
        "disableLinkForce": false
    },
    "node": {
        "fontColor": "black",
        "fontSize": 10,
        "fontWeight": "normal",
        "highlightColor": "red",
        "highlightFontSize": 14,
        "highlightFontWeight": "bold",
        "highlightStrokeColor": "red",
        "highlightStrokeWidth": 1.5,
        "opacity": 0.9,
        "renderLabel": true,
        "size": 275,
        "strokeColor": "none",
        "strokeWidth": 1.5,
        "svg": "",
        "symbolType": "circle"
    },
    "link": {
        "color": "lightgray",
        "fontColor": "black",
        "fontSize": 6,
        "fontWeight": "normal",
        "highlightColor": "red",
        "highlightFontSize": 8,
        "highlightFontWeight": "normal",
        "labelProperty": "label",
        "mouseCursor": "pointer",
        "opacity": 1,
        "renderLabel": false,
        "semanticStrokeWidth": true,
        "strokeWidth": 1,
        "markerHeight": 6,
        "markerWidth": 6,
        "strokeDasharray": 0,
        "strokeDashoffset": 0,
        "strokeLinecap": "butt"
    }
}