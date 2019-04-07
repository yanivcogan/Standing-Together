import css from 'styled-jsx/css'
export default css`
	.list-table{
		width: 100%;
		border-collapse: collapse;
		font-size:16px;
	}
	.list-table-header{
		color: #616B6F;
		font-weight: 700;
		font-size:14px;
		margin: 0 auto;
		width: 100%;
		text-align: start;
	}
	.list-table-header-field{
		padding-bottom: 5px;
		text-align: start;
		border-top-color: transparent !important;
		border-right-color: transparent !important;
		border-left-color: transparent !important;
	}
	.list-table-header-field.hidden{
		display: none;
	}
	.list-table-header-icon{
		display:inline-block;
		text-align: center;
		margin-left: 0.5em;
		vertical-align: middle;
	}
	.list-table-header-titles{
		display:inline-block;
		vertical-align: middle;
	}
	.list-table-row{
		background-color:#fff;
		white-space: nowrap;
		transition: background-color 1.5s;
	}
	.selected-table-row{
		background-color:#FF4C94;
	}
	.list-table-row:hover{
		background-color: #fafafa;
		transition: background-color 0.5s;
	}
	.list-table-field{
		border: 1px solid #888;
		height: 1.5em;
		color: rgb(103,111,117);
		padding: 2px 5px;
	}
	.list-table-field.no-padding{
		padding: 0px;
	}
	.list-table-field.hidden{
		display: none;
	}
	.list-row-selection-indicator{
		width: 2px;
		cursor: pointer;
		border: 1px solid #888;
	}
	.select-all-checkbox{
		color: rgb(128, 134, 138);
		font-weight: 700;
		cursor: pointer;
	}
	.checkbox{
		display: inline-block;
		margin-right: 10px;
		color: rgba(86, 95, 108, .7);
	}
	.checkbox-checked{
		color: #FF4C94;
	}
	.checkbox-label{
		display: inline-block;
		vertical-align: middle;
		margin: 0 0.5em;
	}
`