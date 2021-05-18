import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { concat } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {
  form: FormGroup;
  isVisible: boolean = true;

  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      customerName: builder.control(null),
      customerCompany: builder.control(null),
      customerAddress: builder.control(null),
      customerCarMake: builder.control(null),
      customerCarReg: builder.control(null),
      quotefor: builder.control(null),
      quoteprice: builder.control(null)
    });
  }

  ngOnInit(): void {
  }

  hide() {
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
  }

  html2pdf() {
    let DATA = document.body as HTMLElement;

    html2canvas(DATA).then(canvas => {
      console.log(canvas)
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;


      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF();
      var width = PDF.internal.pageSize.getWidth();
      var height = PDF.internal.pageSize.getHeight();
      console.log('fileHeight:', width, height)
      PDF.addImage(FILEURI, 'JPEG', 0, 0, fileWidth, fileHeight)

      PDF.save(this.form.get('customerName')?.value + '.pdf');

    });
  }

  public onDownload(): void {
    this.hide();
    setTimeout(() => {                           //<<<---using ()=> syntax
      this.html2pdf();
    }, 200);
    setTimeout(() => {                           //<<<---using ()=> syntax
      this.show();
    }, 200);
  }

  onReset() {
    this.form.reset();
  }


}
