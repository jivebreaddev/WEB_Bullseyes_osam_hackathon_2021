import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ImageField,
    ImageInput,
    TextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    Create,
} from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import './App.css';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
const accessUserFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
export const AccessUserList = props => (
    <div  className="access">
        <div className="table">
            <List filters={userFilters} {...props} >
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

export const AccessUserCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="순번" source="id" />
        <ImageInput label="사진" source="photourl" accept="image/*">
        <ImageField source="src" title="title" />  
        </ImageInput>
        <TextInput label="계급" source="rank" />
        <TextInput label="이름" source="name" />
        <TextInput label="군번" source="altid" />
        <TextInput label="소속" source="company" />
      </SimpleForm>
    </Create>
  );