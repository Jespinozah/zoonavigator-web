/*
 * Copyright (C) 2018  Ľuboš Kozmon
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {NgModule} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatCardModule,
  MatIconRegistry,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentLayoutModule,
  CovalentMediaModule
} from "@covalent/core";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {AceEditorModule} from "ng2-ace-editor";
import {
  ActionbarComponent, CompressionProvider,
  ContentComponent, DefaultCompressionProvider, DefaultModeProvider, ModeProvider,
  ZNodeAclComponent,
  ZNodeDataComponent, ZNodeDataEditorComponent, ZNodeDataToolbarComponent,
  ZNodeMetaComponent
} from "./content";
import {PreferencesService, DefaultPreferencesService} from "./preferences";
import {ToolbarComponent} from "./toolbar";
import {NavActionsComponent, NavListComponent} from "./sidenav";
import {EditorRoutingModule} from "./editor-routing.module";
import {EditorComponent} from "./editor.component";
import {SharedModule} from "../shared";
import {AclFormFactory} from "./content/acl/acl-form.factory";
import {Formatter, JsonFormatter, YamlFormatter} from "./formatter/formatters";
import {DefaultFormatterProvider, FormatterProvider} from "./formatter";

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentDialogsModule,
    CovalentMediaModule,
    AceEditorModule,
    EditorRoutingModule,
    SharedModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [
    AclFormFactory,
    {provide: PreferencesService, useClass: DefaultPreferencesService},
    {provide: Formatter, multi: true, useClass: JsonFormatter},
    {provide: Formatter, multi: true, useClass: YamlFormatter},
    {provide: FormatterProvider, useClass: DefaultFormatterProvider},
    {provide: ModeProvider, useClass: DefaultModeProvider},
    {provide: CompressionProvider, useClass: DefaultCompressionProvider}
  ],
  declarations: [
    EditorComponent,
    ToolbarComponent,
    NavListComponent,
    NavActionsComponent,
    ContentComponent,
    ActionbarComponent,
    ZNodeAclComponent,
    ZNodeDataComponent,
    ZNodeDataEditorComponent,
    ZNodeDataToolbarComponent,
    ZNodeMetaComponent
  ]
})
export class EditorModule {

  constructor(
    iconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconInNamespace(
      "assets",
      "paw",
      domSanitizer.bypassSecurityTrustResourceUrl("assets/paw.svg")
    );
  }
}
