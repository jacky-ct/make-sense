import React, {useState} from 'react';
import {PopupActions} from '../../../logic/actions/PopupActions';
import {GenericYesNoPopup} from '../GenericYesNoPopup/GenericYesNoPopup';
import {SSDObjectDetector} from '../../../ai/SSDObjectDetector';
import './LoadModelPopup.scss'
import {ClipLoader} from 'react-spinners';
import {AIModel} from '../../../data/enums/AIModel';
import {PoseDetector} from '../../../ai/PoseDetector';
import {findLast} from 'lodash';
import {CSSHelper} from '../../../logic/helpers/CSSHelper';
import {updateActivePopupType as storeUpdateActivePopupType} from '../../../store/general/actionCreators';
import {AppState} from '../../../store';
import {connect} from 'react-redux';
import {PopupWindowType} from '../../../data/enums/PopupWindowType';
import {GeneralActionTypes} from '../../../store/general/types';

interface SelectableModel {
    model: AIModel,
    name: string,
    flag: boolean
}

const models: SelectableModel[] = [
    {
        model: AIModel.YOLO_V5_OBJECT_DETECTION,
        name: 'YOLOv8 - object detection using rectangles',
        flag: false
    }
];

interface IProps {
    updateActivePopupType: (activePopupType: PopupWindowType) => GeneralActionTypes;
}

const LoadModelPopup: React.FC<IProps> = ({ updateActivePopupType }) => {
    const [modelIsLoadingStatus, setModelIsLoadingStatus] = useState(false);
    const [selectedModelToLoad, updateSelectedModelToLoad] = useState(models);

    const extractSelectedModel = (): AIModel => {
        const model: SelectableModel = findLast(selectedModelToLoad, { flag: true });
        if (!!model) {
            return model.model
        } else {
            return null;
        }
    };

    const onAccept = () => {
        setModelIsLoadingStatus(true);
        updateActivePopupType(PopupWindowType.LOAD_YOLO_V5_MODEL);
    };

    const onReject = () => {
        PopupActions.close();
    };

    const renderContent = () => {
        return <div className='LoadModelPopupContent'>
            <div className='Message'>
                Speed up your annotation process using the YOLOv8 model trained on pictures of wind turbines. The model is locally stored on your PC, 
                and any processing of images happens locally. You can check for model updates below, which will be synced with the model on our 
                server (TODO)
            </div>
        </div>
    };

    return (
        <GenericYesNoPopup
            title={'Say hello to AI'}
            renderContent={renderContent}
            acceptLabel={'Use model!'}
            onAccept={onAccept}
            rejectLabel={"I'm going on my own"}
            onReject={onReject}
            disableRejectButton={modelIsLoadingStatus}
        />
    );
};

const mapDispatchToProps = {
    updateActivePopupType: storeUpdateActivePopupType
};

const mapStateToProps = (state: AppState) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadModelPopup);
