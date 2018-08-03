import css from 'styled-jsx/css'
export default css
`
	.saved-views{
		display: inline-block;
		padding-left: 20px;
		color: #fbfbfb;
		font-size: 21px;
		font-weight: 400;
		line-height: 55px;
	},
	.saved-views-wrap{
		overflow-x: auto;
		white-space: nowrap;
	},
	.page-wrap{
		height:100vh;
		display: flex;
		flex-direction: column;
		background: #fbfbfb;
	}
	.content-wrap{
		display: flex;
		flex-direction: row;
		height: calc(100vh - 55px);
		position: relative;
	}
	.left-panel{
		width: 20%;
		padding: 1%;
		box-sizing: border-box;
		background-color: #fbfbfb;
		text-align: center;
	}
	.main-panel{
		width: 80%;
		padding: 1%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fbfbfb;
	}
	.results-wrap{
		overflow: auto;
		padding: 2.5% 0;
		position: relative;
	}
	.query-results{
		box-sizing: border-box;
		width: 99.9%;
	}
	.event-selection-popup-title{
		font-size: 1.75em;
		text-align: center;
		margin-bottom: 1em;
	}
	.event-selector{
		text-align: center;
		font-size: 1.25em;
		width: 50%;
		display: block;
		margin: 0 auto;
		margin-bottom: 1.5em;
	}
	.new-event-button{
		text-decoration: none;
	}
	.new-event-button>div{
	    border: 2px solid white;
		padding: 0.5em;
		border-radius: 0.5em;
		display: block;
		text-align: center;
		width: 50%;
		margin: 0 auto;
		font-size: 1.25em;
		transition: color 0.25s, background-color 0.25s;
	}
	.new-event-button:active>div{
		background-color: white;
		color: rgb(144, 39, 142);
	}
	.event-link-title{
		font-size: 1.5em;
		text-align: center;
		margin-bottom: 1em;
	}
	.event-link{
		width: calc(100% - 3.75em);
		display: inline-block;
		margin: 2.5% 0;
		background: white;
		padding: 0.25em;;
		border: 1px solid black;
		box-sizing: border-box;
		-webkit-transition: color 0.5s,background 0.5s;
		transition: color 0.5s,background 0.5s;
		font-weight: bold;
		font-size: 1em;
		text-align: center;
		vertical-align: middle;
	}
	.event-link:hover{
		color: black;
	}
	.event-link-ok{
		display: inline-block;
		font-size: 1.25em;
		margin: 0 0.5em;
		vertical-align: middle;
		cursor: pointer;
		opacity: 0.8;
		transition: opacity 0.5s;
	}
	.event-link-ok:hover{
		opacity:1;
	}
`