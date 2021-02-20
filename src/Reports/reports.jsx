import React, { Component } from 'react'
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import { CreateDDItem } from './resources/helpers/createDDItem'
import './resources/reports.css'
import { ReportsService } from './service/reportsService'
import { filterDDItems } from './resources/helpers/filterDDItems'
import { ActivePage } from './resources/helpers/pagination'
import { GrossModel } from './models/grossModel'
import { ReportsModel } from './models/reportsModel'
import { CreateRows4Grid } from './resources/helpers/createRows4Grid'

export class ReportPage extends Component {

    interpriseData = []
    whatsAppNoData = []
    templateNameData = []
    reportsData = []

    state = {
        interpriseDD: false,
        interpriseValue: "All",

        whatsAppNoDD: false,
        whatsAppNoValue: "All",

        templateNameDD: false,
        templateNameValue: "All",

        durationValue: "",
        displayNoOfrows: "5",

        // Hide and show elements
        whatsAppNoCol: true,
        templateNameCol: true,

        //Report Data
        grossDataArr : [],
        reportDataRows : []
    }

    constructor() {
        super()
    }

    componentDidMount(){
    // Initilization
    this.getWhatsNoData();
    this.getTemplateNameData();
    this.getInterpriseIdData();
    this.getReportsData();

    //Initilize Current Data
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    this.setState({
      durationValue:m + "/" + d + "/" + y
    }) 
    }

    // Fatching Data from the server
    getWhatsNoData = () => {
        ReportsService.getWhatsAppNumbers().then((r) => {
            this.whatsAppNoData = r;
        }).catch((err) => { console.log("Err", err); })
    }

    getTemplateNameData = () => {
        ReportsService.getTemplateNames().then((r) => {
            this.templateNameData = r;
        }).catch((err) => { console.log("Err", err); })
    }

    getInterpriseIdData = () => {
        ReportsService.getInterpriseIds().then((r) => {
            this.interpriseData = r;
        }).catch((err) => { console.log("Err", err); })
    }

    getReportsData = () =>{
        let collectGridData = []
        ReportsService.getReports().then((r) => {
        const reports = r.reports
        const grossReports = r.grossReport
        collectGridData = [...collectGridData, new GrossModel(grossReports)]
        for (let i = 0; i < reports.length; i++) {
            const reportObj = reports[i];
        collectGridData = [...collectGridData, new ReportsModel(reportObj)] 
        }
        this.reportsData = collectGridData
        this.initilizeGrid(collectGridData)
        }).catch((err) => { console.log("Err", err); })
    }

    initilizeGrid = (data) =>{
      let gridRows =  new CreateRows4Grid(data);
      this.setState({
        reportDataRows:gridRows.slice(1),
        grossDataArr:[data[0]]
          })                 
    }

// Selectbox Filter
    ddSearchFilter = (event, id) => {
        let inputValue = event.target.value.toUpperCase();
        let div = document.getElementById(id);
        let HtmlItemsArr = div.getElementsByTagName("button");
        filterDDItems(inputValue, HtmlItemsArr)
    }

// Get value from Selectbox & Datepicker value
    handelWhatsAppNo = (value) => {
        console.log("selectedItem", value);
        this.setState({ whatsAppNoValue: value.text })
    }

    handelTemplateName = (value) => {
        console.log("selectedItem", value);
        this.setState({ templateNameValue: value.text })
    }

    handelEnterpriseIds = (value) => {
        console.log("selectedItem", value);
        this.setState({ interpriseValue: value.text })
    }

    handelDatePicker = (event) => {
        this.setState({ durationValue: event.target.value })
        console.log("event", event.target.value);
    }

    handelSearchBtn = () => {
        console.log(this.state.whatsAppNoValue);
        console.log(this.state.templateNameValue);
        console.log(this.state.interpriseValue);
        console.log(this.state.durationValue);
        console.log(this.state.displayNoOfrows);
        console.log(this.reportsData.splice(1));
    }

    handelNoOfRows = (e) =>{
        console.log("event", e.target.value);
        this.setState({displayNoOfrows: e.target.value,})
    }

    // Filter Section Hover Animation
    mouseOverOnFilterSec = () => {
        this.setState({
            whatsAppNoCol: false,
            templateNameCol: false
        })
    }

    mouseOutFromFilterSec = () => {
        this.setState({
            whatsAppNoCol: true,
            templateNameCol: true
        })
    }

    // Grid Pagination
    paginateThisPage = (value) => {
        let header = document.getElementById("paginationContId");
        let pages = header.getElementsByClassName("pagi");

        switch (value) {
            case '1': 
            break;
            case '2':   
            break;
            case '3':   
            break;
            case '12':   
            break;
           
        }
        ActivePage(pages,'pagiActive') 
       
    }



