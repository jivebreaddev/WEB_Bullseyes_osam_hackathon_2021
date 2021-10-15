import React, { useState, useEffect, useRef, memo, Fragment } from "react";
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
    SimpleShowLayout,
    useListContext,
    required,
    CardActions,
    CreateButton,
    translate,
    Toolbar,
    SaveButton,
    EditButton,
} from 'react-admin';
import { CardHeader,  Card as MuiCard, CardContent, Drawer, withStyles } from '@material-ui/core';
import { LastVisitedFilter, HasOrderedFilter } from './sideFilter';
// import FaceVideo from "./faceRecognition";
import './App.css';
import { Route } from 'react-router';
import compose from 'recompose/compose';
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Button from '@material-ui/core/Button';
import { mergeClasses } from "@material-ui/styles";
import ImageDetection from "./FaceApi";

const styles = {
  drawerContent: {
    width: 300
  }
};

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

const ListActions = ({ basePath }) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

export const ShowList = () =>{
  return(
    <Fragment>
    <div>
    <Card className="face">
        <ImageDetection/>
    </Card>
    </div>
    </Fragment>
  );
}
class AccessUserList extends React.Component {

  render() {
    const { push, classes, ...props} = this.props;
    return (
      <div className="access">
        <div className="table">
        <List aside={<FilterSidebar />} {...props} >
            <Datagrid rowClick="show">
              <TextField label="순번" source="id" />
              <ImageField label="사진"source="photourl" />
              <TextField label="소속" source="company" />
              <TextField label="군번" source="altid" />
              <TextField label="계급" source="rank" />
              <TextField label="이름" source="name" />
              <DateField label="출입시간"source="time" showTime />
              <EditButton />
            </Datagrid>
        </List>
        </div>
        <Route path="/accessusers/create">
                {({match}) => (
                  <Drawer open={!!match} anchor="left" onClose={this.handleClose}>
                    <AccessUserCreate className={classes.drawerContent} onCancel={this.handleClose} {...props} />
                  </Drawer>
                )}
              </Route>
              <Route path="/accessusers/:id">
                {({ match }) => {
                  const isMatch = match && match.params && match.params.id !== "create";

                  return (
                    <Drawer open={isMatch} anchor="left" onClose={this.handleClose}>
                      {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                      {isMatch ? (
                        <AccessUserEdit
                          className={classes.drawerContent}
                          id={match.params.id}
                          onCancel={this.handleClose}
                          {...props}
                        />
                      ) : (
                          <div className={classes.drawerContent} />
                      )}
                      </Drawer>
                  );
                }}
              </Route>
      </div>
    );
  }

  handleClose = () => {
    this.props.push("/accessusers");
  };
}

export default compose(
  connect(
    undefined,
    { push }
  ),
  withStyles(styles)
)(AccessUserList);

const AccessUserCreateToolbar = translate(({ onCancel, translate, ...props }) => (
  <Toolbar {...props}>
    <SaveButton />
    <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
  </Toolbar>
));

export const AccessUserCreate = ({ onCancel, ...props }) => (
  <Create title=" " {...props}>
    <SimpleForm toolbar={<AccessUserCreateToolbar onCancel={onCancel} />}>
      <TextInput label="순번" source="id" />
      <FileInput label="사진" source="photourl" >
        <FileField source="src" title="title"/>  
      </FileInput>
      <TextInput label="소속" source="company" />
      <TextInput label="군번" source="altid" />
      <TextInput label="계급" source="rank" />
      <TextInput label="이름" source="name" />
      <DateTimeInput label="출입시간"source="time" showTime />
    </SimpleForm>
  </Create>
);

  export const AccessUserEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="순번" source="id" />
        <FileInput label="사진" source="photourl" >
          <FileField source="src" title="title"/>  
        </FileInput>
        <TextInput label="소속" source="company" />
        <TextInput label="군번" source="altid" />
        <TextInput label="계급" source="rank" />
        <TextInput label="이름" source="name" />
        <DateField label="출입시간"source="time" />
      </SimpleForm>
    </Edit>
  );

  export const AccessUserShow = (props) => (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="순번" source="id" />
        <ImageField label="사진"source="photourl" />
        <TextField label="소속" source="company"/>
        <TextField label="군번" source="altid"/>
        <TextField label="계급" source="rank"/>
        <TextField label="이름" source="name" />
        <DateField label="출입시간"source="time" showTime/>
      </SimpleShowLayout>
    </Show>
  );
  