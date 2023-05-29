import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Study</th>
								<th>Start</th>
								<th>End</th>
							</tr>
						</thead>
						<tbody>
							
                            <tr>
								<td>S1 - UIN Alauddin Makassar</td>
								<td>2014</td>
								<td>2018</td>
							</tr>
                            <tr>
								<td>S2 - Universitas Gadjah Mada</td>
								<td>2019</td>
								<td>2022</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
            </div>
        );
    }
}

export default Education;