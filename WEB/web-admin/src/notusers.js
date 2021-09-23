import * as React from "react";
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const NotUserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField label="순번" source="id" />
            <ImageField label="사진"/>
            <TextField label="출입시간"/>
            <TextField label="장소"/>
        </Datagrid>

    </List>
);