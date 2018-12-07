import { async, TestBed } from '@angular/core/testing';
import { VirtualAssistantComponent } from './virtual-assistant.component';
describe('VirtualAssistantComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VirtualAssistantComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VirtualAssistantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=virtual-assistant.component.spec.js.map