import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ImageField,
    FileField,
    FileInput,
    ImageInput,
    DateTimeInput,
    Edit,
    DateField,
    Create,
    SimpleForm,
    SelectInput,
    TextInput,
    Show,
    SimpleShowLayout
} from 'react-admin';
import { CardHeader,  Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import { LastVisitedFilter, HasOrderedFilter } from './sideFilter';
import './App.css';


const Card = withStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            order: -1, // display on the left rather than on the right of the list
            width: '15em',
            marginRight: '1em',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}))(MuiCard);
const FilterSidebar = () => (
  <Card>
      <CardContent>
          <LastVisitedFilter />
          <HasOrderedFilter />
      </CardContent>
  </Card>
);
export const AccessUserList = props => (
    <div  className="access">
        <div className="table">
            <List  aside={<FilterSidebar />} {...props} >
                <Datagrid rowClick="show">
                <TextField label="순번" source="id" />
                <ImageField label="사진"source="photourl" />
                <DateField label="출입시간"source="time" showTime/>
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
        <FileInput label="사진" source="photourl">
          <FileField source="src" title="title"/>  
        </FileInput>
        <DateTimeInput label="출입시간"source="time" showTime/>
        <TextInput label="계급" source="rank" />
        <TextInput label="이름" source="name" />
        <TextInput label="군번" source="altid" />
        <TextInput label="소속" source="company" />
      </SimpleForm>
    </Create>
  );

  export const AccessUserEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
      <TextInput label="순번" source="id" />
        <ImageInput label="사진" source="photourl">
        <ImageField source="src" title="title" />  
        </ImageInput>
        <DateField label="출입시간"source="time" showTime/>
        <TextInput label="계급" source="rank" />
        <TextInput label="이름" source="name" />
        <TextInput label="군번" source="altid" />
        <TextInput label="소속" source="company" />
      </SimpleForm>
    </Edit>
  );

  export const AccessUserShow = (props) => (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="순번" source="id" />
        <ImageField label="사진"source="photourl" />
        <DateField label="출입시간"source="time" showTime/>
        <TextField label="계급" source="rank"/>
        <TextField label="이름" source="name" />
        <TextField label="군번" source="altid"/>
        <TextField label="소속" source="company"/>
      </SimpleShowLayout>
    </Show>
  );