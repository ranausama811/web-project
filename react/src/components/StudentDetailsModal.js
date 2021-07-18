import NewStudentForm from "./NewStudentForm";
import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalBody } from "reactstrap";

export default class DetailsModal extends Component {
  state = {
    isOpen: false,
  };

  toggleFunction = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Fragment>
        <Button onClick={this.toggleFunction}>View Details</Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleFunction}>
          <ModalHeader toggle={this.toggleFunction} >Details of student </ModalHeader>

          <ModalBody>
            <NewStudentForm toggle={this.toggleFunction} student={this.props.student} details={true} />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}
