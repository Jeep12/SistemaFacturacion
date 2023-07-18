import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FirestoreNoticesService } from 'src/app/services/firestore-notices.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit, OnDestroy {
  notices: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  private subscription: Subscription | undefined;

  constructor(private fsNotice: FirestoreNoticesService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadNotices();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadNotices(): void {
    this.subscription = this.fsNotice.getNotices(this.currentPage).subscribe((data) => {
      this.notices = data.notices;
      this.totalPages = data.totalPages;
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  hasNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  goToPreviousPage(): void {
    if (this.hasPreviousPage()) {
      this.currentPage--;
      this.loadNotices();
    }
  }

  goToNextPage(): void {
    if (this.hasNextPage()) {
      this.currentPage++;
      this.loadNotices();
    }
  }

  getPageNumbers(): number[] {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.loadNotices();
    }
  }

  getCurrentPage(): number {
    return this.currentPage;
  }
}
