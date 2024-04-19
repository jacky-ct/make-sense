export interface IEditorFeature {
    displayText:string;
    imageSrc:string;
    imageAlt:string;
}

export const EditorFeatureData: IEditorFeature[] = [
    {
        displayText: 'Upload turbine images on the next page',
        imageSrc: 'ico/online.png',
        imageAlt: 'online',
    },
    {
        displayText: 'Run images through AI to get initial bounding box estimations',
        imageSrc: 'ico/robot.png',
        imageAlt: 'robot',
    },
    {
        displayText: "Correct any incorrect labels until you're satisfied",
        imageSrc: 'ico/labels.png',
        imageAlt: 'labels',
    },
    {
        displayText: 'Output to PDF report for client',
        imageSrc: 'ico/file.png',
        imageAlt: 'file',
    },

];