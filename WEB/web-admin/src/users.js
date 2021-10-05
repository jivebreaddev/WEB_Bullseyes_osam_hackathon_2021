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
  SimpleShowLayout,
} from "react-admin";


export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField label="순번" source="id" />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="순번" source="id" />
      <ImageField label="사진" source="address.suite" />
      <TextInput label="계급" source="address.street" />
      <TextInput label="이름" source="name" />
      <TextInput label="군번" source="phone" />
      <TextInput label="소속" source="company.name" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="순번" source="id" />
      <ImageField label="사진" source="address.suite" />
      <TextInput label="계급" source="address.street" />
      <TextInput label="이름" source="name" />
      <TextInput label="군번" source="phone" />
      <TextInput label="소속" source="company.name" />
    </SimpleForm>
  </Create>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="순번" source="id" />
      <ImageField label="사진" source="address.suite" />
      <TextField label="계급" source="address.street" />
      <TextField label="이름" source="name" />
      <TextField label="군번" source="phone" />
      <TextField label="소속" source="company.name" />
    </SimpleShowLayout>
  </Show>
);
