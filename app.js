(function () {
    'use strict';

    angular.module('lab_4', [])
        .controller('toShowController', toShowController)
        .service('itemsService', ItemsService);

    toShowController.$inject = ['itemsService'];
    function toShowController(service) {
        var controller = this;
        controller.toShowItems = service.gettoShowItems();

        controller.toDeleteItem = function (itemIndex) { 
            service.addToDeleteItem(itemIndex);
        }
    };

    function ItemsService() {
        var service = this;

        var toShowItems = [
            new Item('Lada 2104', 12),
            new Item('VW Jetta', 10),
            new Item('Seat Altea', 4),
            new Item('Syzuki Swift', 7),
            new Item('Toyota Corola', 8)
        ];

        service.addToDeleteItem = function (itemIndex) {
            toShowItems.splice(itemIndex, 1);
        };

        service.gettoShowItems = function () {
            return toShowItems;
        };
    };


    class Item {
        constructor(mark, quantity) {
            this.name = mark;
            this.amount = quantity;
        };
    };

})();
