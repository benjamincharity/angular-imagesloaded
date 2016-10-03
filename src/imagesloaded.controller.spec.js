describe('ImagesLoadedController', function() {
    const WAIT = 6000;

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
        let originalTimeout;

        beforeEach(() => {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

        it(`should use $element when nothing is passed in`, function(done) {
            const template = angular.element(`
              <img
                bc-imagesloaded
                src="http://lorempixel.com/100/100"
                alt=""
              />
            `);

            this.compileDirective(template);

            // Wait for the images to load
            setTimeout(() => {
                // Verify that two images were added
                const actual = this.vm.instance.images.length;
                const expected = 1;
                expect(actual).toEqual(expected);

                done();
            }, WAIT);
        });


        it(`should use an ID selector if one is passed in`, function(done) {
            const template = angular.element(`
              <div bc-imagesloaded="#test">
                <div id="test">
                    <img
                      class="test"
                      src="http://lorempixel.com/100/100"
                      alt=""
                    />
                    <img
                      class="test"
                      src="http://lorempixel.com/110/110"
                      alt=""
                    />
                </div>
              </div>
            `);

            this.compileDirective(template);


            // Wait for the images to load
            setTimeout(() => {
                // Verify that two images were added
                const actual = this.vm.instance.images.length;
                const expected = 2;
                expect(actual).toEqual(expected);

                done();
            }, WAIT);
        });


        it(`should use a class selector if one is passed in`, function(done) {
            const template = angular.element(`
              <div bc-imagesloaded=".test">
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
                <img
                  class="test"
                  src="http://lorempixel.com/110/110"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);


            // Wait for the images to load
            setTimeout(() => {
                // Verify that two images were added
                const actual = this.vm.instance.images.length;
                const expected = 2;
                expect(actual).toEqual(expected);

                done();
            }, WAIT);
        });

    });


    describe('background option', function() {

        it(`should not be defined by default`, function() {
            const template = angular.element(`
              <div
                bc-imagesloaded
                style="background-image: url(http://lorempixel.com/100/100)"
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
                style="background-image: url(http://lorempixel.com/100/100)"
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
                    style="background-image: url(http://lorempixel.com/100/100)"
                ></div>
              </div>
            `);

            this.compileDirective(template);

            const actual = this.vm.options.background;
            const expected = '.test';
            expect(actual).toEqual(expected);
        });

    });


    describe('debug option', function() {

        it(`should not be set by default`, function() {
            const template = angular.element(`
              <div bc-imagesloaded=".test">
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
                <img
                  class="test"
                  src="http://lorempixel.com/110/110"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);

            const actual = this.vm.options.debug;
            const expected = undefined;
            expect(actual).toEqual(expected);
        });


        it(`should be set if defined as an attribute`, function() {
            const template = angular.element(`
              <div
                bc-imagesloaded=".test"
                bc-debug="true"
              >
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
                <img
                  class="test"
                  src="http://lorempixel.com/110/110"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);

            const actual = this.vm.options.debug;
            const expected = true;
            expect(actual).toEqual(expected);
        });

    });


    describe('events', function() {
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
              <div
                bc-imagesloaded=".test"
                bc-always-method="always(instance)"
              >
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);

            // Wait for the image to load
            setTimeout(() => {
                expect(this.$scope.always).toHaveBeenCalled();

                // Verify the instance was passed through
                const args = this.$scope.always.calls.allArgs();
                const instance = args[0][0];
                const actual = instance.images.length;
                const expected = 2;
                expect(actual).toEqual(expected);

                done();
            }, WAIT);
        });

        it(`should trigger the associated method on the 'done' event`, function(done) {
            const template = angular.element(`
              <div
                bc-imagesloaded=".test"
                bc-done-method="done(instance)"
              >
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
                <img
                  class="test"
                  src="http://lorempixel.com/110/110"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);

            // Wait for the image to load
            setTimeout(() => {
                expect(this.$scope.done).toHaveBeenCalled();

                // Verify the instance was passed through
                const args = this.$scope.done.calls.allArgs();
                const instance = args[0][0];
                const actual = instance.images.length;
                const expected = 2;
                expect(actual).toEqual(expected);

                done();
            }, WAIT);
        });

        it(`should trigger the associated method on the 'fail' event`, function(done) {
            const template = angular.element(`
              <div
                bc-imagesloaded=".test"
                bc-fail-method="fail(instance)"
              >
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
                <img
                  class="test"
                  src="img/does/not/exist.jpg"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);

            // Wait for the image to load
            setTimeout(() => {
                expect(this.$scope.fail).toHaveBeenCalled();

                // Verify the instance was passed through
                const args = this.$scope.fail.calls.allArgs();
                const instance = args[0][0];

                const actual = instance.hasAnyBroken;
                const expected = true;
                expect(actual).toEqual(expected);

                // Verify two images exist
                const actual2 = instance.images.length;
                const expected2 = 2;
                expect(actual2).toEqual(expected2);

                done();
            }, WAIT);
        });

        it(`should trigger the associated method on the 'progress' events`, function(done) {
            const template = angular.element(`
              <div
                bc-imagesloaded=".test"
                bc-progress-method="progress(instance, image)"
              >
                <img
                  class="test"
                  src="http://lorempixel.com/100/100"
                  alt=""
                />
                <img
                  class="test"
                  src="http://lorempixel.com/110/110"
                  alt=""
                />
              </div>
            `);

            this.compileDirective(template);

            // Wait for the image to load
            setTimeout(() => {
                // Verify it was called twice
                const actual = this.$scope.progress.calls.count();
                const expected = 2;
                expect(actual).toEqual(expected);

                const args = this.$scope.progress.calls.argsFor(0);
                const instance = args[0];
                const image = args[1];

                // Verify the instance was passed through
                const actual2 = instance.images.length;
                const expected2 = 2;
                expect(actual2).toEqual(expected2);

                // Verify the image was passed through
                const actual3 = image.isLoaded;
                const expected3 = true;
                expect(actual3).toEqual(expected3);

                done();
            }, WAIT);
        });

    });



});



