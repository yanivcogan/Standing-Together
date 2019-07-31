import css from 'styled-jsx/css'
export default css
    `
.hidden{
    display: none;
}
.map-selector-wrap{
    display: block;
    position: relative;
    height: 90vh;
    width: 40vh;
    margin: 1em auto;
}
.map-view{
    display: block;
    height: calc(100% - 1.5em);
    width: 100%;
    margin: 0 auto;
}
.highlighted-city-label{
    width: 100%;
    line-height: 1.5em;
    font-size: 1.25em;
    height: 1.5em;
    text-align: center;
    color: white;
    background-color: #90278E;
    font-weight: bold;
}
.selection-mechanism{
    position: absolute;
    top: 5px;
    left: 5px;
}
.selection-mode{
    cursor: pointer;
    display: block;
    margin-bottom: 5px;
    color: #555;
    background: #ddd;
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    width: 3em;
    height: 2.25em;
    transition: filter 0.15s;
}
.selection-mode:hover{
    filter:brightness(80%);
}
.selection-mode:active{
    filter:brightness(60%);
}
.selection-mode.active-mode{
    filter:invert(100%);
}
.rect-selection{
    background-image: url("../../static/rect_select.png");
}
.poly-selection{
    background-image: url("../../static/poly_select.png");
}
`