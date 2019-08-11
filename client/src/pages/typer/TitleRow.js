import React from 'react'
import styles from './TitleRow.css'

export default class TitleRow extends React.Component {
	render() {
		return (
			<div style={styles.row_title}>
				<div style={styles.rtl}>
					<h4 style={styles.heading_hb}>שם פרטי<br/>الاسم الشخصي</h4>
				</div>
				<div style={styles.rtl}>
					<h4 style={styles.heading_hb}>שם משפחה<br/>اسم العائلة</h4>
				</div>
				<div style={styles.rtl}>
					<h4 style={styles.heading_hb}>עיר<br/>البلد</h4>
				</div>
				<div style={styles.rtl}>
					<h4 style={styles.heading_hb}>טלפון<br/>رقم الهاتف</h4>
				</div>
				<div style={styles['rtl-email']}>
					<div style={styles.heading_hb}>אימייל<br/>البريد الإلكتروني</div>
				</div>
			</div>
		);
	}
}
  