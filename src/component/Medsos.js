import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card'>
				<div className='card-content'>
				<h5 className="mt-bottom">
					<strong>Social Media</strong>
				</h5>
				
					<h9 className='card-title activator grey-text text-darken-4'>
					<Icon icon="mdi:instagram" />amuyassar
					</h9>
                    <h9 className='card-title activator grey-text text-darken-4'>
					<Icon icon="mdi:linkedin" />Ahmad Muyassar
					</h9>
					
				</div>
				
			</div>
		</div>
        );
    }
}

export default Profile;