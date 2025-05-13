import {
  Component,
  ElementRef,
  HostListener,
  viewChild,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { ButtonModule } from 'primeng/button';
import { ShoppingListComponent } from "./shared/ui/shopping-list/shopping-list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent, ButtonModule, ShoppingListComponent],
})
export class AppComponent {
  title = "ALTEN SHOP";
  public isMenuOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
