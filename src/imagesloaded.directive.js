import imagesLoaded from 'imagesloaded';
import { ImagesLoadedController } from './imagesloaded.controller';

export function ImagesLoadedDirective(
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        replace: true,
        scope: {},
        bindToController: {
            bcImagesloaded: '@?',
            bcAlwaysMethod: '&?',
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
        console.log('in link');

        // If a selector is passed in
        if (typeof $ctrl.bcImagesloaded === 'string' || typeof $ctrl.bcImagesloaded === 'object') {
            // Use it
            $ctrl.instance = new imagesLoaded($ctrl.bcImagesloaded);
        } else {
            // Otherwise use the $element itself
            $ctrl.instance = new imagesLoaded($element);
        }


        $ctrl._activate();
    }

}

