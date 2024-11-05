import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import Card from '../../../components/cards/Card'
import { FlexBoxContainer, FlexBoxRow, FlexBoxColumn } from './admissionFlexBox'
import PrimaryButton from '../../../components/button/PrimaryButton'
import TogglerButton from '../../../components/button/TogglerButton'
import Selection from '../../../components/inputs/Select'
import Label from '../../../components/typography/Label'
import FlatInput from '../../../components/inputs/FlatInput'
import FloatingLabelInput from '../../../components/inputs/FloatingLabelInput'
import Input from '../../../components/inputs/Input'
import LargeIconOnlyButton from '../../../components/button/LargeIconOnlyButton'
import PlusIconPrimary from '../../../components/icon/PlusIconPrimary'
import SearchIconPrimary from '../../../components/icon/SearchIconPrimary'

const cardStyle = {
    textAlign: "center",
    width: "23em"
}

const empCardStyle = {
    textAlign: "center",
    width: "10em"
}

const grades = [
    { value: 'I', label: 'I' },
    { value: 'II', label: 'II' },
    { value: 'III', label: 'III' },
    { value: 'IV', label: 'IV' },
    { value: 'V', label: 'V' },
    { value: 'VI', label: 'VI' },
    { value: 'VII', label: 'VII' },
    { value: 'VIII', label: 'VIII' },
    { value: 'IX', label: 'IX' },
    { value: 'X', label: 'X' },
    { value: 'XI', label: 'XI' },
    { value: 'XII', label: 'XII' },
]

const divisions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' }
]

export default class ManageAdmission extends Component {

    state = {
        DivisionStatus: false,
        AdmissionStatus: false,
        NameStatus: false
    }

    handleDivision() {
        this.setState({ DivisionStatus: true, AdmissionStatus: false, NameStatus: false })
    }

    handleAdmission() {
        this.setState({ AdmissionStatus: true, DivisionStatus: false, NameStatus: false })
    }

    handleName() {
        this.setState({ NameStatus: true, AdmissionStatus: false, DivisionStatus: false })
    }

    handleStaffClass() {
        this.setState({ ClassStatus: true, StaffNoStatus: false, StaffNameStatus: false })
    }

    handleStaffNo() {
        this.setState({ ClassStatus: false, StaffNoStatus: true, StaffNameStatus: false })
    }

    handleStaffName() {
        this.setState({ ClassStatus: false, StaffNoStatus: false, StaffNameStatus: true })
    }

    handleEmployeeNo() {
        this.setState({EmployeeNoStatus: true})
    }

    render() {
        return (
            <FlexBoxContainer>
                <FlexBoxRow>
                    <FlexBoxColumn>
                        <Card style={cardStyle}>
                            <FlexBoxRow>

                                <FlexBoxColumn>
                                    <Heading3 style={{ marginLeft: "7.7em" }}>Search A Student</Heading3>
                                </FlexBoxColumn>

                            </FlexBoxRow>
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleDivision()}>By Division</TogglerButton>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleAdmission()}>By Admission No</TogglerButton>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleName()}>By Name</TogglerButton>
                                </FlexBoxColumn>
                            </FlexBoxRow>
                            <br />
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                {this.state.DivisionStatus ? <FlexBoxColumn>
                                    <Selection options={grades} placeholder="Grades"></Selection>
                                </FlexBoxColumn> : ""}
                                {this.state.DivisionStatus ? <FlexBoxColumn>
                                    <Selection options={divisions} placeholder="Divisions"></Selection>
                                </FlexBoxColumn> : ""}

                                {this.state.AdmissionStatus ?

                                    <FlexBoxColumn>
                                        <Input placeholder="Enter A Name"></Input>
                                    </FlexBoxColumn> : ""}
                                {this.state.AdmissionStatus ? <FlexBoxColumn>
                                    <LargeIconOnlyButton primary><SearchIconPrimary /></LargeIconOnlyButton>
                                </FlexBoxColumn> : ""}
                                {this.state.NameStatus ?

                                    <FlexBoxColumn>
                                        <Input placeholder="Enter A Admission No"></Input>
                                    </FlexBoxColumn> : ""}
                                {this.state.NameStatus ? <FlexBoxColumn style={{ justifyContent: "center" }}>
                                    <LargeIconOnlyButton primary><SearchIconPrimary /></LargeIconOnlyButton>
                                </FlexBoxColumn>

                                    : ""}

                            </FlexBoxRow>

                            <br />

                            <br />

                        </Card>
                    </FlexBoxColumn>

                    <FlexBoxColumn>
                        <Card style={cardStyle}>
                            <FlexBoxRow>

                                <FlexBoxColumn>
                                    <Heading3 style={{ marginLeft: "7.7em" }}>Search A Staff</Heading3>
                                </FlexBoxColumn>

                            </FlexBoxRow>
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleStaffClass()}>By Class</TogglerButton>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleStaffNo()}>By Staff No</TogglerButton>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleStaffName()}>By Name</TogglerButton>
                                </FlexBoxColumn>
                            </FlexBoxRow>
                            <br />
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                {this.state.ClassStatus ? <FlexBoxColumn>
                                    <Selection options={grades} placeholder="Standard"></Selection>
                                </FlexBoxColumn> : ""}
                                {this.state.ClassStatus ? <FlexBoxColumn>
                                    <Selection options={divisions} placeholder="Section"></Selection>
                                </FlexBoxColumn> : ""}

                                {this.state.StaffNoStatus ?

                                    <FlexBoxColumn>
                                        <Input placeholder="Enter A Staff No"></Input>
                                    </FlexBoxColumn> : ""}
                                {this.state.StaffNoStatus ? <FlexBoxColumn>
                                    <LargeIconOnlyButton primary><SearchIconPrimary /></LargeIconOnlyButton>
                                </FlexBoxColumn> : ""}
                                {this.state.StaffNameStatus ?

                                    <FlexBoxColumn>
                                        <Input placeholder="Enter A Staff Name"></Input>
                                    </FlexBoxColumn> : ""}
                                {this.state.StaffNameStatus ? <FlexBoxColumn style={{ justifyContent: "center" }}>
                                    <LargeIconOnlyButton primary><SearchIconPrimary /></LargeIconOnlyButton>
                                </FlexBoxColumn>

                                    : ""}

                            </FlexBoxRow>

                            

                            <br />

                            <br />

                        </Card>
                    </FlexBoxColumn>

                    <FlexBoxColumn>
                        <Card style={empCardStyle}>
                            <FlexBoxRow>

                                <FlexBoxColumn>
                                    <Heading3 style={{ marginLeft: "0.7em" }}>Search A Employee</Heading3>
                                </FlexBoxColumn>

                            </FlexBoxRow>
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleEmployeeNo()}>By Employee No</TogglerButton>
                                </FlexBoxColumn>
                            </FlexBoxRow>
                            <br />
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                               {this.state.EmployeeNoStatus ?

                                    <FlexBoxColumn>
                                        <Input placeholder="Employee No"></Input>
                                    </FlexBoxColumn> : ""}
                                {this.state.EmployeeNoStatus ? <FlexBoxColumn>
                                    <LargeIconOnlyButton primary><SearchIconPrimary /></LargeIconOnlyButton>
                                </FlexBoxColumn> : ""}

                                    

                            </FlexBoxRow>

                            

                            <br />

                            <br />

                        </Card>
                    </FlexBoxColumn>
                    
                </FlexBoxRow>

            </FlexBoxContainer>

            
        )
    }
}