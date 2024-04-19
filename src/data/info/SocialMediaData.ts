import {Settings} from '../../settings/Settings';

export interface ISocialMedia {
    displayName:string;
    imageSrc:string;
    imageAlt:string;
    href:string;
    tooltipMessage:string;
}

export const SocialMediaData: ISocialMedia[] = [
    {
        displayName: 'Github',
        imageSrc: '/ico/github-mark-white.png',
        imageAlt: 'GitHub',
        href: Settings.GITHUB_URL,
        tooltipMessage: 'GitHub repo',
    },
    {
        displayName: 'Medium',
        imageSrc: '/ico/rfs-logo-no-text.png',
        imageAlt: 'Medium',
        href: Settings.RFS_URL,
        tooltipMessage: 'RFS website',
    },
]
