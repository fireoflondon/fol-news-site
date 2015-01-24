describe('myApp/myState', function() {

    var $rootScope, $state, $injector, SampleMock , state = 'dashboard';

    beforeEach(function() {

        module('testLabsReportingApp');

        module('testLabsReportingApp', function($provide) {
            $provide.value('Sample', SampleMock =
                [
                    {
                        id : '1',
                        title: 'Some random title'
                    }
                ]
            );
        });

        inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
            $rootScope = _$rootScope_;
            $state = _$state_;
            $injector = _$injector_;
            $httpBackend = $injector.get('$httpBackend');

            // We need add the template entry into the templateCache if we ever specify a templateUrl
            $templateCache.put('/scripts/dashboard/dashboard.html', '');
        })
    });

    it('should respond to URL', function() {
        expect($state.href(state, { reportId: 1, clientId: 1 })).toEqual('#/dashboard/1/1');
    });

    it('should resolve data', function() {
        $httpBackend.expectGET('http://testlabsmock.apiary-mock.com/notes').respond(500);
        $state.go(state);
        $rootScope.$digest();
//        $httpBackend.flush();
        expect($state.current.name).toBe(state);
    });
});