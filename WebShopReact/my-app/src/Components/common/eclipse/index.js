import React, {Component} from 'react';
import Loader from 'react-loader-spinner'

import './index.scss';
class EclipseWidgetContainer extends Component {
    render() {
        return (
            <div className="my_eclipse" id="dlgProgress">
                <div className="progress">
                    <div>
                    <div style={{ width: '100%', height: "100", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%' }}>
                         <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
const EclipseWidget = (EclipseWidgetContainer);
export default EclipseWidget;