import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Col, Container, Form, Input, Row, TabContent, TabPane } from 'reactstrap';
// import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link } from 'react-router-dom';

const UserManagement = () => {
  //   const [activeTab, setactiveTab] = useState(1);
  const [activeTab] = useState(1);

  //   const [activeTabProgress, setactiveTabProgress] = useState(1);
  //   const [progressValue, setprogressValue] = useState(25);
  //   const [setprogressValue] = useState(25);
  //   const [activeTabVartical, setoggleTabVertical] = useState(1);

  //   function toggleTab(tab) {
  //     if (activeTab !== tab) {
  //       if (tab >= 1 && tab <= 4) {
  //         setactiveTab(tab);
  //       }
  //     }
  //   }

  //   function toggleTabVertical(tab) {
  //     if (activeTabVartical !== tab) {
  //       if (tab >= 1 && tab <= 4) {
  //         setoggleTabVertical(tab);
  //       }
  //     }
  //   }

  //   function toggleTabProgress(tab) {
  //     if (activeTabProgress !== tab) {
  //       if (tab >= 1 && tab <= 4) {
  //         setactiveTabProgress(tab);

  //         if (tab === 1) {
  //           setprogressValue(25);
  //         }
  //       }
  //     }
  //   }
  const showToastMessage = () => {
    toast.error('Cancelation Success !', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumbs maintitle="Dashboard" title="Forms" breadcrumbItem="Inquiry form" /> */}
          <Row>
            <Col sm="12">
              <Card className="outline-none" style={{ border: 'none' }}>
                <CardBody className="outline-none">
                  <h4 className="card-title mb-4">User Management Form</h4>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    <div className="content clearfix">
                      <TabContent activeTab={activeTab} className="body">
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtFirstNameBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    User ID
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtFirstNameBilling"
                                      name="txtFirstNameBilling"
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your name"
                                    />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtLastNameBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    User Name.
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtLastNameBilling"
                                      name="txtLastNameBilling"
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your number"
                                    />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtFirstNameBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Email
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtFirstNameBilling"
                                      name="txtFirstNameBilling"
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your name"
                                    />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtLastNameBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Mobile No.
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtLastNameBilling"
                                      name="txtLastNameBilling"
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter your number"
                                    />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtTelephoneBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Password
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtTelephoneBilling"
                                      name="txtTelephoneBilling"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtFaxBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Re-type Password
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtFaxBilling"
                                      name="txtFaxBilling"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtTelephoneBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Country
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtTelephoneBilling"
                                      name="txtTelephoneBilling"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtFaxBilling"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Country-Code
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtFaxBilling"
                                      name="txtFaxBilling"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtAddress1Billing"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Address 1
                                  </label>
                                  <div className="col-lg-9">
                                    <textarea
                                      id="txtAddress1Billing"
                                      name="txtAddress1Billing"
                                      rows="4"
                                      className="form-control"
                                      placeholder="Enter your first address"
                                    ></textarea>
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtAddress2Billing"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Complaint
                                  </label>
                                  <div className="col-lg-9">
                                    <textarea
                                      id="txtAddress2Billing"
                                      name="txtAddress2Billing"
                                      rows="4"
                                      className="form-control"
                                      placeholder="complaint reason"
                                    ></textarea>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions flex justify-between items-center">
                      {' '}
                      {/* Added items-center for vertical alignment */}
                      <ul className="list-none flex space-x-4">
                        <Link
                          to="#"
                          onClick={showToastMessage}
                          className="btn btn-secondary px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                          Cancel
                        </Link>
                        <ToastContainer />

                        <Link
                          to="#"
                          onClick={() => {
                            // toggleTab(activeTab + 1);
                          }}
                          className="btn btn-success px-4 py-2 rounded-md hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        >
                          Submit
                        </Link>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserManagement;
