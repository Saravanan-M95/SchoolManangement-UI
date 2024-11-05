import React, { Component } from 'react'
import Layout from '../../../../layout/Layout'
import Heading3 from '../../../../components/typography/Heading3'
import { Container, Row, Col } from 'react-grid-system'
import Select from 'react-select'
//toggler
import Switch from "react-switch";


import Input from '../../../../components/inputs/Input';
import Label from '../../../../components/typography/Label';
import FormContainer from '../../../../components/containers/FormContainer';
import FlatInput from '../../../../components/inputs/FlatInput';
import { FormColumn, FormRow, FormWrapper } from '../../../../components/containers/FormColumn';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import Selection from '../../../../components/inputs/Select'
import { connect } from 'react-redux';
import Steps from '../../../../assets/img/steps.png';
import Card from '../../../../components/cards/Card'
import theme from '../../../../theme/theme'
import CardHeader from './cardHeader'
import { Dropdown, Option } from '../../../../components/inputs/Dropdown'
import { Wrapper, Item, RadioButton, RadioButtonLabel } from '../../../../components/inputs/Radio'
import Paragraph from '../../../../components/typography/Paragraph'
import Heading5 from '../../../../components/typography/Heading5'
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from '../../../../components/inputs/Toggler';
import { Link } from 'react-router-dom'
import DatePick from "../../../../components/inputs/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

const admissionFor = [
    { value: 'student', label: 'Student' },
    { value: 'staff', label: 'Staff' },
    { value: 'employee', label: 'Employee' }
]

const MaritalStatus = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
]

const Fresher = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
]

const Gender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'thirdGender', label: 'Third Gender' }
]

class ParentForm extends Component {
    state = {
        parentId: "",
        fatherName: "",
        fatherOccupation: "",
        fatherOfficialAddress: "",
        fatherMobile: "",
        fatherEmail: "",
        IfFatherOldStudent: false,
        IfFatherOldStudentstatus: "",
        fatherFrom: "",
        fatherTo: "",
        motherName: "",
        motherOccupation: "",
        motherOfficialAddress: "",
        motherMobile: "",
        motherEmail: "",
        IfMotherOldStudent: false,
        motherMaidenName: "",
        motherFrom: "",
        motherTo: "",
        isGuardianParent: false,
        guardianName: "",
        guardianOccupation: "",
        guardianOfficialAddress: "",
        guardianMobile: "",
        guardianEmail: "",
        sibling: false,
        siblingCount: "",
        sibilingAdmissionNo: "",
        sibilingFullName: "",
        sibilingStudentId: "",
        //card togglers
        fatherCard: true,
        motherCard: true,
        guardianCard: false,
        siblingCard: false,
        admissionFor: ""
    }


    doChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.fatherName)
    }

    handleSelectChange = event => {
        this.setState({
            IfFatherOldStudent: event.target.value,
        })
        console.log(this.state.IfFatherOldStudent);
    }
    handleSelectChange1 = event => {
        this.setState({
            IfMotherOldStudent: event.target.value
        })
        console.log(this.state.IfMotherOldStudent);
    }
    handleSelectChange2 = event => {
        this.setState({
            guardian: event.target.value
        })
        console.log(this.state.guardian);
    }

    handleToggleGuardianParent = e => {
        if (this.state.isGuardianParent == false) {
            this.setState({
                isGuardianParent: true
            })
            console.log(this.state.isGuardianParent);
        }
        else if (this.state.isGuardianParent == true) {
            this.setState({
                isGuardianParent: false
            })
            console.log(this.state.isGuardianParent);
        }

    }

    handleToggleFatherOldBoy = e => {
        if (this.state.IfFatherOldStudent == false) {
            this.setState({
                IfFatherOldStudent: true
            })
            console.log(this.state.IfFatherOldStudent);
        }
        else if (this.state.IfFatherOldStudent == true) {
            this.setState({
                IfFatherOldStudent: false
            })
            console.log(this.state.IfFatherOldStudent);
        }

    }

    handleToggleMotherOldGirl = e => {
        if (this.state.IfMotherOldStudent == false) {
            this.setState({
                IfMotherOldStudent: true
            })
            console.log(this.state.IfMotherOldStudent);
        }
        else if (this.state.IfMotherOldStudent == true) {
            this.setState({
                IfMotherOldStudent: false
            })
            console.log(this.state.IfMotherOldStudent);
        }

    }

    handleToggleStudentHaveSibling = e => {
        if (this.state.sibling == false) {
            this.setState({
                sibling: true
            })
            console.log(this.state.sibling);
        }
        else if (this.state.sibling == true) {
            this.setState({
                sibling: false
            })
            console.log(this.state.sibling);
        }

    }


    handleSelectSiblingCount = e => {
        this.setState({
            siblingCount: e.target.value
        })
        console.log(this.state.siblingCount);
    }

    onSubmit() {
        console.log("submitted")
    }

    //card togglers
    // toggleCardSibling() {
    //     if (this.state.siblingCard == false) {
    //         this.setState({
    //             siblingCard: true
    //         })
    //     }

    // }


    render() {
        return (
            <FormContainer>
                {/* <FormRow>
                </FormRow> */}
                <form>
                    <FormRow>
                        <FormColumn>
                            <Card>
                                <FormRow>
                                    <CardHeader>
                                        Admission For
                                    </CardHeader>
                                </FormRow>

                                <FormRow>
                                    <FormColumn formGap style={{ marginRight: "0.5em" }}>

                                        <Dropdown options={admissionFor} type="text"
                                            name="admissionFor"
                                            id="admissionFor"
                                            value={this.state.admissionFor}
                                            onChange={e => this.doChange(e)}>
                                            <Option>Select</Option>
                                            <Option>Student</Option>
                                            <Option>Staff</Option>
                                            <Option>Employee</Option>
                                        </Dropdown>
                                    </FormColumn>
                                </FormRow>
                            </Card>
                        </FormColumn>
                    </FormRow>
                </form>
                {this.state.admissionFor == 'Student' ?
                    <div>
                        <FormRow>
                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Father's Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Father NIC No</Label>
                                            <FlatInput placeholder="Father NIC No" type="text"
                                                name="parentId"
                                                id="parentId"
                                                value={this.state.parentId}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Father's Name</Label>
                                            <FlatInput placeholder="Enter your Father Name" type="text"
                                                name="fatherName"
                                                id="fatherName"
                                                value={this.state.fatherName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Father's Occupation :</Label>
                                            <FlatInput placeholder="Father's Occupation " type="text"
                                                name="fatherOccupation"
                                                id="fatherOccupation"
                                                value={this.state.fatherOccupation}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Father's Office Address :</Label>
                                            <FlatInput placeholder="Father's Office Address" type="text"
                                                name="fatherOfficialAddress"
                                                id="fatherOfficialAddress"
                                                value={this.state.fatherOfficialAddress}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Father's Moblie No:</Label>
                                            <FlatInput placeholder="Father's Moblie No" type="number"
                                                name="fatherMobile"
                                                id="fatherMobile"
                                                value={this.state.fatherMobile}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Father's Email:</Label>
                                            <FlatInput placeholder="Father's Email" type="text"
                                                name="fatherEmail"
                                                id="fatherEmail"
                                                value={this.state.fatherEmail}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Is Your Father An Old Student :</Label>
                                        </FormColumn>

                                        <FormColumn>
                                            {/* toggler btn */}
                                            <div>
                                                <CheckBoxWrapper>
                                                    <CheckBox
                                                        id="isFatherOldStudent"
                                                        name="isFatherOldStudent"
                                                        type="checkbox"
                                                        checked={this.state.IfFatherOldStudent}
                                                        onChange={e => this.handleToggleFatherOldBoy(e)} />
                                                    <CheckBoxLabel htmlFor="isFatherOldStudent" />
                                                </CheckBoxWrapper>
                                            </div>
                                        </FormColumn>

                                    </FormRow>

                                    {/* toggler for  if father old student select */}
                                    {this.state.IfFatherOldStudent == true ?
                                        <FormRow>
                                            <FormColumn>
                                                <Label>Father Studied From:</Label>
                                                <FlatInput placeholder="From" type="text"
                                                    name="fatherFrom"
                                                    id="fatherFrom"
                                                    value={this.state.fatherFrom}
                                                    onChange={e => this.doChange(e)}></FlatInput>
                                            </FormColumn>
                                            <FormColumn formGap></FormColumn>
                                            <FormColumn>
                                                <Label>Father Studied To :</Label>
                                                <FlatInput placeholder="To" type="text"
                                                    name="fatherTo"
                                                    id="fatherTo"
                                                    value={this.state.fatherTo}
                                                    onChange={e => this.doChange(e)}></FlatInput>
                                            </FormColumn>
                                        </FormRow> : ""}
                                </Card>
                            </FormColumn>

                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Mother's Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Mother's Name :</Label>
                                            <FlatInput placeholder="Mother's Name" type="text"
                                                name="motherName"
                                                id="motherName"
                                                value={this.state.motherName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Mother's Occupation :</Label>
                                            <FlatInput placeholder="Mother's Occupation" type="text"
                                                name="motherOccupation"
                                                id="motherOccupation"
                                                value={this.state.motherOccupation}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Mother's Office Address :</Label>
                                            <FlatInput placeholder="Mother's Official Address " type="text"
                                                name="motherOfficialAddress"
                                                id="motherOfficialAddress"
                                                value={this.state.motherOfficialAddress}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Mother's Mobile No:</Label>
                                            <FlatInput placeholder="Mother's Mobile No" type="number"
                                                name="motherMobile"
                                                id="motherMobile"
                                                value={this.state.motherMobile}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Mother's Email :</Label>
                                            <FlatInput placeholder="Mother's Email" type="email"
                                                name="motherEmail"
                                                id="motherEmail"
                                                value={this.state.motherEmail}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Mother's Maiden Name :</Label>
                                            <FlatInput placeholder="Mother's Maiden Name " type="text"
                                                name="motherMaidenName"
                                                id="motherMaidenName"
                                                value={this.state.motherMaidenName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Is Your Mother An Old Student:</Label>
                                        </FormColumn>
                                        <FormColumn>
                                            {/* toggler btn */}
                                            <div>
                                                <CheckBoxWrapper>
                                                    <CheckBox
                                                        disabled
                                                        id="isMotherOldStudent"
                                                        name="isMotherOldStudent"
                                                        type="checkbox"
                                                        checked={this.state.IfMotherOldStudent}
                                                        onChange={e => this.handleToggleMotherOldGirl(e)} />
                                                    <CheckBoxLabel htmlFor="isMotherOldStudent" />
                                                </CheckBoxWrapper>
                                            </div>
                                        </FormColumn>
                                    </FormRow>


                                    {this.state.IfMotherOldStudent == "true" ?
                                        <FormRow >
                                            <FormColumn>
                                                <Label>Mother Studied From:</Label>
                                                <FlatInput placeholder="From" type="number"
                                                    name="motherFrom"
                                                    id="motherFrom"
                                                    value={this.state.motherFrom}
                                                    onChange={e => this.doChange(e)}></FlatInput>
                                            </FormColumn>
                                            <FormColumn formGap></FormColumn>
                                            <FormColumn>
                                                <Label>Mother Studied To :</Label>
                                                <FlatInput placeholder="To" type="number"
                                                    name="motherTo"
                                                    id="motherTo"
                                                    value={this.state.motherTo}
                                                    onChange={e => this.doChange(e)}></FlatInput>
                                            </FormColumn>
                                        </FormRow>
                                        : ""}
                                </Card>
                            </FormColumn>
                        </FormRow>


                        <FormRow style={{ marginTop: "-2em" }}>
                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Guardian's Details
                                        </CardHeader>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Is Guardian A Parent ?</Label>
                                        </FormColumn>
                                        <FormColumn>
                                            {/* toggler btn */}
                                            <div>
                                                <CheckBoxWrapper>
                                                    <CheckBox
                                                        id="isGuardianParent"
                                                        name="isGuardianParent"
                                                        type="checkbox"
                                                        checked={this.state.isGuardianParent}
                                                        onChange={e => this.handleToggleGuardianParent(e)} />
                                                    <CheckBoxLabel htmlFor="isGuardianParent" />
                                                </CheckBoxWrapper>
                                            </div>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Guardian's Name :</Label>
                                            <FlatInput placeholder="Guardian Name" type="text"
                                                name="guardianName"
                                                id="guardianName"
                                                value={this.state.guardianName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Guardian's Official Address:</Label>
                                            <FlatInput placeholder="Guardian's Official Address" type="text"
                                                name="guardianOfficialAddress"
                                                id="guardianOfficialAddress"
                                                value={this.state.guardianOfficialAddress}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Guardian's Moblie No:</Label>
                                            <FlatInput placeholder="Guardian's Moblie No" type="number"
                                                name="guardianMobile"
                                                id="guardianMobile"
                                                value={this.state.guardianMobile}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Guardian's Email:</Label>
                                            <FlatInput placeholder="Guardian's Email" type="email"
                                                name="guardianEmail"
                                                id="guardianEmail"
                                                value={this.state.guardianEmail}
                                                onChange={e => this.doChange(e)}></FlatInput>

                                        </FormColumn>
                                    </FormRow>

                                </Card>
                            </FormColumn>

                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Siblings' Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Does the Student Have Siblings Studying In Our School</Label>
                                        </FormColumn>
                                        <div style={{ flexBasis: "4em" }}></div>
                                        <FormColumn >
                                            {/* toggler btn */}
                                            <div>
                                                <CheckBoxWrapper>
                                                    <CheckBox
                                                        id="isStudentHaveSibling"
                                                        name="isStudentHaveSibling"
                                                        type="checkbox"
                                                        checked={this.state.sibling}
                                                        onChange={e => this.handleToggleStudentHaveSibling(e)} />
                                                    <CheckBoxLabel htmlFor="isStudentHaveSibling" />
                                                </CheckBoxWrapper>
                                            </div>
                                        </FormColumn>
                                    </FormRow>

                                    {this.state.sibling ?
                                        <div>
                                            <FormRow>

                                                <FormColumn>
                                                    <Dropdown
                                                        id="siblingCount"
                                                        name="siblingCount"
                                                        value={this.state.siblingCount}
                                                        onChange={e => this.handleSelectSiblingCount(e)}
                                                    >
                                                        <Option>1</Option>
                                                        <Option>2</Option>
                                                        <Option>3</Option>
                                                        <Option>4</Option>
                                                        <Option>5</Option>
                                                        <Option>6</Option>
                                                        {/* <Option>1</Option>
                                        <Option>2</Option>
                                        <Option>3</Option>
                                        <Option>4</Option>
                                        <Option>5</Option>
                                        <Option>6</Option>
                                        <Option>7</Option>
                                        <Option>8</Option>
                                        <Option>9</Option>
                                        <Option>10</Option>
                                        <Option>G.C.E O/L</Option>
                                        <Option>G.C. A/L</Option> */}
                                                    </Dropdown>
                                                </FormColumn>
                                            </FormRow>
                                            <FormRow>
                                                <FormColumn>
                                                    <Label>Sibiling's FullName:</Label>
                                                    <FlatInput placeholder="Sibiling's FullName :" type="text"
                                                        name="sibilingFullName"
                                                        id="sibilingFullName"
                                                        value={this.state.sibilingFullName}
                                                        onChange={e => this.doChange(e)}></FlatInput>
                                                </FormColumn>
                                                <FormColumn formGap></FormColumn>
                                                <FormColumn>
                                                    <Label>Sibiling's Student Id:</Label>
                                                    <FlatInput placeholder="Sibiling's Student Id :" type="text"
                                                        name="sibilingStudentId"
                                                        id="sibilingStudentId"
                                                        value={this.state.sibilingStudentId}
                                                        onChange={e => this.doChange(e)}></FlatInput>
                                                </FormColumn>
                                            </FormRow>
                                        </div>
                                        : ""}

                                </Card>
                            </FormColumn>
                        </FormRow>
                        <FormRow>
                            <div style={{ flexBasis: "60em" }}></div>
                            <FormColumn>
                                <Link to="/student/admission/new/step2">
                                    <PrimaryButton type="button" onClick={this.onSubmit()} >Next</PrimaryButton>
                                </Link>
                            </FormColumn>
                        </FormRow>

                    </div>
                    : ""}

                {this.state.admissionFor == 'Staff' ?
                    <div>
                        <FormRow>
                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Personal Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Post Applied for</Label>
                                            <FlatInput placeholder="Post Applied for" type="text"
                                                name="post"
                                                id="post"
                                                value={this.state.post}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>First Name :</Label>
                                            <FlatInput placeholder="First Name " type="text"
                                                name="firstName"
                                                id="firstName"
                                                value={this.state.firstName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Last Name :</Label>
                                            <FlatInput placeholder="Last Name" type="text"
                                                name="lastName"
                                                id="lastName"
                                                value={this.state.lastName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Father/Spouse Name :</Label>
                                            <FlatInput placeholder="Father/Spouse Name " type="text"
                                                name="fatherName"
                                                id="fatherName"
                                                value={this.state.fatherName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Date Of Birth :</Label>
                                            <DatePick
                                                selected={this.state.dateOfBirth}
                                                onChange={this.handleChangeDateOfBirth}
                                            />
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn formGap style={{ marginRight: "0.5em" }}>
                                            <Label>Gender :</Label>
                                            <Dropdown options={Gender} type="text"
                                                name="gender"
                                                id="gender"
                                                value={this.state.gender}
                                                onChange={e => this.doChange(e)}>
                                                <Option>Male</Option>
                                                <Option>Female</Option>
                                                <Option>Third Gender</Option>
                                            </Dropdown>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>

                                        <FormColumn formGap style={{ marginRight: "0.5em" }}>
                                            <Label>Marital Status :</Label>
                                            <Dropdown options={MaritalStatus} type="text"
                                                name="maritalStatus"
                                                id="maritalStatus"
                                                value={this.state.maritalStatus}
                                                onChange={e => this.doChange(e)}>
                                                <Option>Single</Option>
                                                <Option>Married</Option>
                                                <Option>Divorced</Option>
                                                <Option>Widowed</Option>
                                            </Dropdown>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Mobile Number :</Label>
                                            <FlatInput placeholder="Mobile Number " type="text"
                                                name="mobile"
                                                id="mobile"
                                                value={this.state.mobile}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Email :</Label>
                                            <FlatInput placeholder="Email " type="text"
                                                name="email"
                                                id="email"
                                                value={this.state.email}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Are you a fresher? :</Label>
                                            <Dropdown options={Fresher} type="text"
                                                name="fresher"
                                                id="fresher"
                                                value={this.state.fresher}
                                                onChange={e => this.doChange(e)}>
                                                <Option>Yes</Option>
                                                <Option>No</Option>
                                            </Dropdown>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        {this.state.fresher == 'Yes' ?
                                            <FormColumn>
                                                <Label>Experience :</Label>
                                                <FlatInput placeholder="Experience " type="text"
                                                    name="experience"
                                                    id="experience"
                                                    value={this.state.experience}
                                                    onChange={e => this.doChange(e)}></FlatInput>
                                            </FormColumn>
                                            : ""}
                                    </FormRow>
                                </Card>
                            </FormColumn>

                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Educational's Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Degree :</Label>
                                            <FlatInput placeholder="Degree" type="text"
                                                name="degree"
                                                id="degree"
                                                value={this.state.degree}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>College Name :</Label>
                                            <FlatInput placeholder="College Name " type="text"
                                                name="collegeName"
                                                id="collegeName"
                                                value={this.state.collegeName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Year of Passing :</Label>
                                            <FlatInput placeholder="Year of Passing" type="text"
                                                name="yearPassed"
                                                id="yearPassed"
                                                value={this.state.yearPassed}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Percentage :</Label>
                                            <FlatInput placeholder="Percentage " type="text"
                                                name="percentage"
                                                id="percentage"
                                                value={this.state.percentage}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow></FormRow>
                                    <FormRow>
                                        <CardHeader>
                                            Address Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Address Line 1 :</Label>
                                            <FlatInput placeholder="Address Line 1 " type="text"
                                                name="address1"
                                                id="address1"
                                                value={this.state.address1}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Address Line 2 :</Label>
                                            <FlatInput placeholder="Address Line 2 " type="text"
                                                name="address2"
                                                id="address2"
                                                value={this.state.address2}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>City :</Label>
                                            <FlatInput placeholder="City " type="text"
                                                name="city"
                                                id="city"
                                                value={this.state.city}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>State :</Label>
                                            <FlatInput placeholder="State " type="text"
                                                name="state"
                                                id="state"
                                                value={this.state.state}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Landmark :</Label>
                                            <FlatInput placeholder="Landmark " type="text"
                                                name="landmark"
                                                id="landmark"
                                                value={this.state.landmark}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Pincode :</Label>
                                            <FlatInput placeholder="Pincode " type="text"
                                                name="pincode"
                                                id="pincode"
                                                value={this.state.pincode}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                </Card>
                            </FormColumn>

                        </FormRow>

                        <FormRow>
                            <Card>
                                <FormColumn>

                                    <FormRow>
                                        <CardHeader>
                                            Profile Picture
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn></FormColumn>
                                        <FormColumn>
                                            <img src="https://img.icons8.com/color/48/000000/person-male.png"></img>
                                        </FormColumn>
                                        <FormColumn></FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn></FormColumn>
                                        <FormColumn>
                                            <FlatInput style={{ width: "15em" }} type="file" />
                                        </FormColumn>
                                        <FormColumn></FormColumn>
                                    </FormRow>
                                </FormColumn></Card>
                            <FormColumn>
                                <PrimaryButton onClick={(e) => this.handleClickNext(e)} type="button">Submit</PrimaryButton>
                            </FormColumn>
                        </FormRow>
                    </div>
                    : ""}

                {this.state.admissionFor == 'Employee' ?
                    <div>
                        <FormRow>
                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Personal Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Post Applied for</Label>
                                            <FlatInput placeholder="Post Applied for" type="text"
                                                name="post"
                                                id="post"
                                                value={this.state.post}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>First Name :</Label>
                                            <FlatInput placeholder="First Name " type="text"
                                                name="firstName"
                                                id="firstName"
                                                value={this.state.firstName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Last Name :</Label>
                                            <FlatInput placeholder="Last Name" type="text"
                                                name="lastName"
                                                id="lastName"
                                                value={this.state.lastName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Father/Spouse Name :</Label>
                                            <FlatInput placeholder="Father/Spouse Name " type="text"
                                                name="fatherName"
                                                id="fatherName"
                                                value={this.state.fatherName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Date Of Birth :</Label>
                                            <DatePick
                                                selected={this.state.dateOfBirth}
                                                onChange={this.handleChangeDateOfBirth}
                                            />
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn formGap style={{ marginRight: "0.5em" }}>
                                            <Label>Gender :</Label>
                                            <Dropdown options={Gender} type="text"
                                                name="gender"
                                                id="gender"
                                                value={this.state.gender}
                                                onChange={e => this.doChange(e)}>
                                                <Option>Male</Option>
                                                <Option>Female</Option>
                                                <Option>Third Gender</Option>
                                            </Dropdown>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>

                                        <FormColumn formGap style={{ marginRight: "0.5em" }}>
                                            <Label>Marital Status :</Label>
                                            <Dropdown options={MaritalStatus} type="text"
                                                name="maritalStatus"
                                                id="maritalStatus"
                                                value={this.state.maritalStatus}
                                                onChange={e => this.doChange(e)}>
                                                <Option>Single</Option>
                                                <Option>Married</Option>
                                                <Option>Divorced</Option>
                                                <Option>Widowed</Option>
                                            </Dropdown>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Mobile Number :</Label>
                                            <FlatInput placeholder="Mobile Number " type="text"
                                                name="mobile"
                                                id="mobile"
                                                value={this.state.mobile}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Email :</Label>
                                            <FlatInput placeholder="Email " type="text"
                                                name="email"
                                                id="email"
                                                value={this.state.email}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>


                                        <FormColumn>
                                            <Label>Are you a fresher? :</Label>
                                            <Dropdown options={Fresher} type="text"
                                                name="fresher"
                                                id="fresher"
                                                value={this.state.fresher}
                                                onChange={e => this.doChange(e)}>
                                                <Option>Yes</Option>
                                                <Option>No</Option>
                                            </Dropdown>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        {this.state.fresher == 'Yes' ?
                                            <FormColumn>
                                                <Label>Experience :</Label>
                                                <FlatInput placeholder="Experience " type="text"
                                                    name="experience"
                                                    id="experience"
                                                    value={this.state.experience}
                                                    onChange={e => this.doChange(e)}></FlatInput>
                                            </FormColumn>
                                            : ""}
                                    </FormRow>
                                </Card>
                            </FormColumn>

                            <FormColumn>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Educational's Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Degree :</Label>
                                            <FlatInput placeholder="Degree" type="text"
                                                name="degree"
                                                id="degree"
                                                value={this.state.degree}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>College Name :</Label>
                                            <FlatInput placeholder="College Name " type="text"
                                                name="collegeName"
                                                id="collegeName"
                                                value={this.state.collegeName}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Year of Passing :</Label>
                                            <FlatInput placeholder="Year of Passing" type="text"
                                                name="yearPassed"
                                                id="yearPassed"
                                                value={this.state.yearPassed}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Percentage :</Label>
                                            <FlatInput placeholder="Percentage " type="text"
                                                name="percentage"
                                                id="percentage"
                                                value={this.state.percentage}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow></FormRow>
                                    <FormRow>
                                        <CardHeader>
                                            Address Details
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Address Line 1 :</Label>
                                            <FlatInput placeholder="Address Line 1 " type="text"
                                                name="address1"
                                                id="address1"
                                                value={this.state.address1}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Address Line 2 :</Label>
                                            <FlatInput placeholder="Address Line 2 " type="text"
                                                name="address2"
                                                id="address2"
                                                value={this.state.address2}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>City :</Label>
                                            <FlatInput placeholder="City " type="text"
                                                name="city"
                                                id="city"
                                                value={this.state.city}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>State :</Label>
                                            <FlatInput placeholder="State " type="text"
                                                name="state"
                                                id="state"
                                                value={this.state.state}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                    <FormRow>
                                        <FormColumn>
                                            <Label>Landmark :</Label>
                                            <FlatInput placeholder="Landmark " type="text"
                                                name="landmark"
                                                id="landmark"
                                                value={this.state.landmark}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Pincode :</Label>
                                            <FlatInput placeholder="Pincode " type="text"
                                                name="pincode"
                                                id="pincode"
                                                value={this.state.pincode}
                                                onChange={e => this.doChange(e)}></FlatInput>
                                        </FormColumn>
                                    </FormRow>

                                </Card>
                            </FormColumn>

                        </FormRow>

                        <FormRow>
                            <Card>
                                <FormColumn>

                                    <FormRow>
                                        <CardHeader>
                                            Profile Picture
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn></FormColumn>
                                        <FormColumn>
                                            <img src="https://img.icons8.com/color/48/000000/person-male.png"></img>
                                        </FormColumn>
                                        <FormColumn></FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn></FormColumn>
                                        <FormColumn>
                                            <FlatInput style={{ width: "15em" }} type="file" />
                                        </FormColumn>
                                        <FormColumn></FormColumn>
                                    </FormRow>
                                </FormColumn></Card>
                            <FormColumn>
                                <PrimaryButton onClick={(e) => this.handleClickNext(e)} type="button">Submit</PrimaryButton>
                            </FormColumn>
                        </FormRow>
                    </div>
                    : ""}
            </FormContainer >
        )
    }
}

const mapStatetoProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapDispatchToProps, mapStatetoProps)(ParentForm)
