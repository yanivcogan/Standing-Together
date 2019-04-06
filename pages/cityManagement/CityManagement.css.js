import css from 'styled-jsx/css'
export default css
    `
    .title-wrap{
		color: #fbfbfb;
		font-size: 21px;
		font-weight: 400;
		line-height: 55px;
		text-align: center;
		margin: 0 auto;
	}
	.title-lang{
        margin-left: 5%;
		white-space: nowrap;
	}
    .city-table{
        direction: rtl;
        border-collapse: collapse;
        margin: 5% auto;
        width: 80%;
        table-layout: fixed;
    }
    .city-table th{
        padding: 5px 15px;
        border: 1px solid black;
    }
    .city-table td{
        padding: 0px;
        border: 1px solid black;
    }
    .city-table td input, .city-table td select{
        width: 100%;
        box-sizing: border-box;
        border: none;
        outline: none;
    }
    .city-table tbody{
        cursor: pointer;
    }
    .add-city-button, .save-cities-button{
        display: block;
        margin: 0 auto;
        padding: 1% 3%;
        font-size: 1.5em;
        color: white;
        background-color: #90278e;
        border: none;
        outline: none;
    }
    .save-cities-button{
        margin: 1.5em auto;
    }
    .add-city-button:hover, .save-cities-button:hover{
        background-color: #80177e;
    }
    .add-city-button:active, .save-cities-button:active{
        background-color: #70076e;
    }
`
