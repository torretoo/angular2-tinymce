import { NgModule, ModuleWithProviders } from '@angular/core';
import { TinymceComponent, CONFIG_TOKEN } from './angular2-tinymce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TinymceOptions } from './angular2-tinymce.config.interface';
import { TinymceDefaultOptions } from './angular2-tinymce.default';

import tinymce from 'tinymce/tinymce.js';


@NgModule({
	declarations: [
		TinymceComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		TinymceComponent
	],
	// providers: [
	// 	{ provide: CONFIG_TOKEN, useClass: TinymceDefaultOptions }
	// ]
})
export class TinymceModule {
	static withConfig(userConfig: TinymceOptions = {}): ModuleWithProviders {
		return {
			ngModule: TinymceModule,
			providers: [
				{ provide: CONFIG_TOKEN, useValue: userConfig }
			]
		}
	}
}
export { tinymce }