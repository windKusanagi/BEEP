import { Profile } from './../../models/profile/profile.interface';

const userList: Profile[] = [
    {
        firstName: 'Xiang',
        lastName: 'Zhang',
        email: 'xn324197@dal.ca',
        avatar: 'assets/img/avatar.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Zichu',
        lastName: 'Ai',
        email: 'zichuai@dal.ca',
        avatar: 'assets/img/avatar.png',
        dateOfBirth: new Date()
    }, 
    {
        firstName: 'Yang',
        lastName: 'Wang',
        email: 'yangwang@dal.ca',
        avatar: 'assets/img/avatar.png',
        dateOfBirth: new Date()
    },
        {
        firstName: 'Chen',
        lastName: 'Miao',
        email: 'miaochen@dal.ca',
        avatar: 'assets/img/avatar.png',
        dateOfBirth: new Date()
    }
];

export const USER_LIST = userList;