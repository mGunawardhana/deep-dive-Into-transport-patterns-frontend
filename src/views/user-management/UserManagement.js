import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Card, CardBody, Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { toast } from 'react-toastify';
import { fetchAllUsers, updateUser } from '../../service/service';

const UserManagement = () => {

  // eslint-disable-next-line no-unused-vars
  const [formSubmitData, setFormSubmitData] = useState({});
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(() => {
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    fetchAllUsers()
      .then((result) => {
        for (let resp of result.data) {
          if (resp.id === id) {
            setLocalStorageData(resp);
            return;
          }
          console.log("--------------------getting from api call -------------------------")
          console.log(resp.name)
          console.log(resp.email)
          console.log("-----------------------------------------------------------------------")

          console.log("--------------------getting local storage -------------------------")
          console.log(username)
          console.log(email)
          console.log("--------------------------------------------------------------")
          if (resp.name === username && resp.email === email) {
            console.log('here is my response from user management');
            setLocalStorageData(resp);
            return;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formSubmitManually = async (value) => {
    try {
      const response = await updateUser({ ...value, id: localStorage.getItem('id') });
      console.log(response);
      toast.success('Successfully Insert');
    } catch (error) {
      toast.error('Error');
    }
  };

  const onSubmit = async (values) => {
    const data = {
      id: values.id,
      name: values.userName,
      email: values.email,
      password: values.password,
      mobile: values.mobile,
      re_type_password: values.re_type_password,
      country: values.country,
      country_code: values.country_code,
      address: values.address,
      notes: values.notes,
    };
    console.log('here is my value');
    console.log(data);
    setFormSubmitData(data);
  };

  const validationSchema = yup.object().shape({
    id: yup.string().required('User ID Is Required'),
    userName: yup.string().required('User Name Is Required'),
    email: yup.string().required('Email Is Required'),
    mobile: yup.string().required('Mobile Is Required'),
    password: yup.string().required('Password Is Required'),
    re_type_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Re-type Password Is Required'),
    country: yup.string().required('Country Is Required'),
    country_code: yup.string().required('Country Code Is Required'),
    address: yup.string().required('Address Is Required'),
    notes: yup.string().required('Note Is Required'),
  });

  return (<React.Fragment>
    <div className="page-content">
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div
              style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh',
              }}
            >
              <Card style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', width: '90vw' }}>
                <CardBody className="outline-none">
                  <h4 className="card-title mb-4">User Management Form</h4>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    <div className="content clearfix">
                      <TabContent activeTab={1} className="body">
                        <TabPane tabId={1}>
                          <Formik
                            enableReinitialize
                            initialValues={{
                              id: localStorageData.id || '',
                              userName: localStorageData.name || '',
                              email: localStorageData.email || '',
                              mobile: '',
                              password: '',
                              re_type_password: '',
                              country: '',
                              country_code: '',
                              address: '',
                              notes: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                          >
                            {({ isSubmitting, values, setFieldValue }) => (<Form>
                              <Row>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label htmlFor="id" className="col-lg-3 col-form-label">
                                      User ID
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="id"
                                        name="id"
                                        type="text"
                                        disabled
                                        className="form-control"
                                        placeholder="user id here"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label
                                      htmlFor="userName"
                                      className="col-lg-3 col-form-label"
                                    >
                                      User Name<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="userName"
                                        name="userName"
                                        type="text"
                                        className="form-control"
                                        placeholder="user name here"
                                      />
                                      <ErrorMessage
                                        name="userName"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label htmlFor="email" className="col-lg-3 col-form-label">
                                      Email<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="email"
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        placeholder="email here"
                                      />
                                      <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label htmlFor="mobile" className="col-lg-3 col-form-label">
                                      Mobile No<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="mobile"
                                        name="mobile"
                                        type="text"
                                        className="form-control"
                                        placeholder="mobile number here"
                                      />
                                      <ErrorMessage
                                        name="mobile"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label
                                      htmlFor="password"
                                      className="col-lg-3 col-form-label"
                                    >
                                      Password<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                      />
                                      <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label
                                      htmlFor="re_type_password"
                                      className="col-lg-3 col-form-label"
                                    >
                                      Re-type Password<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="re_type_password"
                                        name="re_type_password"
                                        type="password"
                                        className="form-control"
                                      />
                                      <ErrorMessage
                                        name="re_type_password"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label
                                      htmlFor="country"
                                      className="col-lg-3 col-form-label"
                                    >
                                      Country<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="country"
                                        name="country"
                                        type="text"
                                        className="form-control"
                                      />
                                      <ErrorMessage
                                        name="country"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label
                                      htmlFor="country_code"
                                      className="col-lg-3 col-form-label"
                                    >
                                      Country-Code<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        id="country_code"
                                        name="country_code"
                                        type="text"
                                        className="form-control"
                                      />
                                      <ErrorMessage
                                        name="country_code"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label
                                      htmlFor="address"
                                      className="col-lg-3 col-form-label"
                                    >
                                      Address<span style={{ color: 'red' }}> *</span>
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        as="textarea"
                                        id="address"
                                        name="address"
                                        rows="4"
                                        className="form-control"
                                        placeholder="Address here"
                                      />
                                      <ErrorMessage
                                        name="address"
                                        component="div"
                                        className="text-danger"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                                <Col md={6}>
                                  <Row className="mb-3">
                                    <label htmlFor="notes" className="col-lg-3 col-form-label">
                                      Note
                                    </label>
                                    <div className="col-lg-9">
                                      <Field
                                        as="textarea"
                                        id="notes"
                                        name="notes"
                                        rows="4"
                                        className="form-control"
                                        placeholder="Note here"
                                      />
                                    </div>
                                  </Row>
                                </Col>
                                <Col md={12}>
                                  <div className="ml-[100px] mt-[0px] pb-[15px]">
                                    <Button
                                      onClick={() => formSubmitManually(values)}
                                      id="saveBtn"
                                      style={{
                                        backgroundColor: '#27ae60',
                                        marginRight: '7px',
                                        fontWeight: 'bolder',
                                        border: 'none',
                                      }}
                                      variant="contained"
                                      type="button"
                                      size="small"
                                    >
                                      Update Profile
                                    </Button>
                                    <Button
                                      style={{
                                        backgroundColor: '#ff4757',
                                        marginRight: '7px',
                                        fontWeight: 'bolder',
                                        border: 'none',
                                      }}
                                      variant="contained"
                                      type="submit"
                                    >
                                      Delete Account
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                            </Form>)}
                          </Formik>
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>);
};

export default UserManagement;