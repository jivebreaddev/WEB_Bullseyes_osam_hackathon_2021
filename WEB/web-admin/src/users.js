import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  SelectInput,
  TextInput,
  Show,
  SimpleShowLayout
} from "react-admin";

const userFilters = [
  <TextInput label="Search" source="q" alwaysOn />
];

export const UserList = (props) => (
  <List filters={userFilters} {...props}>
    <Datagrid rowClick="show">
      <TextField label="순번" source="id" />
      <ImageField  label="사진" source="photourl" />
      <TextField label="계급" source="rank" />
      <TextField label="이름" source="name" />
      <TextField label="군번" source="altid" />
      <TextField label="소속" source="company" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="순번" source="id" />
      <ImageField label="사진" source="photourl" />
      <TextInput label="계급" source="rank" />
      <TextInput label="이름" source="name" />
      <TextInput label="군번" source="altid" />
      <TextInput label="소속" source="company" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="순번" source="id" />
      <ImageField  label="사진" source="photourl" />
      <TextInput label="계급" source="rank" />
      <TextInput label="이름" source="name" />
      <TextInput label="군번" source="altid" />
      <TextInput label="소속" source="company" />
    </SimpleForm>
  </Create>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="순번" source="id" />
      <ImageField  label="사진" source="photourl" />
      <TextField label="계급" source="rank" />
      <TextField label="이름" source="name" />
      <TextField label="군번" source="altid" />
      <TextField label="소속" source="company" />
    </SimpleShowLayout>
  </Show>
);
