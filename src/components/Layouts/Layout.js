import React from 'react';
import Aux from '../../hoc/Aux-container';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div style={{textAlign: 'center'}}>Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
)

export default layout;