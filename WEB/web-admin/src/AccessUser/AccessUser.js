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
    Create,
    SimpleForm,
    CardActions,
    CreateButton,
    translate,
    Toolbar,
    SaveButton,
    required,
} from 'react-admin';
import { Card, CardContent, CardHeader, Drawer } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './index.css';
import { Route } from 'react-router';
import { connect } from "react-redux";
import { push } from "react-router-redux";

const AccessUserListActions = ({ basePath }) => (
    <CardActions>
        <CreateButton basePath={basePath} />
    </CardActions>
);

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

const TagCreateToolbar = translate(({ onCancel, translate, ...props }) => (
    <Toolbar {...props}>
        <SaveButton />
        <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
    </Toolbar>
));

const AccessUserCreate = ({onCancel, ...props}) => (
    <Create {...props}>
        <SimpleForm toolbar={<TagCreateToolbar onCancel={onCancel} />}>
            <TextInput label="순번" source="id" />
            <ImageInput label="사진" source="photourl" />
            <TextInput label="출입시간"source="place" />
            <TextInput label="장소"source="time" />
            <TextInput label="계급" source="rank" />
            <TextInput label="이름" source="name" />
            <TextInput label="군번" source="altid" />
            <TextInput label="소속" source="company" />
        </SimpleForm>
    </Create>
);

class AccessUserList extends React.Component {
    render(){
        const props = this.props;
        return (
            <div className="access">
                <React.Fragment className="table">
                    <List filters={postFilters} {...props} actions={<AccessUserListActions />}>
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
                    <Route
                        path="/AccessUser/create"
                        render={() => (
                            <Drawer open onClose={this.handleClose}>
                                <AccessUserCreate {...props} />
                            </Drawer>
                        )}
                    />
                </React.Fragment>

                <div>
                    <Card className="face">
                        <CardHeader title="Welcome to the administration" />
                        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    handleClose = () => {
        this.props.push("/accessusers");
    };
}

export default connect(
    undefined,
    { push }
)(AccessUserList);