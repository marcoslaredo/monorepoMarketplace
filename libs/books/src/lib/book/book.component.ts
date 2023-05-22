import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from '../book.interface';

@Component({
  selector: 'bmc-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input( {required: true } ) book?: Book;
  @Input() isPresentOnCart?: boolean;
  @Output() cartAction = new EventEmitter<Book>();

  public cartActionFn() {
    this.cartAction.emit(this.book);
  }
  get actionText() {
    return this.isPresentOnCart ? 'Remove' : 'Add';
  }
}
