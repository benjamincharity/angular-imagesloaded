import { ImagesLoadedController } from './imagesloaded.controller';

export function ImagesLoadedDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
            bcImagesloaded: '@?', // accepts object or string
            bcBackground: '@?',   // accepts bool or string
            bcAlwaysMethod: '&?', // accepts method
        },
        link: linkFunction,
        controller: ImagesLoadedController,
        controllerAs: 'vm',
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, $ctrl) {
        // Expose the $element to the controller
        $ctrl.$element = $element;

        // Once we have access to the $element, get everything set up
        $ctrl.setup();
    }

}

