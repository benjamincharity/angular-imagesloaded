describe('ImagesLoadedDirective', () => {
    let $compile;
    let $rootScope;

    // Include the module
    beforeEach(angular.mock.module('bc.imagesloaded'));

    // Inject
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    describe('bcImagesloaded', () => {
        let $scope;
        let element;
        let vm;

        afterEach(() => {
            cleanup();
        });

        it(`should use $element when nothing is passed in`, () => {
            setup();

            const actual = typeof vm.initElement;
            const expected = 'object';
            expect(actual).toEqual(expected);
        });


        it(`should use a selector if one is passed in`, () => {
            setup(true);

            const actual = typeof vm.initElement;
            const expected = 'string';
            expect(actual).toEqual(expected);
        });




        function setup(selector) {
            const selectorTemplate = angular.element(`
              <div bc-imagesloaded=".imagesloaded__test">
                <img
                  class="imagesloaded__test"
                  src="http://lorempixel.com/400/300"
                  alt=""
                />
              </div>
            `);
            const elementTemplate = angular.element(`
              <img
                bc-imagesloaded
                src="http://lorempixel.com/400/300"
                alt=""
              />
            `);

            $scope = $rootScope.$new();
            if (selector) {
                element = $compile(selectorTemplate)($scope);
            } else {
                element = $compile(elementTemplate)($scope);
            }
            $scope.$apply();
            vm = element.isolateScope().vm;
        }

        function cleanup() {
            $scope = null;
            element = null;
            vm = null;
        }

    });

});


