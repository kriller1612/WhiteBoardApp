import React, { useEffect, useState } from 'react';

export default function Sidebar() {

    return (
        <div className='sidebar' style={{display: 'flex', flexDirection: "column", height: "100vh", width: "50px", position: 'fixed', zIndex: 1000, backgroundColor: "lightgrey", margin: 'auto'}}>
            <div className='buttonContainer' style={{display: 'flex', flexDirection: 'column', height: 'fit-content', margin: 'auto', gap: '20px'}}>
                <button>+</button>
                <button>+</button>
            </div>
        </div>
  );
}
