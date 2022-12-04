import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTableViewEditorComponent } from './record-table-view-editor.component';

describe('RecordTableViewEditorComponent', () => {
    let component: RecordTableViewEditorComponent;
    let fixture: ComponentFixture<RecordTableViewEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RecordTableViewEditorComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(RecordTableViewEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});