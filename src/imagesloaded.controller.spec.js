describe('ImagesLoadedController', function() {

    // Include the module
    beforeEach(angular.mock.module('bc.imagesloaded'));


    beforeEach(function() {

        inject(function($compile, $rootScope) {
            this.$compile = $compile;
            this.$rootScope = $rootScope;

            this.$scope = this.$rootScope.$new();
            this.$scope.always = jasmine.createSpy('always');
            this.$scope.done = jasmine.createSpy('done');
            this.$scope.fail = jasmine.createSpy('fail');
            this.$scope.progress = jasmine.createSpy('progress');

        });

    });


    beforeEach(function() {
        this.compileDirective = function(template) {
            this.element = this.$compile(template)(this.$scope);
            this.vm = this.element.isolateScope().vm;
        };
    });


    afterEach(function() {
        this.element.remove();
    });


    describe('bcImagesloaded', function() {

        it(`should use $element when nothing is passed in`, function() {
            const template = angular.element(`
              <img
                bc-imagesloaded
                src="http://lorempixel.com/400/300"
                alt=""
              />
            `);

            this.compileDirective(template);

            const actual = typeof this.vm.initElement;
            const expected = 'object';
            expect(actual).toEqual(expected);
        });


        it(`should use a selector if one is passed in`, function() {
            const template = angular.element(`
              <div bc-imagesloaded=".imagesloaded__test">
                <img
                  class="imagesloaded__test"
                  src="http://lorempixel.com/400/300"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);

            const actual = typeof this.vm.initElement;
            const expected = 'string';
            expect(actual).toEqual(expected);
        });

    });


    describe('background option', function() {

        it(`should not be defined by default`, function() {
            const template = angular.element(`
              <div
                bc-imagesloaded
                style="background-image: url(http://lorempixel.com/400/300)"
              ></div>
            `);

            this.compileDirective(template);

            const actual = this.vm.options.background;
            const expected = undefined;
            expect(actual).toEqual(expected);
        });


        it(`should allow the user to set a boolean`, function() {
            const template = angular.element(`
              <div
                bc-imagesloaded
                bc-background="true"
                style="background-image: url(http://lorempixel.com/400/300)"
              ></div>
            `);

            this.compileDirective(template);

            const actual = this.vm.options.background;
            const expected = true;
            expect(actual).toEqual(expected);
        });


        it(`should allow the user to set a selector string`, function() {
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

            this.compileDirective(template);

            const actual = this.vm.options.background;
            const expected = '.test';
            expect(actual).toEqual(expected);
        });

    });


    describe('events', function() {
        const WAIT = 9000;
        let originalTimeout;

        beforeEach(() => {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

        it(`should trigger the associated method on the 'always' event`, function(done) {
            const template = angular.element(`
              <img
                bc-imagesloaded
                bc-always-method="always(instance)"
                src="http://lorempixel.com/100/100"
                alt=""
              />
            `);

            this.compileDirective(template);

            // Wait for the image to load
            setTimeout(() => {
                expect(this.$scope.always).toHaveBeenCalled();

                // Verify the instance was passed through
                const args = this.$scope.always.calls.allArgs();
                const actual = args[0][0].images.length > 0;
                const expected = true;
                expect(actual).toEqual(expected);

                done();
            }, WAIT);
        });

        it(`should trigger the associated method on the 'done' event`, function(done) {
            const template = angular.element(`
              <img
                bc-imagesloaded
                bc-done-method="done(instance)"
                src="http://lorempixel.com/100/100"
                alt=""
              />
            `);

            this.compileDirective(template);

            // Wait for the image to load
            setTimeout(() => {
                expect(this.$scope.done).toHaveBeenCalled();

                // Verify the instance was passed through
                const args = this.$scope.done.calls.allArgs();
                const actual = args[0][0].images.length > 0;
                const expected = true;
                expect(actual).toEqual(expected);

                done();
            }, WAIT);
        });

    });



});



