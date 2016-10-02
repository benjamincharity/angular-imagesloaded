describe('ImagesLoadedController', () => {
    let $compile;
    let $rootScope;
    let $scope;
    let element;
    let vm;

    // Include the module
    beforeEach(angular.mock.module('bc.imagesloaded'));

    // Inject
    beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    afterEach(() => {
        cleanup();
    });


    describe('bcImagesloaded', () => {

        it(`should use $element when nothing is passed in`, () => {
            const template = angular.element(`
              <img
                bc-imagesloaded
                src="http://lorempixel.com/400/300"
                alt=""
              />
            `);

            setup(template);

            const actual = typeof vm.initElement;
            const expected = 'object';
            expect(actual).toEqual(expected);
        });


        it(`should use a selector if one is passed in`, () => {
            const template = angular.element(`
              <div bc-imagesloaded=".imagesloaded__test">
                <img
                  class="imagesloaded__test"
                  src="http://lorempixel.com/400/300"
                  alt=""
                />
              </div>
            `);

            setup(template);

            const actual = typeof vm.initElement;
            const expected = 'string';
            expect(actual).toEqual(expected);
        });

    });


    describe('options', () => {

        it(`should not have background defined by default`, () => {
            const template = angular.element(`
              <div
                bc-imagesloaded
                style="background-image: url(http://lorempixel.com/400/300)"
              ></div>
            `);

            setup(template);

            const actual = vm.options.background;
            const expected = undefined;
            expect(actual).toEqual(expected);
        });


        it(`should allow the user to override the background property with a boolean`, () => {
            const template = angular.element(`
              <div
                bc-imagesloaded
                bc-background="true"
                style="background-image: url(http://lorempixel.com/400/300)"
              ></div>
            `);

            setup(template);

            const actual = vm.options.background;
            const expected = true;
            expect(actual).toEqual(expected);
        });


        it(`should allow the user to override the background property with a selector`, () => {
            const template = angular.element(`
              <div
                bc-imagesloaded
                bc-background=".test"
              >
                <div
                    class="test"
                    style="background-image: url(http://lorempixel.com/400/300)"
                ></div>
              </div>
            `);

            setup(template);

            const actual = vm.options.background;
            const expected = '.test';
            expect(actual).toEqual(expected);
        });

    });




    function setup(template) {
        $scope = $rootScope.$new();
        element = $compile(template)($scope);
        $scope.$apply();
        vm = element.isolateScope().vm;
    }

    function cleanup() {
        $scope = null;
        element = null;
        vm = null;
    }

});



