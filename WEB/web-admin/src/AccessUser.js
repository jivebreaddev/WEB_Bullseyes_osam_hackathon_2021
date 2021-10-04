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
import { Card, CardContent, CardHeader } from '@material-ui/core';
import './App.css';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const AccessUserList = props => (
    <div className="access">
        <div>
            <List className="table" perPage={10} filters={postFilters} {...props} >
                <Datagrid>
                    <TextField label="순번" source="id" />
                    <ImageField label="사진" />
                    <TextField label="출입시간" />
                    <TextField label="장소" />
                    <TextField label="계급" />
                    <TextField label="이름" />
                    <TextField label="군번" />
                    <TextField label="소속" />
                </Datagrid>
            </List>

            <List className="untable" perPage={5} filters={postFilters} {...props}>
                <Datagrid>
                    <TextField label="순번" />
                    <ImageField label="사진" />
                    <TextField label="출입시간" />
                    <TextField label="장소" source="email" />
                </Datagrid>
            </List>
        </div>

        <div>
            <Card className="face">
                <CardHeader title="Welcome to the administration" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
            </Card>
        </div>
    </div>
);