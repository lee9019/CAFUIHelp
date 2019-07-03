
import {AppConstant} from '../../../app/app.constant';

export const HeaderConfig = {

    applicationLogoImg: AppConstant.images + 'EcoStruxure-Logo.svg',
    companyLogoImg: AppConstant.images + 'schneiderLogo.svg',
    heading: 'Schneider One',
    semiHeading: '',
    displayAlarmWarn: true,
    alarmImg: AppConstant.images + 'alarmSeverity2.svg',
    warningImg: AppConstant.images + 'alarmSeverity1.svg',
    authUrls: {
        profileUpdate: '',
        pwdUpdate: '',
        emailUpdate: '',
        logout: ''
    },
    isLoggedIn: false,
    loggedInUser: '',
    isSettingsRequired: true,
    supportedLanguages: [{
        code: 'en-US',
        name: 'English'
    }, {
        code: 'fr-FR',
        name: 'French'
    },
    {
        code: 'es-ES',
        name: 'Spanish'
    },
    {
        code: 'it-IT',
        name: 'Italian'
    }
    ]

};
