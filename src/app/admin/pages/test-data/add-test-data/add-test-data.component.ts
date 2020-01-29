import { Component, OnInit } from '@angular/core';
import { TestData, TestDataService } from '../../../../core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-test-data',
  templateUrl: './add-test-data.component.html',
  styleUrls: ['./add-test-data.component.scss']
})
export class AddTestDataComponent implements OnInit {

  newTestDataObj: TestData;
  tcid: any;
  tcids: any[];
  filteredTcids: any[];

  constructor(private testDataService: TestDataService, private router: Router) { }

  filterTcids(event) {
    let query = event.query;
    this.testDataService.getAllTcid()
    .subscribe((tcids: any[])=>{
      this.filteredTcids = this.filterTcid(query, tcids);
    },
     error =>{
       console.log(error.message);
     },
     ()=>{ });
  }

  filterTcid(query, tcids: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < tcids.length; i++) {
      let tcid = tcids[i];
      if (tcid.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(tcid);
      }
    }
    return filtered;
  }

  ngOnInit() {
  }
  testdataForm = new FormGroup({
    module: new FormControl(''),
    tcid: new FormControl(''),
    iterations: new FormControl(''),
    envDetail1: new FormControl(''),
    envDetail2: new FormControl(''),
    param1: new FormControl(''),
    param2: new FormControl(''),
    param3: new FormControl(''),
    param4: new FormControl(''),
    param5: new FormControl(''),
    param6: new FormControl(''),
    param7: new FormControl(''),
    param8: new FormControl(''),
    param9: new FormControl(''),
    param10: new FormControl(''),
    param11: new FormControl(''),
    param12: new FormControl(''),
    param13: new FormControl(''),
    param14: new FormControl(''),
    param15: new FormControl(''),
    param16: new FormControl(''),
    param17: new FormControl(''),
    param18: new FormControl(''),
    param19: new FormControl(''),
    param20: new FormControl(''),
    param21: new FormControl(''),
    param22: new FormControl(''),
    param23: new FormControl(''),
    param24: new FormControl(''),
    param25: new FormControl(''),
    param26: new FormControl(''),
    param27: new FormControl(''),
    param28: new FormControl(''),
    param29: new FormControl(''),
    param30: new FormControl(''),
    param31: new FormControl(''),
    param32: new FormControl(''),
    param33: new FormControl(''),
    param34: new FormControl(''),
    param35: new FormControl(''),
    param36: new FormControl(''),
    param37: new FormControl(''),
    param38: new FormControl(''),
    param39: new FormControl(''),
    param40: new FormControl(''),
    param41: new FormControl(''),
    param42: new FormControl(''),
    param43: new FormControl(''),
    param44: new FormControl(''),
    param45: new FormControl(''),
    param46: new FormControl(''),
    param47: new FormControl(''),
    param48: new FormControl(''),
    param49: new FormControl(''),
    param50: new FormControl(''),
    param51: new FormControl(''),
    param52: new FormControl(''),
    param53: new FormControl(''),
    param54: new FormControl(''),
    param55: new FormControl(''),
    param56: new FormControl(''),
    param57: new FormControl(''),
    param58: new FormControl(''),
    param59: new FormControl(''),
    param60: new FormControl(''),
    param61: new FormControl(''),
    param62: new FormControl(''),
    param63: new FormControl(''),
    param64: new FormControl(''),
    param65: new FormControl(''),
    param66: new FormControl(''),
    param67: new FormControl(''),
    param68: new FormControl(''),
    param69: new FormControl(''),
    param70: new FormControl(''),
    param71: new FormControl(''),
    param72: new FormControl(''),
    param73: new FormControl(''),
    param74: new FormControl(''),
    param75: new FormControl(''),
    param76: new FormControl(''),
    param77: new FormControl(''),
    param78: new FormControl(''),
    param79: new FormControl(''),
    param80: new FormControl(''),
    param81: new FormControl(''),
    param82: new FormControl(''),
    param83: new FormControl(''),
    param84: new FormControl(''),
    param85: new FormControl(''),
    param86: new FormControl(''),
    param87: new FormControl(''),
    param88: new FormControl(''),
    param89: new FormControl(''),
    param90: new FormControl(''),
    param91: new FormControl(''),
    param92: new FormControl(''),
    param93: new FormControl(''),
    param94: new FormControl(''),
    param95: new FormControl(''),
    param96: new FormControl(''),
    param97: new FormControl(''),
    param98: new FormControl(''),
    param99: new FormControl(''),
    param100: new FormControl(''),
    param101: new FormControl(''),
    param102: new FormControl(''),
    param103: new FormControl(''),
    param104: new FormControl(''),
    param105: new FormControl(''),
    param106: new FormControl(''),
    param107: new FormControl(''),
    param108: new FormControl(''),
    param109: new FormControl(''),
    param110: new FormControl(''),
    param111: new FormControl(''),
    param112: new FormControl(''),
    param113: new FormControl(''),
    param114: new FormControl(''),
    param115: new FormControl(''),
    param116: new FormControl(''),
    param117: new FormControl(''),
    param118: new FormControl(''),
    param119: new FormControl(''),
    param120: new FormControl(''),
    param121: new FormControl(''),
    param122: new FormControl(''),
    param123: new FormControl(''),
    param124: new FormControl(''),
    param125: new FormControl(''),
    param126: new FormControl(''),
    param127: new FormControl(''),
    param128: new FormControl(''),
    param129: new FormControl(''),
    param130: new FormControl(''),
    param131: new FormControl(''),
    param132: new FormControl(''),
    param133: new FormControl(''),
    param134: new FormControl(''),
    param135: new FormControl(''),
    param136: new FormControl(''),
    param137: new FormControl(''),
    param138: new FormControl(''),
    param139: new FormControl(''),
    param140: new FormControl(''),
    param141: new FormControl(''),
    param142: new FormControl(''),
    param143: new FormControl(''),
    param144: new FormControl(''),
    param145: new FormControl(''),
    param146: new FormControl(''),
    param147: new FormControl(''),
    param148: new FormControl(''),
    param149: new FormControl(''),
    param150: new FormControl(''),
    param151: new FormControl(''),
    param152: new FormControl(''),
    param153: new FormControl(''),
    param154: new FormControl(''),
    param155: new FormControl(''),
    param156: new FormControl(''),
    param157: new FormControl(''),
    param158: new FormControl(''),
    param159: new FormControl(''),
    param160: new FormControl(''),
    param161: new FormControl(''),
    param162: new FormControl(''),
    param163: new FormControl(''),
    param164: new FormControl(''),
    param165: new FormControl(''),
    param166: new FormControl(''),
    param167: new FormControl(''),
    param168: new FormControl(''),
    param169: new FormControl(''),
    param170: new FormControl(''),
    param171: new FormControl(''),
    param172: new FormControl(''),
    param173: new FormControl(''),
    param174: new FormControl(''),
    param175: new FormControl(''),
    param176: new FormControl(''),
    param177: new FormControl(''),
    param178: new FormControl(''),
    param179: new FormControl(''),
    param180: new FormControl(''),
    param181: new FormControl(''),
    param182: new FormControl(''),
    param183: new FormControl(''),
    param184: new FormControl(''),
    param185: new FormControl(''),
    param186: new FormControl(''),
    param187: new FormControl(''),
    param188: new FormControl(''),
    param189: new FormControl(''),
    param190: new FormControl(''),
    param191: new FormControl(''),
    param192: new FormControl(''),
    param193: new FormControl(''),
    param194: new FormControl(''),
    param195: new FormControl(''),
    param196: new FormControl(''),
    param197: new FormControl(''),
    param198: new FormControl(''),
    param199: new FormControl(''),
    param200: new FormControl(''),
    param201: new FormControl(''),
    param202: new FormControl(''),
    param203: new FormControl(''),
    param204: new FormControl(''),
    param205: new FormControl(''),
    param206: new FormControl(''),
    param207: new FormControl(''),
    param208: new FormControl(''),
    param209: new FormControl(''),
    param210: new FormControl(''),
    param211: new FormControl(''),
    param212: new FormControl(''),
    param213: new FormControl(''),
    param214: new FormControl(''),
    param215: new FormControl(''),
    param216: new FormControl(''),
    param217: new FormControl(''),
    param218: new FormControl(''),
    param219: new FormControl(''),
    param220: new FormControl(''),
    param221: new FormControl(''),
    param222: new FormControl(''),
    param223: new FormControl(''),
    param224: new FormControl(''),
    param225: new FormControl(''),
    param226: new FormControl(''),
    param227: new FormControl(''),
    param228: new FormControl(''),
    param229: new FormControl(''),
    param230: new FormControl(''),
    param231: new FormControl(''),
    param232: new FormControl(''),
    param233: new FormControl(''),
    param234: new FormControl(''),
    param235: new FormControl(''),
    param236: new FormControl(''),
    param237: new FormControl(''),
    param238: new FormControl(''),
    param239: new FormControl(''),
    param240: new FormControl(''),
    param241: new FormControl(''),
    param242: new FormControl(''),
    param243: new FormControl(''),
    param244: new FormControl(''),
    param245: new FormControl(''),
    param246: new FormControl(''),
    param247: new FormControl(''),
    param248: new FormControl(''),
    param249: new FormControl(''),
    param250: new FormControl(''),
  });

  onSubmit() {
    var self = this;
    let data = new TestData();
    data.module = this.testdataForm.controls["module"].value;
    data.tcid = this.testdataForm.controls["tcid"].value;
    data.iterations = this.testdataForm.controls["iterations"].value;
    data.envDetail1 = this.testdataForm.controls["envDetail_1"].value;
    data.envDetail2 = this.testdataForm.controls["envDetail_2"].value;
    data.param1 = this.testdataForm.controls["param1"].value;
    data.param2 = this.testdataForm.controls["param2"].value;
    data.param3 = this.testdataForm.controls["param3"].value;
    data.param4 = this.testdataForm.controls["param4"].value;
    data.param5 = this.testdataForm.controls["param5"].value;
    data.param6 = this.testdataForm.controls["param6"].value;
    data.param7 = this.testdataForm.controls["param7"].value;
    data.param8 = this.testdataForm.controls["param8"].value;
    data.param9 = this.testdataForm.controls["param9"].value;
    data.param10 = this.testdataForm.controls["param10"].value;
    data.param11 = this.testdataForm.controls["param11"].value;
    data.param12 = this.testdataForm.controls["param12"].value;
    data.param13 = this.testdataForm.controls["param13"].value;
    data.param14 = this.testdataForm.controls["param14"].value;
    data.param15 = this.testdataForm.controls["param15"].value;
    data.param16 = this.testdataForm.controls["param16"].value;
    data.param17 = this.testdataForm.controls["param17"].value;
    data.param18 = this.testdataForm.controls["param18"].value;
    data.param19 = this.testdataForm.controls["param19"].value;
    data.param20 = this.testdataForm.controls["param20"].value;
    data.param21 = this.testdataForm.controls["param21"].value;
    data.param22 = this.testdataForm.controls["param22"].value;
    data.param23 = this.testdataForm.controls["param23"].value;
    data.param24 = this.testdataForm.controls["param24"].value;
    data.param25 = this.testdataForm.controls["param25"].value;
    data.param26 = this.testdataForm.controls["param26"].value;
    data.param27 = this.testdataForm.controls["param27"].value;
    data.param28 = this.testdataForm.controls["param28"].value;
    data.param29 = this.testdataForm.controls["param29"].value;
    data.param30 = this.testdataForm.controls["param30"].value;
    data.param31 = this.testdataForm.controls["param31"].value;
    data.param32 = this.testdataForm.controls["param32"].value;
    data.param33 = this.testdataForm.controls["param33"].value;
    data.param34 = this.testdataForm.controls["param34"].value;
    data.param35 = this.testdataForm.controls["param35"].value;
    data.param36 = this.testdataForm.controls["param36"].value;
    data.param37 = this.testdataForm.controls["param37"].value;
    data.param38 = this.testdataForm.controls["param38"].value;
    data.param39 = this.testdataForm.controls["param39"].value;
    data.param40 = this.testdataForm.controls["param40"].value;
    data.param41 = this.testdataForm.controls["param41"].value;
    data.param42 = this.testdataForm.controls["param42"].value;
    data.param43 = this.testdataForm.controls["param43"].value;
    data.param44 = this.testdataForm.controls["param44"].value;
    data.param45 = this.testdataForm.controls["param45"].value;
    data.param46 = this.testdataForm.controls["param46"].value;
    data.param47 = this.testdataForm.controls["param47"].value;
    data.param48 = this.testdataForm.controls["param48"].value;
    data.param49 = this.testdataForm.controls["param49"].value;
    data.param50 = this.testdataForm.controls["param50"].value;
    data.param51 = this.testdataForm.controls["param51"].value;
    data.param52 = this.testdataForm.controls["param52"].value;
    data.param53 = this.testdataForm.controls["param53"].value;
    data.param54 = this.testdataForm.controls["param54"].value;
    data.param55 = this.testdataForm.controls["param55"].value;
    data.param56 = this.testdataForm.controls["param56"].value;
    data.param57 = this.testdataForm.controls["param57"].value;
    data.param58 = this.testdataForm.controls["param58"].value;
    data.param59 = this.testdataForm.controls["param59"].value;
    data.param60 = this.testdataForm.controls["param60"].value;
    data.param61 = this.testdataForm.controls["param61"].value;
    data.param62 = this.testdataForm.controls["param62"].value;
    data.param63 = this.testdataForm.controls["param63"].value;
    data.param64 = this.testdataForm.controls["param64"].value;
    data.param65 = this.testdataForm.controls["param65"].value;
    data.param66 = this.testdataForm.controls["param66"].value;
    data.param67 = this.testdataForm.controls["param67"].value;
    data.param68 = this.testdataForm.controls["param68"].value;
    data.param69 = this.testdataForm.controls["param69"].value;
    data.param70 = this.testdataForm.controls["param70"].value;
    data.param71 = this.testdataForm.controls["param71"].value;
    data.param72 = this.testdataForm.controls["param72"].value;
    data.param73 = this.testdataForm.controls["param73"].value;
    data.param74 = this.testdataForm.controls["param74"].value;
    data.param75 = this.testdataForm.controls["param75"].value;
    data.param76 = this.testdataForm.controls["param76"].value;
    data.param77 = this.testdataForm.controls["param77"].value;
    data.param78 = this.testdataForm.controls["param78"].value;
    data.param79 = this.testdataForm.controls["param79"].value;
    data.param80 = this.testdataForm.controls["param80"].value;
    data.param81 = this.testdataForm.controls["param81"].value;
    data.param82 = this.testdataForm.controls["param82"].value;
    data.param83 = this.testdataForm.controls["param83"].value;
    data.param84 = this.testdataForm.controls["param84"].value;
    data.param85 = this.testdataForm.controls["param85"].value;
    data.param86 = this.testdataForm.controls["param86"].value;
    data.param87 = this.testdataForm.controls["param87"].value;
    data.param88 = this.testdataForm.controls["param88"].value;
    data.param89 = this.testdataForm.controls["param89"].value;
    data.param90 = this.testdataForm.controls["param90"].value;
    data.param91 = this.testdataForm.controls["param91"].value;
    data.param92 = this.testdataForm.controls["param92"].value;
    data.param93 = this.testdataForm.controls["param93"].value;
    data.param94 = this.testdataForm.controls["param94"].value;
    data.param95 = this.testdataForm.controls["param95"].value;
    data.param96 = this.testdataForm.controls["param96"].value;
    data.param97 = this.testdataForm.controls["param97"].value;
    data.param98 = this.testdataForm.controls["param98"].value;
    data.param99 = this.testdataForm.controls["param99"].value;
    data.param100 = this.testdataForm.controls["param100"].value;
    data.param101 = this.testdataForm.controls["param101"].value;
    data.param102 = this.testdataForm.controls["param102"].value;
    data.param103 = this.testdataForm.controls["param103"].value;
    data.param104 = this.testdataForm.controls["param104"].value;
    data.param105 = this.testdataForm.controls["param105"].value;
    data.param106 = this.testdataForm.controls["param106"].value;
    data.param107 = this.testdataForm.controls["param107"].value;
    data.param108 = this.testdataForm.controls["param108"].value;
    data.param109 = this.testdataForm.controls["param109"].value;
    data.param110 = this.testdataForm.controls["param110"].value;
    data.param111 = this.testdataForm.controls["param111"].value;
    data.param112 = this.testdataForm.controls["param112"].value;
    data.param113 = this.testdataForm.controls["param113"].value;
    data.param114 = this.testdataForm.controls["param114"].value;
    data.param115 = this.testdataForm.controls["param115"].value;
    data.param116 = this.testdataForm.controls["param116"].value;
    data.param117 = this.testdataForm.controls["param117"].value;
    data.param118 = this.testdataForm.controls["param118"].value;
    data.param119 = this.testdataForm.controls["param119"].value;
    data.param120 = this.testdataForm.controls["param120"].value;
    data.param121 = this.testdataForm.controls["param121"].value;
    data.param122 = this.testdataForm.controls["param122"].value;
    data.param123 = this.testdataForm.controls["param123"].value;
    data.param124 = this.testdataForm.controls["param124"].value;
    data.param125 = this.testdataForm.controls["param125"].value;
    data.param126 = this.testdataForm.controls["param126"].value;
    data.param127 = this.testdataForm.controls["param127"].value;
    data.param128 = this.testdataForm.controls["param128"].value;
    data.param129 = this.testdataForm.controls["param129"].value;
    data.param130 = this.testdataForm.controls["param130"].value;
    data.param131 = this.testdataForm.controls["param131"].value;
    data.param132 = this.testdataForm.controls["param132"].value;
    data.param133 = this.testdataForm.controls["param133"].value;
    data.param134 = this.testdataForm.controls["param134"].value;
    data.param135 = this.testdataForm.controls["param135"].value;
    data.param136 = this.testdataForm.controls["param136"].value;
    data.param137 = this.testdataForm.controls["param137"].value;
    data.param138 = this.testdataForm.controls["param138"].value;
    data.param139 = this.testdataForm.controls["param139"].value;
    data.param140 = this.testdataForm.controls["param140"].value;
    data.param141 = this.testdataForm.controls["param141"].value;
    data.param142 = this.testdataForm.controls["param142"].value;
    data.param143 = this.testdataForm.controls["param143"].value;
    data.param144 = this.testdataForm.controls["param144"].value;
    data.param145 = this.testdataForm.controls["param145"].value;
    data.param146 = this.testdataForm.controls["param146"].value;
    data.param147 = this.testdataForm.controls["param147"].value;
    data.param148 = this.testdataForm.controls["param148"].value;
    data.param149 = this.testdataForm.controls["param149"].value;
    data.param150 = this.testdataForm.controls["param150"].value;
    data.param151 = this.testdataForm.controls["param151"].value;
    data.param152 = this.testdataForm.controls["param152"].value;
    data.param153 = this.testdataForm.controls["param153"].value;
    data.param154 = this.testdataForm.controls["param154"].value;
    data.param155 = this.testdataForm.controls["param155"].value;
    data.param156 = this.testdataForm.controls["param156"].value;
    data.param157 = this.testdataForm.controls["param157"].value;
    data.param158 = this.testdataForm.controls["param158"].value;
    data.param159 = this.testdataForm.controls["param159"].value;
    data.param160 = this.testdataForm.controls["param160"].value;
    data.param161 = this.testdataForm.controls["param161"].value;
    data.param162 = this.testdataForm.controls["param162"].value;
    data.param163 = this.testdataForm.controls["param163"].value;
    data.param164 = this.testdataForm.controls["param164"].value;
    data.param165 = this.testdataForm.controls["param165"].value;
    data.param166 = this.testdataForm.controls["param166"].value;
    data.param167 = this.testdataForm.controls["param167"].value;
    data.param168 = this.testdataForm.controls["param168"].value;
    data.param169 = this.testdataForm.controls["param169"].value;
    data.param170 = this.testdataForm.controls["param170"].value;
    data.param171 = this.testdataForm.controls["param171"].value;
    data.param172 = this.testdataForm.controls["param172"].value;
    data.param173 = this.testdataForm.controls["param173"].value;
    data.param174 = this.testdataForm.controls["param174"].value;
    data.param175 = this.testdataForm.controls["param175"].value;
    data.param176 = this.testdataForm.controls["param176"].value;
    data.param177 = this.testdataForm.controls["param177"].value;
    data.param178 = this.testdataForm.controls["param178"].value;
    data.param179 = this.testdataForm.controls["param179"].value;
    data.param180 = this.testdataForm.controls["param180"].value;
    data.param181 = this.testdataForm.controls["param181"].value;
    data.param182 = this.testdataForm.controls["param182"].value;
    data.param183 = this.testdataForm.controls["param183"].value;
    data.param184 = this.testdataForm.controls["param184"].value;
    data.param185 = this.testdataForm.controls["param185"].value;
    data.param186 = this.testdataForm.controls["param186"].value;
    data.param187 = this.testdataForm.controls["param187"].value;
    data.param188 = this.testdataForm.controls["param188"].value;
    data.param189 = this.testdataForm.controls["param189"].value;
    data.param190 = this.testdataForm.controls["param190"].value;
    data.param191 = this.testdataForm.controls["param191"].value;
    data.param192 = this.testdataForm.controls["param192"].value;
    data.param193 = this.testdataForm.controls["param193"].value;
    data.param194 = this.testdataForm.controls["param194"].value;
    data.param195 = this.testdataForm.controls["param195"].value;
    data.param196 = this.testdataForm.controls["param196"].value;
    data.param197 = this.testdataForm.controls["param197"].value;
    data.param198 = this.testdataForm.controls["param198"].value;
    data.param199 = this.testdataForm.controls["param199"].value;
    data.param200 = this.testdataForm.controls["param200"].value;
    data.param201 = this.testdataForm.controls["param201"].value;
    data.param202 = this.testdataForm.controls["param202"].value;
    data.param203 = this.testdataForm.controls["param203"].value;
    data.param204 = this.testdataForm.controls["param204"].value;
    data.param205 = this.testdataForm.controls["param205"].value;
    data.param206 = this.testdataForm.controls["param206"].value;
    data.param207 = this.testdataForm.controls["param207"].value;
    data.param208 = this.testdataForm.controls["param208"].value;
    data.param209 = this.testdataForm.controls["param209"].value;
    data.param210 = this.testdataForm.controls["param210"].value;
    data.param211 = this.testdataForm.controls["param211"].value;
    data.param212 = this.testdataForm.controls["param212"].value;
    data.param213 = this.testdataForm.controls["param213"].value;
    data.param214 = this.testdataForm.controls["param214"].value;
    data.param215 = this.testdataForm.controls["param215"].value;
    data.param216 = this.testdataForm.controls["param216"].value;
    data.param217 = this.testdataForm.controls["param217"].value;
    data.param218 = this.testdataForm.controls["param218"].value;
    data.param219 = this.testdataForm.controls["param219"].value;
    data.param220 = this.testdataForm.controls["param220"].value;
    data.param221 = this.testdataForm.controls["param221"].value;
    data.param222 = this.testdataForm.controls["param222"].value;
    data.param223 = this.testdataForm.controls["param223"].value;
    data.param224 = this.testdataForm.controls["param224"].value;
    data.param225 = this.testdataForm.controls["param225"].value;
    data.param226 = this.testdataForm.controls["param226"].value;
    data.param227 = this.testdataForm.controls["param227"].value;
    data.param228 = this.testdataForm.controls["param228"].value;
    data.param229 = this.testdataForm.controls["param229"].value;
    data.param230 = this.testdataForm.controls["param230"].value;
    data.param231 = this.testdataForm.controls["param231"].value;
    data.param232 = this.testdataForm.controls["param232"].value;
    data.param233 = this.testdataForm.controls["param233"].value;
    data.param234 = this.testdataForm.controls["param234"].value;
    data.param235 = this.testdataForm.controls["param235"].value;
    data.param236 = this.testdataForm.controls["param236"].value;
    data.param237 = this.testdataForm.controls["param237"].value;
    data.param238 = this.testdataForm.controls["param238"].value;
    data.param239 = this.testdataForm.controls["param239"].value;
    data.param240 = this.testdataForm.controls["param240"].value;
    data.param241 = this.testdataForm.controls["param241"].value;
    data.param242 = this.testdataForm.controls["param242"].value;
    data.param243 = this.testdataForm.controls["param243"].value;
    data.param244 = this.testdataForm.controls["param244"].value;
    data.param245 = this.testdataForm.controls["param245"].value;
    data.param246 = this.testdataForm.controls["param246"].value;
    data.param247 = this.testdataForm.controls["param247"].value;
    data.param248 = this.testdataForm.controls["param248"].value;
    data.param249 = this.testdataForm.controls["param249"].value;
    data.param250 = this.testdataForm.controls["param250"].value;
    data.statusID = 0;
    data.cudStatusID = 0;
    data.isLocked = false;
    data.lockedByUser = 0;
    data.createdOn = null;
    data.updatedOn = null;
    self.testDataService.addTestData(data);
    setTimeout(() => {
      self.router.navigate(['/admin/testdata']);
    })
  }
}
