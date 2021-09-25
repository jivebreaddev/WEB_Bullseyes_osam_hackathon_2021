import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ImageField,
    TextInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const AccessUserList = props => (
    <List filters={postFilters} {...props}>
        <Datagrid>
            <TextField label="순번" source="id" />
            <ImageField label="사진" />
            <TextField label="계급" />
            <TextField label="이름" source="name" />
            <TextField label="군번" />
            <TextField label="소속" />
        </Datagrid>
    </List>
);