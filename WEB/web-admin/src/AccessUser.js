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
    <div  className="access">
        <div className="table">
            <List filters={postFilters} {...props} >
                <Datagrid>
                    <TextField label="순번" source="id" />
                    <ImageField label="사진"source="photourl" />
                    <TextField label="출입시간"source="place"/>
                    <TextField label="장소"source="time"/>
                    <TextField label="계급" source="rank"/>
                    <TextField label="이름" source="name" />
                    <TextField label="군번" source="altid"/>
                    <TextField label="소속" source="company"/>
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