import * as React from "react";
import { List, Datagrid, TextField, NumberField, ImageField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField label="순번" source="id" />
            <ImageField label="사진" source="picture" />
            <TextField label="계급" source="id" />
            <TextField label="이름" source="name" />
            <TextField label="군번" source="id" />
            <TextField label="소속" source="company.name" />
        </Datagrid>

    </List>
);