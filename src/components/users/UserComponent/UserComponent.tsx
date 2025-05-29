import React, {FC, useContext} from 'react';
import {IUser} from "../../../models/IUser.ts";
import styles from './UserComponent.module.css'
import {ChangeThemeContext} from "../../../context/ThemeContext.tsx";
type UserPropType = {
    user: IUser
}
const UserComponent:FC<UserPropType> = ({user}) => {

        const {theme} = useContext(ChangeThemeContext);
    return (
        <div className={styles.section}>
            <div className={styles[theme]}>
            <div>Name: {user.firstName} {user.lastName} {user.maidenName},</div>
            <img src={user.image} alt={user.username}/>
            <div>Age: {user.age},</div>
            <div>Gender: {user.gender},</div>
            <div>Email: {user.email},</div>
            <div>Phone: {user.phone}</div>
            <div>Blood group: {user.bloodGroup}</div>
            <div>Height: {user.height}</div>
            <div>Weight: {user.weight}</div>
            <div>Eye Color: {user.eyeColor}</div>
            <div>Hair: {user.hair.type}, {user.hair.color}</div>
            <div>Address: {user.address.address}, {user.address.city}, {user.address.state} {user.address.stateCode}, {user.address.country}, {user.address.postalCode}</div>
            <div>Company: {user.company.name}, {user.company.title}</div>
            <div>Company Address: {user.company.address.address}, {user.company.address.city}, {user.company.address.state} {user.company.address.stateCode}, {user.company.address.country}, {user.company.address.postalCode}</div>
            <hr/>
            </div>
        </div>
    );
};

export default UserComponent;