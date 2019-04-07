import React from 'react';
import stylesheet from './SelectableTable.css'

import TextValue from './FieldTypes/TextValue'
import ToggleSwitch from './FieldTypes/ToggleSwitch'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faPaperPlane, faCheckSquare, faUser, faPhone, faEnvelopeOpen, faCalendar, faCalendarCheck, faPhoneSquare} from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faPaperPlane, faCheckSquare, faUser, faPhone, faEnvelopeOpen, faCalendar, faCalendarCheck, faPhoneSquare);

export default class SelectableTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: props.rows,
			rowKey: props.rowKey,
			header: props.header,
			singleSelection: props.singleSelection,
			onSelect: props.onSelect,
			allSelected: false
		};
	}
	
	/*required because the data is fetched asynchronously. Might not be the optimal solution.*/
	componentWillReceiveProps(nextProps){
		this.setState(
			{rows: nextProps.rows,
			header: nextProps.header}
		);
	}
	
	toggleAllRowsSelection() {
		const rows = this.state.rows.slice();
		for (var i=0; i<rows.length; i++)
		{
			rows[i].selected = !this.state.allSelected;
		}
		this.setState({rows: rows, allSelected: !this.state.allSelected});
	}

	toggleRowSelection(rowIndex) {
		const rows = this.state.rows.slice();
		//deselect all rows, if the table is limited to a single selection
		if(this.state.singleSelection)
		{
			for(var i=0; i<rows.length; i++)
			{
				rows[i].selected=false;
			}
		}
		rows[rowIndex].selected = !rows[rowIndex].selected;
		this.setState({rows: rows});
		if(this.state.onSelect)
			this.state.onSelect(rowIndex);
	}

	cellConstructor(type, val, onChangeFunction) {
		switch(type) {
			case 'text':
				return <TextValue value={val} handleChange={onChangeFunction}/>;
			case 'toggle':
			{
				return <ToggleSwitch value={val} handleChange={onChangeFunction}/>;
			}
			default:
				return <TextValue value={val} handleChange={onChangeFunction}/>;
		}
	}

	render() {
		const tableHeader = 
			<tr className='list-table-header'>
				<th className='list-row-selection-indicator list-table-header-field'> </th>
				{this.state.header.map((field, i) =>
				<th key={i} className={'list-table-header-field '+(!field.visibility?'hidden ':' ')} style={{'width':(field.width?field.width:'auto')}}>
					{field.icon!=""?
						<div className="list-table-header-icon">
							<FontAwesomeIcon icon={field.icon}></FontAwesomeIcon>
						</div>
					:''}
					<div className="list-table-header-titles">
						{field.title.map((title, j)=>
							<div key={j}>{title}</div>
						)}
					</div>
				</th>)}
			</tr>;
		const rows =
			this.state['rows'].map((row, i) =>
				<tr key={this.state.rowKey?row[this.state.rowKey]:i} className='list-table-row' onClick={() => this.toggleRowSelection(i)}>
					<td className={'list-table-field no-padding list-row-selection-indicator '+(row.selected?'selected-table-row ':'')}> </td>
					{
						this.state.header.map((field, j) =>
							<td key={j} className={'list-table-field '+(!field.visibility?'hidden ':' ')+(field.noPadding?'no-padding ':'')} style={{'width':(field.width?field.width:'auto')}} title={row[field["key"]]+""}>
								{this.cellConstructor(field["type"], row[field["key"]], function(value){field["handleChange"](i, value)},)}
							</td>
						)
					}
				</tr>);
		const selectAll =
			<div className='select-all-checkbox' onClick={() => this.toggleAllRowsSelection()}>
				<div className={'checkbox '+(this.state.allSelected?'checkbox-checked':'')}><FontAwesomeIcon icon="check-square"></FontAwesomeIcon></div>
				<div className="checkbox-label">
					<div>סימון הכל</div>
					<div>סימון הכל</div>
				</div>
			</div>;
		return (
			<div>
				<style jsx global>{stylesheet}</style>
				<table className={'list-table'}>
					<thead>
						{tableHeader}
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				<br></br>
				{this.state.singleSelection?'':selectAll}
			</div>
		);
	}
}