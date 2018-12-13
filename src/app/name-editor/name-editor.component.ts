import { Component, OnInit } from "@angular/core";
import { FormControl } from "../../../node_modules/@angular/forms";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.css"]
})
export class NameEditorComponent implements OnInit {
  name = new FormControl("");
  constructor() {}

  ngOnInit() {}
  updateName() {
    this.name.setValue("Ella");
  }
}
