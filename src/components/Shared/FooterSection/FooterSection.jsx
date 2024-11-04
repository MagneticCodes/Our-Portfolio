import React from 'react';

const FooterSection = () => {
	return (
		<div>
			<div className='bg-[#010506] w-full py-4 md:py-6 px-4 text-white'>
				<div className='container mx-auto flex justify-center items-center text-xs md:text-[16px]'>
					©{new Date().getFullYear()}, Magnetic Codes, All rights reserved.
				</div>
			</div>
		</div>
	);
};

export default FooterSection;
