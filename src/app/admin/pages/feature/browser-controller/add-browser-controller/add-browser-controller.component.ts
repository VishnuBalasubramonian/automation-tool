import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserController } from '../../../../../core/models/feature/browser-controller/browser-controller';
import { Router } from '@angular/router';
import { FeatureService } from '../../../../../core/services/feature-service/feature-service.service';
import { Dropdown } from 'primeng/dropdown/dropdown';

@Component({
  selector: 'app-add-browser-controller',
  templateUrl: './add-browser-controller.component.html',
  styleUrls: ['./add-browser-controller.component.scss']
})
export class AddBrowserControllerComponent implements OnInit {
  execValues: any;
  selectedExec: string;
  browserController: BrowserController;
  browserControllerForm = new FormGroup({
    vmid: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    browser: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    exec: new FormControl(''),
  });
  constructor(private featureService: FeatureService, private router: Router) {
    this.execValues = [
      { label: 'Y' },
      { label: 'N' },
    ];
  }

  ngOnInit() {
  }

  ChangeExecType(event, dd: Dropdown){
    this.selectedExec = dd.selectedOption.label;
 }
 
  onSubmit() {
    var self = this;
    let data = new BrowserController();

    data.vmid = this.browserControllerForm.controls["vmid"].value;
    data.browser = this.browserControllerForm.controls["browser"].value;
    data.exec = this.selectedExec;
    data.statusID = 0;
    data.cudStatusID = 0;
    data.userId = 123;
    self.featureService.addBrowserController(data);
    setTimeout(response => {
      self.router.navigate(['/admin/feature']);
    })
  }
}