    render() {
        const grossData = this.state.grossDataArr
        return (
            <div className="reportContainer">
                <div className="breadcrum">Enterprise Name</div>
                <div className="pageTitle">Reports</div>

                {/* Filter Section */}
                <div className="filterSection mt-4" onMouseOver={this.mouseOverOnFilterSec} onMouseOut={this.mouseOutFromFilterSec}>
                    <Row>
                        <Col sm='12' md='3'>
                            <FormGroup>
                                <Label for="enterprise">Enterprise ID</Label>
                                <Dropdown isOpen={this.state.interpriseDD} toggle={() => { this.setState({ interpriseDD: !this.state.interpriseDD }) }} size="sm">
                                    <DropdownToggle caret className="interpriseIdSelect">
                                        {this.state.interpriseValue}&nbsp;&nbsp;&nbsp;</DropdownToggle>
                                    <DropdownMenu center="true" >
                                        <DropdownItem header>
                                            <Input type="text"
                                                bsSize="sm" placeholder="search" onChange={(e) => this.ddSearchFilter(e, 'customMenuItems4Inter')} />
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <CreateDDItem id="customMenuItems4Inter"
                                            data={this.interpriseData} selectedItem={this.handelEnterpriseIds} />
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                        </Col>
                        <Col sm='12' md='3' hidden={this.state.whatsAppNoCol}>
                            <FormGroup>
                                <Label for="enterprise">WhatsApp Number</Label>
                                <Dropdown isOpen={this.state.whatsAppNoDD} toggle={() => { this.setState({ whatsAppNoDD: !this.state.whatsAppNoDD }) }} size="sm">
                                    <DropdownToggle caret className="interpriseIdSelect">
                                        {this.state.whatsAppNoValue}&nbsp;&nbsp;&nbsp;</DropdownToggle>
                                    <DropdownMenu center="true" >
                                        <DropdownItem header>
                                            <Input type="text"
                                                bsSize="sm" placeholder="search" onChange={(e) => this.ddSearchFilter(e, 'customMenuItems4Wats')} />
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <CreateDDItem id="customMenuItems4Wats"
                                            data={this.whatsAppNoData} selectedItem={this.handelWhatsAppNo} />
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                        </Col>
                        <Col sm='12' md='3' hidden={this.state.templateNameCol}>
                            <FormGroup>
                                <Label for="enterprise">Template Name</Label>
                                <Dropdown isOpen={this.state.templateNameDD} toggle={() => { this.setState({ templateNameDD: !this.state.templateNameDD }) }} size="sm">
                                    <DropdownToggle caret className="interpriseIdSelect">
                                        {this.state.templateNameValue}&nbsp;&nbsp;&nbsp;</DropdownToggle>
                                    <DropdownMenu center="true" >
                                        <DropdownItem header>
                                            <Input type="text"
                                                bsSize="sm" placeholder="search" onChange={(e) => this.ddSearchFilter(e, 'customMenuItems4Tem')} />
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <CreateDDItem id="customMenuItems4Tem"
                                            data={this.templateNameData} selectedItem={this.handelTemplateName} />
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                        </Col>
                        <Col sm='12' md='3'>
                            <FormGroup>
                                <Label for="duration">Duration</Label>
                                <Input className="durationSelect"
                                    onChange={this.handelDatePicker} type="date" bsSize="sm" name="date" id="durationId" />
                            </FormGroup>
                        </Col>
                        <Col sm='12' md='2'>
                            <Button className="searchBtn" size="sm" onClick={this.handelSearchBtn}> <i className="fa fa-search"></i> SEARCH</Button>
                        </Col>
                    </Row>
                </div>

                {/* Grid Section*/}
                <div className="gridContainer mt-4">
                    <Table bordered>
                        <thead>
                            <tr>
                                <td colSpan="7">
                                    Showing Results for: <b>Enterprise ID: </b><span className="filterBy">{this.state.interpriseValue}</span> |
                                <b> App ID: </b><span className="filterBy">{"All"}</span> |
                                <b> WhatsApp Number: </b><span className="filterBy">{this.state.whatsAppNoValue}</span> |
                                <b> Template: </b><span className="filterBy">{this.state.templateNameValue}</span> |
                                <b> Duration: </b><span className="filterBy">{this.state.durationValue || '03/21/2021'}</span>
                                </td>
                            </tr>
                            <tr className="headers">
                                <th rowSpan="2">Enterprise ID</th>
                                <th colSpan="3">Notifications</th>
                                <th colSpan="3">Conversations</th>
                            </tr>
                            <tr className="headers">
                                <th>Submitted</th>
                                <th>Read</th>
                                <th>Unique Users</th>
                                <th>Requests</th>
                                <th>Responses</th>
                                <th>Unique Users</th>
                            </tr>
                            <tr className="totalCalcuRow">
                            {/* Gross(Total) Report */}
                            {grossData.map((v,i)=>{return(
                            <React.Fragment key="thth">
                            <th>{v.interpriseId}</th>
                            <th>{v.notification.submitted}</th>
                            <th>{v.notification.read}</th>
                            <th>{v.notification.uniqueUser}</th>
                            <th>{v.conversations.requests}</th>
                            <th>{v.conversations.responsive}</th>
                            <th>{v.conversations.uniqueUser}</th>
                            </React.Fragment>
                            )})}
                            </tr>
                        </thead>
                        <tbody>
                        {/* Report Data */}
                        {this.state.reportDataRows}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan='3' style={{ borderWidth: 0 }} >
                                    <div style={{ display: 'flex' }}>
                                        <span>Show</span>&nbsp;
                                        <select className="form-control form-control-sm" onChange={this.handelNoOfRows}>
                                            <option defaultValue value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>&nbsp;<span>entries</span>
                                    </div>
                                </td>
                                <td colSpan='4' style={{ borderWidth: 0, position: 'relative' }}>
                                    <div className="paginate" id="paginationContId">
                                        <div className="pages">
                                            <div className="pagi" onClick={(e)=>this.paginateThisPage('<')}>{'<'}</div>
                                            <div className="pagi pagiActive" onClick={(e)=>this.paginateThisPage('1')}>1</div>
                                            <div className="pagi" onClick={(e)=>this.paginateThisPage('2')}>2</div>
                                            <div className="pagi" onClick={(e)=>this.paginateThisPage('3')}>3</div>
                                            <div className="pagi" onClick={(e)=>this.paginateThisPage('...')}>...</div>
                                            <div className="pagi" onClick={(e)=>this.paginateThisPage('12')}>12</div>
                                            <div className="pagi" onClick={(e)=>this.paginateThisPage('>')}>{'>'}</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
            </div>
        )
    }
}
