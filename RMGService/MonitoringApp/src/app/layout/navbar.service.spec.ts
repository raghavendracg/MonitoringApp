import { TestBed, inject } from '@angular/core/testing';
import { NavbarService } from './navbar.service';

describe('Navbar Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NavbarService]
        });
    });


    it('should be a service', inject([NavbarService], (service: NavbarService) => {
        expect(service).toBeTruthy();
    }));

    it('should set value to false', inject([NavbarService], (service: NavbarService) => {
        service.hide();
        expect(service.visible).toBe(false);
    }));

    it('should set value to true', inject([NavbarService], (service: NavbarService) => {
        service.show();
        expect(service.visible).toBe(true);
    }));

    it('should toggle Value', inject([NavbarService], (service: NavbarService) => {
        service.toggle()
        expect(service.visible).toBe(true);
    }));

});
