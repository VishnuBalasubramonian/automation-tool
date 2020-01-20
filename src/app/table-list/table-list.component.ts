import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestController3 } from '../models/testcontroller3.model';
import { TestControllerService } from '../services/testcontroller.service';
import { TestController2 } from '../models/testcontroller2.model';
import { TestController1 } from '../models/testcontroller1.model';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog/confirmation-dialog.service';
import * as Chartist from 'chartist';
import { SelectItem } from 'primeng/api/selectitem';
import { BrowserController } from '../core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers:[TestControllerService,ConfirmationDialogService],
  encapsulation:ViewEncapsulation.None
})
export class TableListComponent implements OnInit {

  testControllers3: BrowserController[];
  testControllers1: TestController1[];
  testControllers2: TestController2[];
  browserControllerCols:SelectItem[];
  testControllerCols:any[];
  moduleControllerCols:any[];
  selectedBrowserControllerCols: any[];
  selectedTestControllerCols: any[];
  selectedModuleControllerCols: any[];
  loading:boolean = true;

  // Cards
  

  constructor(private svc: TestControllerService,private router: Router,
    private confirmationDialogService: ConfirmationDialogService) { }

    public hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
  
      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
    }

    LoadController3Cols(){
      // this.selectedBrowserControllerCols = [];
      // this.browserControllerCols.forEach(col => {
      //   this.selectedBrowserControllerCols.push(col.value);
      // });
      // this.selectedBrowserControllerCols = this.selectedBrowserControllerCols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
    }

    LoadController2Cols(){
      // this.selectedTestControllerCols = [];
      // this.testControllerCols.forEach(col => {
      //   this.selectedTestControllerCols.push(col.value);
      // });
      // this.selectedTestControllerCols = this.selectedTestControllerCols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
    }

    LoadController1Cols(){
      // this.selectedModuleControllerCols = [];
      // this.moduleControllerCols.forEach(col => {
      //   this.selectedModuleControllerCols.push(col.value);
      // });
      // this.selectedModuleControllerCols = this.selectedModuleControllerCols.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
    }

  ngOnInit() {
    


    this.loading = false;
    this.getControllers();
    this.getControllers1();
    this.getControllers2();
    this.browserControllerCols = [
      {label: 'VMID', value: { field: 'vmid', header: 'VMID', order: 1 }},
      {label: 'Browser', value: { field: 'browser', header: 'Browser', order: 2 }},
      {label: 'Exec', value: { field: 'exec', header: 'Exec', order: 3 }},
      {label: 'Actions', value: { field: 'actions', header: 'Actions', order: 4 }}
      // { field: 'vmid', header: 'VMID' },
      // { field: 'browser', header: 'Browser' },
      // { field: 'exec', header: 'Exec' },
      // { field: 'actions', header: 'Actions' }
      ];
      this.LoadController3Cols();
      this.moduleControllerCols = [
        {label: 'SLNO', value: { field: 'slno', header: 'SLNO', order: 1 }},
        {label: 'Module ID', value: { field: 'moduleID', header: 'Module ID', order: 2 }},
        {label: 'Module SeqID', value: { field: 'moduleSeqID', header: 'Module SeqID', order: 3 }},
        {label: 'Machine ID', value: { field: 'machineID', header: 'Machine ID', order: 4 }},
        {label: 'Machine SequenceID', value: { field: 'machineSequenceID', header: 'Machine SequenceID', order: 5 }},
        {label: 'Execute', value: { field: 'execute', header: 'Execute', order: 6 }},
        {label: 'Actions', value: { field: 'actions', header: 'Actions', order: 7 }}
      ];
      this.LoadController1Cols();
      this.testControllerCols = [
        {label: 'SLNO', value: { field: 'sno', header: 'SNO', order: 1  }},
        {label: 'Feature ID', value: { field: 'featureID', header: 'Feature ID', order: 2  }},
        {label: 'TestCase ID', value: { field: 'testCaseID', header: 'TestCase ID', order: 3  }},
        {label: 'Run', value: { field: 'run', header: 'Run', order: 4  }},
        {label: 'Iterations', value: { field: 'iterations', header: 'Iterations', order: 5  }},
        {label: 'Browsers', value: { field: 'browsers', header: 'Browsers', order: 6  }},
        {label: 'Sequence ID', value: { field: 'sequenceID', header: 'Sequence ID', order: 7  }},
        {label: 'Test Type', value: { field: 'testType', header: 'Test Type', order: 8  }},
        {label: 'Jira ID', value: { field: 'jira_ID', header: 'Jira ID', order: 9  }},
        {label: 'Steps Count', value: { field: 'stepsCount', header: 'Steps Count', order: 10  }},
        {label: 'TestScript Name', value: { field: 'testScriptName', header: 'TestScript Name', order: 11  }},
        {label: 'TestScript Description', value: { field: 'testScriptDescription', header: 'TestScript Description', order: 12  }},
        {label: 'Actions', value: { field: 'actions', header: 'Actions', order: 13  }}
      ];
      
      this.LoadController2Cols();
     
    
  }



  getControllers(){
    // this.svc.getAllBrowserController()
    // .subscribe((result)=>{
    //   //console.log(result);
    //   // this.testControllers3 = result;
    //   this.loading = false;
      
      
    // },
    //  error =>{
    //    //console.log(error.message);
    //    this.testControllers3 = [];
    //    let obj = new TestController3();
    //    obj.id = 1;
    //    obj.vmid="some id";
    //    obj.browser="chrome";
    //    obj.exec="yes";

    //   //  this.testControllers3.push(obj);
    //   //  this.testControllers3.push(obj);
    //   //  this.testControllers3.push(obj);
    //  },
    //  ()=>{
    //    //console.log(this.testControllers3);
    //  })
  }

  getControllers1(){
    // this.svc.getAllModuleController()
    // .subscribe((result)=>{
    //   // this.testControllers1 = result;
    // },
    //  error =>{
    //    console.log(error.message);
    //  },
    //  ()=>{
    //  })
  }
  getControllers2(){
    // this.svc.getAllTestController()
    // .subscribe((result)=>{
    //   //console.log(result);
    //   // this.testControllers2 = result;
      
    // },
    //  error =>{
    //    console.log(error.message);
    //  },
    //  ()=>{
    //    //console.log(this.testControllers3);
    //  })
  }

  deleteController3(id:number){
    // if(this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
    //   this.svc.deleteTestController3(id);
    //    setTimeout(f=>{
    //      this.getControllers();
    //    },2200)
    // }
  }

  deleteController2(id:number){
    // if(this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
    //   this.svc.deleteTestController2(id);
    //    setTimeout(f=>{
    //      this.getControllers();
    //    },2200)
    // }
  }
  deleteController1(id:number){
    // if(this.confirmationDialogService.confirm('Are you sure you want to delete?')) {
    //   this.svc.deleteTestController1(id);
    //    setTimeout(f=>{
    //      this.getControllers();
    //    },2200)
    // }
  }

  onRowEditController2(id:number){
    //this.router.navigate(['/table-list/testcontroller2/edit', id]);
  }
  onRowEditController1(id:number){
    //this.router.navigate(['/table-list/testcontroller1/edit', id]);
  }
  onRowEditController3(id:number){
    //this.router.navigate(['/table-list/testcontroller3/edit', id]);
  }

  public chartClicked(e:any):void {
    //console.log(e);
  }

  public chartHovered(e:any):void {
    //console.log(e);
  }

}
