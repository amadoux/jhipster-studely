import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StudelySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [StudelySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [StudelySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudelySharedModule {
  static forRoot() {
    return {
      ngModule: StudelySharedModule
    };
  }
}
