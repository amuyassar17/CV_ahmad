import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card'>
				<div className='card-content'>
				<h5 className="mt-bottom">
					<strong>INTEREST</strong>
				</h5>
				
					<h9 className='card-title activator grey-text text-darken-4'>
					<i class="small material-icons">insert_chart</i>
						Data Science
					</h9>
					<span className='card-title activator grey-text text-darken-4'>
					<i class="small material-icons">widgets</i>
						Big Data
					</span>
					<span className='card-title activator grey-text text-darken-4'>
					<i class="small material-icons">monetization_on</i>
						Finance - Investing
					</span>
					<span className='card-title activator grey-text text-darken-4'>
					<i class="small material-icons">adb</i>
						IOT-Robotic
					</span>
					<span className='card-title activator grey-text text-darken-4'>
					<Icon icon="mdi:cloud" />
						Cloud Infrastructure
					</span>
					
				</div>
				
			</div>
		</div>
        );
    }
}

export default Profile;
