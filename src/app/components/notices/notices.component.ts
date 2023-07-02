import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FirestoreNoticesService } from 'src/app/services/firestore-notices.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices!: any[];
  private subscription: Subscription | any;

  constructor(private fsNotice:FirestoreNoticesService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.subscription = this.fsNotice.getNotices().subscribe(notices => {
      let arrayNotices = notices;
      let revert = arrayNotices.reverse();
      this.notices = revert;
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  

}
